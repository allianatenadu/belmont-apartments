import Link from 'next/link'
import Image from 'next/image'

const rooms = [
  {
    name: 'Comfort Suite',
    desc: 'Elegant and efficient. Perfect for the modern professional seeking refined solo living.',
    beds: '1 bed, 1 kitchen, 1toilet',
    size: '45 m²',
    price: 'From $1,200/mo',
    img: '/images/belmont-room1.jpg',
  },
  {
    name: 'Executive Suite',
    desc: 'Generous proportions with a separate living space crafted for comfort and privacy.',
    beds: 'Standard room, 1 Ironing Stand, 1Washing Machine',
    size: '75 m²',
    price: 'From $1,800/mo',
   img: '/images/belmont-room3.jpg',
  },
  {
    name: 'Classic Suite',
    desc: 'The pinnacle of urban living — sweeping city views, curated interiors, exceptional space.',
    beds: '1 beds · 2 baths',
    size: '130 m²',
    price: 'From $3,200/mo',
   img: '/images/belmont-room2.jpg',
  },
]

const amenities = [
  { label: '', icon: '↑' },
  { label: 'Fitness Center', icon: '◈' },
  { label: 'Concierge', icon: '◇' },
  { label: 'Private Parking', icon: '□' },
  { label: 'Co-Working Lounge', icon: '◎' },
  { label: 'Pool & Spa', icon: '~' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/belmont3.jpg"
            alt="Belmont Apartments lobby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40 w-full">
          <p className="section-label text-gold-light mb-6">Akim Oda · Ghana</p>
          <h1 className="font-display font-light text-cream text-[clamp(3.5rem,10vw,9rem)] leading-none mb-8 max-w-3xl">
            Live Beyond<br />
            <span className="italic">Ordinary</span>
          </h1>
          <p className="text-cream/70 font-sans text-base max-w-sm mb-10 leading-relaxed">
            Curated residences where architectural precision meets the warmth of home. Belmont is not simply an address it is a way of living.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/rooms" className="btn-outline-light text-xs">
              View Residences
            </Link>
            <Link href="/booking" className="btn-primary text-xs">
              Book 
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-3">
          <span className="text-cream/40 text-xs tracking-widest uppercase rotate-90 mb-4">Scroll</span>
          <div className="w-px h-16 bg-cream/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-gold animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '2', label: 'Residences' },
            { value: '8', label: 'Apartments' },
            { value: '5★', label: 'Average Rating' },
            { value: '2026', label: 'Completed' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl font-light text-gold">{s.value}</p>
              <p className="text-xs tracking-widest uppercase text-warm-gray mt-2 font-sans">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro split */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight mb-8 text-charcoal">
              Where  Comfort <br />
              Meets <span className="italic">Elegance</span>
            </h2>
            <p className="text-warm-gray font-sans leading-relaxed mb-6">
              Belmont Apartments was created to provide a peaceful and comfortable stay in the heart of Akim Oda. Every space has been thoughtfully designed to combine modern convenience with a warm, welcoming atmosphere.
            </p>
            <p className="text-warm-gray font-sans leading-relaxed mb-10">
              From our fully private apartments and beautifully maintained gardens to our modern amenities and relaxing surroundings, Belmont offers a place where every guest can feel at home and enjoy a memorable stay.
            </p>
            <Link href="/about" className="btn-outline text-xs">
              Our Vision
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/belmont5.jpg"
                alt="Belmont interior detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 hidden lg:block">
              <p className="font-display text-4xl text-charcoal font-light">Est.</p>
              <p className="font-display text-4xl text-charcoal font-light">2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-stone/40 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-label">Residences</p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight">
                Find your space
              </h2>
            </div>
            <Link href="/rooms" className="btn-outline text-xs self-start md:self-auto">
              All Residences
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.name} className="group bg-cream overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-2xl font-light text-charcoal">{room.name}</h3>
                    <span className="text-xs text-warm-gray font-sans">{room.size}</span>
                  </div>
                  <p className="text-warm-gray text-sm font-sans leading-relaxed mb-4">{room.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-stone">
                    <span className="text-xs tracking-widest uppercase text-warm-gray font-sans">{room.beds}</span>
                    <span className="text-sm font-medium text-charcoal font-sans">{room.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      {/* <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-px bg-stone">
              {amenities.map((a) => (
                <div key={a.label} className="bg-cream p-8 hover:bg-gold-light transition-colors duration-300">
                  <span className="text-2xl text-gold mb-3 block">{a.icon}</span>
                  <p className="font-sans text-sm font-medium text-charcoal tracking-wide">{a.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="section-label">Amenities</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight mb-8">
              Every detail<br />
              <span className="italic">considered</span>
            </h2>
            <p className="text-warm-gray font-sans leading-relaxed mb-10">
              Belmont's amenities are not afterthoughts — they are intrinsic to the experience. From the rooftop terrace overlooking the city skyline to the temperature-controlled fitness center, each space has been designed to serve your highest standard of living.
            </p>
            <Link href="/rooms#amenities" className="btn-outline text-xs">
              Explore Amenities
            </Link>
          </div>
        </div>
      </section> */}

      {/* Full-bleed CTA */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/belmont4.jpg"
            alt="Belmont exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="section-label text-gold-light">Limited Availability</p>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-cream leading-none mb-8">
            Your future home<br />
            is <span className="italic">waiting</span>
          </h2>
          <Link href="/booking" className="btn-primary text-xs">
            Schedule a Private Tour
          </Link>
        </div>
      </section>
    </>
  )
}
