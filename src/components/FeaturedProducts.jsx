import { Link } from 'react-router-dom'

const products = [
  { id: 'magnesium-glycinate', name: 'Magnesium Glycinate 200mg', price: 28, badge: 'Sleep & Calm', color: '#C7EFE8' },
  { id: 'plant-omega-3', name: 'Plant Omega-3 DHA+EPA', price: 32, badge: 'Brain & Heart', color: '#E8FBF7' },
  { id: 'vitamin-d3-k2', name: 'Vitamin D3 + K2', price: 24, badge: 'Immunity', color: '#DCE3E2' },
]

function Card({ p }) {
  return (
    <Link to={`/product/${p.id}`} className="group">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="aspect-[4/3] relative">
          <div className="absolute inset-0" style={{ background: p.color }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-xl bg-white border border-slate-200 shadow-sm"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-[#2A7F83] mb-1">{p.badge}</div>
          <h3 className="font-medium text-slate-900 group-hover:text-[#2A7F83]">{p.name}</h3>
          <p className="text-slate-600 mt-1">${p.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Featured Products</h2>
          <Link to="/shop" className="text-[#2A7F83]">Browse all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map(p => <Card key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
