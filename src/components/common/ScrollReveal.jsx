import { useEffect, useRef, useState } from 'react'

/**
 * ScrollReveal Component
 * High-performance, GPU-accelerated scroll reveal animation for section headings and editorial blocks.
 */
export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.15,
  delay = 0,
  direction = 'up',
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If reduced motion is preferred, reveal immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const initialStyle =
    direction === 'up'
      ? 'opacity-0 translate-y-8 filter blur-[2px]'
      : 'opacity-0'

  const revealedStyle = 'opacity-100 translate-y-0 filter blur-0'

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform ${
        isVisible ? revealedStyle : initialStyle
      } ${className}`}
    >
      {children}
    </div>
  )
}

