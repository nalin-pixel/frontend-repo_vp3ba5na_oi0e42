import { Link } from 'react-router-dom'

const links = [
  { title: 'Customer Care', items: [
    { to: '/faq', label: 'FAQ' },
    { to: '/shipping', label: 'Shipping' },
    { to: '/returns', label: 'Returns' },
    { to: '/contact', label: 'Contact' },
  ]},
  { title: 'Company', items: [
    { to: '/about', label: 'About' },
    { to: '/mission', label: 'Mission' },
    { to: '/transparency', label: 'Transparency' },
    { to: '/blog', label: 'Blog' },
  ]},
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#C7EFE8] flex items-center justify-center border border-slate-200 shadow-sm">
                <span className="w-3 h-3 rounded-full bg-[#2A7F83]"></span>
              </div>
              <span className="font-semibold tracking-tight text-slate-800">OjaVit</span>
            </div>
            <p className="text-slate-600 mt-3 max-w-md">Clean, plant-based supplements designed for generational wellness. Clinically informed, third-party tested, and radically transparent.</p>
          </div>
          {links.map((col) => (
            <div key={col.title}>
              <h4 className="font-medium text-slate-900 mb-3">{col.title}</h4>
              <ul className="grid gap-2 text-sm">
                {col.items.map(i => (
                  <li key={i.to}><Link to={i.to} className="text-slate-600 hover:text-[#2A7F83]">{i.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 mt-8 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} OjaVit. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-700">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-700">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
