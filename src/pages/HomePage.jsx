import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collections from '../components/Collections'
import FeaturedProducts from '../components/FeaturedProducts'
import IngredientsTransparency from '../components/IngredientsTransparency'
import Pillars from '../components/Pillars'
import Testimonials from '../components/Testimonials'
import SubscriptionBanner from '../components/SubscriptionBanner'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedProducts />
      <IngredientsTransparency />
      <Pillars />
      <Testimonials />
      <SubscriptionBanner />
      <Footer />
    </div>
  )
}
