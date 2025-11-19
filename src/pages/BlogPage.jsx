import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const posts = [
  { slug: 'magnesium-for-sleep', title: 'Magnesium Glycinate for Sleep: What the Evidence Says' },
  { slug: 'how-to-choose-omega-3', title: 'How to Choose a Plant-Based Omega-3' },
  { slug: 'vitamin-d3-k2-guide', title: 'Vitamin D3 + K2: Complete Guide' },
]

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">OjaVit Journal</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {posts.map(p => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] rounded-xl bg-[#F6FBFA] border border-slate-200 mb-3"></div>
              <div className="font-medium text-slate-900">{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
