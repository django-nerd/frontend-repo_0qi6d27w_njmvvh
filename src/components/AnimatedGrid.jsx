export default function AnimatedGrid({ className = '' }) {
  const cells = Array.from({ length: 120 })
  return (
    <div className={`pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] ${className}`}>
      <div className="absolute inset-0 grid grid-cols-12">
        {cells.map((_, i) => (
          <div
            key={i}
            className="border-r border-b border-white/[0.04]"
            style={{ animation: `pulse ${10 + (i % 12)}s ease-in-out ${i * 0.05}s infinite alternate` }}
          />
        ))}
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.04 }
          100% { opacity: 0.12 }
        }
      `}</style>
    </div>
  )
}
