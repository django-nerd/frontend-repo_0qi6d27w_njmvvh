export default function Framework() {
  const steps = [
    {
      title: 'Frame',
      subtitle: 'The Diagnostic Phase',
      desc: 'Define the real problem and the measurable outcome before picking tools.',
      value: 'Humble, curious, focused on your real needs.'
    },
    {
      title: 'Outline',
      subtitle: 'Solution-Agnostic Strategy',
      desc: 'Explore paths—from AI to simple process changes—and pick the right one.',
      value: 'Work with you, not just for you.'
    },
    {
      title: 'Construct',
      subtitle: 'Precision Build',
      desc: 'Ship with expert precision: agents, RAG, pipelines, or workflow redesign.',
      value: 'Turn strategy into reality.'
    },
    {
      title: 'Unite',
      subtitle: 'Human-Centric Integration',
      desc: 'Drive adoption with training, live deployment, and clear docs.',
      value: 'Amplify human ingenuity.'
    },
    {
      title: 'Scale',
      subtitle: 'Intelligent System',
      desc: 'Measure, iterate, secure, and extend impact across the org.',
      value: 'Build systems that win.'
    },
  ]

  return (
    <section id="framework" className="relative bg-[#0A0D10] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Framework</h2>
          <p className="mt-3 text-white/70">FOCUS: Frame · Outline · Construct · Unite · Scale</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <div className="text-emerald-300 text-sm tracking-wide">{s.title}</div>
              <div className="mt-1 text-white/80 text-sm">{s.subtitle}</div>
              <p className="mt-3 text-white/70 text-sm">{s.desc}</p>
              <p className="mt-3 text-white/60 text-xs">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
