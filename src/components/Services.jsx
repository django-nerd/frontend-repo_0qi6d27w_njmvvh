import { Brain, Workflow, LineChart, Layers } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'AI Strategy',
    desc: 'Define an AI-first operating model, governance, and capability roadmap aligned to outcomes.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    desc: 'Re-engineer workflows with agents and copilots to eliminate toil and accelerate throughput.'
  },
  {
    icon: LineChart,
    title: 'Growth Systems',
    desc: 'Build compounding growth engines across product, marketing, and revenue ops.'
  },
  {
    icon: Layers,
    title: 'Data & Platforms',
    desc: 'Modern data stacks, evaluation harnesses, and safe deployment pipelines for enterprise AI.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0A0D10] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-white/70">Engagements designed to deliver outcomes fast, then scale.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 hover:border-emerald-400/40 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center ring-1 ring-emerald-400/40 mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
