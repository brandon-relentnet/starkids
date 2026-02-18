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
    ],
  }),
})

const donationTiers = [
  {
    amount: '$25',
    impact: 'Provides school supplies for one child for a semester',
    icon: Gift,
  },
  {
    amount: '$50',
    impact: 'Feeds a child nutritious meals for an entire month',
    icon: Heart,
  },
  {
    amount: '$100',
    impact: 'Funds one month of after-school tutoring for a student',
    icon: Star,
  },
  {
    amount: '$250',
    impact: 'Supplies emergency aid kits for five families in crisis',
    icon: HandHeart,
  },
  {
    amount: '$500',
    impact: 'Sponsors a child in our mentorship program for six months',
    icon: Users,
  },
  {
    amount: '$1,000',
    impact: 'Funds a full summer learning camp scholarship',
    icon: DollarSign,
  },
]

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
      />

      {/* === DONATE === */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Heart
                aria-hidden="true"
                className="w-7 h-7 text-gold"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy tracking-tight mb-3">
              Make a Donation
            </h2>
            <p className="text-navy/55 max-w-2xl mx-auto">
              100% of every donation goes directly to our programs. See the
              impact your generosity creates.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {donationTiers.map((tier, index) => (
              <FadeIn key={tier.amount} delay={index * 60}>
                <div className="group bg-white rounded-2xl border border-navy/5 p-6 sm:p-7 card-hover h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-bold text-navy">
                      {tier.amount}
                    </span>
                    <tier.icon
                      aria-hidden="true"
                      className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-navy/55 text-[15px] leading-relaxed flex-1">
                    {tier.impact}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 text-center">
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
      <section className="py-20 sm:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <HandHeart
                aria-hidden="true"
                className="w-7 h-7 text-coral"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy tracking-tight mb-3">
              Volunteer Your Time
            </h2>
            <p className="text-navy/55 max-w-2xl mx-auto">
              Our 1,200+ volunteers are the backbone of Star Kids. Whatever your
              skills or schedule, there&apos;s a role for you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {volunteerRoles.map((role, index) => (
              <FadeIn key={role.title} delay={index * 60}>
                <div className="bg-cream rounded-2xl border border-navy/5 p-6 sm:p-7 card-hover h-full">
                  <h3 className="font-display text-lg font-semibold text-navy mb-1.5">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gold text-sm font-medium mb-3">
                    <Clock aria-hidden="true" className="w-3.5 h-3.5" />
                    {role.commitment}
                  </div>
                  <p className="text-navy/55 text-[15px] leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 text-center">
            <Link to="/contact" className="btn-outline-dark text-base">
              Apply to Volunteer
              <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* === CORPORATE PARTNERSHIPS === */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center mb-5">
                <Building2
                  aria-hidden="true"
                  className="w-7 h-7 text-sage"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy tracking-tight mb-4">
                Corporate Partnerships
              </h2>
              <p className="text-navy/55 leading-relaxed mb-6">
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

            <FadeIn delay={100}>
              <div className="bg-sand rounded-2xl border border-navy/5 p-7 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-navy mb-5">
                  Partnership Benefits
                </h3>
                <ul className="space-y-3.5">
                  {partnerBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-navy/60 text-[15px]"
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === OTHER WAYS === */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-midnight starfield">
        <FadeIn className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-5 tracking-tight">
            Other Ways to Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'Spread the Word',
                desc: 'Share our mission on social media and with your network.',
              },
              {
                title: 'In-Kind Donations',
                desc: 'Donate supplies, clothing, books, or equipment.',
              },
              {
                title: 'Legacy Giving',
                desc: 'Include Star Kids in your estate or planned giving.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/8 rounded-xl p-5"
              >
                <h3 className="font-display text-white font-semibold mb-1.5 text-sm">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-outline-light text-sm">
            Contact Us to Learn More
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
