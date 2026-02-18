import { createFileRoute, Link } from '@tanstack/react-router'
import {
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  Users,
  ShieldAlert,
  HandHeart,
  Star,
  Heart,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import AnimatedCounter from '../components/AnimatedCounter'

export const Route = createFileRoute('/programs')({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: 'Our Programs | Star Kids' },
      {
        name: 'description',
        content:
          'Discover Star Kids six core programs: Star Scholars, Star Wellness, Star Plates, Star Guides, Star Response, and Star Together.',
      },
      { property: 'og:title', content: 'Our Programs | Star Kids' },
      {
        property: 'og:description',
        content:
          'Discover Star Kids six core programs providing education, healthcare, nutrition, mentorship, emergency aid, and community support.',
      },
      {
        property: 'og:url',
        content: 'https://starkids.relentnet.dev/programs',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://starkids.relentnet.dev/programs',
      },
    ],
  }),
})

const programs = [
  {
    id: 'scholars',
    icon: GraduationCap,
    title: 'Star Scholars',
    tagline: 'Unlocking potential through education',
    description:
      'Every child deserves access to quality education and the support to succeed academically. Star Scholars provides comprehensive educational support to bridge opportunity gaps.',
    color: 'text-gold',
    bg: 'bg-gold/8',
    borderColor: 'border-gold/20',
    glowColor: 'bg-gold/5',
    features: [
      'After-school tutoring in core subjects',
      'STEM workshops and coding camps',
      'SAT/ACT preparation programs',
      'College readiness and scholarship guidance',
      'Summer learning camps to prevent learning loss',
      'Reading buddies program for early literacy',
    ],
    stat: '12,000',
    statSuffix: '+',
    statLabel: 'students tutored annually',
  },
  {
    id: 'wellness',
    icon: HeartPulse,
    title: 'Star Wellness',
    tagline: 'Nurturing healthy minds and bodies',
    description:
      'Physical and mental health are the foundation of a child\u2019s ability to learn, grow, and thrive. Star Wellness ensures no child is held back by preventable health barriers.',
    color: 'text-coral',
    bg: 'bg-coral/8',
    borderColor: 'border-coral/20',
    glowColor: 'bg-coral/5',
    features: [
      'Free health screenings and check-ups',
      'Mental health counseling and support groups',
      'Youth sports leagues and fitness programs',
      'Health education workshops',
      'Vision and dental care referrals',
      'Trauma-informed care training for families',
    ],
    stat: '8,500',
    statSuffix: '+',
    statLabel: 'health screenings provided',
  },
  {
    id: 'plates',
    icon: UtensilsCrossed,
    title: 'Star Plates',
    tagline: 'No child should go hungry',
    description:
      'Hunger is one of the most immediate barriers to a child\u2019s success. Star Plates fights food insecurity head-on with daily meals, emergency food assistance, and nutrition education.',
    color: 'text-sage',
    bg: 'bg-sage/8',
    borderColor: 'border-sage/20',
    glowColor: 'bg-sage/5',
    features: [
      'Daily after-school and weekend meal programs',
      'Summer meal service in underserved areas',
      'Community food drives and pantry partnerships',
      'Nutrition education for children and parents',
      'Holiday meal baskets for families in need',
      'School breakfast backpack programs',
    ],
    stat: '500,000',
    statSuffix: '+',
    statLabel: 'meals served last year',
  },
  {
    id: 'guides',
    icon: Users,
    title: 'Star Guides',
    tagline: 'Every child needs a champion',
    description:
      'A caring adult mentor can change the trajectory of a child\u2019s life. Star Guides connects young people with trained mentors who provide guidance, encouragement, and real-world wisdom.',
    color: 'text-gold',
    bg: 'bg-gold/8',
    borderColor: 'border-gold/20',
    glowColor: 'bg-gold/5',
    features: [
      'One-on-one mentor matching',
      'Career exploration and job shadowing',
      'Life skills and financial literacy workshops',
      'Leadership development programs',
      'Group mentoring circles',
      'College and trade school campus visits',
    ],
    stat: '3,200',
    statSuffix: '+',
    statLabel: 'active mentor-mentee pairs',
  },
  {
    id: 'response',
    icon: ShieldAlert,
    title: 'Star Response',
    tagline: 'There when families need us most',
    description:
      'When crisis strikes, children are the most vulnerable. Star Response provides rapid, compassionate assistance to families facing emergencies \u2014 from natural disasters to personal hardship.',
    color: 'text-coral',
    bg: 'bg-coral/8',
    borderColor: 'border-coral/20',
    glowColor: 'bg-coral/5',
    features: [
      'Emergency supply kits (clothing, hygiene, school supplies)',
      'Disaster relief coordination',
      'Temporary housing assistance referrals',
      'Crisis counseling for children and families',
      'Utility and rent assistance for families in crisis',
      'Back-to-school drives for displaced families',
    ],
    stat: '4,800',
    statSuffix: '+',
    statLabel: 'families assisted in emergencies',
  },
  {
    id: 'together',
    icon: HandHeart,
    title: 'Star Together',
    tagline: 'Stronger communities, brighter futures',
    description:
      'Children thrive when they are surrounded by strong communities. Star Together builds those connections through events, partnerships, and family-strengthening programs.',
    color: 'text-sage',
    bg: 'bg-sage/8',
    borderColor: 'border-sage/20',
    glowColor: 'bg-sage/5',
    features: [
      'Community festivals and family fun days',
      'Holiday gift drives and celebrations',
      'Parent support groups and workshops',
      'Community garden and beautification projects',
      'Partnerships with local businesses and churches',
      'Youth volunteer and service-learning opportunities',
    ],
    stat: '150',
    statSuffix: '+',
    statLabel: 'community events hosted annually',
  },
]

