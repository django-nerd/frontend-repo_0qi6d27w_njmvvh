export default function Insights() {
  const posts = [
    {
      title: 'Beyond the Hype: Practical AI for Project Managers',
      excerpt: 'How AI agents can automate requirements, risks, and resourcing.',
      date: 'Oct 22, 2025',
      category: 'Project Management'
    },
    {
      title: 'Data-Driven Strategy: Using RAG to Unlock Your Corporate Brain',
      excerpt: 'Implement Retrieval‑Augmented Generation for real‑time decisions.',
      date: 'Oct 10, 2025',
      category: 'AI Strategy'
    },
    {
      title: 'Generating Value: When Does Synthetic Data Make Sense?',
      excerpt: 'Where synthetic data adds signal—and how to protect privacy.',
      date: 'Sep 28, 2025',
      category: 'Data Science'
    },
  ]

  return (
    <section id="insights" className="relative bg-[#07090B] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Insights & Thought Leadership</h2>
          <p className="mt-3 text-white/70">Insights on AI in business and technology.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <div className="text-[11px] uppercase tracking-wide text-emerald-300/80">{p.category}</div>
              <h3 className="mt-2 text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                <span>{p.date}</span>
                <a href="#" className="text-emerald-300 hover:text-emerald-200">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
