import { Sparkles, FileCog, DatabaseZap } from 'lucide-react'

const products = [
  {
    icon: Sparkles,
    title: 'Agile Requirements Generator',
    desc: 'Epics, user stories, estimates, and diagrams—generated in minutes.',
    tags: ['Agile', 'Requirements', 'Automation']
  },
  {
    icon: FileCog,
    title: 'Automated RFP Generator',
    desc: 'Precise, structured RFPs in a fraction of the time.',
    tags: ['Procurement', 'RFP', 'Efficiency']
  },
  {
    icon: DatabaseZap,
    title: 'Unlock Insights from Your Internal Data',
    desc: 'Ask natural-language questions across secure, proprietary data.',
    tags: ['RAG', 'Knowledge Base', 'AI Agents']
  },
]

export default function Products() {
  return (
    <section id="products" className="relative bg-[#07090B] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs text-emerald-300/80">AI Tools</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Our Products</h2>
          <p className="mt-3 text-white/70">Proprietary AI tools to accelerate your operations.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, title, desc, tags }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 hover:border-emerald-400/40 transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  )
}
