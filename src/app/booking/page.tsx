'use client'
import { useState } from 'react'

const residenceTypes = ['Comfort Suite', 'Executive Suite', 'Classic Suite']
const tourTypes = ['In-Person Tour', 'Virtual Tour', 'Phone Consultation']
const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM']

export default function BookingPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    residence: '', tour: '', date: '', time: '',
    guests: '1', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.email) {
      setError('Please fill in your name and email.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-gold mx-auto mb-8 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="section-label text-center">Confirmed</p>
          <h2 className="font-display text-5xl font-light text-charcoal mb-6">
            We'll be in touch
          </h2>
          <p className="text-warm-gray font-sans leading-relaxed mb-8">
            Thank you, {form.firstName}. Your viewing request has been received. A member of our team will contact you at {form.email} within 24 hours to confirm the details.
          </p>
          <a href="/" className="btn-outline text-xs">Return Home</a>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label text-gold">Book a Viewing</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-cream leading-none">
            Begin your<br />
            <span className="italic">journey home</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <p className="text-xs tracking-superwide uppercase text-gold font-sans mb-4">What to expect</p>
              <ul className="space-y-4">
                {[
                  { step: '01', text: 'Fill in your details and preferred viewing time.' },
                  { step: '02', text: 'Our team confirms within 24 hours.' },
                  { step: '03', text: 'Arrive and experience Belmont in person.' },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="font-display text-3xl text-stone font-light leading-none">{s.step}</span>
                    <p className="text-warm-gray text-sm font-sans leading-relaxed pt-1">{s.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone pt-8">
              <p className="text-xs tracking-superwide uppercase text-gold font-sans mb-4">Contact us directly</p>
              <div className="space-y-2 text-sm font-sans text-warm-gray">
                <p>+233 24 456 9540</p>
                <p>stenadu@gmail.com</p>
                <p className="pt-2 text-xs">Mon–Sat, 24hr</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Personal info */}
              <div>
                <p className="text-xs tracking-superwide uppercase text-warm-gray font-sans mb-6">Your Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { key: 'firstName', label: 'First Name', placeholder: 'Kwame' },
                    { key: 'lastName', label: 'Last Name', placeholder: 'Mensah' },
                    { key: 'email', label: 'Email Address', placeholder: 'kwame@email.com' },
                    { key: 'phone', label: 'Phone Number', placeholder: '+233 20 000 0000' },
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
              </div>

              {/* Residence preference */}
              <div>
                <p className="text-xs tracking-superwide uppercase text-warm-gray font-sans mb-6">Residence Preference</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {residenceTypes.map((r) => (
                    <button
                      key={r}
                      onClick={() => update('residence', r)}
                      className={`py-3 px-4 text-xs font-sans tracking-wide border transition-all duration-200 text-left ${
                        form.residence === r
                          ? 'bg-charcoal text-cream border-charcoal'
                          : 'border-stone text-warm-gray hover:border-charcoal'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tour type */}
              <div>
                <p className="text-xs tracking-superwide uppercase text-warm-gray font-sans mb-6">Tour Type</p>
                <div className="grid grid-cols-3 gap-3">
                  {tourTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => update('tour', t)}
                      className={`py-3 px-4 text-xs font-sans tracking-wide border transition-all duration-200 ${
                        form.tour === t
                          ? 'bg-charcoal text-cream border-charcoal'
                          : 'border-stone text-warm-gray hover:border-charcoal'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div>
                <p className="text-xs tracking-superwide uppercase text-warm-gray font-sans mb-6">Preferred Date & Time</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-warm-gray font-sans mb-2">Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className="w-full border-b border-stone bg-transparent py-3 text-sm font-sans text-charcoal outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-warm-gray font-sans mb-2">Number of Guests</label>
                    <input
                      type="number"
                      min="1"
                      max="6"
                      value={form.guests}
                      onChange={(e) => update('guests', e.target.value)}
                      className="w-full border-b border-stone bg-transparent py-3 text-sm font-sans text-charcoal outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => update('time', t)}
                      className={`py-2.5 text-xs font-sans border transition-all duration-200 ${
                        form.time === t
                          ? 'bg-charcoal text-cream border-charcoal'
                          : 'border-stone text-warm-gray hover:border-charcoal'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-warm-gray font-sans mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any specific requirements or questions..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className="w-full border-b border-stone bg-transparent py-3 text-sm font-sans text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-charcoal transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-sm font-sans text-red-600">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn-primary text-xs w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Request Viewing'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}