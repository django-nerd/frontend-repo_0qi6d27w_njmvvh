import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#07090B]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-First Management Consulting
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            THE ONE WORTH TAKING
          </h1>
          <p className="mt-5 text-lg text-white/70">
            We help ambitious leaders build winning systems. AI amplifies your team’s ingenuity—so productivity serves a human purpose.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#build" className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
              Book Your Consultation
            </a>
            <a href="#services" className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
