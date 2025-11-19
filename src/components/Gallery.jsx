const images = [
  // Royalty-free curated Unsplash images relevant to engineering, architecture, technology
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    title: "Futuristic Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1554793000-245d3a3c2a51?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGdXR1cmlzdGljJTIwQXJjaGl0ZWN0dXJlfGVufDB8MHx8fDE3NjM1MjgwMTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    title: "Smart Building Systems",
  },
  {
    src: "https://images.unsplash.com/photo-1753272691001-4d68806ac590?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbWFydCUyMEJ1aWxkaW5nJTIwU3lzdGVtc3xlbnwwfDB8fHwxNzYzNTI4MDEwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    title: "Data Center & Networking",
  },
  {
    src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    title: "Structural Engineering",
  },
  {
    src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop",
    title: "Interior Design",
  },
  // Updated to show Building Fire Line (sprinkler/hydrant piping)
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcmlvciUyMERlc2lnbnxlbnwwfDB8fHwxNzYzNTI5NTExfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    title: "Building Fire Line (Sprinkler & Hydrant)",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Showcase</h2>
          <p className="mt-3 text-blue-200/80">A glimpse into our world of engineering and design.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <figure key={img.src} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={img.src} alt={img.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="p-4 text-blue-100 text-sm">{img.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
