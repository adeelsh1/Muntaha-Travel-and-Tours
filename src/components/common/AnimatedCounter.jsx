import { useState, useEffect, useRef } from 'react'

/**
 * AnimatedCounter Component
 * Animates numbers counting up when scrolled into view.
 */
export default function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const spanRef = useRef(null)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    // If reduced motion is preferred, jump straight to the end value
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(end)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime = null

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease out cubic: 1 - (1 - progress)^3
            const easeOutProgress = 1 - Math.pow(1 - progress, 3)
            const currentVal = easeOutProgress * end

            setDisplayValue(currentVal)

            if (progress < 1) {
              window.requestAnimationFrame(animate)
            } else {
              setDisplayValue(end)
            }
          }

          window.requestAnimationFrame(animate)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString()

  return (
    <span ref={spanRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

