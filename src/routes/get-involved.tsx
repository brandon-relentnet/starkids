import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Heart,
  HandHeart,
  Building2,
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  Gift,
  Repeat,
  Briefcase,
  CheckCircle,
  Sparkles,
  Share2,
  Package,
  ScrollText,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'

export const Route = createFileRoute('/get-involved')({
  component: GetInvolvedPage,
  head: () => ({
    meta: [
      { title: 'Get Involved | Star Kids' },
      {
        name: 'description',
        content:
          'Make a difference in a child\u2019s life. Donate, volunteer, or partner with Star Kids to help children across America.',
      },
      { property: 'og:title', content: 'Get Involved | Star Kids' },
      {
        property: 'og:description',
        content:
          'Make a difference in a child\u2019s life. Donate, volunteer, or partner with Star Kids to help children across America.',
      },
      {
        property: 'og:url',
        content: 'https://starkids.relentnet.dev/get-involved',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://starkids.relentnet.dev/get-involved',
      },
    ],
  }),
})

const donationTiers = [
  {
    amount: '$25',
    impact: 'Provides school supplies for one child for a semester',
    icon: Gift,
    accent: 'sage',
  },
  {
    amount: '$50',
    impact: 'Feeds a child nutritious meals for an entire month',
    icon: Heart,
    accent: 'coral',
  },
  {
    amount: '$100',
    impact: 'Funds one month of after-school tutoring for a student',
    icon: Star,
    accent: 'gold',
    featured: true,
  },
  {
    amount: '$250',
    impact: 'Supplies emergency aid kits for five families in crisis',
    icon: HandHeart,
    accent: 'coral',
  },
  {
    amount: '$500',
    impact: 'Sponsors a child in our mentorship program for six months',
    icon: Users,
    accent: 'sage',
  },
  {
    amount: '$1,000',
    impact: 'Funds a full summer learning camp scholarship',
    icon: DollarSign,
    accent: 'gold',
  },
]

const accentMap: Record<string, { bg: string; border: string; text: string }> =
  {
    gold: {
      bg: 'bg-gold/8',
      border: 'border-gold/20',
      text: 'text-gold',
    },
    coral: {
      bg: 'bg-coral/8',
      border: 'border-coral/20',
      text: 'text-coral',
    },
    sage: {
      bg: 'bg-sage/8',
      border: 'border-sage/20',
      text: 'text-sage',
    },
  }

const volunteerRoles = [
  {
    title: 'Tutoring & Mentorship',
    commitment: '2-4 hours/week',
    description:
      'Work directly with students on academics, or serve as a one-on-one mentor to a young person in your community.',
  },
  {
    title: 'Event Support',
    commitment: 'Flexible schedule',
    description:
      'Help organize and run community events, holiday drives, health fairs, and family fun days.',
  },
  {
    title: 'Meal Service',
    commitment: '3-5 hours/week',
    description:
      'Prepare and serve meals at our after-school and weekend programs, or help coordinate food drives.',
  },
  {
    title: 'Administrative Support',
    commitment: '5-10 hours/week',
    description:
      'Use your professional skills in marketing, finance, IT, or operations to strengthen our organization.',
  },
  {
    title: 'Fundraising',
    commitment: 'Project-based',
    description:
      'Help plan and execute fundraising campaigns, grant writing, or donor outreach efforts.',
  },
  {
    title: 'Emergency Response',
    commitment: 'On-call',
    description:
      'Be part of our rapid response team that mobilizes to help families during natural disasters or personal crises.',
  },
]

const partnerBenefits = [
  'Employee volunteer opportunities and team-building events',
  'Brand visibility through co-branded programs and events',
  'Impact reports demonstrating your company\u2019s community contribution',
  'Tax benefits as a 501(c)(3) donor',
  'Invitations to exclusive partner appreciation events',
  'Opportunities to serve on advisory committees',
]

