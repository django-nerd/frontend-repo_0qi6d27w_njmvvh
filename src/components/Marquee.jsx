import { useEffect, useRef } from 'react'

export default function Marquee({ items = [], speed = 30 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf
    const step = (t) => {
      if (!start) start = t
      const progress = (t - start) / 1000
      el.style.transform = `translateX(${-((progress * speed) % (el.scrollWidth / 2))}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <div ref={ref} className="flex gap-6 whitespace-nowrap will-change-transform">
        {doubled.map((t, i) => (
          <span key={i} className="text-white/60 text-sm">{t}</span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#07090B]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#07090B]" />
    </div>
  )
}
