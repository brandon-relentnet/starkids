import { useEffect, useRef, useState, type ReactNode } from 'react'

type FadeVariant = 'up' | 'left' | 'right' | 'scale' | 'blur'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  variant?: FadeVariant
}

const variantClassMap: Record<FadeVariant, string> = {
  up: 'fade-section',
  left: 'fade-section-left',
  right: 'fade-section-right',
  scale: 'fade-section-scale',
  blur: 'fade-section-blur',
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  variant = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const baseClass = variantClassMap[variant]

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
