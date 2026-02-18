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
  Sparkles,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import AnimatedCounter from '../components/AnimatedCounter'

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
      { property: 'og:title', content: 'About Us | Star Kids' },
      {
        property: 'og:description',
        content:
          'Learn about Star Kids, our mission to empower every child in America, our leadership team, and our 15+ year history of service.',
      },
      {
        property: 'og:url',
        content: 'https://starkids.relentnet.dev/about',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://starkids.relentnet.dev/about' }],
  }),
})

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description:
      'Every decision we make begins with empathy. We see the child, not the circumstance, and respond with genuine care.',
    accent: 'coral',
  },
  {
    icon: Shield,
    title: 'Unwavering Integrity',
    description:
      'We are transparent stewards of every dollar and every promise. Our community trusts us because we earn it daily.',
    accent: 'gold',
  },
  {
    icon: Lightbulb,
    title: 'Bold Innovation',
    description:
      'The problems we tackle are complex. We embrace creative solutions, measure what matters, and adapt quickly.',
    accent: 'sage',
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description:
      'We serve all children regardless of background. Diversity is our strength, equity is our commitment.',
    accent: 'coral',
  },
]

const accentColorMap: Record<string, { bg: string; text: string }> = {
  coral: { bg: 'bg-coral/10', text: 'text-coral' },
  gold: { bg: 'bg-gold/10', text: 'text-gold' },
  sage: { bg: 'bg-sage/10', text: 'text-sage' },
}

