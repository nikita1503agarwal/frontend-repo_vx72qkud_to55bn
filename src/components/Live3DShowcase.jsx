import { motion, useMotionValue, useTransform } from 'framer-motion';

function TiltCard({ title, subtitle, img, cta }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 300], [8, -8]);
  const rotateY = useTransform(x, [0, 600], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left; // x position within the element.
    const py = e.clientY - rect.top;  // y position within the element.
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(300);
    y.set(150);
  };

  return (
    <motion.div
      className="group relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-2xl"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="p-5"
      >
        <div className="relative h-56 rounded-2xl overflow-hidden">
          <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div>
              <div className="text-white font-semibold text-lg drop-shadow">{title}</div>
              <div className="text-blue-200/80 text-xs drop-shadow">{subtitle}</div>
            </div>
            {cta && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-blue-100 backdrop-blur">
                {cta}
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 text-sm text-blue-200/80">
          Precision, performance, and safety brought to life. Hover to explore the 3D feel.
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.15),transparent_40%)]" />
    </motion.div>
  );
}

export default function Live3DShowcase() {
  const cards = [
    {
      title: 'Architectural Engineering',
      subtitle: 'Parametric façades, sustainable forms',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
      cta: 'Live 3D feel',
    },
    {
      title: 'IBMS & Control Rooms',
      subtitle: 'Lighting, HVAC, security—integrated',
      img: 'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?ixlib=rb-4.1.0&q=80&w=1600&auto=format&fit=crop',
      cta: 'Interactive',
    },
    {
      title: 'Data Center & Networking',
      subtitle: 'High-availability infrastructure',
      img: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1600&auto=format&fit=crop',
      cta: 'Realtime vibe',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">3D Live Showcase</h2>
          <p className="mt-3 text-blue-200/80">Three immersive visuals tailored for engineering services—lightweight and responsive.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <TiltCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
