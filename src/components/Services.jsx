import { Brain, Workflow, LineChart, Layers } from 'lucide-react'
import Reveal from './Reveal'

const items = [
  {
    icon: Brain,
    title: 'AI-First Management Consulting',
    desc: 'Strategy, innovation, and process—guided by AI when it’s right, not when it’s hype.',
    tags: ['Strategy', 'Innovation', 'Process']
  },
  {
    icon: Workflow,
    title: 'Applied AI Training & Workshops',
    desc: 'Executive briefings and hands-on sprints that solve real work, not just theory.',
    tags: ['Training', 'Workshops', 'Upskilling']
  },
  {
    icon: LineChart,
    title: 'Data Strategy & Engineering',
    desc: 'Data quality, robust pipelines, and synthetic data where it adds signal.',
    tags: ['Data Quality', 'Pipelines', 'Synthetic Data']
  },
  {
    icon: Layers,
    title: 'Security & Governance',
    desc: 'Secure, compliant, and ethically sound by design—enterprise ready.',
    tags: ['Cybersecurity', 'Compliance', 'Ethics']
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0A0D10] text-white py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs text-emerald-300/80">Management Consulting</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Our Services</h2>
          <p className="mt-3 text-white/70">Expert consulting and training to integrate AI at every level.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, tags }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 hover:border-emerald-400/40 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center ring-1 ring-emerald-400/40 mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wide text-white/60 rounded-full border border-white/10 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
