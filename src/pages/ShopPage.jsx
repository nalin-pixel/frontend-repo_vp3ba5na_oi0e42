import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useSearchParams } from 'react-router-dom'

const products = [
  { id: 'magnesium-glycinate', name: 'Magnesium Glycinate 200mg', price: 28, collection: 'magnesium' },
  { id: 'plant-omega-3', name: 'Plant Omega-3 DHA+EPA', price: 32, collection: 'vitamins' },
  { id: 'vitamin-d3-k2', name: 'Vitamin D3 + K2', price: 24, collection: 'vitamins' },
  { id: 'sleep-trio', name: 'Sleep Trio Bundle', price: 58, collection: 'sleep' },
]

export default function ShopPage() {
  const [params] = useSearchParams()
  const filter = params.get('collection')
  const filtered = filter ? products.filter(p => p.collection === filter) : products

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Shop</h1>
            {filter && <p className="text-slate-600 mt-1">Filtered by: {filter}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] rounded-xl bg-[#F6FBFA] border border-slate-200 mb-3"></div>
              <div className="font-medium text-slate-900">{p.name}</div>
              <div className="text-slate-600">${p.price.toFixed(2)}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
