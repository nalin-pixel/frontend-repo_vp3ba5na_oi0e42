import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-slate-500"><Link to="/blog" className="hover:text-slate-700">← Back to Journal</Link></p>
        <h1 className="text-3xl font-semibold text-slate-900 mt-2">{slug?.replaceAll('-', ' ')}</h1>
        <div className="prose prose-slate mt-6">
          <p>Article content coming soon. We’ll cover evidence-based guidance, dosing insights, and ingredient sourcing.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
