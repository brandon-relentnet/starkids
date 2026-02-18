import { Link, useRouter } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Star, Heart } from 'lucide-react'

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/about' as const, label: 'About' },
  { to: '/programs' as const, label: 'Programs' },
  { to: '/get-involved' as const, label: 'Get Involved' },
  { to: '/contact' as const, label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false)
  }, [router.state.location.pathname])

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-dark shadow-lg shadow-black/20 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label="Star Kids Home"
            >
              <div className="relative">
                <Star
                  aria-hidden="true"
                  className="w-7 h-7 sm:w-8 sm:h-8 text-gold fill-gold transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  strokeWidth={1.5}
                />
                <div
                  className="absolute inset-0 w-7 h-7 sm:w-8 sm:h-8 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
              <span className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Star{' '}
                <span className="text-gradient-gold bg-clip-text">Kids</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-4 py-2 text-sm font-medium text-white/60 rounded-lg transition-all duration-300 hover:text-white hover:bg-white/5"
                  activeProps={{
                    className:
                      'relative px-4 py-2 text-sm font-medium text-gold rounded-lg bg-gold/8',
                  }}
                  activeOptions={{ exact: link.to === '/' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/get-involved"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-midnight text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
              >
                <Heart
                  aria-hidden="true"
                  className="w-4 h-4"
                  strokeWidth={2.5}
                />
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-midnight/90 backdrop-blur-md transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsOpen(false)
          }}
          role="button"
          tabIndex={-1}
          aria-label="Close menu"
        />

        {/* Drawer */}
        <aside
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-navy/95 backdrop-blur-xl border-l border-white/8 shadow-2xl transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/8">
            <div className="flex items-center gap-2">
              <Star
                aria-hidden="true"
                className="w-6 h-6 text-gold fill-gold"
                strokeWidth={1.5}
              />
              <span className="font-display text-lg font-semibold text-white">
                Star Kids
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X aria-hidden="true" className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Nav */}
          <nav className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-white/60 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200 font-medium"
                activeProps={{
                  className:
                    'flex items-center gap-3 px-4 py-3.5 text-gold bg-gold/8 rounded-xl font-medium',
                }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-white/8">
              <Link
                to="/get-involved"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gold text-midnight font-semibold rounded-xl hover:bg-gold-light transition-colors"
              >
                <Heart
                  aria-hidden="true"
                  className="w-4 h-4"
                  strokeWidth={2.5}
                />
                Donate Now
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </>
  )
}
