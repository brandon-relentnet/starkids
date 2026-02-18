import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Star,
  CheckCircle,
  Sparkles,
  Heart,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact Us | Star Kids' },
      {
        name: 'description',
        content:
          'Get in touch with Star Kids. Contact us about volunteering, donations, partnerships, or general inquiries.',
      },
    ],
  }),
})

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@starkids.org',
    href: 'mailto:info@starkids.org',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(800) 555-1234',
    href: 'tel:+18005551234',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'United States of America',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon\u2013Fri: 8am \u2013 6pm EST',
    href: undefined,
  },
]

const inquiryTypes = [
  'General Inquiry',
  'Volunteering',
  'Donations',
  'Corporate Partnership',
  'Media & Press',
  'Program Information',
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question, want to get involved, or just want to say hello."
      />

      {/* === CONTACT SECTION === */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-20 right-0 w-80 h-80 bg-gold/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn variant="left">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-6 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-navy/50 leading-relaxed mb-8 text-[15px] sm:text-base">
                  Our team is here to help. Reach out through any of the
                  channels below, or fill out the form and we&apos;ll get back
                  to you within 24 hours.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <FadeIn key={info.label} delay={index * 60} variant="left">
                      <div className="flex items-start gap-4 group">
                        <div className="w-11 h-11 bg-gold/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                          <info.icon
                            aria-hidden="true"
                            className="w-5 h-5 text-gold"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <div className="text-sm text-navy/35 font-medium mb-0.5">
                            {info.label}
                          </div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-navy font-medium hover:text-gold transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-navy font-medium">
                              {info.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Quick links */}
                <FadeIn delay={300} variant="left">
                  <div className="mt-10 p-6 bg-sand rounded-2xl border border-navy/5 relative overflow-hidden">
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="relative z-10">
                      <h3 className="font-display text-sm font-semibold text-navy mb-4 flex items-center gap-2">
                        <Sparkles
                          aria-hidden="true"
                          className="w-4 h-4 text-gold"
                          strokeWidth={1.5}
                        />
                        Quick Links
                      </h3>
                      <div className="space-y-2.5 text-sm">
                        <p className="text-navy/45">
                          <span className="font-medium text-navy/65">
                            Volunteer inquiries:
                          </span>{' '}
                          volunteer@starkids.org
                        </p>
                        <p className="text-navy/45">
                          <span className="font-medium text-navy/65">
                            Donation questions:
                          </span>{' '}
                          giving@starkids.org
                        </p>
                        <p className="text-navy/45">
                          <span className="font-medium text-navy/65">
                            Press & media:
                          </span>{' '}
                          press@starkids.org
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn variant="right" delay={100}>
                <div className="bg-white rounded-2xl border border-navy/5 p-7 sm:p-9 card-hover relative overflow-hidden">
                  {/* Accent decoration */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-gold/4 rounded-full blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />

                  {submitted ? (
                    <div className="text-center py-16 relative z-10">
                      <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle
                          aria-hidden="true"
                          className="w-10 h-10 text-sage"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-navy mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-navy/50 max-w-md mx-auto mb-8 leading-relaxed">
                        Thank you for reaching out. Our team will review your
                        message and respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-gold font-semibold hover:text-gold-light transition-colors cursor-pointer inline-flex items-center gap-2"
                      >
                        <Heart
                          aria-hidden="true"
                          className="w-4 h-4"
                          strokeWidth={2}
                        />
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-navy mb-7">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-navy/65 mb-1.5"
                            >
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              required
                              className="w-full px-4 py-3.5 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/25 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-navy/65 mb-1.5"
                            >
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              required
                              className="w-full px-4 py-3.5 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/25 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-navy/65 mb-1.5"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3.5 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/25 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="inquiry"
                            className="block text-sm font-medium text-navy/65 mb-1.5"
                          >
                            Inquiry Type
                          </label>
                          <select
                            id="inquiry"
                            defaultValue=""
                            className="w-full px-4 py-3.5 bg-cream border border-navy/10 rounded-xl text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all appearance-none"
                          >
                            <option value="" disabled>
                              Select an inquiry type...
                            </option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-navy/65 mb-1.5"
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3.5 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/25 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                            placeholder="Tell us how we can help..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn-gold text-base w-full sm:w-auto cursor-pointer"
                        >
                          <Send aria-hidden="true" className="w-4 h-4" />
                          Send Message
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* === BOTTOM === */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-navy to-midnight starfield overflow-hidden">
        <FadeIn
          variant="scale"
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Star
            aria-hidden="true"
            className="w-10 h-10 text-gold fill-gold/30 mx-auto mb-5 glow-text-gold"
            strokeWidth={1.5}
          />
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 tracking-tight">
            We&apos;re Here for You
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Whether you&apos;re a parent seeking resources, a volunteer ready to
            serve, a donor with questions, or a journalist working on a story
            &mdash; our team is ready to help. We respond to all inquiries
            within one business day.
          </p>
        </FadeIn>
      </section>
    </div>
  )
}
