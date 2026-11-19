import { useMemo } from "react"

/* Soft floating particles used as decorative background inside a section.
   Purely decorative — hidden from screen readers. */
export default function Particles({ count = 16, className = "" }) {
  const dots = useMemo(() => {
    const items = []
    let seed = 7
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }
    for (let i = 0; i < count; i += 1) {
      items.push({
        x: `${Math.round(random() * 100)}%`,
        y: `${Math.round(30 + random() * 70)}%`,
        size: `${3 + Math.round(random() * 6)}px`,
        alpha: (0.25 + random() * 0.45).toFixed(2),
        dur: `${12 + Math.round(random() * 14)}s`,
        delay: `${(random() * -16).toFixed(1)}s`,
      })
    }
    return items
  }, [count])

  return (
    <div className={`fx-layer ${className}`} aria-hidden="true">
      {dots.map((dot, index) => (
        <span
          className="fx-dot"
          key={index}
          style={{
            "--x": dot.x,
            "--y": dot.y,
            "--size": dot.size,
            "--alpha": dot.alpha,
            "--dur": dot.dur,
            "--delay": dot.delay,
          }}
        />
      ))}
    </div>
  )
}
