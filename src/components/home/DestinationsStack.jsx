
import { MapPin, ArrowRight } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from '../common/ScrollStack'
import ScrollReveal from '../common/ScrollReveal'
import saudiaImg from '../../assets/images/dest-saudia.webp'
import azerbaijanImg from '../../assets/images/dest-baku.webp'
import thailandImg from '../../assets/images/dest-thailand.webp'
import malaysiaImg from '../../assets/images/dest-malaysia.webp'
import cambodiaImg from '../../assets/images/dest-cambodia.webp'

/**
 * DestinationsStack Component
 * 
 * Showcases Muntaha Travel & Tours' Top Destinations:
 * - Left side: High-resolution picture (prominent 7 cols on md/lg).
 * - Right side: Refined compact copywriting (5 cols on md/lg).
 * - Exact copywriting and updated imagery provided for Saudia, Azerbaijan, and Cambodia.
 * - Interactive "Inquire Now" button triggers the Start Planning form.
 */
export default function DestinationsStack() {
  const collections = [
    {
      id: 'saudia',
      title: 'Saudi Arabia',
      region: 'Makkah & Madinah',
      tag: 'Sacred Spiritual Journey',
      description:
        'Experience a peaceful spiritual journey to the holy cities of Makkah and Madinah.',
      highlights: ['Hajj & Umrah', 'Hotel Accommodation', 'Ziyarat & Travel Assistance'],
      image: saudiaImg,
      alt: 'Grand holy sanctuary of Masjid al-Haram and Kaaba in Makkah, Saudi Arabia',
    },
    {
      id: 'azerbaijan',
      title: 'Azerbaijan',
      region: 'Baku & Gabala',
      tag: 'Caspian Heritage & Nature',
      description:
        "Explore Azerbaijan's beautiful cities, amazing landscapes and rich culture.",
      highlights: ['City Tours', 'Mountain Attractions', 'Cultural Experiences'],
      image: azerbaijanImg,
      alt: 'Baku skyline, Caspian sea promenade, and iconic Flame Towers in Azerbaijan',
    },
    {
      id: 'thailand',
      title: 'Thailand',
      region: 'Bangkok & Phuket',
      tag: 'Tropical Beaches & Islands',
      description:
        'Enjoy beautiful beaches, exciting attractions and unforgettable holiday experiences in Thailand.',
      highlights: ['Beach Destinations', 'City Tours', 'Island Adventures'],
      image: thailandImg,
      alt: 'Picturesque limestone cliffs and turquoise waters in Phuket, Thailand',
    },
    {
      id: 'malaysia',
      title: 'Malaysia',
      region: 'Kuala Lumpur & Langkawi',
      tag: 'Modern Cities & Islands',
      description:
        "Discover Malaysia's modern cities, beautiful islands and exciting tourist attractions.",
      highlights: ['City Sightseeing', 'Island Tours', 'Family Holidays'],
      image: malaysiaImg,
      alt: 'Kuala Lumpur city skyline with iconic Petronas Twin Towers in Malaysia',
    },
    {
      id: 'cambodia',
      title: 'Cambodia',
      region: 'Siem Reap & Angkor',
      tag: 'Historic Temples & Culture',
      description:
        "Discover Cambodia's historic temples, beautiful architecture and unique culture.",
      highlights: ['Historical Places', 'Cultural Tours', 'Sightseeing'],
      image: cambodiaImg,
      alt: 'Majestic ancient sunrise reflection of Angkor Wat in Siem Reap, Cambodia',
    },
  ]

  return (
    <section id="destinations" className="relative bg-warm-white py-10 sm:py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 sm:w-6 h-[1px] bg-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold">
              Top Destinations
            </span>
            <span className="w-5 sm:w-6 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-plum leading-tight mb-2 sm:mb-3">
            Explore Our Top Destinations
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-charcoal/75 font-light leading-relaxed max-w-xl mx-auto">
            Discover beautiful destinations around the world and plan your next memorable trip with Muntaha Travel & Tours.
          </p>
        </ScrollReveal>

        {/* ScrollStack Container */}
        <ScrollStack
          useWindowScroll={true}
          stackPosition="80px"
          itemDistance={85}
          itemStackDistance={14}
          itemScale={0.025}
          baseScale={0.94}
          dimAmount={0.1}
          holdDistance={160}
          smoothScroll={false}
          className="w-full"
        >
          {collections.map((item) => (
            <ScrollStackItem key={item.id} itemClassName="!p-0">
              <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full bg-white overflow-hidden">
                {/* Image: On Left side (Bigger: 7 cols out of 12) on md/lg, on top for mobile */}
                <div className="relative h-28 min-[380px]:h-32 sm:h-40 md:h-full md:col-span-7 overflow-hidden bg-charcoal/10 shrink-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent md:hidden" />
                </div>

                {/* Content Column: Compact & Responsive on Mobile */}
                <div className="p-3 min-[380px]:p-3.5 sm:p-5 md:p-6 md:col-span-5 flex flex-col justify-between flex-1 overflow-hidden">
                  <div>
                    {/* Top Region & Tag (Small & Elegant) */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1 sm:mb-2">
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[7px] sm:text-[8px] md:text-[9px] uppercase font-semibold bg-soft-lavender text-plum tracking-tight">
                        {item.tag}
                      </span>
                      <div className="flex items-center gap-1 text-[8px] sm:text-[9px] md:text-[10px] text-charcoal/60 font-medium">
                        <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold shrink-0" />
                        <span className="truncate max-w-[130px] sm:max-w-none">{item.region}</span>
                      </div>
                    </div>

                    {/* Card Title (Country Name) */}
                    <h3 className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-plum font-semibold mb-0.5 sm:mb-1.5 leading-snug line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="font-sans text-[9.5px] min-[380px]:text-[10px] sm:text-[11px] md:text-xs text-charcoal/70 font-light leading-relaxed mb-1.5 sm:mb-3 line-clamp-2 md:line-clamp-3">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1 mb-2 sm:mb-3">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-1.5 text-[8.5px] min-[380px]:text-[9px] sm:text-[10px] md:text-[11px] text-charcoal/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span className="line-clamp-1 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link: Inquire Now Button - Perfectly sized for mobile and desktop */}
                  <div className="pt-2 sm:pt-2.5 border-t border-soft-lavender flex items-center justify-between shrink-0">
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new CustomEvent('open-planning-modal'))}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 min-[380px]:px-3 py-1.5 sm:px-3.5 rounded-md sm:rounded-lg bg-plum hover:bg-[#34112e] text-white hover:text-gold text-[9px] min-[380px]:text-[10px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group whitespace-nowrap shrink-0"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[8px] min-[380px]:text-[9px] sm:text-[10px] font-serif italic text-charcoal/50">
                      Bespoke Package
                    </span>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* Explore All Destinations Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-9 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-plum hover:bg-[#34112e] text-white font-semibold text-[11px] sm:text-sm uppercase tracking-wide sm:tracking-widest border border-gold/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer whitespace-nowrap"
          >
            <span>Explore All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-2 text-[10px] sm:text-xs text-charcoal/50 font-serif italic">
            Discover our full portfolio of worldwide spiritual and international journeys
          </p>
        </div>
      </div>
    </section>
  )
}
