import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Framework from './components/Framework'
import About from './components/About'
import CTA from './components/CTA'
import Insights from './components/Insights'

function Footer() {
  const year = new Date().getFullYear()
  const links = {
    quick: [
      { label: 'Services', href: '#services' },
      { label: 'Products', href: '#products' },
      { label: 'Framework', href: '#framework' },
      { label: 'About', href: '#about' },
      { label: 'Insights', href: '#insights' },
      { label: "Let's Build", href: '#build' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Complaints Book', href: '#' },
      { label: 'Cookie Preferences', href: '#' },
    ]
  }

  return (
    <footer className="bg-[#07090B] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-emerald-400/20 ring-1 ring-emerald-400/50" />
            <span className="text-white/90 text-sm">Turnit<span className="text-emerald-400">AI</span></span>
          </div>
          <p className="text-white/70 text-sm">Human Ingenuity, Amplified by Intelligent Systems</p>
        </div>
        <div>
          <div className="text-white/70 text-sm mb-3">Quick Links</div>
          <div className="grid grid-cols-2 gap-2">
            {links.quick.map(l => (
              <a key={l.label} href={l.href} className="text-white/60 hover:text-white text-sm">{l.label}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-white/70 text-sm mb-3">Legal</div>
          <div className="grid gap-2">
            {links.legal.map(l => (
              <a key={l.label} href={l.href} className="text-white/60 hover:text-white text-sm">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">© {year} turnitAI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <span>Follow Us</span>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#07090B]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Framework />
        <About />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
