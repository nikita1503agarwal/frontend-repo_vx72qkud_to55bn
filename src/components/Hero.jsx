import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl pt-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 mb-6">
            Future-focused • Multidisciplinary • Across GJ, RJ, MP
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Building sustainable, high‑performance spaces
          </h1>
          <p className="mt-6 text-blue-200/90 text-lg">
            We blend creativity, technology, and strategic thinking to deliver Civil, IBMS, Fire, Façade, Networking & Server, Logo, MEP, Advertisement, Interior, AMC, and project consultancy solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-600 transition-colors">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-blue-100 hover:bg-white/5 transition-colors">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
