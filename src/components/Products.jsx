import { Sparkles, ShieldCheck, Rocket } from 'lucide-react'

const products = [
  {
    icon: Sparkles,
    title: 'Agentic Workbench',
    desc: 'Design, orchestrate, and evaluate autonomous workflows tailored to your org.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety Suite',
    desc: 'Guardrails, red-teaming, and policy automation to deploy responsibly.'
  },
  {
    icon: Rocket,
    title: 'Go-To-Market Copilot',
    desc: 'A copilot that compounds insights across customer research, content and enablement.'
  },
]

export default function Products() {
  return (
    <section id="products" className="relative bg-[#07090B] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Products</h2>
          <p className="mt-3 text-white/70">Modular accelerators to move from slideware to shipped value.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, title, desc }) => (
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
