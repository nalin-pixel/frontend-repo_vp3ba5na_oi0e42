import { CheckCircle2 } from 'lucide-react'

const pillars = [
  { title: 'Clean Label', desc: 'No artificial colors, sweeteners, or unnecessary fillers.' },
  { title: 'Third-Party Tested', desc: 'Independent labs verify purity and potency of every batch.' },
  { title: 'Plant-Based', desc: 'Vegan capsules and ingredients derived from natural sources.' },
]

export default function Pillars() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#2A7F83]" />
              <h3 className="mt-3 font-semibold text-slate-900">{p.title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
