import { useState, useEffect } from 'react'
import { X, Send, Phone, User, Calendar, Users, MapPin, CheckCircle } from 'lucide-react'

/**
 * StartPlanningModal Component
 * 
 * Minimal luxury inquiry form triggered by "Start Planning" buttons:
 * - Fluid responsive sizing: compact & proportional on mobile (<640px), full on desktop.
 * - Fits cleanly within viewport without awkward overflowing.
 * - Submits directly to WhatsApp (+923212844433).
 */
export default function StartPlanningModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    destination: 'Saudia (Umrah)',
    travelMonth: '',
    travelers: '2 Adults',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
      setSubmitted(false)
    }

    window.addEventListener('open-planning-modal', handleOpen)
    return () => window.removeEventListener('open-planning-modal', handleOpen)
  }, [])

  const destinationsList = [
    'Saudia (Umrah & Ziyarat)',
    'Azerbaijan (Baku & Gabala)',
    'Thailand (Bangkok & Phuket)',
    'Malaysia (Kuala Lumpur)',
    'Cambodia (Siem Reap)',
    'Custom Worldwide Tour',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct WhatsApp message
    const msg = `Salam Muntaha Travel! I would like to plan a trip:%0A%0A*Name:* ${encodeURIComponent(formData.fullName || 'Traveler')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*Destination:* ${encodeURIComponent(formData.destination)}%0A*Travel Month:* ${encodeURIComponent(formData.travelMonth || 'Flexible')}%0A*Travelers:* ${encodeURIComponent(formData.travelers)}`
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/923212844433?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-charcoal/70 backdrop-blur-xs animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[335px] min-[390px]:max-w-[365px] sm:max-w-md bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-soft-lavender p-4 sm:p-7 max-h-[92vh] overflow-y-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-soft-lavender/60 hover:bg-soft-lavender text-charcoal flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Form Header */}
            <div className="text-center mb-3 sm:mb-5">
              <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-plum">
                Start Planning
              </h3>
              <p className="font-sans text-[10px] min-[380px]:text-[11px] sm:text-xs text-charcoal/70 font-light mt-0.5 sm:mt-1 max-w-xs mx-auto leading-snug">
                Tell us your travel vision and our specialists will curate a tailored itinerary for you.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-[9.5px] sm:text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider mb-0.5 sm:mb-1 font-sans">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal/40" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-gold focus:outline-none text-[11px] sm:text-sm text-charcoal transition-all"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-[9.5px] sm:text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider mb-0.5 sm:mb-1 font-sans">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal/40" />
                  <input
                    type="tel"
                    required
                    placeholder="+92 321 2844433"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-gold focus:outline-none text-[11px] sm:text-sm text-charcoal transition-all"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-[9.5px] sm:text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider mb-0.5 sm:mb-1 font-sans">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal/40 pointer-events-none" />
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-gold focus:outline-none text-[11px] sm:text-sm text-charcoal transition-all cursor-pointer"
                  >
                    {destinationsList.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 2-Column: Travel Date & Travelers */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[9.5px] sm:text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider mb-0.5 sm:mb-1 font-sans">
                    Travel Month
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 text-charcoal/40" />
                    <input
                      type="text"
                      placeholder="e.g. Dec 2026"
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full pl-6 sm:pl-8 pr-2 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-gold focus:outline-none text-[10.5px] sm:text-xs text-charcoal transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9.5px] sm:text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider mb-0.5 sm:mb-1 font-sans">
                    Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 text-charcoal/40" />
                    <input
                      type="text"
                      placeholder="e.g. 2 Adults"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full pl-6 sm:pl-8 pr-2 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-gold focus:outline-none text-[10.5px] sm:text-xs text-charcoal transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-1.5 sm:pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3.5 px-3 rounded-lg sm:rounded-xl bg-plum hover:bg-[#34112e] text-white font-semibold text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 border border-gold/40 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold" />
                  <span>Send Travel Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="text-center py-4 sm:py-6">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.2]" />
            </div>
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-plum mb-1.5 sm:mb-2">
              Request Sent!
            </h3>
            <p className="font-sans text-[11px] sm:text-sm text-charcoal/75 font-light max-w-xs mx-auto mb-4 sm:mb-5">
              Thank you, {formData.fullName || 'Traveler'}. Our trip designer will connect with you on WhatsApp shortly.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-plum text-white text-[10px] sm:text-xs uppercase tracking-wider font-semibold border border-gold/40 cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
