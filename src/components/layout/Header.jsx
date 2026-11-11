import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import logoDark from '../../assets/images/muntaha-logo.webp'
import logoLight from '../../assets/images/muntaha-logo-light.webp'

/**
 * Header Navigation Component
 * 
 * Features:
 * - Dual-State Scroll Responsive:
 *   1. Page Top: Seamlessly integrated over the hero with a transparent background,
 *      no floating box, white navigation text, and crisp contrast.
 *   2. Scrolled: Smoothly morphs into a floating island bar with white backdrop,
 *      rounded corners, soft shadow, and deep plum typography.
 * - Anti-flicker scroll detection using requestAnimationFrame.
 * - Fully responsive mobile drawer.
 * - Preserves the authentic Muntaha Travel & Tours logo in both dark/light contexts.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Toggle floating state when scrolling past 50px
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Run once on mount in case page loads already scrolled
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: null },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: null },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'pt-3 sm:pt-4 px-4 sm:px-6'
            : 'pt-0 px-0'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-out flex items-center justify-between gap-2 md:gap-3 lg:gap-6 ${
            isScrolled
              ? 'max-w-7xl bg-white/95 backdrop-blur-md border border-soft-lavender shadow-[0_10px_35px_-5px_rgba(68,22,61,0.08)] rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3.5'
              : 'w-full bg-transparent border-transparent shadow-none rounded-none px-4 sm:px-6 md:px-6 lg:px-12 py-4 sm:py-6'
          }`}
        >
          {/* Logo Section (Left) */}
          <div className="shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Muntaha Travel & Tours Home"
            >
              <img
                src={isScrolled ? logoDark : logoLight}
                alt="Muntaha Travel & Tours"
                className="h-8 sm:h-9 md:h-8 lg:h-10 xl:h-11 w-auto object-contain transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (Dead Center - Fluid Responsive to Prevent Overlapping on Tablet/Small Laptops) */}
          <nav
            className="hidden md:flex items-center justify-center gap-2 min-[840px]:gap-3 min-[940px]:gap-4 lg:gap-6 xl:gap-8 text-[11px] min-[840px]:text-[12px] min-[940px]:text-[13px] lg:text-sm font-light capitalize tracking-tight min-[940px]:tracking-wide"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const linkClasses = `group relative py-1 transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled
                  ? 'text-plum/80 hover:text-plum'
                  : 'text-white/90 hover:text-white'
              }`

              if (!link.href) {
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className={linkClasses}
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] rounded-full transition-all duration-300 bg-gold" />
                  </button>
                )
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={linkClasses}
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] rounded-full transition-all duration-300 bg-gold" />
                </a>
              )
            })}
          </nav>

          {/* Right Action: CTA Button (Adjusted for Tablet / Small Screen expansion) */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-planning-modal'))}
              className="px-3 min-[840px]:px-4 lg:px-6 py-1.5 min-[840px]:py-2 lg:py-2.5 rounded-full text-[10px] min-[840px]:text-[11px] lg:text-xs uppercase tracking-normal min-[940px]:tracking-wider lg:tracking-widest font-semibold bg-gold text-plum hover:bg-[#dfb100] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              Start Planning
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-plum hover:bg-soft-lavender/50'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex justify-end">
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-sm bg-warm-white h-full shadow-2xl z-50 flex flex-col justify-between p-8 border-l border-soft-lavender animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-soft-lavender">
                <img
                  src={logoDark}
                  alt="Muntaha Travel & Tours"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-plum rounded-lg hover:bg-soft-lavender/50"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-8 flex flex-col space-y-5">
                {navLinks.map((link) => {
                  const mobileClasses = `group font-serif text-2xl transition-colors text-left cursor-pointer capitalize text-charcoal/80 hover:text-plum py-0.5 inline-block`

                  if (!link.href) {
                    return (
                      <button
                        key={link.name}
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className={mobileClasses}
                      >
                        <span>{link.name}</span>
                        <span className="block w-0 group-hover:w-16 h-[2px] rounded-full transition-all duration-300 bg-gold mt-1" />
                      </button>
                    )
                  }

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={mobileClasses}
                    >
                      <span>{link.name}</span>
                      <span className="block w-0 group-hover:w-16 h-[2px] rounded-full transition-all duration-300 bg-gold mt-1" />
                    </a>
                  )
                })}
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-6 border-t border-soft-lavender">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  window.dispatchEvent(new CustomEvent('open-planning-modal'))
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 sm:py-3.5 sm:px-6 rounded-xl bg-gold text-plum font-semibold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest shadow hover:bg-[#dfb100] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-4 text-center text-xs text-charcoal/50 font-serif italic">
                Bespoke Luxury Travel Experiences
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
