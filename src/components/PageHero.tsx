import { Star } from 'lucide-react'
import type { ReactNode } from 'react'
import StarCanvas from './StarCanvas'

interface PageHeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
  large?: boolean
}

export default function PageHero({
  title,
  subtitle,
  children,
  large = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative bg-gradient-to-b from-midnight via-navy to-navy-light overflow-hidden ${large ? 'pt-36 pb-24 sm:pt-44 sm:pb-32' : 'pt-32 pb-20 sm:pt-36 sm:pb-24'}`}
    >
      {/* Canvas starfield */}
      <StarCanvas starCount={120} shootingStarInterval={6000} />

      {/* Nebula glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="orb orb-gold w-[500px] h-[500px] -top-40 -left-40"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="orb orb-coral w-[400px] h-[400px] top-20 -right-40"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="orb orb-sage w-[300px] h-[300px] -bottom-20 left-1/3"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${large ? '' : ''}`}
      >
        {/* Decorative constellation */}
        <div
          className="flex items-center justify-center gap-3 mb-6 animate-fade-in"
          aria-hidden="true"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <Star
            className="w-4 h-4 text-gold/50 fill-gold/25 animate-star-twinkle"
            strokeWidth={1.5}
          />
          <Star
            className="w-5 h-5 text-gold/70 fill-gold/40 animate-star-twinkle"
            strokeWidth={1.5}
            style={{ animationDelay: '1s' }}
          />
          <Star
            className="w-4 h-4 text-gold/50 fill-gold/25 animate-star-twinkle"
            strokeWidth={1.5}
            style={{ animationDelay: '2s' }}
          />
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        <h1
          className={`font-display font-semibold text-white tracking-tight leading-[1.1] animate-fade-up ${large ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-4xl sm:text-5xl lg:text-6xl'}`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light mt-5 animate-fade-up"
            style={{ animationDelay: '150ms' }}
          >
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
