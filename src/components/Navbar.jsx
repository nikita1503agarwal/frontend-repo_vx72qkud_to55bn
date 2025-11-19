import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20" />
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-tight">Flawless Venture Engineers LLP</div>
              <div className="text-xs text-blue-300/80">Imagination • Integrity • Excellence</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-200">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">Contact</a>
          </nav>

          <button className="md:hidden text-blue-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2 text-blue-100/90">
              <a href="#services" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5">Services</a>
              <a href="#gallery" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5">Gallery</a>
              <a href="#about" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded bg-blue-500 text-white">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
