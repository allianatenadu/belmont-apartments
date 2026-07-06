'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Residences', href: '/rooms' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Only the homepage renders a full-bleed dark/image hero directly behind
// the navbar. Every other route needs the solid cream bg + charcoal text
// from the very first paint, since there's no dark backdrop for the
// transparent cream-on-cream style to sit on top of.
const TRANSPARENT_ON_TOP_ROUTES = new Set(['/'])

export default function Navbar() {
  const pathname = usePathname()
  const transparentOnTop = TRANSPARENT_ON_TOP_ROUTES.has(pathname)

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!transparentOnTop) return

    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [transparentOnTop])

  // Reset scroll-derived state when navigating to a page that doesn't use it
  useEffect(() => {
    if (!transparentOnTop) setScrolled(false)
  }, [transparentOnTop])

  const active = !transparentOnTop || scrolled || open

  const textColor = 'text-charcoal'
  const burgerColor = 'bg-charcoal'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        active
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-stone/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 items-center">

        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Belmont Apartments"
              width={48}
              height={48}
              priority
            />

            <span
              className={`font-display text-3xl font-semibold transition-colors duration-300 ${textColor}`}
            >
              Belmont
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex justify-center items-center gap-12">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`uppercase tracking-[0.2em] text-xs transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex justify-end">
          <Link
            href="/booking"
            className={`px-7 py-3 uppercase tracking-[0.2em] text-xs border transition-all duration-300 ${
              active
                ? 'bg-charcoal text-cream border-charcoal hover:bg-gold hover:border-gold hover:text-charcoal'
                : 'border-cream text-cream hover:bg-cream hover:text-charcoal'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden justify-self-end flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-stone px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="uppercase tracking-[0.2em] text-sm text-charcoal"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="bg-charcoal text-cream py-3 text-center uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-charcoal transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}