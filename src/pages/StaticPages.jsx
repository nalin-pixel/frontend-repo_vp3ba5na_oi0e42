import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Section({ title, children }) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      <div className="prose prose-slate max-w-none mt-4 text-slate-700">
        {children}
      </div>
    </section>
  )
}

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="About OjaVit">
        <p>We build clean, plant-based formulas guided by clinicians and validated by third-party labs. Our mission is generational wellness through transparency and scientific rigor.</p>
      </Section>
      <Footer />
    </div>
  )
}

export function SubscribePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="Subscribe & Save">
        <p>Save 15% on every order, choose your cadence, and pause anytime. Subscriptions include free shipping and early access to new releases.</p>
      </Section>
      <Footer />
    </div>
  )
}

export function RewardsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="Rewards">
        <p>Earn points for every purchase, reviews, and referrals. Redeem for discounts and exclusive bundles.</p>
      </Section>
      <Footer />
    </div>
  )
}

export function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="OjaVit Journal">
        <p>Guides, articles, and science-backed wellness insights.</p>
      </Section>
      <Footer />
    </div>
  )
}

export function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="FAQ">
        <p>Find answers about dosing, safety, sourcing, and subscriptions.</p>
      </Section>
      <Footer />
    </div>
  )
}

export function ShippingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="Shipping">
        <p>Free shipping over $50. Orders ship within 1-2 business days via carbon-neutral carriers.</p>
      </Section>
      <Footer />
    </div>
  )
}

export function ReturnsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="Returns">
        <p>30-day satisfaction guarantee. If it’s not for you, we’ll make it right.</p>
      </Section>
      <Footer />
    </div>
  )
}

export function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Section title="Contact">
        <p>We’re here to help. Email hello@ojavit.com and we’ll reply within 1 business day.</p>
      </Section>
      <Footer />
    </div>
  )
}
