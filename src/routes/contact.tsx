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
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy mb-6 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-navy/55 leading-relaxed mb-8">
                  Our team is here to help. Reach out through any of the
                  channels below, or fill out the form and we&apos;ll get back
                  to you within 24 hours.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/8 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon
                          aria-hidden="true"
                          className="w-5 h-5 text-gold"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <div className="text-sm text-navy/40 font-medium mb-0.5">
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
                  ))}
                </div>

                {/* Quick links */}
                <div className="mt-10 p-5 bg-sand rounded-2xl border border-navy/5">
                  <h3 className="font-display text-sm font-semibold text-navy mb-3">
                    Quick Links
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-navy/50">
                      <span className="font-medium text-navy/70">
                        Volunteer inquiries:
                      </span>{' '}
                      volunteer@starkids.org
                    </p>
                    <p className="text-navy/50">
                      <span className="font-medium text-navy/70">
                        Donation questions:
                      </span>{' '}
                      giving@starkids.org
                    </p>
                    <p className="text-navy/50">
                      <span className="font-medium text-navy/70">
                        Press & media:
                      </span>{' '}
                      press@starkids.org
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={100}>
                <div className="bg-white rounded-2xl border border-navy/5 p-7 sm:p-9">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle
                          aria-hidden="true"
                          className="w-8 h-8 text-sage"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-navy mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-navy/55 max-w-md mx-auto mb-6">
                        Thank you for reaching out. Our team will review your
                        message and respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-gold font-medium hover:text-gold-light transition-colors cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display text-xl font-semibold text-navy mb-6">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-navy/70 mb-1.5"
                            >
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              required
                              className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-navy/70 mb-1.5"
                            >
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              required
                              className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-navy/70 mb-1.5"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="inquiry"
                            className="block text-sm font-medium text-navy/70 mb-1.5"
                          >
                            Inquiry Type
                          </label>
                          <select
                            id="inquiry"
                            defaultValue=""
                            className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors appearance-none"
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
                            className="block text-sm font-medium text-navy/70 mb-1.5"
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
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
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ-STYLE BOTTOM === */}
      <section className="py-16 sm:py-20 bg-sand">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star
            aria-hidden="true"
            className="w-8 h-8 text-gold/40 fill-gold/20 mx-auto mb-5"
            strokeWidth={1.5}
          />
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy mb-3 tracking-tight">
            We&apos;re Here for You
          </h2>
          <p className="text-navy/50 max-w-2xl mx-auto text-[15px] leading-relaxed">
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
