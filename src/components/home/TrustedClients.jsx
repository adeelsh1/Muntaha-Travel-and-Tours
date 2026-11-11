import { Star, Quote, CheckCircle2, Heart, Award, Sparkles } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import AnimatedCounter from '../common/AnimatedCounter'

/**
 * TrustedClients Component
 * 
 * Showcases authentic client experiences, pilgrim testimonials, and trust ratings:
 * - 4.9★ Verified aggregate review badge.
 * - 4 Rich editorial testimonial cards with traveler photos, ratings, packages, and quotes.
 * - Replaces Why Choose Us with deep social proof and luxury trust.
 */
export default function TrustedClients() {
  const testimonials = [
    {
      id: 1,
      name: 'Haji Muhammad Farooq & Family',
      location: 'Lahore, Pakistan',
      packageType: '5-Star Executive Umrah',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote:
        'Our Umrah with Muntaha was truly soul-enriching. The hotel was literally steps from the Haram in Makkah, and the private chauffeur transfer for our elderly parents was exceptionally punctual and respectful.',
      verified: 'Verified Pilgrim',
      highlight: 'Haram-Facing 5-Star Suites',
    },
    {
      id: 2,
      name: 'Dr. Tariq & Ayesha Mahmood',
      location: 'Islamabad, Pakistan',
      packageType: 'Baku & Gabala Luxury Tour',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote:
        'Everything was arranged to perfection. From our knowledgeable private guide in Baku Old City to the breathtaking mountain cable cars in Gabala, Muntaha handled every visa and flight detail with excellence.',
      verified: 'Verified Holidaymakers',
      highlight: 'Private Chauffeur & VIP Dining',
    },
    {
      id: 3,
      name: 'Syed Zeeshan Haider',
      location: 'Karachi, Pakistan',
      packageType: 'Sacred Iraq Ziyarat Group',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      quote:
        'Transparent pricing, zero hidden charges, and outstanding spiritual guidance throughout Najaf and Karbala. Truly an agency that places pilgrim comfort and devotion at the heart of their service.',
      verified: 'Verified Ziyarat Group',
      highlight: 'Scholar Guidance & VIP Transfers',
    },
    {
      id: 4,
      name: 'Hamza & Zainab Khan',
      location: 'Rawalpindi, Pakistan',
      packageType: 'Thailand Phuket & Bangkok Honeymoon',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      quote:
        'From private island speedboat charters to idyllic cliffside pool villas in Phuket, Muntaha made our honeymoon unforgettable. Their team was available 24/7 on WhatsApp for any flight or hotel assistance.',
      verified: 'Verified Honeymooners',
      highlight: 'Private Island Speedboat & Villas',
    },
  ]

  return (
    <section id="reviews" className="relative bg-[#FAF7F2] py-10 sm:py-14 md:py-18 overflow-hidden select-none border-t border-soft-lavender">
      {/* Background Decorative Radials */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-plum/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 sm:w-6 h-[1px] bg-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold">
              Trusted Clients
            </span>
            <span className="w-5 sm:w-6 h-[1px] bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-plum leading-tight mb-2 sm:mb-3">
            Voices of Our Valued Travelers
          </h2>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs md:text-sm text-charcoal/75 font-light leading-relaxed max-w-xl mx-auto mb-4 sm:mb-5">
            Real stories of peace, devotion, and discovery from pilgrims and holidaymakers who journeyed with Muntaha Travel & Tours.
          </p>

          {/* Aggregate Rating Pill (Optimized for Mobile) */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-soft-lavender shadow-xs">
            <div className="flex items-center text-gold gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-plum font-sans">4.9 / 5.0</span>
            <span className="w-1 h-1 rounded-full bg-charcoal/30" />
            <span className="text-[9px] sm:text-[11px] text-charcoal/60 font-medium">1,200+ Reviews</span>
          </div>
        </ScrollReveal>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 min-[380px]:p-5 sm:p-6 md:p-7 border border-soft-lavender shadow-xs hover:shadow-xl hover:border-gold/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Top Row: Stars & Quote Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gold gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-soft-lavender group-hover:text-gold/40 transition-colors" />
                </div>

                {/* Package Tag */}
                <div className="mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-semibold bg-soft-lavender/80 text-plum font-sans">
                    {t.packageType}
                  </span>
                </div>

                {/* Narrative Quote */}
                <p className="font-sans text-xs sm:text-[13px] text-charcoal/75 font-light leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Client Info */}
              <div className="pt-4 border-t border-soft-lavender flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-gold/40 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-serif font-bold text-sm text-plum truncate">
                    {t.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-charcoal/50 font-sans truncate">
                    {t.location}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[9px] text-emerald-700 font-medium mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>{t.verified}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Pillars Strip (Single Row on Mobile, Full on Desktop) */}
        <div className="bg-white rounded-2xl p-2.5 sm:p-5 md:p-6 border border-soft-lavender shadow-sm">
          <div className="grid grid-cols-4 gap-1 sm:gap-4 md:gap-6 text-center divide-x divide-soft-lavender">
            <div className="px-0.5 sm:px-2">
              <div className="font-serif text-sm sm:text-2xl md:text-3xl font-bold text-plum leading-none mb-1">
                <AnimatedCounter end={15000} duration={2200} suffix="+" />
              </div>
              <p className="text-[8px] sm:text-[11px] md:text-xs text-charcoal/60 leading-tight">
                <span className="sm:hidden">Pilgrims</span>
                <span className="hidden sm:inline">Satisfied Pilgrims & Travelers</span>
              </p>
            </div>
            <div className="px-0.5 sm:px-2">
              <div className="font-serif text-sm sm:text-2xl md:text-3xl font-bold text-plum leading-none mb-1">
                <AnimatedCounter end={99.4} decimals={1} duration={2000} suffix="%" />
              </div>
              <p className="text-[8px] sm:text-[11px] md:text-xs text-charcoal/60 leading-tight">
                <span className="sm:hidden">Visa Rate</span>
                <span className="hidden sm:inline">Visa Approval Track Record</span>
              </p>
            </div>
            <div className="px-0.5 sm:px-2">
              <div className="font-serif text-sm sm:text-2xl md:text-3xl font-bold text-plum leading-none mb-1">
                <AnimatedCounter end={100} duration={1800} suffix="%" />
              </div>
              <p className="text-[8px] sm:text-[11px] md:text-xs text-charcoal/60 leading-tight">
                <span className="sm:hidden">Hotels</span>
                <span className="hidden sm:inline">Confirmed Hotel Bookings</span>
              </p>
            </div>
            <div className="px-0.5 sm:px-2">
              <div className="font-serif text-sm sm:text-2xl md:text-3xl font-bold text-plum leading-none mb-1">
                <AnimatedCounter end={12} duration={1600} suffix="+" />
              </div>
              <p className="text-[8px] sm:text-[11px] md:text-xs text-charcoal/60 leading-tight">
                <span className="sm:hidden">Years Exp</span>
                <span className="hidden sm:inline">Industry Travel Excellence</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

