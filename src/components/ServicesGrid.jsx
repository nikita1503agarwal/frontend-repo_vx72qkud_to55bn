import { Building2, Flame, Cpu, Shield, Layers, Server, Palette, CircuitBoard, Megaphone, Armchair, RefreshCw } from 'lucide-react';

const services = [
  { icon: Building2, title: 'Civil Engineering', desc: 'End-to-end structural design, planning, and execution with sustainability at core.' },
  { icon: Cpu, title: 'IBMS', desc: 'Smart building systems integrating HVAC, lighting, security, and energy management.' },
  { icon: Shield, title: 'Fire Safety', desc: 'Turnkey fire detection, protection, and compliance solutions.' },
  { icon: Layers, title: 'Façade', desc: 'High-performance façades with glass, aluminum, and advanced materials.' },
  { icon: Server, title: 'Networking & Server', desc: 'Enterprise-grade network architecture, servers, and cybersecurity.' },
  { icon: Palette, title: 'Logo & Branding', desc: 'Distinctive visual identity systems that communicate your purpose.' },
  { icon: CircuitBoard, title: 'MEP', desc: 'Mechanical, Electrical, Plumbing services for efficient building systems.' },
  { icon: Megaphone, title: 'Advertisement', desc: 'Campaign strategy, creative, and production for impactful outreach.' },
  { icon: Armchair, title: 'Interior', desc: 'Human-centered interiors blending aesthetics and function.' },
  { icon: RefreshCw, title: 'AMC', desc: 'Annual maintenance contracts to keep assets reliable and compliant.' },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-blue-200/80">Integrated solutions across the built environment and technology.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
                <Icon />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
