import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <p className="font-display text-4xl font-light mb-6">Belmont</p>
            <p className="text-warm-gray text-sm leading-relaxed max-w-xs font-sans">
              Refined urban living at the intersection of comfort and elegance. A home designed for those who expect more.
            </p>
            <div className="flex gap-4 mt-8">
              {['Instagram', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-widest uppercase text-warm-gray hover:text-gold transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-superwide uppercase text-gold mb-6">Explore</p>
            <ul className="space-y-3">
              {[
                { label: 'Residences', href: '/rooms' },
                { label: 'Amenities', href: '/rooms#amenities' },
                { label: 'About Us', href: '/about' },
                { label: 'Book a Tour', href: '/booking' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-warm-gray hover:text-cream transition-colors font-sans">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-superwide uppercase text-gold mb-6">Contact</p>
            <ul className="space-y-3 text-sm text-warm-gray font-sans">
              <li>12 Belmont Avenue</li>
              <li>Akim Oda, Ghana</li>
              <li className="pt-2">
                <a href="tel:+233244569540" className="hover:text-cream transition-colors">
                  +233 24 456 9540
                </a>
              </li>
              <li>
                <a href="mailto:stenadu@gmail.com" className="hover:text-cream transition-colors">
                  stenadu@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-gray/20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-warm-gray font-sans">
          <p>© {new Date().getFullYear()} Belmont Apartments. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
