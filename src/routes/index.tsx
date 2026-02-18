import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Star,
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  Users,
  ShieldAlert,
  HandHeart,
  Heart,
  ArrowRight,
  Quote,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import StarCanvas from '../components/StarCanvas'
import AnimatedCounter from '../components/AnimatedCounter'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'Star Kids | Helping Every Child Shine' },
      {
        name: 'description',
        content:
          'Star Kids is a 501(c)(3) nonprofit serving 50,000+ children across 200+ communities with education, health, nutrition, and mentorship programs.',
      },
    ],
  }),
})

/* --- Data --- */

const stats = [
  { value: '50,000', suffix: '+', label: 'Children Served', icon: Star },
  { value: '200', suffix: '+', label: 'Communities Reached', icon: HandHeart },
  { value: '1,200', suffix: '+', label: 'Active Volunteers', icon: Users },
  { value: '15', suffix: '+', label: 'Years of Service', icon: Heart },
]

const programs = [
  {
    icon: GraduationCap,
    title: 'Star Scholars',
    description:
      'After-school tutoring, STEM workshops, and scholarship programs that open doors to brighter futures.',
    color: 'text-gold',
    bg: 'bg-gold/8',
    borderAccent: 'group-hover:border-gold/30',
  },
  {
    icon: HeartPulse,
    title: 'Star Wellness',
    description:
      'Healthcare access, mental health support, and youth sports programs to nurture healthy minds and bodies.',
    color: 'text-coral',
    bg: 'bg-coral/8',
    borderAccent: 'group-hover:border-coral/30',
  },
  {
    icon: UtensilsCrossed,
    title: 'Star Plates',
    description:
      'Daily meal programs, food drives, and nutrition education ensuring no child goes hungry.',
    color: 'text-sage',
    bg: 'bg-sage/8',
    borderAccent: 'group-hover:border-sage/30',
  },
  {
    icon: Users,
    title: 'Star Guides',
    description:
      'One-on-one mentorship, career exploration, and life skills workshops that build confidence and character.',
    color: 'text-gold',
    bg: 'bg-gold/8',
    borderAccent: 'group-hover:border-gold/30',
  },
  {
    icon: ShieldAlert,
    title: 'Star Response',
    description:
      'Crisis intervention, disaster relief, and emergency supplies for families facing the unexpected.',
    color: 'text-coral',
    bg: 'bg-coral/8',
    borderAccent: 'group-hover:border-coral/30',
  },
  {
    icon: HandHeart,
    title: 'Star Together',
    description:
      'Community events, holiday programs, and family partnerships that strengthen the bonds around every child.',
    color: 'text-sage',
    bg: 'bg-sage/8',
    borderAccent: 'group-hover:border-sage/30',
  },
]

const testimonials = [
  {
    quote:
      "Star Kids didn't just help my daughter with homework \u2014 they gave her the confidence to believe she could go to college. Today, she's a sophomore on a full scholarship.",
    name: 'Maria Gonzalez',
    role: 'Parent, Dallas TX',
  },
  {
    quote:
      "Volunteering with Star Kids changed my perspective on what community means. Watching a child's face light up when they finally understand a math problem \u2014 that's priceless.",
    name: 'James Chen',
    role: 'Volunteer Tutor',
  },
  {
    quote:
      "When our family lost everything in a house fire, Star Kids was there within 24 hours with clothes, food, and a plan. They didn't just help us survive \u2014 they helped us rebuild.",
    name: 'Angela Williams',
    role: 'Parent, Atlanta GA',
  },
]

/* --- Component --- */

