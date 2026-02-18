import { useEffect, useRef, useState } from 'react'

interface StarCanvasProps {
  className?: string
  starCount?: number
  shootingStarInterval?: number
}

interface StarData {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinkleOffset: number
  isGold: boolean
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  life: number
  maxLife: number
}

export default function StarCanvas({
  className = '',
  starCount = 200,
  shootingStarInterval = 4000,
}: StarCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const starsRef = useRef<StarData[]>([])
  const shootingStarsRef = useRef<ShootingStar[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }

    // Initialize stars
    const initStars = () => {
      const rect = canvas.getBoundingClientRect()
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        isGold: Math.random() < 0.15,
      }))
    }

    const createShootingStar = () => {
      const rect = canvas.getBoundingClientRect()
      shootingStarsRef.current.push({
        x: Math.random() * rect.width * 0.8,
        y: Math.random() * rect.height * 0.3,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 6 + 4,
        angle: (Math.random() * 30 + 15) * (Math.PI / 180),
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      })
    }

    handleResize()
    initStars()

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)

    const shootingInterval = setInterval(
      createShootingStar,
      shootingStarInterval,
    )

    let time = 0

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      time++

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Draw stars
      for (const star of starsRef.current) {
        const parallaxX = (mx - 0.5) * star.radius * 8
        const parallaxY = (my - 0.5) * star.radius * 8
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.4 + 0.6
        const finalOpacity = star.opacity * twinkle

        ctx.beginPath()
        ctx.arc(
          star.x + parallaxX,
          star.y + parallaxY,
          star.radius,
          0,
          Math.PI * 2,
        )

        if (star.isGold) {
          ctx.fillStyle = `rgba(200, 160, 50, ${finalOpacity})`
          // Subtle glow for gold stars
          ctx.shadowColor = 'rgba(200, 160, 50, 0.3)'
          ctx.shadowBlur = star.radius * 4
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`
          ctx.shadowColor = 'transparent'
          ctx.shadowBlur = 0
        }

        ctx.fill()
        ctx.shadowColor = 'transparent'
        ctx.shadowBlur = 0
      }

      // Draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter((ss) => {
        ss.life++
        ss.x += Math.cos(ss.angle) * ss.speed
        ss.y += Math.sin(ss.angle) * ss.speed

        const progress = ss.life / ss.maxLife
        ss.opacity = progress < 0.1 ? progress * 10 : 1 - (progress - 0.1) / 0.9

        const gradient = ctx.createLinearGradient(
          ss.x,
          ss.y,
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length,
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity * 0.9})`)
        gradient.addColorStop(0.3, `rgba(200, 160, 50, ${ss.opacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(200, 160, 50, 0)')

        ctx.beginPath()
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length,
        )
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Bright head glow
        ctx.beginPath()
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`
        ctx.shadowColor = 'rgba(200, 160, 50, 0.6)'
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowColor = 'transparent'
        ctx.shadowBlur = 0

        return ss.life < ss.maxLife
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      clearInterval(shootingInterval)
      cancelAnimationFrame(animationRef.current)
    }
  }, [isClient, starCount, shootingStarInterval])

  if (!isClient) {
    // SSR fallback — use CSS starfield
    return <div className={`starfield ${className}`} aria-hidden="true" />
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  )
}
