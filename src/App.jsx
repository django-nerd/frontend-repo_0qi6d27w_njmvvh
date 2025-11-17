import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Framework from './components/Framework'
import About from './components/About'
import CTA from './components/CTA'

function Footer() {
  return (
    <footer className="bg-[#07090B] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-emerald-400/20 ring-1 ring-emerald-400/50" />
          <span className="text-white/80 text-sm">Turnit<span className="text-emerald-400">AI</span></span>
        </div>
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} TurnitAI. All rights reserved.</p>
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
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
