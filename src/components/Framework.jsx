export default function Framework() {
  const pillars = [
    {
      title: 'Observe',
      desc: 'Map systems, constraints, and opportunities. Quantify work and value streams.'
    },
    {
      title: 'Design',
      desc: 'Co-create target operating model, prompts, agents, and evaluation harnesses.'
    },
    {
      title: 'Build',
      desc: 'Ship thin slices to production. Measure outcomes. Iterate fast.'
    },
    {
      title: 'Scale',
      desc: 'Codify playbooks and platforms to compound advantage across the org.'
    },
  ]

  return (
    <section id="framework" className="relative bg-[#0A0D10] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Framework</h2>
          <p className="mt-3 text-white/70">A pragmatic loop to go from insight to scaled impact.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <div className="text-emerald-300 text-sm tracking-wide">{p.title}</div>
              <p className="mt-2 text-white/80 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
