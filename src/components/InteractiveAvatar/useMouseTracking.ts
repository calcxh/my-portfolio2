import { useEffect, useRef, type RefObject } from 'react'
import { useMotionValue } from 'framer-motion'

type MouseTrackingOptions = {
  focusBoost?: number
}

const clamp = (value: number) => Math.max(-1, Math.min(1, value))

export function useMouseTracking(
  targetRef: RefObject<HTMLElement>,
  { focusBoost = 1.18 }: MouseTrackingOptions = {},
) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const pointerRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number | null>(null)
  const hoveredRef = useRef(false)

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    let listening = false

    const updateMotionValues = () => {
      frameRef.current = null
      const target = targetRef.current
      if (!target) return

      const rect = target.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height * 0.28
      const horizontalRange = Math.max(rect.width * 0.75, 1)
      const verticalRange = Math.max(rect.height * 0.55, 1)
      const boost = hoveredRef.current ? focusBoost : 1

      x.set(clamp(((pointerRef.current.x - centerX) / horizontalRange) * boost))
      y.set(clamp(((pointerRef.current.y - centerY) / verticalRange) * boost))
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.x = event.clientX
      pointerRef.current.y = event.clientY

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateMotionValues)
      }
    }

    const startListening = () => {
      if (listening || !finePointerQuery.matches) return
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      listening = true
    }

    const stopListening = () => {
      if (listening) {
        window.removeEventListener('pointermove', handlePointerMove)
        listening = false
      }
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
      x.set(0)
      y.set(0)
    }

    const handleCapabilityChange = () => {
      if (finePointerQuery.matches) startListening()
      else stopListening()
    }

    startListening()
    finePointerQuery.addEventListener('change', handleCapabilityChange)

    return () => {
      finePointerQuery.removeEventListener('change', handleCapabilityChange)
      stopListening()
    }
  }, [focusBoost, targetRef, x, y])

  const setHovered = (hovered: boolean) => {
    hoveredRef.current = hovered
  }

  return { x, y, setHovered }
}