function GetInvolvedPage() {
  return (
    <div>
      <PageHero
        title="Get Involved"
        subtitle="Every action \u2014 big or small \u2014 creates a ripple of change in a child's life. Find your way to make a difference."
        large
      />

      {/* === DONATE === */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-20 right-1/4 w-96 h-96 bg-gold/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-coral/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn variant="blur" className="text-center mb-14">
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Heart
                aria-hidden="true"
                className="w-8 h-8 text-gold"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy tracking-tight mb-3">
              Make a Donation
            </h2>
            <p className="text-navy/50 max-w-2xl mx-auto leading-relaxed">
              100% of every donation goes directly to our programs. See the
              impact your generosity creates.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {donationTiers.map((tier, index) => {
              const colors = accentMap[tier.accent] ?? accentMap.gold
              return (
                <FadeIn key={tier.amount} delay={index * 60} variant="scale">
                  <div
                    className={`group bg-white rounded-2xl border ${tier.featured ? `${colors.border} ring-1 ring-gold/10` : 'border-navy/5'} p-6 sm:p-7 card-3d h-full flex flex-col relative overflow-hidden`}
                  >
                    {/* Featured badge */}
                    {tier.featured && (
                      <div className="absolute top-3 right-3 bg-gold/10 text-gold text-xs font-semibold px-2.5 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    {/* Hover glow */}
                    <div
                      className={`absolute -bottom-10 -right-10 w-32 h-32 ${colors.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display text-3xl font-bold text-navy">
                          {tier.amount}
                        </span>
                        <div
                          className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center`}
                        >
                          <tier.icon
                            aria-hidden="true"
                            className={`w-5 h-5 ${colors.text} group-hover:scale-110 transition-transform`}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <p className="text-navy/50 text-[15px] leading-relaxed flex-1">
                        {tier.impact}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-gold text-base">
                <Heart
                  aria-hidden="true"
                  className="w-5 h-5"
                  strokeWidth={2.5}
                />
                Donate Now
              </Link>
              <div className="flex items-center gap-2 text-navy/40 text-sm">
                <Repeat aria-hidden="true" className="w-4 h-4" />
                Monthly giving options available
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* === VOLUNTEER === */}
      <section className="relative py-24 sm:py-32 bg-sand overflow-hidden aurora-bg">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn variant="blur" className="text-center mb-14">
            <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <HandHeart
                aria-hidden="true"
                className="w-8 h-8 text-coral"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy tracking-tight mb-3">
              Volunteer Your Time
            </h2>
            <p className="text-navy/50 max-w-2xl mx-auto leading-relaxed">
              Our 1,200+ volunteers are the backbone of Star Kids. Whatever your
              skills or schedule, there&apos;s a role for you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {volunteerRoles.map((role, index) => (
              <FadeIn
                key={role.title}
                delay={index * 60}
                variant={index < 3 ? 'left' : 'right'}
              >
                <div className="bg-cream rounded-2xl border border-navy/5 p-6 sm:p-7 card-hover h-full group">
                  <h3 className="font-display text-lg font-semibold text-navy mb-1.5 group-hover:text-coral transition-colors duration-300">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gold text-sm font-medium mb-3">
                    <Clock aria-hidden="true" className="w-3.5 h-3.5" />
                    {role.commitment}
                  </div>
                  <p className="text-navy/50 text-[15px] leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <Link to="/contact" className="btn-outline-dark text-base">
              Apply to Volunteer
              <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* === CORPORATE PARTNERSHIPS === */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn variant="left">
              <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mb-5">
                <Building2
                  aria-hidden="true"
                  className="w-8 h-8 text-sage"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-navy tracking-tight mb-4">
                Corporate Partnerships
              </h2>
              <p className="text-navy/50 leading-relaxed mb-8 text-[15px] sm:text-base">
                Partner with Star Kids to create meaningful community impact
                while engaging your employees and strengthening your brand. We
                work with organizations of all sizes to design partnerships that
                align with your values and goals.
              </p>
              <Link to="/contact" className="btn-gold">
                <Briefcase aria-hidden="true" className="w-5 h-5" />
                Become a Partner
              </Link>
            </FadeIn>

            <FadeIn variant="right" delay={100}>
              <div className="bg-sand rounded-2xl border border-navy/5 p-7 sm:p-9 card-hover relative overflow-hidden">
                {/* Accent glow */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-sage/5 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-semibold text-navy mb-6">
                    Partnership Benefits
                  </h3>
                  <ul className="space-y-4">
                    {partnerBenefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-navy/55 text-[15px]"
                      >
                        <CheckCircle
                          aria-hidden="true"
                          className="w-5 h-5 text-sage flex-shrink-0 mt-0.5"
                          strokeWidth={1.5}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === OTHER WAYS === */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-navy to-midnight starfield overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn variant="blur" className="text-center mb-12">
            <Sparkles
              aria-hidden="true"
              className="w-8 h-8 text-gold/60 mx-auto mb-4"
              strokeWidth={1.5}
            />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3 tracking-tight">
              Other Ways to Help
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: Share2,
                title: 'Spread the Word',
                desc: 'Share our mission on social media and with your network.',
              },
              {
                icon: Package,
                title: 'In-Kind Donations',
                desc: 'Donate supplies, clothing, books, or equipment.',
              },
              {
                icon: ScrollText,
                title: 'Legacy Giving',
                desc: 'Include Star Kids in your estate or planned giving.',
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 100} variant="scale">
                <div className="card-glass rounded-2xl p-6 sm:p-7 text-center group h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    <item.icon
                      aria-hidden="true"
                      className="w-6 h-6 text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Link to="/contact" className="btn-outline-light text-base">
              Contact Us to Learn More
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
