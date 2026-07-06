import Link from 'next/link'

const team = [
  { name: 'Solomon Agyeman Tenadu', role: 'Owner', img: '/images/belmont-person.jpg'},
  { name: 'Janet Asabea Kwatiah', role: 'Owner/ Manager', img: '/images/belmont-person1.jpg' },
  { name: 'Alliana Okaikai Tenadu', role: 'Social Media Manager ', img: '/images/belmont-person2.jpg' },
]

const values = [
  { heading: 'Craft', body: 'We believe that great architecture requires genuine patience. Every joint, every finish, every threshold has been considered at length.' },
  { heading: 'Restraint', body: 'Beauty comes from discipline. We remove rather than add, refine rather than decorate, and trust that simplicity reveals the material\'s true quality.' },
  { heading: 'Belonging', body: 'A home is more than shelter. Belmont is designed to build community — between neighbours, between residents and the city, between past and present.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
          <p className="section-label">About Belmont</p>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] font-light text-charcoal leading-none mb-12">
            A place<br />
            to <span className="italic">belong</span>
          </h1>
        </div>
        <div className="w-full aspect-[21/9] overflow-hidden">
          <img
            src="/images/belmont2.jpg"
            alt="Belmont building exterior"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-superwide uppercase text-gold font-sans mb-6">The Story</p>
            <p className="font-display text-3xl font-light text-charcoal leading-snug">
              Born from a belief that Akim Oda deserved a different kind of home.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-warm-gray font-sans leading-relaxed">
            <p>
             Belmont Apartments was created with one simple vision: to provide a peaceful, comfortable, and welcoming place to stay in the heart of Akim Oda.
            </p>
            <p>
              Designed for both short and extended stays, every apartment combines the privacy of home with the convenience of modern hospitality. Each fully self-contained unit features a comfortable bedroom, a modern en-suite bathroom, a fully equipped kitchen, air conditioning, and reliable high-speed WiFi everything you need for a relaxing stay.
            </p>
            <p>
              Surrounded by a serene environment, beautiful gardens, and secure parking, Belmont Apartments offers a calm escape whether you're visiting for business, family, or leisure.
            </p>
            <p>
              At Belmont Apartments, we believe that great hospitality is found in the little details. From the moment you arrive, our goal is to make you feel comfortable, cared for, and truly at home.
            </p>
            <p>
              Welcome to Belmont Apartments, your home away from home in Akim Oda.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label text-gold">What We Stand For</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-gray/20 mt-12">
            {values.map((v) => (
              <div key={v.heading} className="bg-charcoal p-12 hover:bg-charcoal/70 transition-colors">
                <h3 className="font-display text-4xl font-light text-cream mb-6">{v.heading}</h3>
                <p className="text-warm-gray font-sans text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <p className="section-label">The Team</p>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-charcoal leading-tight mb-16">
          The people behind<br />
          <span className="italic">the detail</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((m) => (
            <div key={m.name}>
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-stone">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="font-display text-2xl text-charcoal font-light">{m.name}</h3>
              <p className="text-sm text-warm-gray font-sans tracking-wide">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press / awards strip */}
      {/* <section className="border-y border-stone py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-superwide uppercase text-warm-gray font-sans text-center mb-10">As seen in</p>
          <div className="flex flex-wrap justify-center gap-12 text-warm-gray/50">
            {['Business Day Ghana', 'Architectural Digest', 'Forbes Africa', 'The Guardian'].map((p) => (
              <span key={p} className="font-display text-xl font-light">{p}</span>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <p className="section-label text-center">Join us</p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-charcoal mb-8 leading-tight">
          Come see Belmont<br />
          <span className="italic">for yourself</span>
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/booking" className="btn-primary text-xs">Book a Tour</Link>
          <Link href="/contact" className="btn-outline text-xs">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
