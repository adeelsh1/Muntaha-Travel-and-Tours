import Hero from '../../components/home/Hero'
import PartnersTicker from '../../components/home/PartnersTicker'
import DestinationsStack from '../../components/home/DestinationsStack'
import ServicesSection from '../../components/home/ServicesSection'
import TrustedClients from '../../components/home/TrustedClients'
import BookingCtaSection from '../../components/home/BookingCtaSection'
import FeaturedPackagesModal from '../../components/home/FeaturedPackagesModal'
import StartPlanningModal from '../../components/common/StartPlanningModal'

/**
 * HomePage
 * 
 * Features:
 * 1. Cinematic Hero Section with full viewport height & editorial typography
 * 2. Infinite Trusted Partners & Airline Accreditation Marquee Ticker
 * 3. ScrollStack Luxury Cards Section showcasing curated destinations
 * 4. Comprehensive Services Section (Visa, Ticketing, Tours, Hotels, Insurance)
 * 5. Trusted Clients Section (Voices of Valued Travelers & 4.9★ reviews)
 * 6. Minimal Start Planning Inquiry Modal
 * 7. Automatic Featured Packages Promotional Pop-up Modal
 */
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <PartnersTicker />
      <DestinationsStack />
      <ServicesSection />
      <TrustedClients />
      <BookingCtaSection />
      <StartPlanningModal />
      <FeaturedPackagesModal />
    </div>
  )
}
