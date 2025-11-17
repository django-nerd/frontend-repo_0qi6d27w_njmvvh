export default function CTA() {
  return (
    <section id="build" className="relative bg-[#0A0D10] text-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 sm:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let's build your AI advantage</h3>
              <p className="mt-3 text-white/70">Tell us about your goals. We'll respond with a crisp game plan within 48 hours.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will be in touch.')}}
              className="grid gap-3"
            >
              <input className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" placeholder="Your name" required />
              <input type="email" className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" placeholder="Work email" required />
              <textarea rows="3" className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" placeholder="What are you trying to achieve?" />
              <button className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">Request plan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
