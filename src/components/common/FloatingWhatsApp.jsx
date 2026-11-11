import { useState, useEffect } from 'react'

/**
 * FloatingWhatsApp Component
 * Floating WhatsApp button with ambient glowing "blushing" pulse animation:
 * - Pinned to bottom-right of viewport.
 * - Gentle pulsing aura / blushing radar waves.
 * - Direct click opens official WhatsApp concierge for +92 321 2844433.
 */
export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show welcoming tooltip after 2.5s
    const timer = setTimeout(() => setShowTooltip(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <aside
      aria-label="Contact Concierge"
      className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 flex items-center gap-2.5 select-none pointer-events-auto"
    >
      {/* Subtle Greeting Pill / Tooltip */}
      {showTooltip && (
        <a
          href="https://wa.me/923212844433?text=Salam%20Muntaha%20Travel!%20I%20would%20like%20to%20inquire%20about%20travel%20packages."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-plum text-xs font-semibold shadow-lg border border-soft-lavender hover:border-gold transition-all duration-300 animate-fade-in group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Need help? Chat with us</span>
        </a>
      )}

      {/* Floating Button with Blushing Radar Pulse */}
      <div className="relative flex items-center justify-center">
        {/* Blushing Glowing Rings */}
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" />
        <span className="absolute -inset-3.5 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        {/* Action Anchor */}
        <a
          href="https://wa.me/923212844433?text=Salam%20Muntaha%20Travel!%20I%20would%20like%20to%20inquire%20about%20travel%20packages."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Concierge"
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          {/* WhatsApp Crisp Vector */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-xs"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </aside>
  )
}

