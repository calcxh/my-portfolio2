import { useEffect, useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useMouseTracking } from './useMouseTracking'
import './avatar.css'

export type InteractiveAvatarProps = {
  src?: string
  alt?: string
  className?: string
}

const avatarAssetVersion = '20260726-cheek-arrow-fix'

const sequenceAssets = Array.from(
  { length: 60 },
  (_, index) =>
    `/avatar/sequence/frame-${String(index).padStart(2, '0')}.webp?v=${avatarAssetVersion}`,
)

const springConfig = {
  stiffness: 145,
  damping: 23,
  mass: 0.55,
}

export function InteractiveAvatar({
  src = `/avatar/sequence/neutral.webp?v=${avatarAssetVersion}`,
  alt = 'Carol, AI product designer',
  className = '',
}: InteractiveAvatarProps) {
  const avatarRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const {
    frameIndex,
    isNeutral,
    normalizedX,
    normalizedY,
  } = useMouseTracking(avatarRef, Boolean(shouldReduceMotion))
  const smoothX = useSpring(normalizedX, springConfig)
  const smoothY = useSpring(normalizedY, springConfig)
  const translateX = useTransform(smoothX, [-1, 1], [-7, 7])
  const translateY = useTransform(smoothY, [-1, 1], [-4, 5])
  const rotateY = useTransform(smoothX, [-1, 1], [-1.8, 1.8])
  const rotateX = useTransform(smoothY, [-1, 1], [1.2, -1.2])
  const activeSrc =
    shouldReduceMotion || isNeutral ? src : sequenceAssets[frameIndex]

  useEffect(() => {
    const preloadTimer = window.setTimeout(() => {
      sequenceAssets.forEach((assetSrc) => {
        const image = new Image()
        image.decoding = 'async'
        image.src = assetSrc
      })
    }, 80)

    return () => window.clearTimeout(preloadTimer)
  }, [])

  return (
    <div
      ref={avatarRef}
      className={`interactive-avatar ${className}`}
      role="img"
      aria-label={alt}
    >
      <motion.div
        className="interactive-avatar__motion"
        style={{
          x: translateX,
          y: translateY,
          rotateX,
          rotateY,
        }}
      >
        <img
          src={activeSrc}
          alt=""
          aria-hidden="true"
          className="interactive-avatar__state"
          decoding="sync"
          draggable={false}
        />
      </motion.div>
    </div>
  )
}

export default InteractiveAvatar
