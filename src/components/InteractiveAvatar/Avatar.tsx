import { useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  type Transition,
} from 'framer-motion'
import { EyeTracker, type EyeLayer } from './EyeTracker'
import { useMouseTracking } from './useMouseTracking'
import './avatar.css'

export type InteractiveAvatarProps = {
  src?: string
  alt?: string
  className?: string
  leftEye?: EyeLayer
  rightEye?: EyeLayer
  eyeMaxOffset?: number
}

const hoverTransition: Transition = {
  type: 'spring',
  stiffness: 220,
  damping: 22,
  mass: 0.65,
}

export function InteractiveAvatar({
  src = '/avatar/avatar-full.png',
  alt = 'Carol, AI product designer',
  className = '',
  leftEye,
  rightEye,
  eyeMaxOffset = 5,
}: InteractiveAvatarProps) {
  const avatarRef = useRef<HTMLDivElement>(null)
  const [hovered, setHoveredState] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { x: pointerX, y: pointerY, setHovered } = useMouseTracking(avatarRef)

  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 20, mass: 0.75 })
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 20, mass: 0.75 })
  const parallaxX = useTransform(smoothX, [-1, 1], [-9, 9])
  const parallaxY = useTransform(smoothY, [-1, 1], [-5, 5])
  const rotateX = useTransform(smoothY, [-1, 1], [1.6, -1.6])
  const rotateY = useTransform(smoothX, [-1, 1], [-2.4, 2.4])

  const updateHovered = (nextHovered: boolean) => {
    setHoveredState(nextHovered)
    setHovered(nextHovered)
  }

  return (
    <motion.div
      ref={avatarRef}
      className={`interactive-avatar ${className}`}
      onPointerEnter={() => updateHovered(true)}
      onPointerLeave={() => updateHovered(false)}
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={hoverTransition}
      style={
        shouldReduceMotion
          ? undefined
          : { x: parallaxX, y: parallaxY, rotateX, rotateY }
      }
    >
      <motion.div
        className="interactive-avatar__float"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -6, 0],
                scaleY: [1, 1.006, 1],
              }
        }
        transition={{
          duration: 4.6,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="interactive-avatar__sway"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: [-0.35, 0.55, -0.25, -0.35],
                }
          }
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          <img
            src={src}
            alt={alt}
            className="interactive-avatar__image"
            draggable={false}
          />
          <EyeTracker
            x={pointerX}
            y={pointerY}
            leftEye={leftEye}
            rightEye={rightEye}
            maxOffset={eyeMaxOffset}
          />
          <motion.div
            className="interactive-avatar__smile"
            aria-hidden="true"
            animate={{ opacity: hovered ? 0.22 : 0, scaleX: hovered ? 1.04 : 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default InteractiveAvatar
