import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/shop', label: 'Shop' },
  { to: '/subscribe', label: 'Subscribe & Save' },
  { to: '/rewards', label: 'Rewards' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-slate-700 hover:text-[#2A7F83] transition-colors'
  const active = ({ isActive }) =>
    isActive ? 'text-[#2A7F83] font-medium' : undefined

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="md:hidden p-2 rounded-md border border-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#C7EFE8] flex items-center justify-center border border-slate-200 shadow-sm">
                <span className="w-3 h-3 rounded-full bg-[#2A7F83]"></span>
              </div>
              <span className="font-semibold tracking-tight text-slate-800">OjaVit</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `${linkBase} ${isActive ? 'text-[#2A7F83] font-medium' : ''}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/shop" className="inline-flex items-center gap-2 bg-[#2A7F83] text-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Shop Now</span>
            </Link>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-slate-200 grid gap-2">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({ isActive }) => `px-2 py-2 rounded-md ${linkBase} ${isActive ? 'bg-[#C7EFE8]/60' : ''}`}>
                {n.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