function ProgramsPage() {
  return (
    <div>
      <PageHero
        title="Our Programs"
        subtitle="Six comprehensive programs working together to support the whole child \u2014 mind, body, and spirit."
        large
      />

      {/* === PROGRAMS === */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {programs.map((program, index) => (
              <div key={program.id}>
                <div
                  id={program.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
                >
                  {/* Content */}
                  <FadeIn
                    variant={index % 2 === 0 ? 'left' : 'right'}
                    className={index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}
                  >
                    <div
                      className={`w-14 h-14 ${program.bg} rounded-2xl flex items-center justify-center mb-5`}
                    >
                      <program.icon
                        aria-hidden="true"
                        className={`w-7 h-7 ${program.color}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-navy mb-2 tracking-tight">
                      {program.title}
                    </h2>
                    <p
                      className={`${program.color} font-medium text-sm mb-5 italic`}
                    >
                      {program.tagline}
                    </p>
                    <p className="text-navy/55 leading-relaxed mb-7 text-[15px] sm:text-base">
                      {program.description}
                    </p>

                    {/* Stat highlight with animated counter */}
                    <div
                      className={`inline-flex items-center gap-3 px-5 py-3.5 ${program.bg} rounded-xl`}
                    >
                      <Star
                        aria-hidden="true"
                        className={`w-5 h-5 ${program.color}`}
                        strokeWidth={1.5}
                      />
                      <div>
                        <span className="font-display text-xl font-bold text-navy">
                          <AnimatedCounter
                            value={program.stat}
                            duration={1800}
                          />
                          {program.statSuffix}
                        </span>
                        <span className="text-navy/45 text-sm ml-1.5">
                          {program.statLabel}
                        </span>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Features */}
                  <FadeIn
                    variant={index % 2 === 0 ? 'right' : 'left'}
                    delay={100}
                    className={index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}
                  >
                    <div
                      className={`bg-white rounded-2xl border ${program.borderColor} p-7 sm:p-8 card-hover relative overflow-hidden`}
                    >
                      {/* Accent glow in corner */}
                      <div
                        className={`absolute -top-10 -right-10 w-40 h-40 ${program.glowColor} rounded-full blur-3xl pointer-events-none`}
                        aria-hidden="true"
                      />
                      <div className="relative z-10">
                        <h3 className="font-display text-lg font-semibold text-navy mb-5">
                          What This Program Provides
                        </h3>
                        <ul className="space-y-3.5">
                          {program.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-navy/55 text-[15px]"
                            >
                              <CheckCircle
                                aria-hidden="true"
                                className={`w-5 h-5 ${program.color} flex-shrink-0 mt-0.5`}
                                strokeWidth={1.5}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Divider between programs */}
                {index < programs.length - 1 && (
                  <FadeIn variant="scale">
                    <div
                      className="flex items-center justify-center gap-3 mt-20 sm:mt-28"
                      aria-hidden="true"
                    >
                      <div className="w-16 h-px bg-gradient-to-r from-transparent to-navy/10" />
                      <Star
                        className="w-4 h-4 text-gold/30 fill-gold/15"
                        strokeWidth={1.5}
                      />
                      <Sparkles
                        className="w-3 h-3 text-gold/20"
                        strokeWidth={1.5}
                      />
                      <div className="w-16 h-px bg-gradient-to-l from-transparent to-navy/10" />
                    </div>
                  </FadeIn>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-navy to-midnight starfield overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Orbs */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="orb orb-gold w-[400px] h-[400px] -top-32 left-1/2 -translate-x-1/2" />
          </div>

          <FadeIn variant="scale" className="relative z-10">
            <Star
              aria-hidden="true"
              className="w-10 h-10 text-gold fill-gold/30 mx-auto mb-6 glow-text-gold"
              strokeWidth={1.5}
            />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 tracking-tight leading-tight">
              Help Us Expand
              <br />
              These Programs
            </h2>
            <p className="text-lg text-white/45 mb-10 max-w-xl mx-auto leading-relaxed">
              Every donation, volunteer hour, and partnership helps us reach
              more children. Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/get-involved" className="btn-gold text-base">
                <Heart
                  aria-hidden="true"
                  className="w-5 h-5"
                  strokeWidth={2.5}
                />
                Support Our Programs
              </Link>
              <Link to="/contact" className="btn-outline-light text-base">
                Partner With Us
                <ArrowRight aria-hidden="true" className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
