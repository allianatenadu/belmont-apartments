import Link from 'next/link'

const rooms = [
  {
    name: 'Comfort ',
    full: 'Comfort Suite',
    size: '24 m²',
    beds: '1 Studio',
    baths: '1 Bath',
    sleeps: '1–2',
    price: 'From ₵200-₵400',
    desc: 'An intelligent layout that maximises every square metre. The studio is refined, calm, and complete — ideal for the professional or the minimalist.',
    features: ['Open-plan kitchen', 'Juliet balcony', 'Built-in wardrobe', 'High ceilings'],
    img: '/images/belmont-room1.jpg',
  },
  {
    name: 'Executive',
    full: 'Executive Suite',
    size: '24 m²',
    beds: '1 Bedroom',
    baths: '1 Bath',
    sleeps: '2',
    price: 'From ₵300-₵600',
    desc: 'Generous living with a distinct separation between rest and life. The one-bedroom suite is our most popular residence, offering flexibility and comfort in equal measure.',
    features: ['Washing Machine', 'Full kitchen', 'Walk-in wardrobe', 'Garden View'],
    img: '/images/belmont-room3.jpg',
  },
  // {
  //   name: 'Classic ',
  //   full: 'Classic Suite',
  //   size: '24 m²',
  //   beds: '1 Bedrooms',
  //   baths: '1 Baths',
  //   sleeps: '4',
  //   price: '$2,600',
  //   desc: 'Space for life in all its dimensions. Two generous bedrooms, dual bathrooms, and an expansive living area crafted for families or those who simply prefer more room.',
  //   features: [ 'Open dining area', 'Private balcony','Garden View'],
  //   img: '/images/belmont-room3.jpg',
  // },
  // {
  //   name: 'Penthouse',
  //   full: 'Penthouse Suite',
  //   size: '180 m²',
  //   beds: '3 Bedrooms',
  //   baths: '3 Baths',
  //   sleeps: '6',
  //   price: '$4,500',
  //   desc: 'The crown of Belmont. Three bedrooms across a double-height floor plan, a private rooftop terrace, and unobstructed panoramic views of Accra.',
  //   features: ['Private rooftop terrace', 'Chef\'s kitchen', 'Master suite with dressing room', 'Panoramic city views'],
  //   img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
  // },
]

// const amenities = [
//   // {
//   //   category: 'Wellness',
//   //   items: [
//   //     { name: 'Infinity Pool', desc: 'Heated year-round with city views', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80' },
//   //     { name: 'Spa & Steam Room', desc: 'Private treatment rooms available', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
//   //     { name: 'Fitness Centre', desc: 'Equipment by Technogym, open 24/7', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
//   //   ],
//   // },
//   // {
//   //   category: 'Community',
//   //   items: [
//   //     { name: 'Rooftop Terrace', desc: 'Panoramic views, curated landscaping', img: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80' },
//   //     { name: 'Co-Working Lounge', desc: 'High-speed Wi-Fi, meeting pods', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
//   //     { name: 'Residents\' Lounge', desc: 'Private events and gatherings', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
//   //   ],
//   // },
// ]

export default function RoomsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="section-label">Our Residences</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-charcoal leading-none">
            Find your<br />
            <span className="italic">perfect home</span>
          </h1>
          <p className="text-warm-gray font-sans leading-relaxed lg:max-w-sm">
            Four distinct residence types. Each designed with the same attention to proportion, material, and light — the differences lie in scale and lifestyle.
          </p>
        </div>
      </section>

      {/* Room listings */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 pb-32">
        {rooms.map((room, i) => (
          <div
            key={room.name}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="aspect-[4/3] overflow-hidden group">
                <img
                  src={room.img}
                  alt={room.full}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <p className="section-label">{room.name}</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal mb-6 leading-tight">
                {room.full}
              </h2>
              <p className="text-warm-gray font-sans leading-relaxed mb-8">{room.desc}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-stone">
                <div>
                  <p className="text-xs tracking-widest uppercase text-warm-gray font-sans mb-1">Size</p>
                  <p className="font-display text-xl text-charcoal">{room.size}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-warm-gray font-sans mb-1">Beds</p>
                  <p className="font-display text-xl text-charcoal">{room.beds}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-warm-gray font-sans mb-1">Baths</p>
                  <p className="font-display text-xl text-charcoal">{room.baths}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {room.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-sans text-warm-gray">
                    <span className="w-4 h-px bg-gold inline-block flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-warm-gray font-sans">From</p>
                  <p className="font-display text-3xl text-charcoal">{room.price}<span className="text-base text-warm-gray font-sans">/day</span></p>
                </div>
                <Link href="/booking" className="btn-primary text-xs">
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Amenities */}
      {/* <section id="amenities" className="bg-charcoal py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label text-gold">Amenities</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light text-cream leading-none mb-20">
            The Belmont<br />
            <span className="italic">experience</span>
          </h2>

          {amenities.map((group) => (
            <div key={group.category} className="mb-20">
              <p className="text-xs tracking-superwide uppercase text-warm-gray font-sans mb-8">{group.category}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                      />
                    </div>
                    <h3 className="font-display text-2xl text-cream font-light mb-1">{item.name}</h3>
                    <p className="text-warm-gray text-sm font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <p className="section-label text-center">Ready to move?</p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-charcoal mb-8">
          Schedule a private viewing
        </h2>
        <Link href="/booking" className="btn-primary text-xs">
          Book Your Tour
        </Link>
      </section>
    </>
  )
}
