import { Link } from '@tanstack/react-router'
import { Star, Mail, Phone, MapPin, Heart } from 'lucide-react'

const footerLinks = {
  organization: [
    { to: '/about' as const, label: 'About Us' },
    { to: '/programs' as const, label: 'Our Programs' },
    { to: '/get-involved' as const, label: 'Get Involved' },
    { to: '/contact' as const, label: 'Contact' },
  ],
  programs: [
    { label: 'Star Scholars', hash: '#scholars' },
    { label: 'Star Wellness', hash: '#wellness' },
    { label: 'Star Plates', hash: '#plates' },
    { label: 'Star Guides', hash: '#guides' },
    { label: 'Star Response', hash: '#response' },
    { label: 'Star Together', hash: '#together' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <Star
                aria-hidden="true"
                className="w-7 h-7 text-gold fill-gold transition-transform duration-300 group-hover:rotate-12"
                strokeWidth={1.5}
              />
              <span className="font-display text-xl font-semibold text-white tracking-tight">
                Star Kids
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/50">
              A 501(c)(3) nonprofit organization dedicated to helping every
              child in America reach for the stars. Every child deserves a
              chance to shine.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:info@starkids.org"
                className="flex items-center gap-2.5 hover:text-gold transition-colors"
              >
                <Mail aria-hidden="true" className="w-4 h-4 text-gold/60" />
                info@starkids.org
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2.5 hover:text-gold transition-colors"
              >
                <Phone aria-hidden="true" className="w-4 h-4 text-gold/60" />
                (800) 555-1234
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="w-4 h-4 text-gold/60 flex-shrink-0"
                />
                United States of America
              </span>
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Organization
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.organization.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Programs
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.hash}>
                  <Link
                    to="/programs"
                    hash={link.hash}
                    className="text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support Our Mission
            </h3>
            <p className="text-sm leading-relaxed mb-5 text-white/50">
              Your generosity makes our work possible. Every dollar helps a
              child in need.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-midnight text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              <Heart aria-hidden="true" className="w-4 h-4" strokeWidth={2.5} />
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/35">
              &copy; {new Date().getFullYear()} Star Kids Foundation. All rights
              reserved. 501(c)(3) EIN: XX-XXXXXXX
            </p>
            <div className="flex items-center gap-4 text-xs text-white/35">
              <span className="text-white/35">Privacy Policy</span>
              <span className="text-white/15">|</span>
              <span className="text-white/35">Terms of Service</span>
              <span className="text-white/15">|</span>
              <span className="text-white/35">Financial Transparency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
