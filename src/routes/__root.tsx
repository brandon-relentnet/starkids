import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
} from '@tanstack/react-router'
import { Star, Home, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Star Kids | Helping Every Child Shine' },
      {
        name: 'description',
        content:
          'Star Kids is a 501(c)(3) nonprofit dedicated to providing education, health, nutrition, mentorship, and emergency aid to children across America.',
      },
      { name: 'theme-color', content: '#080c1a' },
      {
        property: 'og:title',
        content: 'Star Kids | Helping Every Child Shine',
      },
      {
        property: 'og:description',
        content:
          'A 501(c)(3) nonprofit dedicated to helping children across America reach for the stars.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://starkids.org' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Outfit:wght@300;400;500;600;700&display=swap',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function NotFoundPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-midnight via-navy to-navy-light starfield nebula-glow">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star
            aria-hidden="true"
            className="w-5 h-5 text-gold/40 fill-gold/20 animate-star-twinkle"
            strokeWidth={1.5}
          />
          <Star
            aria-hidden="true"
            className="w-7 h-7 text-gold/60 fill-gold/40 animate-star-twinkle"
            strokeWidth={1.5}
            style={{ animationDelay: '0.8s' }}
          />
          <Star
            aria-hidden="true"
            className="w-5 h-5 text-gold/40 fill-gold/20 animate-star-twinkle"
            strokeWidth={1.5}
            style={{ animationDelay: '1.6s' }}
          />
        </div>

        <p className="uppercase tracking-[0.2em] text-gold/60 text-xs sm:text-sm font-medium mb-4">
          Page Not Found
        </p>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight glow-text-gold">
          404
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-md mx-auto mb-10 leading-relaxed font-light">
          This star hasn&apos;t been discovered yet. The page you&apos;re
          looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-gold text-base">
            <Home aria-hidden="true" className="w-5 h-5" />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline-light text-base">
            Contact Us
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-body grain-overlay">
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