const leadership = [
  {
    name: 'Sarah Mitchell',
    role: 'Executive Director',
    bio: '20+ years in nonprofit leadership. Former director at United Way. Passionate about systemic change for children.',
    initials: 'SM',
  },
  {
    name: 'David Okafor',
    role: 'Director of Programs',
    bio: 'Education policy expert and former school principal. Designs and oversees all Star Kids programming.',
    initials: 'DO',
  },
  {
    name: 'Dr. Lisa Chen',
    role: 'Director of Health Initiatives',
    bio: 'Pediatrician turned public health advocate. Leads our wellness and nutrition programs nationwide.',
    initials: 'LC',
  },
  {
    name: 'Marcus Rivera',
    role: 'Director of Community Engagement',
    bio: 'Community organizer with deep roots in grassroots mobilization. Builds the bridges that connect families to resources.',
    initials: 'MR',
  },
  {
    name: 'Jennifer Blackwood',
    role: 'Chief Financial Officer',
    bio: 'CPA with 15 years in nonprofit finance. Ensures every dollar creates maximum impact for children.',
    initials: 'JB',
  },
  {
    name: 'Robert Nguyen',
    role: 'Director of Volunteer Operations',
    bio: 'Former AmeriCorps leader who has recruited and trained thousands of volunteers across the country.',
    initials: 'RN',
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

const impactStats = [
  { value: '50,000', suffix: '+', label: 'Children Served' },
  { value: '200', suffix: '+', label: 'Communities' },
  { value: '6', suffix: '', label: 'Core Programs' },
  { value: '93', suffix: '%', label: 'Funds to Programs' },
]

function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Star Kids"
        subtitle="For over 15 years, we've been dedicated to one mission: ensuring every child in America has the opportunity to thrive."
        large
      />

      {/* === OUR STORY === */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        {/* Subtle background orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-20 right-0 w-96 h-96 bg-gold/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-sage/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn variant="left">
              <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
                Our Story
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 tracking-tight leading-tight">
                Born from a<br />
                Simple Question
              </h2>
              <div className="space-y-4 text-navy/55 leading-relaxed text-[15px] sm:text-base">
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

            <FadeIn variant="right" delay={100}>
              <div className="relative">
                {/* Image placeholder with atmospheric design */}
                <div className="aspect-[4/3] bg-gradient-to-br from-sand via-warm-gray to-sand rounded-2xl overflow-hidden border border-navy/5 flex items-center justify-center relative">
                  {/* Decorative inner orbs */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="absolute top-6 right-6 w-32 h-32 bg-gold/8 rounded-full blur-2xl" />
                    <div className="absolute bottom-6 left-6 w-24 h-24 bg-coral/6 rounded-full blur-2xl" />
                  </div>
                  <div className="text-center px-8 relative z-10">
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
                {/* Decorative accents */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-3 -left-3 w-16 h-16 bg-sage/8 rounded-2xl -z-10"
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === IMPACT AT A GLANCE === */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy-light via-navy to-midnight starfield overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn variant="blur" className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-gold/60 text-xs sm:text-sm font-semibold mb-3">
              At a Glance
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Our Impact in Numbers
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {impactStats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100} variant="scale">
                <div className="card-glass rounded-2xl p-5 sm:p-6 text-center">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      duration={2000 + index * 200}
                    />
                    <span className="text-gold">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-white/40 font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* === MISSION, VISION === */}
      <section className="relative py-24 sm:py-32 bg-sand overflow-hidden aurora-bg">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn variant="blur" className="text-center mb-14">
            <div className="section-divider mb-8" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">
              Mission & Vision
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <FadeIn variant="left">
              <div className="bg-cream rounded-2xl p-8 sm:p-10 h-full border border-navy/5 card-hover relative overflow-hidden">
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-5">
                    <Target
                      aria-hidden="true"
                      className="w-7 h-7 text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                    Our Mission
                  </h3>
                  <p className="text-navy/55 leading-relaxed">
                    To provide comprehensive, compassionate support to children
                    across America through education, healthcare, nutrition,
                    mentorship, and emergency aid &mdash; empowering every child
                    to reach their fullest potential.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn variant="right" delay={80}>
              <div className="bg-cream rounded-2xl p-8 sm:p-10 h-full border border-navy/5 card-hover relative overflow-hidden">
                {/* Accent glow */}
                <div
                  className="absolute bottom-0 left-0 w-40 h-40 bg-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center mb-5">
                    <Eye
                      aria-hidden="true"
                      className="w-7 h-7 text-coral"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                    Our Vision
                  </h3>
                  <p className="text-navy/55 leading-relaxed">
                    An America where every child &mdash; regardless of zip code,
                    background, or circumstance &mdash; has access to the
                    resources, opportunities, and encouragement they need to
                    thrive.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === VALUES === */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-coral/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn variant="blur" className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
              What Guides Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">
              Our Core Values
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {values.map((value, index) => {
              const colors = accentColorMap[value.accent] ?? accentColorMap.gold
              return (
                <FadeIn
                  key={value.title}
                  delay={index * 80}
                  variant={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="flex gap-5 p-6 sm:p-8 bg-white rounded-2xl border border-navy/5 card-3d h-full">
                    <div
                      className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <value.icon
                        aria-hidden="true"
                        className={`w-6 h-6 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy mb-2">
                        {value.title}
                      </h3>
                      <p className="text-navy/50 leading-relaxed text-[15px]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-navy to-midnight starfield overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn variant="blur" className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-gold/60 text-xs sm:text-sm font-semibold mb-3">
              Our Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Key Milestones
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line with glow */}
            <div
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px"
              aria-hidden="true"
            >
              <div className="w-full h-full bg-gradient-to-b from-gold/30 via-gold/15 to-gold/5" />
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn
                  key={milestone.year}
                  delay={index * 100}
                  variant={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  >
                    {/* Dot with glow */}
                    <div
                      className="absolute left-4 sm:left-1/2 w-3.5 h-3.5 bg-gold rounded-full -translate-x-[7px] sm:-translate-x-[7px] mt-1.5 z-10"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-gold rounded-full animate-glow-pulse" />
                      <div className="absolute inset-[-4px] border-2 border-gold/20 rounded-full" />
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}
                    >
                      <div className="card-glass rounded-xl p-5 sm:p-6 group">
                        <span className="font-display font-bold text-xl text-gold glow-text-gold">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-white font-semibold text-lg mt-1.5 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-white/45 text-sm leading-relaxed">
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
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sage/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn variant="blur" className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
              The Team
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">
              Our Leadership
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {leadership.map((person, index) => (
              <FadeIn key={person.name} delay={index * 60} variant="scale">
                <div className="bg-white rounded-2xl border border-navy/5 p-7 card-3d h-full group relative overflow-hidden">
                  {/* Hover accent */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-gold/0 group-hover:bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-sand to-warm-gray rounded-full flex items-center justify-center mb-4 group-hover:from-gold/10 group-hover:to-gold/5 transition-colors duration-300">
                      <span className="font-display text-lg font-bold text-navy/40 group-hover:text-gold transition-colors duration-300">
                        {person.initials}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy mb-0.5">
                      {person.name}
                    </h3>
                    <p className="text-gold text-sm font-medium mb-3">
                      {person.role}
                    </p>
                    <p className="text-navy/45 text-sm leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative py-24 sm:py-28 bg-sand overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold/6 rounded-full blur-3xl animate-glow-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl animate-glow-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        <FadeIn
          variant="scale"
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="mb-6" aria-hidden="true">
            <Sparkles className="w-8 h-8 text-gold mx-auto" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-4 tracking-tight leading-tight">
            Want to Be Part of
            <br />
            Our Story?
          </h2>
          <p className="text-navy/50 mb-10 max-w-xl mx-auto leading-relaxed">
            There are many ways to join the Star Kids family. Find the one that
            fits you.
          </p>
          <Link to="/get-involved" className="btn-gold text-base">
            Get Involved
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
