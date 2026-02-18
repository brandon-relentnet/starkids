import { useEffect, useRef, useState } from 'react'

export default function ScrollProgress() {
  const [isClient, setIsClient] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      if (!barRef.current) return
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      barRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  if (!isClient) return null

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        ref={barRef}
        className="scroll-progress-bar"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
