import { useEffect, useState, type RefObject } from 'react'

export function useIsVisible(ref: RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return // Guard against null

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
