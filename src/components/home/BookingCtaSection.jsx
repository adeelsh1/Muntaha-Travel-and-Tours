import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle, Clock, ShieldCheck, ChevronDown, ExternalLink } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'

/**
 * BookingCtaSection Component
 * 
 * Luxury Call-To-Action section featuring:
 * - Left: Editorial CTA heading, direct 24/7 hotline numbers, Islamabad office, and trust commitments.
 * - Right: Crisp minimal consultation form branded with the website's plum & gold palette.
 * - Bottom: Full embedded Google Map pinned to Main PWD Double Road, Islamabad.
 */
export default function BookingCtaSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    visaType: 'Tourist & Visit Visas',
    country: 'UK',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const fullName = `${formData.firstName} ${formData.lastName}`.trim() || 'Traveler'
    const waText = `Salam Muntaha Travel!%0A%0A*Free Consultation Request:*%0A• *Name:* ${encodeURIComponent(fullName)}%0A• *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A• *Phone/WhatsApp:* ${encodeURIComponent(formData.phone || 'N/A')}%0A• *Visa Type:* ${encodeURIComponent(formData.visaType)}%0A• *Country:* ${encodeURIComponent(formData.country)}%0A• *Message:* ${encodeURIComponent(formData.message || 'Consultation request.')}`

    // Open WhatsApp in new tab
    window.open(`https://wa.me/923212844433?text=${waText}`, '_blank')
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-gradient-to-br from-[#381132] via-[#240820] to-[#150414] py-10 sm:py-14 md:py-18 text-white overflow-hidden select-none border-t border-gold/20">
      {/* Background Ambient Glows & Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-plum/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Top Two-Column Grid: Editorial Left + Minimal Branded Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Direct Hotline & Office Info */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 sm:w-6 h-[1px] bg-gold" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold">
                  Start Your Journey
                </span>
                <span className="w-5 sm:w-6 h-[1px] bg-gold" />
              </div>

              {/* Main Section Heading on Left */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-3">
                Reach Out Directly
              </h2>

              <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-xl">
                Have questions about visa categories, refusal reviews, or documentation? Our senior counselors are here to assist.
              </p>
            </ScrollReveal>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <a
                href="https://wa.me/923212844433"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 transition-all flex items-center gap-3.5 group backdrop-blur-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-gold font-sans tracking-wider">
                    WhatsApp Hotline
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white font-sans">
                    +92 321 2844433
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@muntahatravelandtours.com"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 transition-all flex items-center gap-3.5 group backdrop-blur-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-gold font-sans tracking-wider">
                    Official Email
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white font-sans truncate max-w-[170px]" title="info@muntahatravelandtours.com">
                    info@muntahatravelandtours.com
                  </div>
                </div>
              </a>
            </div>

            {/* Address & Office */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-gold font-sans tracking-wider">
                  Islamabad Office
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed mt-0.5">
                  Office No. 4, First Floor, Friends Gold Arcade, Main PWD Rd, Islamabad, Pakistan 45710
                </p>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-white/70">
              <div className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Response within 2 hours</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>Govt. Licensed & IATA Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form Matched to Website Brand Palette */}
          <div className="lg:col-span-6">
            <div className="relative bg-white text-charcoal rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] border border-gold/30">
              {!isSubmitted ? (
                <div>
                  {/* Form Header */}
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum tracking-tight">
                      Book a Free Consultation
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-1.5 leading-relaxed">
                      Fill in your details and an advisor will confirm your appointment within 2 business hours.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First & Last Name Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-plum tracking-wide uppercase mb-1.5 font-sans">
                          FIRST NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-plum focus:ring-1 focus:ring-plum focus:outline-none text-xs sm:text-sm text-charcoal placeholder-charcoal/40 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-plum tracking-wide uppercase mb-1.5 font-sans">
                          LAST NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-plum focus:ring-1 focus:ring-plum focus:outline-none text-xs sm:text-sm text-charcoal placeholder-charcoal/40 transition"
                        />
                      </div>
                    </div>

                    {/* Email & Phone / WhatsApp Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-plum tracking-wide uppercase mb-1.5 font-sans">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-plum focus:ring-1 focus:ring-plum focus:outline-none text-xs sm:text-sm text-charcoal placeholder-charcoal/40 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-plum tracking-wide uppercase mb-1.5 font-sans">
                          PHONE / WHATSAPP NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+92 321 2844433"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-plum focus:ring-1 focus:ring-plum focus:outline-none text-xs sm:text-sm text-charcoal placeholder-charcoal/40 transition"
                        />
                      </div>
                    </div>

                    {/* Visa Type & Country Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-plum tracking-wide uppercase mb-1.5 font-sans">
                          VISA TYPE *
                        </label>
                        <div className="relative">
                          <select
                            value={formData.visaType}
                            onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                            className="w-full px-4 py-3 pr-10 rounded-xl border-2 border-plum bg-warm-white/30 focus:outline-none text-xs sm:text-sm text-plum font-semibold appearance-none cursor-pointer"
                          >
                            <option value="Tourist & Visit Visas">Tourist & Visit Visas</option>
                            <option value="Umrah & Hajj Pilgrimage Visas">Umrah & Hajj Pilgrimage Visas</option>
                            <option value="Holiday & Tour Packages">Holiday & Tour Packages</option>
                            <option value="Air Ticketing Only">Air Ticketing Only</option>
                            <option value="5-Star Luxury Hotels">5-Star Luxury Hotels</option>
                            <option value="Work & Business Visas">Work & Business Visas</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-plum pointer-events-none stroke-[2.2]" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-plum tracking-wide uppercase mb-1.5 font-sans">
                          COUNTRY *
                        </label>
                        <div className="relative">
                          <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full px-4 py-3 pr-10 rounded-xl border border-soft-lavender bg-white focus:border-plum focus:ring-1 focus:ring-plum focus:outline-none text-xs sm:text-sm text-charcoal appearance-none cursor-pointer font-medium"
                          >
                            <option value="UK">UK</option>
                            <option value="Saudi Arabia (Makkah & Madinah)">Saudi Arabia (Makkah & Madinah)</option>
                            <option value="Azerbaijan (Baku & Gabala)">Azerbaijan (Baku & Gabala)</option>
                            <option value="Thailand (Bangkok & Phuket)">Thailand (Bangkok & Phuket)</option>
                            <option value="Malaysia (Kuala Lumpur)">Malaysia (Kuala Lumpur)</option>
                            <option value="Cambodia (Siem Reap)">Cambodia (Siem Reap)</option>
                            <option value="UAE / Dubai">UAE / Dubai</option>
                            <option value="Schengen / Europe">Schengen / Europe</option>
                            <option value="USA / Canada">USA / Canada</option>
                            <option value="Worldwide Other">Worldwide Other</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/60 pointer-events-none stroke-[2.2]" />
                        </div>
                      </div>
                    </div>

                    {/* Write Message (optional) */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-plum tracking-wide uppercase mb-1.5 font-sans">
                        WRITE MESSAGE <span className="text-charcoal/40 font-normal lowercase">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention any prior refusals, your current status, or travel timeframe..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-soft-lavender bg-warm-white/40 focus:bg-white focus:border-plum focus:ring-1 focus:ring-plum focus:outline-none text-xs sm:text-sm text-charcoal placeholder-charcoal/40 transition resize-none font-normal"
                      />
                    </div>

                    {/* Submit Button with Website Brand Colors (Plum & Gold) - Optimized for Mobile */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 sm:py-4 px-3 sm:px-6 rounded-xl bg-plum hover:bg-[#34112e] active:scale-[0.99] text-white font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-tight sm:tracking-wider flex items-center justify-center gap-2 border border-gold/40 shadow-xl hover:shadow-2xl hover:border-gold transition-all duration-200 cursor-pointer whitespace-nowrap"
                      >
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold -rotate-12 stroke-[2.2] shrink-0" />
                        <span className="truncate">SUBMIT CONSULTATION REQUEST</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-soft-lavender text-plum flex items-center justify-center mx-auto mb-4 border border-gold/40">
                    <CheckCircle className="w-9 h-9 stroke-[2.2] text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mb-2">
                    Consultation Request Sent!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light max-w-sm mx-auto mb-6 leading-relaxed">
                    Thank you, <strong>{`${formData.firstName} ${formData.lastName}`.trim() || 'Valued Client'}</strong>. Your consultation inquiry has been forwarded to our senior travel advisors on WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-plum hover:bg-[#34112e] text-white text-xs uppercase tracking-wider font-semibold border border-gold/40 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Google Maps Location Section: Placed below Form and Text */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0 border border-gold/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Visit Our Islamabad Office
                </h4>
                <p className="text-xs sm:text-sm text-white/75 font-light">
                  Office No. 4, First Floor, Friends Gold Arcade, Main PWD Rd, Islamabad, Pakistan 45710
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Office+No.+4+First+Floor+Friends+Gold+Arcade+Main+PWD+Rd+Islamabad+Pakistan+45710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] sm:text-xs text-white font-medium transition-all group cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Full-width Responsive Google Maps Embed */}
          <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-charcoal/50">
            <iframe
              title="Muntaha Travel & Tours Location - Friends Gold Arcade Islamabad"
              src="https://maps.google.com/maps?q=Office+No.+4+First+Floor+Friends+Gold+Arcade+Main+PWD+Rd+Islamabad+Pakistan+45710&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full contrast-[1.05]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
