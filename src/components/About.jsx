export default function About() {
  return (
    <section id="about" className="relative bg-[#07090B] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-white/70">
              TurnitAI partners with leaders who want to win the decade. We blend deep operating experience with modern AI to engineer systems that unlock human potential. Our bias is to ship, measure, and iterate.
            </p>
            <p className="mt-3 text-white/70">
              We believe AI should serve human purpose. That means safe deployment, measurable outcomes, and teams equipped to sustain advantage.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm text-white/60">Average time to first value</dt>
                <dd className="text-2xl font-semibold text-white">30 days</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Engagement focus</dt>
                <dd className="text-2xl font-semibold text-white">Outcome-first</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Delivery model</dt>
                <dd className="text-2xl font-semibold text-white">Build-with</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Security posture</dt>
                <dd className="text-2xl font-semibold text-white">Enterprise-ready</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
