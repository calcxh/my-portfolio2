import { motion, useSpring, useTransform, type MotionValue } from 'framer-motion'

type EyeTrackerProps = {
  x: MotionValue<number>
  y: MotionValue<number>
  disabled?: boolean
}

export function EyeTracker({ x, y, disabled = false }: EyeTrackerProps) {
  const eyeX = useSpring(useTransform(x, (value) => value * 5.5), {
    stiffness: 460,
    damping: 30,
    mass: 0.4,
  })
  const eyeY = useSpring(useTransform(y, (value) => value * 4), {
    stiffness: 460,
    damping: 30,
    mass: 0.4,
  })

  return (
    <div className="interactive-avatar__eyes" aria-hidden="true">
      {[
        ['left', '/avatar/gaze/eye-left.png'],
        ['right', '/avatar/gaze/eye-right.png'],
      ].map(([side, src]) => (
        <span
          key={side}
          className={`interactive-avatar__eye-window interactive-avatar__eye-window--${side}`}
        >
          <motion.img
            src={src}
            alt=""
            className="interactive-avatar__eye-image"
            style={disabled ? undefined : { x: eyeX, y: eyeY }}
            draggable={false}
          />
        </span>
      ))}
    </div>
  )
}
