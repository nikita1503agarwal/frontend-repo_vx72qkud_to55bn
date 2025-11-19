export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something exceptional</h2>
            <p className="mt-3 text-blue-200/80">We operate across Gujarat, Rajasthan, and Madhya Pradesh. Share your requirements and we’ll get back within 24 hours.</p>
            <div className="mt-8 space-y-3 text-blue-100/90">
              <p><span className="text-blue-300">Email:</span> info@ventureengineering.in</p>
              <p><span className="text-blue-300">Phone:</span> +91 98765 43210</p>
              <p><span className="text-blue-300">HQ:</span> Ahmedabad, Gujarat</p>
            </div>
          </div>

          <form className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-sm text-blue-200 mb-1">Name</label>
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-blue-200 mb-1">Email</label>
              <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-500" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm text-blue-200 mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-500" placeholder="Tell us about your project" />
            </div>
            <button type="button" className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white py-3 font-medium">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
