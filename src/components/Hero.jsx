import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[64vh] sm:h-[70vh] lg:h-[78vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/lR2SoNOZNjXF5xUj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2A7F83]"></span>
            <span className="text-xs text-slate-600">Clinical-grade • Plant-based</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Generational Wellness, Backed by Science
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            Clean, transparent formulations designed with clinicians and verified by third-party testing.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link to="/shop" className="inline-flex items-center justify-center rounded-full bg-[#2A7F83] text-white px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              Shop Now
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 hover:border-[#2A7F83]">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
