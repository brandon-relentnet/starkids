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
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

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
  { value: '50,000+', label: 'Children Served', icon: Star },
  { value: '200+', label: 'Communities Reached', icon: HandHeart },
  { value: '1,200+', label: 'Active Volunteers', icon: Users },
  { value: '15+', label: 'Years of Service', icon: Heart },
]

const programs = [
  {
    icon: GraduationCap,
    title: 'Star Scholars',
    description:
      'After-school tutoring, STEM workshops, and scholarship programs that open doors to brighter futures.',
    color: 'text-gold',
    bg: 'bg-gold/8',
  },
  {
    icon: HeartPulse,
    title: 'Star Wellness',
    description:
      'Healthcare access, mental health support, and youth sports programs to nurture healthy minds and bodies.',
    color: 'text-coral',
    bg: 'bg-coral/8',
  },
  {
    icon: UtensilsCrossed,
    title: 'Star Plates',
    description:
      'Daily meal programs, food drives, and nutrition education ensuring no child goes hungry.',
    color: 'text-sage',
    bg: 'bg-sage/8',
  },
  {
    icon: Users,
    title: 'Star Guides',
    description:
      'One-on-one mentorship, career exploration, and life skills workshops that build confidence and character.',
    color: 'text-gold',
    bg: 'bg-gold/8',
  },
  {
    icon: ShieldAlert,
    title: 'Star Response',
    description:
      'Crisis intervention, disaster relief, and emergency supplies for families facing the unexpected.',
    color: 'text-coral',
    bg: 'bg-coral/8',
  },
  {
    icon: HandHeart,
    title: 'Star Together',
    description:
      'Community events, holiday programs, and family partnerships that strengthen the bonds around every child.',
    color: 'text-sage',
    bg: 'bg-sage/8',
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
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-midnight via-navy to-navy-light starfield nebula-glow">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          {/* Decorative stars */}
          <div
            className="flex items-center justify-center gap-3 mb-8 animate-fade-in"
            aria-hidden="true"
          >
            <Star
              className="w-4 h-4 text-gold/40 fill-gold/20 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '0s' }}
            />
            <Star
              className="w-5 h-5 text-gold/60 fill-gold/30 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '1.3s' }}
            />
            <Star
              className="w-7 h-7 text-gold fill-gold/50 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '0.6s' }}
            />
            <Star
              className="w-5 h-5 text-gold/60 fill-gold/30 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '2s' }}
            />
            <Star
              className="w-4 h-4 text-gold/40 fill-gold/20 animate-star-twinkle"
              strokeWidth={1.5}
              style={{ animationDelay: '0.8s' }}
            />
          </div>

          <p className="uppercase tracking-[0.25em] text-gold/70 text-xs sm:text-sm font-medium mb-5 animate-fade-in">
            A 501(c)(3) Nonprofit Organization
          </p>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 tracking-tight leading-[1.05] animate-fade-up"
            style={{ animationDelay: '150ms' }}
          >
            Every Child
            <br />
            Deserves a Chance
            <br />
            <span className="text-gradient-gold">to Shine</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            Through education, healthcare, nutrition, and mentorship, Star Kids
            empowers children and families across America to reach for the
            stars.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '450ms' }}
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
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* === MISSION STATEMENT === */}
      <section className="py-20 sm:py-28 bg-cream">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 tracking-tight leading-tight">
            Lighting the Way for
            <br />
            America&apos;s Children
          </h2>
          <p className="text-lg sm:text-xl text-navy/60 leading-relaxed max-w-3xl mx-auto">
            Since our founding, Star Kids has been driven by a simple belief:
            every child, regardless of their circumstances, holds a bright star
            within. Our comprehensive programs provide the support, resources,
            and love children need to let that light shine through.
          </p>
        </FadeIn>
      </section>

      {/* === IMPACT STATS === */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="stagger-child text-center p-6 sm:p-8 bg-cream rounded-2xl shadow-sm"
                >
                  <stat.icon
                    aria-hidden="true"
                    className="w-7 h-7 text-gold mx-auto mb-3"
                    strokeWidth={1.5}
                  />
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-1.5 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-navy/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* === PROGRAMS OVERVIEW === */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold text-xs sm:text-sm font-semibold mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">
              Our Programs
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <FadeIn key={program.title} delay={index * 80}>
                <div className="group p-7 sm:p-8 bg-white rounded-2xl border border-navy/5 card-hover h-full">
                  <div
                    className={`w-12 h-12 ${program.bg} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
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
                  <p className="text-navy/55 leading-relaxed text-[15px]">
                    {program.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors group"
            >
              Explore All Programs
              <ChevronRight
                aria-hidden="true"
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-navy-light to-navy starfield">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-gold/70 text-xs sm:text-sm font-semibold mb-3">
              Stories of Impact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Voices from Our Community
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 100}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-7 sm:p-8 h-full flex flex-col">
                  <Quote
                    aria-hidden="true"
                    className="w-8 h-8 text-gold/30 mb-4 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="text-white/70 leading-relaxed text-[15px] mb-6 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-white/8 pt-4">
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-white/40 text-sm">
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
      <section className="relative py-20 sm:py-28 bg-cream overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-coral/8 rounded-full blur-3xl" />
        </div>

        <FadeIn className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star
            aria-hidden="true"
            className="w-10 h-10 text-gold fill-gold/30 mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight leading-tight">
            Help a Child
            <br />
            Reach for the Stars
          </h2>
          <p className="text-lg text-navy/55 mb-10 max-w-xl mx-auto leading-relaxed">
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
