import type { CSSProperties } from 'react'
import { motion, useSpring, useTransform, type MotionValue } from 'framer-motion'

export type EyeLayer = {
  src: string
  alt?: string
  className?: string
  style: CSSProperties
}

type EyeTrackerProps = {
  x: MotionValue<number>
  y: MotionValue<number>
  leftEye?: EyeLayer
  rightEye?: EyeLayer
  maxOffset?: number
}

export function EyeTracker({
  x,
  y,
  leftEye,
  rightEye,
  maxOffset = 5,
}: EyeTrackerProps) {
  const eyeX = useSpring(useTransform(x, (value) => value * maxOffset), {
    stiffness: 280,
    damping: 24,
    mass: 0.35,
  })
  const eyeY = useSpring(useTransform(y, (value) => value * maxOffset * 0.72), {
    stiffness: 280,
    damping: 24,
    mass: 0.35,
  })

  if (!leftEye && !rightEye) return null

  return (
    <div className="interactive-avatar__eyes" aria-hidden="true">
      {[leftEye, rightEye].map((eye, index) =>
        eye ? (
          <motion.img
            key={`${eye.src}-${index}`}
            src={eye.src}
            alt={eye.alt ?? ''}
            className={eye.className}
            style={{ ...eye.style, x: eyeX, y: eyeY }}
            draggable={false}
          />
        ) : null,
      )}
    </div>
  )
}
