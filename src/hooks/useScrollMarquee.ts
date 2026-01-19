import { useEffect, useRef } from 'react'

export function useScrollMarquee() {
  const leftRef = useRef<HTMLParagraphElement>(null)
  const rightRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const speed = Math.min(window.scrollY / 1200 + 1, 4)

      if (leftRef.current && rightRef.current) {
        leftRef.current.style.animationDuration = `${18 / speed}s`
        rightRef.current.style.animationDuration = `${18 / speed}s`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { leftRef, rightRef }
}
