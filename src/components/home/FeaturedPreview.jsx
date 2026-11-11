import { useState, useEffect } from 'react'
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, MapPin } from 'lucide-react'
import alpsImg from '../../assets/images/dest-alps.webp'
import amalfiImg from '../../assets/images/dest-amalfi.webp'
import desertImg from '../../assets/images/dest-desert.webp'

export default function FeaturedPreview() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(Math.round(window.scrollY))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const destinations = [
    {
      title: 'Engadin Alpine Sanctuary',
      location: 'St. Moritz, Switzerland',
      tag: 'Winter & Autumn Haven',
      image: alpsImg,
    },
    {
      title: 'Cliffside Coastal Estates',
      location: 'Amalfi Coast, Italy',
      tag: 'Mediterranean Serenity',
      image: amalfiImg,
    },
    {
      title: 'Oasis of the Ancients',
      location: 'AlUla, Saudi Arabia',
      tag: 'Desert Heritage & Luxury',
      image: desertImg,
    },
  ]

  const pillars = [
    {
      icon: Compass,
      title: 'Curated Itineraries',
      desc: 'Bespoke travel routes designed specifically around your personal passions and timing.',
    },
    {
      icon: ShieldCheck,
      title: 'Private Aviation & Charters',
      desc: 'Discreet door-to-destination transport, private aviation transfers, and yacht charters.',
    },
    {
      icon: Sparkles,
      title: 'Dedicated 24/7 Concierge',
      desc: 'A seamless journey where every reservation, transport, and detail is handled with elegance.',
    },
  ]

  return (
    <section id="explore" className="relative bg-warm-white py-24 sm:py-32 text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Interactive Scroll State Inspector Pill */}
        <div className="mb-16 p-4 rounded-2xl bg-white border border-soft-lavender shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`w-3 h-3 rounded-full transition-colors ${
                scrollY > 50 ? 'bg-gold animate-pulse' : 'bg-plum'
              }`}
            />
            <span className="text-xs uppercase tracking-widest font-semibold text-plum">
              Scroll Diagnostic:
            </span>
            <span className="text-xs text-charcoal/70">
              Current Scroll Y: <strong className="font-mono text-plum">{scrollY}px</strong>
            </span>
          </div>

          <div className="text-xs tracking-wide">
            Navbar Mode:{' '}
            <span
              className={`px-3 py-1 rounded-full font-medium ${
                scrollY > 50
                  ? 'bg-plum text-white'
                  : 'bg-soft-lavender text-plum'
              }`}
            >
              {scrollY > 50
                ? 'Floating Luxury Bar (Scrolled State)'
                : 'Transparent Integrated (Page Top)'}
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div id="destinations" className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold">
              Curated Escapes
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-plum leading-tight">
            Handcrafted for the Discerning Traveler
          </h2>
          <p className="mt-4 text-sm sm:text-base text-charcoal/75 font-light leading-relaxed">
            Every Muntaha expedition is a private journey created without compromise.
            Discover a selection of our most revered seasonal sanctuaries.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.title}
              className="group relative bg-white rounded-2xl overflow-hidden border border-soft-lavender shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal/10">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md text-plum shadow-sm">
                    {dest.tag}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-white/80 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{dest.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                    {dest.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Interaction */}
              <div className="p-5 flex items-center justify-between border-t border-soft-lavender bg-white group-hover:bg-warm-white transition-colors">
                <span className="text-xs uppercase tracking-widest font-semibold text-plum">
                  Explore Sanctuary
                </span>
                <div className="w-8 h-8 rounded-full bg-soft-lavender/60 flex items-center justify-center text-plum group-hover:bg-gold group-hover:text-plum transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars of Service */}
        <div id="experiences" className="mt-28 pt-20 border-t border-soft-lavender">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold block mb-2">
              The Muntaha Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum">
              Bespoke In Every Dimension
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-white border border-soft-lavender/80 shadow-sm hover:border-gold/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-soft-lavender/50 text-plum flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl text-plum mb-3 font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

