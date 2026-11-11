import logo from '../../assets/images/muntaha-logo.webp'

/**
 * Footer Layout Component
 * Minimal, light-themed footer with 4-column layout, social media icons, and legal disclaimer.
 */
export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#FAF7F2] text-charcoal pt-10 sm:pt-14 pb-8 sm:pb-10 border-t border-soft-lavender select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-gray-200/80">
          
          {/* Column 1: Brand Logo, Description & Social Icons (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src={logo}
              alt="Muntaha Travel & Tours"
              className="h-11 sm:h-12 w-auto object-contain mb-3"
            />
            <p className="font-sans text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-sm">
              Our expert team streamlines complex processes, helping you prepare stronger visa applications, plan sacred pilgrimages, and craft bespoke international tours with trusted guidance.
            </p>

            {/* Follow Us */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-900 font-sans mb-3">
                FOLLOW US
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 text-gray-600 hover:text-plum hover:border-gold hover:bg-gold/10 flex items-center justify-center transition-all duration-200 shadow-2xs group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/muntahatraveltours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 text-gray-600 hover:text-plum hover:border-gold hover:bg-gold/10 flex items-center justify-center transition-all duration-200 shadow-2xs group"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 text-gray-600 hover:text-plum hover:border-gold hover:bg-gold/10 flex items-center justify-center transition-all duration-200 shadow-2xs group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-light">
              <li>
                <a href="#home" className="hover:text-plum hover:font-medium transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-plum hover:font-medium transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-plum hover:font-medium transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-plum hover:font-medium transition-colors">
                  Top Destinations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-plum hover:font-medium transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900">
              OUR SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-light">
              <li>
                <a href="#services" className="hover:text-plum hover:font-medium transition-colors">
                  Visitor & Tourist Visa
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-plum hover:font-medium transition-colors">
                  Umrah & Hajj Pilgrimage
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-plum hover:font-medium transition-colors">
                  International Air Ticketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-plum hover:font-medium transition-colors">
                  5-Star Luxury Hotels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-plum hover:font-medium transition-colors">
                  Custom Holiday Tours
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-plum hover:font-medium transition-colors">
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Destinations (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900">
              DESTINATIONS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-light uppercase tracking-wide text-[11px] sm:text-xs">
              <li>
                <a href="#destinations" className="hover:text-plum hover:font-medium transition-colors">
                  UK & SCHENGEN
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-plum hover:font-medium transition-colors">
                  SAUDI ARABIA
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-plum hover:font-medium transition-colors">
                  AZERBAIJAN
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-plum hover:font-medium transition-colors">
                  THAILAND
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-plum hover:font-medium transition-colors">
                  MALAYSIA
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-plum hover:font-medium transition-colors">
                  CAMBODIA
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Area */}
        <div className="pt-8 text-center space-y-2.5">
          <p className="text-xs text-gray-600 font-normal">
            © {new Date().getFullYear()} Muntaha Travel & Tours (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            We provide professional assistance throughout your visa application, sacred pilgrimage, and vacation travel. However, final decision on your visa application and entry rests solely with the relevant foreign mission or immigration authority.
          </p>
          <div className="flex items-center justify-center gap-3 text-xs text-gray-500 font-medium pt-1">
            <a href="#disclaimer" className="hover:text-plum transition-colors">
              Disclaimer
            </a>
            <span className="text-gray-300">•</span>
            <a href="#agreement" className="hover:text-plum transition-colors">
              Agreement
            </a>
            <span className="text-gray-300">•</span>
            <a href="#privacy" className="hover:text-plum transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
