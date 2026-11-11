import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, ArrowLeft, Filter, Sparkles } from 'lucide-react'
import saudiaImg from '../../assets/images/dest-saudia.webp'
import bakuImg from '../../assets/images/dest-baku.webp'
import thailandImg from '../../assets/images/dest-thailand.webp'
import malaysiaImg from '../../assets/images/dest-malaysia.webp'
import cambodiaImg from '../../assets/images/dest-cambodia.webp'
import iraqImg from '../../assets/images/pkg-iraq.webp'
import alpsImg from '../../assets/images/dest-alps.webp'
import amalfiImg from '../../assets/images/dest-amalfi.webp'

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'spiritual', label: 'Umrah & Ziarat' },
    { id: 'asia', label: 'Southeast Asia' },
    { id: 'middle-east', label: 'Silk Road & Arabia' },
    { id: 'europe', label: 'European Sanctuaries' },
  ]

  const allDestinations = [
    {
      id: 'saudia',
      category: 'spiritual',
      title: 'Saudia — Makkah & Madinah',
      location: 'Hejaz, Saudi Arabia',
      tag: 'Sacred Umrah Journey',
      description: 'Haram-facing 5-star suites, private luxury transfers, and curated ziyarat excursions in the holy cities.',
      image: saudiaImg,
      duration: '15 - 21 Days',
    },
    {
      id: 'iraq',
      category: 'spiritual',
      title: 'Iraq — Karbala & Najaf',
      location: 'Karbala, Najaf & Baghdad',
      tag: 'Spiritual Ziarat Group',
      description: 'Dedicated spiritual scholars, VIP escorted ziyarat, and 5-star hotel accommodations near holy shrines.',
      image: iraqImg,
      duration: '11 Days . 10 Nights',
    },
    {
      id: 'azerbaijan',
      category: 'middle-east',
      title: 'Azerbaijan — Baku & Gabala',
      location: 'Caspian Sea & Caucasus',
      tag: 'City & Mountain Tour',
      description: 'Futuristic Flame Towers, UNESCO Old City, Gabala cable cars, and scenic lake tours.',
      image: bakuImg,
      duration: '5 - 7 Days',
    },
    {
      id: 'thailand',
      category: 'asia',
      title: 'Thailand — Bangkok & Phuket',
      location: 'Bangkok, Phuket & Islands',
      tag: 'Tropical Island Escape',
      description: 'Grand Palace temples, floating markets, private island speedboat tours, and beachfront luxury villas.',
      image: thailandImg,
      duration: '7 - 10 Days',
    },
    {
      id: 'malaysia',
      category: 'asia',
      title: 'Malaysia — Kuala Lumpur & Langkawi',
      location: 'Kuala Lumpur & Langkawi Island',
      tag: 'City Skyline & Beach Resort',
      description: 'Iconic Petronas Towers penthouse stays, Langkawi private island yachting, and cable car rainforest tours.',
      image: malaysiaImg,
      duration: '6 - 8 Days',
    },
    {
      id: 'cambodia',
      category: 'asia',
      title: 'Cambodia — Siem Reap & Angkor',
      location: 'Siem Reap & Angkor Wat',
      tag: 'Ancient Heritage Discovery',
      description: 'Private archaeologist-guided sunrise tour at Angkor Wat, boutique colonial sanctuaries, and Tonle Sap lake.',
      image: cambodiaImg,
      duration: '5 - 7 Days',
    },
    {
      id: 'alps',
      category: 'europe',
      title: 'Switzerland — St. Moritz & Zermatt',
      location: 'Swiss Alps, Switzerland',
      tag: 'Alpine Luxury Chalet',
      description: 'Private helicopter transfers, fireside Michelin dining, and ski-in / ski-out luxury chalets in the Engadin.',
      image: alpsImg,
      duration: '7 - 9 Days',
    },
    {
      id: 'amalfi',
      category: 'europe',
      title: 'Italy — Amalfi Coast & Capri',
      location: 'Amalfi, Positano & Capri',
      tag: 'Mediterranean Yachting',
      description: 'Clifftop villa sanctuaries, private Riva yacht charters to secluded grottos, and vintage wine tastings.',
      image: amalfiImg,
      duration: '8 - 10 Days',
    },
  ]

  const filtered =
    activeCategory === 'all'
      ? allDestinations
      : allDestinations.filter((d) => d.category === activeCategory)

  return (
    <div className="w-full bg-warm-white text-charcoal pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-plum hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold">
              Global Portfolio
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-plum leading-tight mb-4">
            Explore All Destinations
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal/75 font-light leading-relaxed">
            Discover our complete collection of spiritual pilgrimages, Silk Road cultural journeys,
            and tropical luxury escapes handcrafted for the discerning traveler.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-soft-lavender mb-12">
          <span className="text-xs text-charcoal/50 uppercase tracking-wider font-semibold mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-gold" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-plum text-white shadow-sm'
                  : 'bg-white text-charcoal/70 hover:bg-soft-lavender/60 hover:text-plum border border-soft-lavender'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-soft-lavender shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md text-plum shadow-sm">
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-plum/90 text-gold backdrop-blur-md">
                      {dest.duration}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal/60 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{dest.location}</span>
                  </div>
                  <h3 className="font-serif text-xl text-plum font-semibold mb-2 group-hover:text-gold transition-colors">
                    {dest.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2 border-t border-soft-lavender/60 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-plum hover:text-gold transition-colors"
                >
                  <span>Inquire Sanctuary</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