function HomePage() {
  return (
    <div>
      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-midnight via-navy to-navy-light overflow-hidden">
        {/* Canvas starfield */}
        <StarCanvas starCount={250} shootingStarInterval={3500} />

        {/* Atmospheric orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="orb orb-gold w-[600px] h-[600px] -top-48 -left-48"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="orb orb-coral w-[500px] h-[500px] top-1/3 -right-60"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="orb orb-sage w-[400px] h-[400px] -bottom-32 left-1/4"
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          {/* Constellation accent */}
          <div
            className="flex items-center justify-center gap-3 mb-8 animate-fade-in"
            aria-hidden="true"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <Star
              className="w-3.5 h-3.5 text-gold/40 fill-gold/20 animate-star-twinkle"
              strokeWidth={1.5}
            />
            <Sparkles
              className="w-5 h-5 text-gold/60 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '0.8s' }}
            />
            <Star
              className="w-6 h-6 text-gold fill-gold/40 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '0.4s' }}
            />
            <Sparkles
              className="w-5 h-5 text-gold/60 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '1.5s' }}
            />
            <Star
              className="w-3.5 h-3.5 text-gold/40 fill-gold/20 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '2s' }}
            />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          <p
            className="uppercase tracking-[0.3em] text-gold/60 text-xs sm:text-sm font-medium mb-6 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            A 501(c)(3) Nonprofit Organization
          </p>

          <h1
            className="text-hero text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white mb-7 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Every Child
            <br />
            Deserves a Chance
            <br />
            <span className="text-gradient-gold">to Shine</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Through education, healthcare, nutrition, and mentorship, Star Kids
            empowers children and families across America to reach for the
            stars.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '550ms' }}
          >
            <Link to="/get-involved" className="btn-gold text-base">
              <Heart aria-hidden="true" className="w-5 h-5" strokeWidth={2.5} />
              Donate Now
            </Link>
            <Link to="/programs" className="btn-outline-light text-base">
              Our Programs
              <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float"
          aria-hidden="true"
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-gold/50 animate-pulse-soft" />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10"
          aria-hidden="true"
        />
      </section>

      {/* === MISSION STATEMENT === */}
      <section className="relative py-24 sm:py-32 bg-cream aurora-bg">
        <FadeIn
          variant="blur"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="section-divider mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 tracking-tight leading-tight">
            Lighting the Way for
            <br />
            America&apos;s Children
          </h2>
          <p className="text-lg sm:text-xl text-navy/55 leading-relaxed max-w-3xl mx-auto">
            Since our founding, Star Kids has been driven by a simple belief:
            every child, regardless of their circumstances, holds a bright star
            within. Our comprehensive programs provide the support, resources,
            and love children need to let that light shine through.
          </p>
        </FadeIn>
      </section>

      {/* === IMPACT STATS === */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-navy-light via-navy to-midnight starfield overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold/60 text-xs sm:text-sm font-semibold mb-3">
              Our Impact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Making a Measurable Difference
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100} variant="scale">
                <div className="card-glass rounded-2xl p-6 sm:p-8 text-center group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    <stat.icon
                      aria-hidden="true"
                      className="w-6 h-6 text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1.5 tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      duration={2200 + index * 200}
                    />
                    <span className="text-gold">{stat.suffix}</span>
                  </div>
                  <div className="text-sm sm:text-base text-white/40 font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* === PROGRAMS OVERVIEW === */}
      <section className="relative py-24 sm:py-32 bg-cream">
        {/* Subtle decorative background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-20 right-10 w-80 h-80 bg-gold/4 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-sage/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn variant="blur" className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">
              Our Programs
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {programs.map((program, index) => (
              <FadeIn key={program.title} delay={index * 80}>
                <div
                  className={`group p-7 sm:p-8 bg-white rounded-2xl border border-navy/5 ${program.borderAccent} card-3d h-full cursor-default`}
                >
                  <div
                    className={`w-12 h-12 ${program.bg} rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <program.icon
                      aria-hidden="true"
                      className={`w-6 h-6 ${program.color}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">
                    {program.title}
                  </h3>
                  <p className="text-navy/50 leading-relaxed text-[15px]">
                    {program.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors group text-base"
            >
              Explore All Programs
              <ChevronRight
                aria-hidden="true"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-navy-light to-navy overflow-hidden">
        <StarCanvas starCount={100} shootingStarInterval={8000} />

        {/* Orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="orb orb-gold w-[400px] h-[400px] -top-32 right-1/4" />
          <div
            className="orb orb-coral w-[300px] h-[300px] bottom-0 left-10"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn variant="blur" className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-gold/60 text-xs sm:text-sm font-semibold mb-3">
              Stories of Impact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Voices from Our Community
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 120}>
                <div className="card-glass rounded-2xl p-7 sm:p-8 h-full flex flex-col">
                  <Quote
                    aria-hidden="true"
                    className="w-8 h-8 text-gold/25 mb-4 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="text-white/60 leading-relaxed text-[15px] mb-6 flex-1 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-white/6 pt-4 mt-auto">
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gold/50 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gold/6 rounded-full blur-3xl animate-glow-pulse" />
          <div
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl animate-glow-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sage/4 rounded-full blur-3xl animate-glow-pulse"
            style={{ animationDelay: '3s' }}
          />
        </div>

        <FadeIn
          variant="scale"
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="mb-8" aria-hidden="true">
            <Star
              className="w-10 h-10 text-gold fill-gold/30 mx-auto glow-text-gold"
              strokeWidth={1.5}
            />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight leading-tight">
            Help a Child
            <br />
            Reach for the Stars
          </h2>
          <p className="text-lg text-navy/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you donate, volunteer, or spread the word, every action
            creates a ripple of change in a child&apos;s life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-involved" className="btn-gold text-base">
              <Heart aria-hidden="true" className="w-5 h-5" strokeWidth={2.5} />
              Make a Donation
            </Link>
            <Link to="/get-involved" className="btn-outline-dark text-base">
              Become a Volunteer
              <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
