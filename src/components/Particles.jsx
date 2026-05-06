import { useMemo } from 'react'

export default function Particles({ count = 28 }) {
  const particles = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      dur: Math.random() * 14 + 10,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 120,
      opacity: Math.random() * 0.4 + 0.1,
      color: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#a78bfa' : '#38bdf8',
    }))
  ), [count])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
            '--dur': `${p.dur}s`,
            '--delay': `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
