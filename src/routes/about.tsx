import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Star,
  Eye,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Users,
  ArrowRight,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: 'About Us | Star Kids' },
      {
        name: 'description',
        content:
          'Learn about Star Kids, our mission to empower every child in America, our leadership team, and our 15+ year history of service.',
      },
    ],
  }),
})

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description:
      'Every decision we make begins with empathy. We see the child, not the circumstance, and respond with genuine care.',
  },
  {
    icon: Shield,
    title: 'Unwavering Integrity',
    description:
      'We are transparent stewards of every dollar and every promise. Our community trusts us because we earn it daily.',
  },
  {
    icon: Lightbulb,
    title: 'Bold Innovation',
    description:
      'The problems we tackle are complex. We embrace creative solutions, measure what matters, and adapt quickly.',
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description:
      'We serve all children regardless of background. Diversity is our strength, equity is our commitment.',
  },
]

const leadership = [
  {
    name: 'Sarah Mitchell',
    role: 'Executive Director',
    bio: '20+ years in nonprofit leadership. Former director at United Way. Passionate about systemic change for children.',
  },
  {
    name: 'David Okafor',
    role: 'Director of Programs',
    bio: 'Education policy expert and former school principal. Designs and oversees all Star Kids programming.',
  },
  {
    name: 'Dr. Lisa Chen',
    role: 'Director of Health Initiatives',
    bio: 'Pediatrician turned public health advocate. Leads our wellness and nutrition programs nationwide.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Director of Community Engagement',
    bio: 'Community organizer with deep roots in grassroots mobilization. Builds the bridges that connect families to resources.',
  },
  {
    name: 'Jennifer Blackwood',
    role: 'Chief Financial Officer',
    bio: 'CPA with 15 years in nonprofit finance. Ensures every dollar creates maximum impact for children.',
  },
  {
    name: 'Robert Nguyen',
    role: 'Director of Volunteer Operations',
    bio: 'Former AmeriCorps leader who has recruited and trained thousands of volunteers across the country.',
  },
]

const milestones = [
  {
    year: '2009',
    title: 'Founded',
    description:
      'Star Kids was established by a group of parents and educators who saw a gap in support for underserved children.',
  },
  {
    year: '2012',
    title: 'First Major Expansion',
    description:
      'Grew from 3 communities to 25, launching the Star Scholars tutoring program.',
  },
  {
    year: '2015',
    title: 'National Recognition',
    description:
      'Received Charity Navigator 4-star rating. Launched Star Wellness and Star Plates programs.',
  },
  {
    year: '2018',
    title: '100 Communities',
    description:
      'Reached the milestone of serving 100 communities. Introduced the Star Guides mentorship program.',
  },
  {
    year: '2021',
    title: 'Pandemic Response',
    description:
      'Mobilized Star Response to deliver emergency aid, virtual tutoring, and meal kits to 30,000 families.',
  },
  {
    year: '2024',
    title: 'Stronger Than Ever',
    description:
      'Now serving 50,000+ children across 200+ communities with six comprehensive programs.',
  },
]

function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Star Kids"
        subtitle="For over 15 years, we've been dedicated to one mission: ensuring every child in America has the opportunity to thrive."
      />

      {/* === OUR STORY === */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
                Our Story
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-6 tracking-tight leading-tight">
                Born from a Simple Question
              </h2>
              <div className="space-y-4 text-navy/60 leading-relaxed">
                <p>
                  In 2009, a small group of parents and educators in a
                  struggling community asked themselves: &ldquo;What if every
                  child had the support they needed to succeed?&rdquo;
                </p>
                <p>
                  What started as weekend tutoring sessions in a church basement
                  grew into something extraordinary. Families kept coming.
                  Volunteers kept showing up. The need was so clear and the
                  impact so immediate that we knew this had to be more than a
                  weekend project.
                </p>
                <p>
                  Star Kids was incorporated as a 501(c)(3) nonprofit, and we
                  never looked back. Today, we operate six major programs across
                  200+ communities, reaching over 50,000 children every year.
                  But our approach hasn&apos;t changed: we show up, we listen,
                  and we help children shine.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-sand via-warm-gray to-sand rounded-2xl overflow-hidden border border-navy/5 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Star
                      aria-hidden="true"
                      className="w-16 h-16 text-gold/30 fill-gold/15 mx-auto mb-4"
                      strokeWidth={1}
                    />
                    <p className="font-display text-2xl text-navy/30 font-semibold">
                      Serving with Heart
                    </p>
                    <p className="text-navy/20 text-sm mt-1">Since 2009</p>
                  </div>
                </div>
                {/* Decorative accent */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10"
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === MISSION, VISION === */}
      <section className="py-20 sm:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="section-divider mb-8" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy tracking-tight">
              Mission & Vision
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-cream rounded-2xl p-8 sm:p-10 h-full border border-navy/5">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                  <Target
                    aria-hidden="true"
                    className="w-6 h-6 text-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  To provide comprehensive, compassionate support to children
                  across America through education, healthcare, nutrition,
                  mentorship, and emergency aid &mdash; empowering every child
                  to reach their fullest potential.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div className="bg-cream rounded-2xl p-8 sm:p-10 h-full border border-navy/5">
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-5">
                  <Eye
                    aria-hidden="true"
                    className="w-6 h-6 text-coral"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  An America where every child &mdash; regardless of zip code,
                  background, or circumstance &mdash; has access to the
                  resources, opportunities, and encouragement they need to
                  thrive.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === VALUES === */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
              What Guides Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy tracking-tight">
              Our Core Values
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 80}>
                <div className="flex gap-5 p-6 sm:p-7 bg-white rounded-2xl border border-navy/5 card-hover h-full">
                  <div className="w-11 h-11 bg-gold/8 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon
                      aria-hidden="true"
                      className="w-5 h-5 text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-navy/55 leading-relaxed text-[15px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-navy to-midnight starfield">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold/70 text-xs sm:text-sm font-semibold mb-3">
              Our Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Key Milestones
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 sm:-translate-x-px"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <FadeIn key={milestone.year} delay={index * 80}>
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-4 sm:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 sm:-translate-x-1.5 mt-1.5 ring-4 ring-midnight z-10"
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}
                    >
                      <div className="bg-white/5 border border-white/8 rounded-xl p-5 sm:p-6">
                        <span className="text-gold font-display font-bold text-lg">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-white font-semibold mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === LEADERSHIP === */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
              The Team
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy tracking-tight">
              Our Leadership
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person, index) => (
              <FadeIn key={person.name} delay={index * 60}>
                <div className="bg-white rounded-2xl border border-navy/5 p-7 card-hover h-full">
                  <div className="w-14 h-14 bg-sand rounded-full flex items-center justify-center mb-4">
                    <span className="font-display text-lg font-bold text-navy/40">
                      {person.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-0.5">
                    {person.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {person.role}
                  </p>
                  <p className="text-navy/50 text-sm leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-16 sm:py-20 bg-sand">
        <FadeIn className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy mb-4 tracking-tight">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-navy/55 mb-8 max-w-xl mx-auto">
            There are many ways to join the Star Kids family. Find the one that
            fits you.
          </p>
          <Link to="/get-involved" className="btn-gold">
            Get Involved
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
