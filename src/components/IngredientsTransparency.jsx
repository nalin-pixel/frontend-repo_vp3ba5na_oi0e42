export default function IngredientsTransparency() {
  return (
    <section className="py-12 sm:py-16 bg-[#F6FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Ingredient Transparency</h3>
            <p className="text-slate-600 mt-2">Every capsule lists exact forms, dosages, and sources. No artificial colors, sweeteners, or fillers.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['Vegan Capsules', 'Non-GMO', 'Gluten-Free', 'No Magnesium Stearate'].map(i => (
                <div key={i} className="rounded-xl border border-slate-200 p-3 text-sm text-slate-700 bg-white">{i}</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-sm text-[#2A7F83] mb-2">Supplement Facts (Sample)</h4>
            <div className="border border-slate-300 rounded-xl divide-y divide-slate-300 bg-white">
              <div className="p-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">Serving Size</span>
                <span className="text-slate-700">2 Capsules</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">Magnesium (as Glycinate)</span>
                <span className="text-slate-700">200 mg</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">Other Ingredients</span>
                <span className="text-slate-700">Vegan capsule (cellulose)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
