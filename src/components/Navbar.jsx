import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'framework', label: 'Framework' },
  { id: 'about', label: 'About' },
  { id: 'build', label: "Let's Build" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-emerald-400/20 ring-1 ring-emerald-400/50 shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
            <span className="text-white text-lg font-semibold tracking-tight">Turnit<span className="text-emerald-400">AI</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {s.label}
              </button>
            ))}
            <a
              href="#build"
              onClick={(e) => { e.preventDefault(); handleNav('build') }}
              className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNav(s.id)}
                  className="w-full text-left rounded-md px-3 py-2 text-white/90 hover:bg-white/5"
                >
                  {s.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('build')}
                className="w-full text-left rounded-md bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-400"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
