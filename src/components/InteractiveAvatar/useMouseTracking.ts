import { useEffect, useRef, useState, type RefObject } from 'react'
import { useMotionValue } from 'framer-motion'

export type AvatarTrackingState = {
  frameIndex: number
  isNeutral: boolean
}

const FRAME_COUNT = 60

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value))

const circularDistance = (first: number, second: number) => {
  const difference =
    (((first - second + FRAME_COUNT / 2) % FRAME_COUNT) + FRAME_COUNT) %
    FRAME_COUNT
  return Math.abs(difference - FRAME_COUNT / 2)
}

export function useMouseTracking(
  targetRef: RefObject<HTMLElement>,
  disabled = false,
) {
  const [trackingState, setTrackingState] = useState<AvatarTrackingState>({
    frameIndex: 0,
    isNeutral: true,
  })
  const trackingStateRef = useRef(trackingState)
  const pointerRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number | null>(null)
  const normalizedX = useMotionValue(0)
  const normalizedY = useMotionValue(0)

  useEffect(() => {
    let listening = false

    const updateTrackingState = (nextState: AvatarTrackingState) => {
      const currentState = trackingStateRef.current
      if (
        nextState.frameIndex === currentState.frameIndex &&
        nextState.isNeutral === currentState.isNeutral
      ) {
        return
      }
      trackingStateRef.current = nextState
      setTrackingState(nextState)
    }

    const resetTracking = () => {
      normalizedX.set(0)
      normalizedY.set(0)
      updateTrackingState({ frameIndex: 0, isNeutral: true })
    }

    const updateFromPointer = () => {
      frameRef.current = null
      const target = targetRef.current
      if (!target) return

      const rect = target.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height * 0.36
      const deltaX = pointerRef.current.x - centerX
      const deltaY = pointerRef.current.y - centerY
      const horizontalRange = Math.max(
        deltaX >= 0 ? window.innerWidth - centerX : centerX,
        1,
      )
      const verticalRange = Math.max(
        deltaY >= 0 ? window.innerHeight - centerY : centerY,
        1,
      )
      const x = clamp(deltaX / horizontalRange, -1, 1)
      const y = clamp(deltaY / verticalRange, -1, 1)
      const distance = Math.hypot(deltaX, deltaY)
      const currentState = trackingStateRef.current
      const neutralRadius = currentState.isNeutral
        ? Math.max(rect.width * 0.15, 46)
        : Math.max(rect.width * 0.09, 30)

      normalizedX.set(x)
      normalizedY.set(y)

      if (distance < neutralRadius) {
        updateTrackingState({
          frameIndex: currentState.frameIndex,
          isNeutral: true,
        })
        return
      }

      const angle = (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2)
      const continuousFrame = (angle / (Math.PI * 2)) * FRAME_COUNT
      const nearestFrame = Math.round(continuousFrame) % FRAME_COUNT
      const frameIndex =
        !currentState.isNeutral &&
        circularDistance(continuousFrame, currentState.frameIndex) < 0.62
          ? currentState.frameIndex
          : nearestFrame

      updateTrackingState({ frameIndex, isNeutral: false })
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      pointerRef.current.x = event.clientX
      pointerRef.current.y = event.clientY
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateFromPointer)
      }
    }

    const startListening = () => {
      if (listening || disabled) return
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      listening = true
    }

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) resetTracking()
    }

    const handleDocumentMouseLeave = () => resetTracking()

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') resetTracking()
    }

    startListening()
    window.addEventListener('blur', resetTracking)
    window.addEventListener('pagehide', resetTracking)
    window.addEventListener('pointercancel', resetTracking)
    window.addEventListener('pointerout', handlePointerOut)
    document.documentElement.addEventListener('mouseleave', handleDocumentMouseLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('blur', resetTracking)
      window.removeEventListener('pagehide', resetTracking)
      window.removeEventListener('pointercancel', resetTracking)
      window.removeEventListener('pointerout', handlePointerOut)
      document.documentElement.removeEventListener('mouseleave', handleDocumentMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (listening) {
        window.removeEventListener('pointermove', handlePointerMove)
      }
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [disabled, normalizedX, normalizedY, targetRef])

  return {
    ...trackingState,
    normalizedX,
    normalizedY,
  }
}
