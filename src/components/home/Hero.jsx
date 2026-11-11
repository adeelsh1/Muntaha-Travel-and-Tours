import { ArrowRight, ChevronDown } from 'lucide-react'
import heroBg from '../../assets/images/hero-bg.webp'

/**
 * Hero Section Component
 * 
 * Optimized for Mobile, Tablet, and Desktop screens:
 * - Uses 100dvh so mobile browser address bars never cause overflow.
 * - Perfectly scaled typography across all breakpoints (iPhone SE to 4K desktop).
 * - Guaranteed single-glance viewport fit without requiring any scroll.
 */
export default function Hero() {
  const scrollToExplore = () => {
    const nextSection = document.getElementById('explore')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative h-[100dvh] min-h-[520px] max-h-[1080px] w-full flex items-center justify-center overflow-hidden bg-charcoal select-none"
    >
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover object-center scale-105 pointer-events-none"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <img
            src={heroBg}
            alt="Airplane flying over clouds at sunset"
            className="w-full h-full object-cover object-center"
          />
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-plum/35 to-[#150714]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-transparent to-charcoal/90" />
      </div>

      {/* Main Center-Aligned Editorial Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-12 sm:pb-16 flex flex-col items-center justify-center text-center">
        {/* Eyebrow Label */}
        <div className="animate-fade-in-down inline-flex items-center gap-2 mb-2 sm:mb-4">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-80" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-gold" />
          </span>
          <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-sans font-medium text-white/90">
            Muntaha Travel & Tours
          </span>
        </div>

        {/* Primary Editorial Heading - Responsive for Mobile, Tablet & Desktop */}
        <h1 className="animate-fade-in-up font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-normal text-white tracking-tight leading-[1.12] mb-2 sm:mb-3.5 drop-shadow-md">
          Discover the World <br />
          <span className="italic font-normal text-gold">
            Beyond the Map
          </span>
        </h1>

        {/* Luxury Subtitle - Responsive Sizing */}
        <p className="animate-fade-in font-sans text-[11px] sm:text-xs md:text-[14px] text-white/80 font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-4 sm:mb-6 drop-shadow">
          Plan unforgettable journeys with ease. From hidden gems to iconic destinations,
          we help you travel smarter, deeper, and better — every step of the way.
        </p>

        {/* Action Buttons - Mobile, Tablet & Desktop responsive */}
        <div className="animate-fade-in flex flex-row items-center justify-center gap-2 sm:gap-3.5 w-full max-w-sm sm:max-w-none mx-auto px-2">
          {/* Primary Action Button */}
          <a
            href="#destinations"
            className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 min-[380px]:px-3 sm:px-6 py-1.5 min-[380px]:py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gold text-plum font-semibold text-[9px] min-[380px]:text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-[#dfb100] transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
          </a>

          {/* Secondary Action Button */}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-planning-modal'))}
            className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 min-[380px]:px-3 sm:px-6 py-1.5 min-[380px]:py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-medium text-[9px] min-[380px]:text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Start Planning</span>
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator - Responsive Placement */}
      <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToExplore}
          className="group flex flex-col items-center gap-0.5 sm:gap-1 text-white/70 hover:text-white transition-colors focus:outline-none cursor-pointer"
          aria-label="Scroll down to explore"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-white/80">
            Scroll to Explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-gold transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  )
}
