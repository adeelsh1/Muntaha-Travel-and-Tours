import { useState } from 'react'
import { ArrowRight, FileCheck, Ticket, Compass, Building2, ShieldCheck, Check, Phone, X, Plane } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import visaImg from '../../assets/images/service-visa.webp'
import flightImg from '../../assets/images/service-flights.webp'
import tourImg from '../../assets/images/service-tours.webp'
import hotelImg from '../../assets/images/service-hotel.webp'
import insuranceImg from '../../assets/images/service-insurance.webp'

/**
 * ServicesSection Component
 * 
 * Clean luxury cards layout matching reference design:
 * - Dotted flight curve with airplane icon in background.
 * - 5 rounded luxury cards with top thumbnail, code, title, and "Learn More →".
 * - Fully responsive: 5 columns on desktop, 3 on tablet, 2 on mobile.
 * - Interactive modal on click for detailed features and inquiry.
 * - Centered "Explore Services" pill button below.
 */
export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 'visa',
      code: 'VA',
      icon: FileCheck,
      title: 'Visa Assistance',
      category: 'Visa Facilitation',
      image: visaImg,
      alt: 'Passports, visa stamps and official travel documentation',
      description:
        'Fast and reliable visa processing for Umrah permits, UAE, Azerbaijan, Thailand, Malaysia, Schengen, UK, and worldwide destinations with complete document verification.',
      features: ['Official Umrah & Tourist Visas', 'Document Verification & Submission', 'Express Processing Available'],
    },
    {
      id: 'ticketing',
      code: 'AT',
      icon: Ticket,
      title: 'Air Ticketing',
      category: 'Global Flights',
      image: flightImg,
      alt: 'Modern commercial passenger aircraft in blue sky',
      description:
        'Direct booking on premier world airlines including Saudia, Emirates, Qatar Airways, Turkish Airlines, and PIA with 24/7 flight monitoring and flexible changes.',
      features: ['Domestic & International Flights', 'Corporate & Group Fares', '24/7 Re-issuance & Seat Support'],
    },
    {
      id: 'tours',
      code: 'CT',
      icon: Compass,
      title: 'Custom Tours',
      category: 'Holiday Packages',
      image: tourImg,
      alt: 'Scenic mountain landscape and luxury travel adventure',
      description:
        'Bespoke holiday packages, exotic tropical retreats, spiritual ziyarat groups, and private family vacations crafted around your preferences, privacy, and schedule.',
      features: ['Family & Honeymoon Getaways', 'Guided International Group Tours', 'Private Chauffeur & Guides'],
    },
    {
      id: 'hotel',
      code: 'HB',
      icon: Building2,
      title: 'Hotel Booking',
      category: 'Luxury Stays',
      image: hotelImg,
      alt: 'Luxury 5-star hotel resort swimming pool and suite',
      description:
        'Guaranteed reservations from 5-star Haram-facing luxury towers in Makkah & Madinah to private clifftop pool villas and premium city center hotels worldwide.',
      features: ['Haram-View Executive Suites', 'Special Corporate Rates', 'Early Check-In & Room Upgrades'],
    },
    {
      id: 'insurance',
      code: 'TI',
      icon: ShieldCheck,
      title: 'Travel Insurance',
      category: 'Global Protection',
      image: insuranceImg,
      alt: 'Family traveling peacefully with complete medical protection',
      description:
        'Comprehensive international travel insurance providing medical protection, emergency assistance, flight delay compensation, and baggage loss protection.',
      features: ['Worldwide Emergency Medical Care', 'Trip Cancellation Protection', 'Instant Digital Policy Delivery'],
    },
  ]

  return (
    <section id="services" className="relative bg-[#FAF7F2] py-10 sm:py-14 md:py-18 overflow-hidden select-none border-t border-soft-lavender">
      {/* Background Decorative Flight Curve & Subtle Airplane */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40 overflow-hidden">
        <svg viewBox="0 0 1200 400" className="w-full max-w-6xl h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 50,300 C 350,80 850,80 1150,300"
            stroke="#44163D"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            strokeOpacity="0.2"
          />
          {/* Plane Icon along the trajectory */}
          <g transform="translate(680, 115) rotate(15)">
            <path
              d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"
              fill="#44163D"
              fillOpacity="0.35"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 sm:w-6 h-[1px] bg-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold">
              Our Services
            </span>
            <span className="w-5 sm:w-6 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-plum leading-tight mb-2 sm:mb-3">
            Our Services
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-charcoal/75 font-light leading-relaxed max-w-xl mx-auto">
            Explore premier travel solutions, visa facilitation, and bespoke global journeys across the globe.
          </p>
        </ScrollReveal>

        {/* 5 Luxury Cards Grid (Matches Reference Image) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`bg-white rounded-2xl sm:rounded-3xl border border-soft-lavender shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer ${
                index === 4 ? 'col-span-2 sm:col-span-1 max-w-[200px] min-[400px]:max-w-[220px] sm:max-w-none mx-auto w-full' : ''
              }`}
            >
              {/* Top Rounded Image Thumbnail */}
              <div className="relative h-26 min-[380px]:h-28 sm:h-36 md:h-40 overflow-hidden bg-charcoal/10 shrink-0">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-2.5 min-[380px]:p-3 sm:p-4 text-center flex flex-col items-center justify-between flex-1 bg-white">
                {/* Title (Mobile adjusted size, no short code, card title stays plum on hover) */}
                <div className="mb-1.5 sm:mb-2 w-full">
                  <h3 className="text-[10px] min-[380px]:text-[11px] sm:text-xs md:text-sm font-bold text-plum font-sans uppercase tracking-tight leading-snug line-clamp-1">
                    {service.title}
                  </h3>
                </div>

                {/* Learn More Link (Purple brand color, turns yellow on hover) */}
                <div className="inline-flex items-center gap-1 text-[9.5px] min-[380px]:text-[10.5px] sm:text-xs font-semibold text-plum group-hover:text-gold transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 text-plum group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Pill Button with Updated Text "Explore Services" */}
        <div className="text-center flex flex-col items-center">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-planning-modal'))}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full bg-plum hover:bg-[#34112e] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest border border-gold/40 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group cursor-pointer whitespace-nowrap"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-2.5 text-[10px] sm:text-xs text-charcoal/50 font-serif italic">
            Dedicated Consultants Ready to Craft Your Journey
          </p>
        </div>
      </div>

      {/* Service Detail Modal (when user clicks card or Learn More) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedService(null)}
          />
          <div className="relative z-10 w-full max-w-md bg-warm-white rounded-3xl p-6 shadow-2xl border border-soft-lavender overflow-hidden animate-fade-in-up">
            <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-6 text-white">
                <span className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold bg-gold text-plum mb-1 inline-block">
                  {selectedService.category}
                </span>
                <h3 className="font-serif text-2xl font-bold">{selectedService.title}</h3>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-5">
              {selectedService.description}
            </p>

            <div className="space-y-2 mb-6">
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/90">
                  <span className="w-4 h-4 rounded-full bg-soft-lavender text-plum flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3 px-4 rounded-xl bg-gold text-plum font-semibold text-xs uppercase tracking-widest text-center shadow-md hover:bg-[#dfb100] transition-colors"
              >
                Inquire This Service
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-5 rounded-xl border border-soft-lavender text-charcoal/70 hover:text-plum text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
