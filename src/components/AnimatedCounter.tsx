import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

function parseValue(value: string): {
  prefix: string
  number: number
  suffix: string
} {
  const match = value.match(/^([^0-9]*)([0-9,]+)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: value }
  return {
    prefix: match[1] || '',
    number: parseInt(match[2]!.replace(/,/g, ''), 10),
    suffix: match[3] || '',
  }
}

function formatNumber(num: number): string {
  return num.toLocaleString('en-US')
}

export default function AnimatedCounter({
  value,
  className = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const { prefix, number: targetNumber, suffix } = parseValue(value)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          observer.unobserve(element)

          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease-out cubic for natural deceleration
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * targetNumber)
            setDisplayValue(formatNumber(current))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [targetNumber, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {hasAnimated ? displayValue : '0'}
      {suffix}
    </span>
  )
}
