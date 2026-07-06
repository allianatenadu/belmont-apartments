'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Residences', href: '/rooms' },
  // { label: 'Amenities', href: '/rooms#amenities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-stone' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="font-display text-2xl font-light tracking-wide text-charcoal">
          Belmont
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs tracking-widest uppercase font-sans text-warm-gray hover:text-charcoal transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/booking" className="hidden md:inline-block btn-primary text-xs py-2.5 px-6">
          Book Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition-all ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-stone px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase font-sans text-warm-gray hover:text-charcoal"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)} className="btn-primary text-center text-xs">
            Book a Tour
          </Link>
        </div>
      )}
    </header>
  )
}
