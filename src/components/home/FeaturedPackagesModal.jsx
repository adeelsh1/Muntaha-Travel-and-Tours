import { useState, useEffect } from 'react'
import { X, Plane, MapPin, Calendar, ArrowRight, Gift } from 'lucide-react'
import madinahImg from '../../assets/images/pkg-madinah.webp'
import iraqImg from '../../assets/images/pkg-iraq.webp'
import bakuImg from '../../assets/images/pkg-baku.webp'

/**
 * FeaturedPackagesModal Component
 * 
 * - Responsive sizing across Mobile, Tablet, and Desktop with zero scrolling.
 * - Website brand theme colors (Deep Plum #44163D, Golden Yellow #ECBC00).
 * - Floating trigger button is strictly hidden on the Hero/Header and only
 *   appears in the lower corner once scrolled into the Destinations section.
 */
export default function FeaturedPackagesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [inDestinationsView, setInDestinationsView] = useState(false)

  useEffect(() => {
    // Pre-cache package images immediately so they appear with zero lag when modal opens
    ;[madinahImg, iraqImg, bakuImg].forEach((src) => {
      const img = new Image()
      img.src = src
    })

    // Open modal 800ms after page load
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 800)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    // Scroll listener: Only show floating button when scrolled into destinations, NEVER in header/hero
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.65
      setInDestinationsView(window.scrollY > heroThreshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const packages = [
    {
      id: 'umrah',
      title: 'Economy Umrah Package',
      price: 'PKR 322,000',
      category: 'Umrah',
      duration: '21 Days . 20 Nights',
      image: madinahImg,
      alt: 'Green Dome of Masjid an-Nabawi in Madinah',
    },
    {
      id: 'iraq',
      title: 'Iraq Group Package',
      price: 'USD 1,100',
      category: 'Ziarat',
      duration: '11 Days . 10 Nights',
      image: iraqImg,
      alt: 'Golden Shrine in Karbala / Najaf, Iraq',
    },
    {
      id: 'baku',
      title: 'Baku Group Tour',
      price: 'PKR 220,000',
      category: 'Travel',
      duration: '5 Days . 4 Nights',
      image: bakuImg,
      alt: 'Baku skyline and architecture, Azerbaijan',
    },
  ]

  return (
    <>
      {/* Pop-up Modal Overlay - Allows smooth background scrolling */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 select-none animate-fade-in pointer-events-none">
          {/* Dimmed Blurred Backdrop - Clickable to close, but allows scroll */}
          <div
            className="fixed inset-0 bg-charcoal/50 backdrop-blur-[2px] transition-opacity pointer-events-auto cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container: Scaled down dynamically for Mobile (<640px), Tablet, and Desktop */}
          <div className="relative w-[92vw] max-w-[340px] sm:max-w-[420px] md:max-w-[460px] bg-warm-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 shadow-[0_20px_50px_-10px_rgba(68,22,61,0.35)] border border-soft-lavender z-10 animate-fade-in-up overflow-hidden pointer-events-auto">
            {/* Header: Package Offers + Title + Circular Close Button */}
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div>
                <div className="flex items-center gap-1.5 text-plum text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">
                  <Plane className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold fill-gold" />
                  <span>Package Offers</span>
                </div>
                <h3 className="font-serif text-base sm:text-xl md:text-2xl font-bold text-plum tracking-tight leading-none">
                  Featured Packages
                </h3>
              </div>

              {/* Circular Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-soft-lavender hover:bg-[#dfd5de] text-plum flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Close featured packages popup"
              >
                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Packages 2-Column Responsive Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5 sm:mb-3.5">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-xs border border-soft-lavender/80 hover:shadow-md hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Package Image & Price Tag */}
                  <div className="relative h-16 sm:h-20 md:h-22 w-full rounded-md sm:rounded-lg overflow-hidden bg-charcoal/5">
                    <img
                      src={pkg.image}
                      alt={pkg.alt}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Price Pill Tag in Top-Right Corner */}
                    <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5">
                      <span className="px-1.5 py-0.5 sm:px-2 rounded-full text-[8px] sm:text-[9px] md:text-[10px] font-bold bg-plum text-gold border border-gold/40 shadow-xs tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Package Info */}
                  <div className="pt-1.5 sm:pt-2 px-0.5 pb-0.5">
                    <h4 className="text-[10px] sm:text-xs md:text-[12px] font-bold text-charcoal leading-snug mb-0.5 group-hover:text-plum transition-colors line-clamp-1">
                      {pkg.title}
                    </h4>

                    {/* Location / Category */}
                    <div className="flex items-center gap-1 text-[8px] sm:text-[9px] md:text-[10px] text-plum font-medium mb-0.5">
                      <MapPin className="w-2.5 h-2.5 text-gold fill-gold shrink-0" />
                      <span>{pkg.category}</span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-1 text-[8px] sm:text-[9px] md:text-[10px] text-charcoal/60">
                      <Calendar className="w-2.5 h-2.5 text-plum/60 shrink-0" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Full-Width Action Button - Website Brand Theme */}
            <a
              href="#destinations"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-plum hover:bg-[#34112e] text-white font-semibold text-[11px] sm:text-xs md:text-sm flex items-center justify-center gap-1.5 transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer whitespace-nowrap"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-3 h-3 stroke-[2.5] text-gold" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Re-Open Button - Positioned in the Destinations Section Lower Corner, STRICTLY HIDDEN in Header */}
      {!isOpen && inDestinationsView && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-3.5 sm:bottom-6 sm:left-6 z-40 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full bg-plum/80 backdrop-blur-md sm:bg-plum text-white shadow-lg hover:shadow-2xl border border-gold/40 hover:bg-plum transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-[10px] sm:text-xs group animate-fade-in"
          aria-label="Re-open featured packages popup"
        >
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold animate-ping" />
          <Gift className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold group-hover:rotate-12 transition-transform" />
          <span className="sm:hidden font-sans font-medium tracking-wide">Packages</span>
          <span className="hidden sm:inline font-sans font-medium tracking-wide">Featured Packages</span>
          <span className="px-1.5 py-0.2 rounded-full bg-gold text-plum text-[8.5px] sm:text-[9px] font-bold">
            3
          </span>
        </button>
      )}
    </>
  )
}
