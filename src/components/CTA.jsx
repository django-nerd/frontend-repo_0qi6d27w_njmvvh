import { useState } from 'react'
import Reveal from './Reveal'

export default function CTA() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError('')
    try {
      await new Promise((r) => setTimeout(r, 800))
      setSuccess(true)
    } catch (e) {
      setError('Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="build" className="relative bg-[#0A0D10] text-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.07),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 sm:p-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let's Build Solutions</h3>
                <p className="mt-3 text-white/70">Every great solution starts with a simple conversation. Tell us about yours.</p>
              </div>
              <form onSubmit={onSubmit} className="grid gap-3">
                <input required minLength={2} className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" placeholder="Full Name" />
                <input required type="email" className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" placeholder="Email Address" />
                <input required className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" placeholder="Company Name" />
                <select required defaultValue="" className="rounded-md bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                  <option value="" disabled>Select your industry</option>
                  {[ 'Agriculture','Consumer Goods','Education','Energy & Utilities','Finance','Government','Healthcare','Hospitality','Industrial','Life Sciences','Manufacturing','Media & Communications','Nonprofit','Professional Services','Real Estate','Retail','Sports','Technology','Transportation & Logistics','Travel & Tourism' ].map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
                <textarea required minLength={10} rows="3" className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" placeholder="Tell us about your needs..." />
                <button disabled={loading} className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>
                {success && (
                  <div className="text-sm text-emerald-300">Thank you for reaching out! We'll get back to you within 24 hours.</div>
                )}
                {error && (
                  <div className="text-sm text-red-300">{error}</div>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
