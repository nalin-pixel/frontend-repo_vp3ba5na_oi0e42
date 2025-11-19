const testimonials = [
  { name: 'Dr. Rivera, MD', text: 'The most transparent supplement brand I’ve seen. The form and dosage choices are excellent.', role: 'Internal Medicine' },
  { name: 'Casey L.', text: 'I sleep noticeably deeper with the magnesium. Love the clean, clinical design.', role: 'Customer' },
  { name: 'Jordan P.', text: 'Subscribe & Save makes it effortless. Quality is top-tier.', role: 'Customer' },
]

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#C7EFE8]/40 border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">Trusted by clinicians and customers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                <p className="text-slate-700">“{t.text}”</p>
                <div className="mt-3 text-sm text-slate-500">{t.name} • {t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
