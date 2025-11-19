import { Link } from 'react-router-dom'

const collections = [
  { title: 'Sports Nutrition', color: '#C7EFE8', slug: 'sports' },
  { title: 'Vitamins', color: '#E8FBF7', slug: 'vitamins' },
  { title: 'Magnesium', color: '#DCE3E2', slug: 'magnesium' },
  { title: 'Sleep', color: '#F3FAF9', slug: 'sleep' },
]

export default function Collections() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Shop by Collection</h2>
          <Link to="/shop" className="text-[#2A7F83]">View all</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {collections.map((c) => (
            <Link key={c.slug} to={`/shop?collection=${c.slug}`} className="group">
              <div className="aspect-[4/3] rounded-2xl border border-slate-200 shadow-sm bg-white overflow-hidden relative">
                <div className="absolute inset-0" style={{ background: c.color }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              <p className="mt-2 text-sm sm:text-base font-medium text-slate-800 group-hover:text-[#2A7F83]">{c.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
