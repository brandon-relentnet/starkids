import { Star } from 'lucide-react'
import type { ReactNode } from 'react'

interface PageHeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-midnight via-navy to-navy-light starfield nebula-glow pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-5">
          <Star
            aria-hidden="true"
            className="w-5 h-5 text-gold/60 fill-gold/40"
            strokeWidth={1.5}
          />
          <div className="w-12 h-px bg-gold/30" />
          <Star
            aria-hidden="true"
            className="w-4 h-4 text-gold/40 fill-gold/20"
            strokeWidth={1.5}
          />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
