import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <Gallery />
        <Contact />
        <footer className="py-10 text-center text-blue-300/70 border-t border-white/10">
          © {new Date().getFullYear()} Flawless Venture Engineers LLP — All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
