import { ShieldCheck, Award } from 'lucide-react'

/**
 * PartnersTicker Component
 * 
 * Infinite auto-scrolling partner logo marquee placed directly beneath the Hero section:
 * - Runs continuously in an uninterrupted infinite loop on both Mobile and Desktop.
 * - Clean transparent background (no box).
 * - On desktop: hovering over any logo reveals its authentic brand colors and pauses scrolling;
 *   removing hover resumes scrolling immediately.
 */
export default function PartnersTicker() {
  const partners = [
    {
      id: 'iata',
      name: 'IATA',
      subtitle: 'Accredited Agent',
      renderLogo: () => (
        <svg viewBox="0 0 130 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* IATA Globe & Wing Graphic */}
          <g className="text-[#004b87]">
            <circle cx="18" cy="19" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 5,19 Q 18,10 31,19" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M 5,19 Q 18,28 31,19" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <line x1="18" y1="4" x2="18" y2="34" stroke="currentColor" strokeWidth="1.6" />
            <path d="M 6,10 L 30,28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            {/* IATA Letters */}
            <text x="40" y="25" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5">IATA</text>
            <text x="41" y="34" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" letterSpacing="1.2" opacity="0.8">ACCREDITED AGENT</text>
          </g>
        </svg>
      ),
    },
    {
      id: 'sabre',
      name: 'Sabre',
      subtitle: 'Global Travel Network',
      renderLogo: () => (
        <svg viewBox="0 0 120 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Sabre Red Hexagon Icon */}
            <polygon points="12,6 24,18 12,30 0,18" fill="#E51937" />
            <text x="32" y="24" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="21" fill="#252525" letterSpacing="-0.5">
              Sabre<tspan fill="#E51937" fontSize="12" dy="-8">®</tspan>
            </text>
            <text x="33" y="33" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="6.5" fill="#71717a" letterSpacing="1">
              GDS NETWORK
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'saudia',
      name: 'Saudia',
      subtitle: 'Official Flag Carrier',
      renderLogo: () => (
        <svg viewBox="0 0 125 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Saudia Emblem (Green Palm & Crossed Swords) */}
            <circle cx="16" cy="18" r="14" fill="#006A4E" />
            <path d="M12,23 L20,13 M20,23 L12,13" stroke="#ECBC00" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16,10 L16,17" stroke="#ECBC00" strokeWidth="1.8" strokeLinecap="round" />
            <text x="36" y="24" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="18" fill="#006A4E" letterSpacing="1">
              SAUDIA
            </text>
            <text x="37" y="32" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="6" fill="#71717a" letterSpacing="0.8">
              SAUDI ARABIAN AIRLINES
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'emirates',
      name: 'Emirates',
      subtitle: 'Premier Partner',
      renderLogo: () => (
        <svg viewBox="0 0 150 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Emirates Iconic Red Crest Badge */}
            <rect x="0" y="3" width="30" height="30" rx="6" fill="#D71921" />
            <text x="15" y="23" fontFamily="'Playfair Display', serif" fontWeight="900" fontSize="15" fill="#ffffff" textAnchor="middle">
              EK
            </text>
            {/* Complete Emirates Typography (Full width without clipping) */}
            <text x="38" y="23" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="19" fill="#D71921" letterSpacing="0.4">
              Emirates
            </text>
            <text x="39" y="32" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="6.5" fill="#71717a" letterSpacing="1.2">
              FLY BETTER
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'amadeus',
      name: 'Amadeus',
      subtitle: 'Travel Technology',
      renderLogo: () => (
        <svg viewBox="0 0 125 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Amadeus Tech Dot Ring */}
            <circle cx="16" cy="18" r="5" fill="#005EB8" />
            <circle cx="16" cy="9" r="2.5" fill="#005EB8" opacity="0.6" />
            <circle cx="23" cy="13" r="2.5" fill="#005EB8" opacity="0.8" />
            <circle cx="23" cy="23" r="2.5" fill="#005EB8" opacity="0.8" />
            <circle cx="9" cy="13" r="2.5" fill="#005EB8" opacity="0.6" />
            <circle cx="9" cy="23" r="2.5" fill="#005EB8" opacity="0.6" />
            <text x="36" y="23" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="17" fill="#005EB8" letterSpacing="0.5">
              amadeus
            </text>
            <text x="37" y="31" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="6" fill="#71717a" letterSpacing="0.8">
              TRAVEL PLATFORM
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'qatar',
      name: 'Qatar Airways',
      subtitle: 'World 5-Star Airline',
      renderLogo: () => (
        <svg viewBox="0 0 135 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Qatar Oryx Circle */}
            <circle cx="16" cy="18" r="13" fill="#5C0632" />
            {/* Stylized Oryx Horns */}
            <path d="M12,23 Q15,14 18,9 M16,23 Q19,14 21,9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <text x="36" y="20" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="15" fill="#5C0632" letterSpacing="0.5">
              QATAR
            </text>
            <text x="36" y="30" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="8" fill="#5C0632" letterSpacing="1.5">
              AIRWAYS
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'turkish',
      name: 'Turkish Airlines',
      subtitle: 'Global Network',
      renderLogo: () => (
        <svg viewBox="0 0 140 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="16" cy="18" r="14" fill="#C8102E" />
            {/* Flying Goose Silhouette */}
            <path d="M10,19 C14,14 18,12 24,11 C20,15 17,17 14,23 Z" fill="#ffffff" />
            <text x="36" y="20" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="13" fill="#1e293b" letterSpacing="0.5">
              TURKISH
            </text>
            <text x="36" y="30" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="10" fill="#C8102E" letterSpacing="1">
              AIRLINES
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'pia',
      name: 'PIA',
      subtitle: 'National Carrier',
      renderLogo: () => (
        <svg viewBox="0 0 120 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect x="2" y="4" width="28" height="28" rx="6" fill="#005A36" />
            <path d="M16,10 A6,6 0 1 0 22,19 A4.5,4.5 0 1 1 16,10 Z" fill="#ECBC00" />
            <polygon points="21,12 22,14 24,14 22.5,15.5 23,17.5 21,16 19,17.5 19.5,15.5 18,14 20,14" fill="#ECBC00" />
            <text x="36" y="24" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="21" fill="#005A36" letterSpacing="1.5">
              PIA
            </text>
            <text x="37" y="32" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="5.5" fill="#71717a" letterSpacing="0.8">
              GREAT PEOPLE TO FLY WITH
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'nusuk',
      name: 'Nusuk',
      subtitle: 'Ministry of Hajj & Umrah',
      renderLogo: () => (
        <svg viewBox="0 0 130 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect x="2" y="4" width="28" height="28" rx="6" fill="#44163D" />
            <path d="M16,8 L24,14 L24,25 L8,25 L8,14 Z" fill="none" stroke="#ECBC00" strokeWidth="1.8" />
            <path d="M13,25 L13,18 Q16,15 19,18 L19,25" fill="#ECBC00" />
            <text x="36" y="22" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="17" fill="#44163D" letterSpacing="1">
              NUSUK
            </text>
            <text x="37" y="31" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="5.5" fill="#71717a" letterSpacing="0.6">
              KSA UMRAH PLATFORM
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'taap',
      name: 'TAAP',
      subtitle: 'Travel Agents Association',
      renderLogo: () => (
        <svg viewBox="0 0 120 36" className="h-7 sm:h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="16" cy="18" r="14" fill="#1e3a5f" />
            <path d="M6,18 L26,18 M16,6 L22,18 L16,28" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <text x="36" y="23" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="18" fill="#1e3a5f" letterSpacing="1">
              TAAP
            </text>
            <text x="37" y="31" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="5.5" fill="#71717a" letterSpacing="0.5">
              TOURIST SERVICES (DTS)
            </text>
          </g>
        </svg>
      ),
    },
  ]

  // Duplicated list for seamless infinite loop
  const marqueeItems = [...partners, ...partners]

  return (
    <section className="relative bg-[#FAF7F2] border-y border-soft-lavender py-4 sm:py-6 overflow-hidden select-none">
      {/* Top Subtle Eyebrow */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-2.5 sm:mb-4">
        <div className="inline-flex items-center gap-2">
          <span className="w-4 h-[1px] bg-gold" />
          <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.22em] font-sans font-semibold text-charcoal/70">
            Official Accreditations & Trusted Global Airlines
          </span>
          <span className="w-4 h-[1px] bg-gold" />
        </div>
      </div>

      {/* Marquee Track Container with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Edge Mask (Blending with #FAF7F2 background) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 md:w-36 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20" />

        {/* Right Gradient Edge Mask (Blending with #FAF7F2 background) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 md:w-36 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20" />

        {/* Continuous Marquee Track (Unified for Mobile & Desktop) */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-12 md:gap-16 py-1.5">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center shrink-0 px-2 sm:px-2.5 py-1 transition-all duration-300 grayscale opacity-55 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer"
              title={`${partner.name} - ${partner.subtitle}`}
            >
              {partner.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

