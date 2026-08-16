import { useEffect, useRef } from 'react'
import {
  motion,
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

const avatarAssetVersion = '20260816-neutral-source-fix'
const avatarAssetRoot = `${import.meta.env.BASE_URL}avatar/sequence`
const avatarAsset = (fileName: string) =>
  `${avatarAssetRoot}/${fileName}?v=${avatarAssetVersion}`

const sequenceAssets = Array.from(
  { length: 60 },
  (_, index) => {
    const sourceFrameIndex = index === 41 ? 42 : index === 43 ? 44 : index
    return avatarAsset(
      `frame-${String(sourceFrameIndex).padStart(2, '0')}.webp`,
    )
  },
)

const springConfig = {
  stiffness: 145,
  damping: 23,
  mass: 0.55,
}

export function InteractiveAvatar({
  src = avatarAsset('neutral-fixed.webp'),
  alt = 'Carol, AI product designer',
  className = '',
}: InteractiveAvatarProps) {
  const avatarRef = useRef<HTMLDivElement>(null)
  const preloadedImagesRef = useRef<HTMLImageElement[]>([])
  const {
    frameIndex,
    isNeutral,
    normalizedX,
    normalizedY,
  } = useMouseTracking(avatarRef)
  const smoothX = useSpring(normalizedX, springConfig)
  const smoothY = useSpring(normalizedY, springConfig)
  const translateX = useTransform(smoothX, [-1, 1], [-7, 7])
  const translateY = useTransform(smoothY, [-1, 1], [-4, 5])
  const rotateY = useTransform(smoothX, [-1, 1], [-1.8, 1.8])
  const rotateX = useTransform(smoothY, [-1, 1], [1.2, -1.2])
  const activeSrc = isNeutral ? src : sequenceAssets[frameIndex]

  useEffect(() => {
    const preloadTimer = window.setTimeout(() => {
      preloadedImagesRef.current = sequenceAssets.map((assetSrc) => {
        const image = new Image()
        image.decoding = 'async'
        image.src = assetSrc
        return image
      })
    }, 80)

    return () => {
      window.clearTimeout(preloadTimer)
      preloadedImagesRef.current = []
    }
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
