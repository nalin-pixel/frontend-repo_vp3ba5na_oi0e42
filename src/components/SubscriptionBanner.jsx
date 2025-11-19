import { Link } from 'react-router-dom'

export default function SubscriptionBanner() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#C7EFE8] to-[#E8FBF7] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Subscribe & Save 15%</h3>
            <p className="text-slate-600 mt-1">Set your schedule. Pause or cancel anytime. Free shipping on subscriptions.</p>
          </div>
          <Link to="/subscribe" className="inline-flex items-center justify-center rounded-full bg-[#2A7F83] text-white px-6 py-3 shadow-sm hover:shadow-md transition-shadow">Start Now</Link>
        </div>
      </div>
    </section>
  )
}
