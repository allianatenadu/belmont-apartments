'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }))

  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-0 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-gold">Contact</p>
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-charcoal leading-none">
              Let's<br />
              <span className="italic">talk</span>
            </h1>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/letstalk.png"
              alt="Belmont Apartments"
              width={320}
              height={320}
              className="w-full max-w-xs lg:max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <p className="text-xs tracking-superwide uppercase text-gold font-sans mb-6">Visit Us</p>
              <div className="space-y-1 text-sm text-warm-gray font-sans">
                <p className="text-charcoal font-medium">Belmont Apartments</p>
                <p>12 Belmont Avenue</p>
                <p>SDA, Akim Oda</p>
                <p>Ghana</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-superwide uppercase text-gold font-sans mb-6">Reach Us</p>
              <div className="space-y-2 text-sm font-sans">
                <p>
                  <a href="tel:+233244569540" className="text-warm-gray hover:text-charcoal transition-colors">
                    +233 24 445 69540
                  </a>
                </p>
                <p>
                  <a href="mailto:stenadu@gmail.com" className="text-warm-gray hover:text-charcoal transition-colors">
                    belmontoapartments@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-superwide uppercase text-gold font-sans mb-6">Hours</p>
              <div className="space-y-1 text-sm text-warm-gray font-sans">
                <div className="flex justify-between gap-8">
                  <span>Monday – Saturday</span>
                  <span>24hr</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>Sunday</span>
                  <span>Open from 12:00PM</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-superwide uppercase text-gold font-sans mb-6">Follow</p>
              <div className="flex gap-6 text-xs tracking-widest uppercase text-warm-gray font-sans">
                {['Instagram', 'Twitter'].map((s) => (
                  <a key={s} href="#" className="hover:text-charcoal transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="py-20 text-center">
                <div className="w-12 h-12 bg-gold mx-auto mb-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-4xl font-light text-charcoal mb-4">Message sent</h3>
                <p className="text-warm-gray font-sans text-sm">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { key: 'name', label: 'Full Name', placeholder: 'Your name' },
                    { key: 'email', label: 'Email Address', placeholder: 'your@email.com' },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs tracking-widest uppercase text-warm-gray font-sans mb-2">{f.label}</label>
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        value={(form as any)[f.key]}
                        onChange={(e) => update(f.key, e.target.value)}
                        className="w-full border-b border-stone bg-transparent py-3 text-sm font-sans text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-charcoal transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-warm-gray font-sans mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this regarding?"
                    value={form.subject}
                    onChange={(e) => update('subject', e.target.value)}
                    className="w-full border-b border-stone bg-transparent py-3 text-sm font-sans text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-charcoal transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-warm-gray font-sans mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full border-b border-stone bg-transparent py-3 text-sm font-sans text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-charcoal transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={() => setSent(true)}
                  className="btn-primary text-xs"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-24 bg-stone/50 h-80 flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-2xl font-light text-charcoal mb-2">12 Belmont Avenue</p>
            <p className="text-sm text-warm-gray font-sans">SDA, Akim Oda, Ghana</p>
            <a
              href="https://maps.app.goo.gl/cqcpQrKtEU9ECZsW7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs tracking-widest uppercase text-gold hover:text-charcoal transition-colors font-sans"
            >
              Open in Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}