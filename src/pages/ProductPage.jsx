import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const DB = {
  'magnesium-glycinate': {
    name: 'Magnesium Glycinate 200mg', price: 28,
    benefits: ['Deeper sleep quality', 'Supports relaxation', 'Highly bioavailable chelate'],
    facts: [
      ['Serving Size', '2 Capsules'],
      ['Magnesium (as Glycinate)', '200 mg'],
      ['Other Ingredients', 'Vegan capsule (cellulose)']
    ],
    ingredients: 'Magnesium bisglycinate chelate, vegan capsule (cellulose)'
  },
  'plant-omega-3': {
    name: 'Plant Omega-3 DHA+EPA', price: 32,
    benefits: ['Brain and heart support', 'Algae-sourced, no fishy aftertaste', 'Sustainably produced'],
    facts: [
      ['Serving Size', '2 Softgels'],
      ['Algal Oil providing DHA+EPA', '800 mg'],
      ['Other Ingredients', 'Plant-based softgel']
    ],
    ingredients: 'Algae oil (Schizochytrium sp.), plant-based softgel'
  },
  'vitamin-d3-k2': {
    name: 'Vitamin D3 + K2', price: 24,
    benefits: ['Calcium utilization', 'Immune support', 'Microencapsulated for stability'],
    facts: [
      ['Vitamin D3 (as cholecalciferol)', '2000 IU'],
      ['Vitamin K2 (as MK-7)', '100 mcg']
    ],
    ingredients: 'Vit D3 (cholecalciferol), Vit K2 (MK-7), vegan capsule'
  },
  'sleep-trio': {
    name: 'Sleep Trio Bundle', price: 58,
    benefits: ['Helps you fall and stay asleep', 'Non-habit forming', 'Clinically informed blend'],
    facts: [
      ['Magnesium (as glycinate)', '200 mg'],
      ['L-Theanine', '200 mg'],
      ['Glycine', '3 g']
    ],
    ingredients: 'Magnesium bisglycinate, L-Theanine, Glycine'
  }
}

export default function ProductPage() {
  const { id } = useParams()
  const product = DB[id]

  if (!product) return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Product not found</h1>
        <p className="text-slate-600 mt-2">Please go back to the shop.</p>
      </div>
      <Footer />
    </div>
  )

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="aspect-[4/3] rounded-3xl bg-[#F6FBFA] border border-slate-200 shadow-sm"></div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">{product.name}</h1>
          <div className="mt-2 text-xl text-slate-700">${product.price.toFixed(2)}</div>

          <div className="mt-6">
            <h3 className="font-medium text-slate-900">Key Benefits</h3>
            <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {product.benefits.map(b => <li key={b} className="rounded-xl border border-slate-200 bg-white p-3">{b}</li>)}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-slate-900">Supplement Facts</h3>
            <div className="mt-2 border border-slate-300 rounded-xl divide-y divide-slate-300 bg-white">
              {product.facts.map(([k,v]) => (
                <div key={k} className="p-4 flex items-center justify-between">
                  <span className="font-medium text-slate-900">{k}</span>
                  <span className="text-slate-700">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-slate-900">Ingredients</h3>
            <p className="text-slate-700 mt-2">{product.ingredients}</p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-4 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-600">Subscribe & Save</div>
                <div className="text-slate-900 font-medium">Save 15% on every order</div>
              </div>
              <button className="rounded-full bg-[#2A7F83] text-white px-5 py-2 shadow-sm">Subscribe</button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium text-slate-900 mb-2">Reviews</h3>
            <div className="grid gap-3">
              {[1,2].map(i => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">Excellent quality, clean ingredients. Noticed results in 2 weeks.</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
