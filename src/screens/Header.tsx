import { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
type HeaderProps = PropsWithChildren<{
  className?: string
}>

export function Header({ children, className = '' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 z-50 w-full p-2.5
        flex items-center justify-between gap-4 md:gap-10
        transition-colors duration-300
        ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}
        ${className}
      `}
    >
      {children}
    </header>
  )
}
