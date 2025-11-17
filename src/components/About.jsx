import Reveal from './Reveal'
import Marquee from './Marquee'

export default function About() {
  return (
    <section id="about" className="relative bg-[#07090B] text-white py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About Us</h2>
              <p className="mt-4 text-white/70">
                Building systems that serve a human purpose. We ship, measure, and iterate—safely and pragmatically.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-white/60">Vision</div>
                  <div className="mt-1 text-white">Winning is engineered—through intelligent systems that amplify people.</div>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-white/60">Mission</div>
                  <div className="mt-1 text-white">Productivity should serve a human purpose. It’s the only path worth taking.</div>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-white/60">Values</div>
                  <div className="mt-1 text-white">Human‑Centered • Pragmatic • Secure by Design</div>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-white/60">Focus</div>
                  <div className="mt-1 text-white">Outcome‑first, build‑with, enterprise‑ready.</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-white/60">Time to first value</dt>
                  <dd className="text-2xl font-semibold text-white">30 days</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Delivery model</dt>
                  <dd className="text-2xl font-semibold text-white">Build‑with</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Security posture</dt>
                  <dd className="text-2xl font-semibold text-white">Enterprise</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Engagement focus</dt>
                  <dd className="text-2xl font-semibold text-white">Outcomes</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Marquee items={[
                  'Responsible AI', 'Enterprise Readiness', 'Accelerated Value', 'Human‑Centered', 'Security by Design', 'Build‑with Delivery', 'Pragmatic Innovation'
                ]} speed={40} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
