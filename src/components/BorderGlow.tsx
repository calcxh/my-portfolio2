import { type CSSProperties, type ReactNode, useCallback, useRef } from 'react'
import './BorderGlow.css'

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>

type BorderGlowProps = {
  children: ReactNode
  className?: string
  edgeSensitivity?: number
  glowRadius?: number
  glowIntensity?: number
  colors?: [string, string, string]
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 26,
  glowRadius = 28,
  glowIntensity = 0.75,
  colors = ['#FFD629', '#A855F7', '#38BDF8'],
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const updateGlow = useCallback((clientX: number, clientY: number) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = x - cx
    const dy = y - cy
    const kx = dx === 0 ? Number.POSITIVE_INFINITY : cx / Math.abs(dx)
    const ky = dy === 0 ? Number.POSITIVE_INFINITY : cy / Math.abs(dy)
    const proximity = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1)
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
    if (angle < 0) angle += 360
    card.style.setProperty('--edge-proximity', (proximity * 100).toFixed(3))
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`)
  }, [])

  const style: GlowStyle = {
    '--edge-sensitivity': edgeSensitivity,
    '--glow-padding': `${glowRadius}px`,
    '--glow-intensity': glowIntensity,
    '--glow-one': colors[0],
    '--glow-two': colors[1],
    '--glow-three': colors[2],
  }

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`}
      style={style}
      onPointerMove={(event) => updateGlow(event.clientX, event.clientY)}
      onPointerLeave={() => cardRef.current?.style.setProperty('--edge-proximity', '0')}
    >
      <span className="border-glow-light" aria-hidden="true" />
      <div className="border-glow-content">{children}</div>
    </div>
  )
}
