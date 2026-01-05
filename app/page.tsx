import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import AnimatedStats from '@/components/AnimatedStats'
import SymptomChecker from '@/components/SymptomChecker'
import ClinicShowcase from '@/components/ClinicShowcase'
import FAQAccordion from '@/components/FAQAccordion'
import TrustBadges from '@/components/TrustBadges'
import EmergencyBanner from '@/components/EmergencyBanner'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import MobileNav from '@/components/MobileNav'
import DoctorTimeline from '@/components/DoctorTimeline'
import { siteConfig } from '@/config/siteConfig'

const specialities = [
  {
    title: "Ear Care",
    description: "Treatment for ear infections, hearing loss, tinnitus, and balance disorders with advanced diagnostic tools.",
    image: "/images/specialities/ear.png",
    href: "/specialities/#ear-care"
  },
  {
    title: "Nose & Sinus",
    description: "Expert treatment for sinusitis, nasal congestion, allergies, and breathing difficulties.",
    image: "/images/specialities/nose.png",
    href: "/specialities/#nose-sinus"
  },
  {
    title: "Throat & Voice",
    description: "Comprehensive care for throat infections, voice disorders, and swallowing difficulties.",
    image: "/images/specialities/throat.png",
    href: "/specialities/#throat-voice"
  },
  {
    title: "Hearing & Balance",
    description: "Advanced hearing tests, hearing aid fittings, and treatment for balance disorders.",
    image: "/images/specialities/hearing.png",
    href: "/specialities/#hearing-balance"
  },
  {
    title: "Allergy Treatment",
    description: "Comprehensive allergy testing and immunotherapy to manage seasonal and chronic allergies.",
    image: "/images/specialities/allergy.png",
    href: "/specialities/#allergy"
  },
  {
    title: "ENT Procedures",
    description: "Minimally invasive surgical procedures performed with precision and care.",
    image: "/images/specialities/procedures.png",
    href: "/specialities/#procedures"
  }
]

export const metadata: Metadata = {
  title: 'Home',
  description: 'Premier ENT clinic offering comprehensive ear, nose, throat, hearing, and allergy care with experienced specialists and modern facilities.',
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Premium ENT Clinic',
    description: 'Premier ENT clinic offering comprehensive ear, nose, throat, hearing, and allergy care with experienced specialists and modern facilities.',
    url: 'https://jaywebstudio.in',
    telephone: '+1-234-567-8900',
    email: 'info@entclinic.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Medical Plaza, Healthcare District',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00'
      }
    ],
    medicalSpecialty: 'Otolaryngology',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Ear Care'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Nose & Sinus Treatment'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Throat & Voice Care'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Hearing & Balance Care'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Allergy Treatment'
      }
    ]
  }

  return (
    <>
      <EmergencyBanner />
      {/* <FloatingContactButtons /> - Removed to prevent overlap */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-medical-mint">
        <div className="container-custom py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Care for Your
                <span className="text-primary-600"> Ear, Nose & Throat</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Experience compassionate, comprehensive ENT care from board-certified specialists using the latest medical technology in a comfortable, patient-centered environment.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <CTAButton href="/appointment/">
                  Book Appointment
                </CTAButton>
                <CTAButton href="/specialities/" variant="secondary">
                  Our Specialties
                </CTAButton>
              </div>
              {/* Animated Stats Section */}
              <AnimatedStats
                stats={[
                  {
                    value: siteConfig.stats.yearsExperience,
                    suffix: '+',
                    label: 'Years Experience',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    value: 10000,
                    suffix: '+',
                    label: 'Happy Patients',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    value: siteConfig.stats.successRate,
                    suffix: '%',
                    label: 'Success Rate',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ]}
              />
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-64 h-64 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Comprehensive ENT Specialties
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              From routine checkups to advanced procedures, we provide complete care for all ear, nose, and throat conditions.
            </p>
          </div>

          {/* Mobile Grid Layout (Visible ONLY on Mobile) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {specialities.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col p-0 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 animate-fadeInUp overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                </div>
                <div className="p-3 bg-white w-full text-center relative z-10 -mt-2">
                  <span className="font-semibold text-gray-900 text-sm leading-tight block">
                    {service.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop/Tablet Grid Layout (Detailed Cards) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {specialities.map((service, index) => (
              <ServiceCard
                key={index}
                className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
                featured={index === 0}
                imageSrc={service.image}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <CTAButton href="/specialities/">
              View All Specialties
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Doctor Highlights */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Expert Leadership & Your Path to Recovery
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Meet Dr. Thirishakamalai and discover how we guide you from your first visit to complete recovery with compassionate care.
            </p>
          </div>

          {/* Two Column Layout: Doctor Profile (Left) + Patient Journey (Right) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* LEFT: Doctor Profile Box */}
            <div className="flex">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative flex-1 flex flex-col">

                <div className="grid md:grid-cols-12 gap-0">
                  {/* Profile Photo & Sidebar */}
                  <div className="md:col-span-4 bg-primary-50 p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center mb-6 shadow-md relative z-10 overflow-hidden border-4 border-white">
                      <Image
                        src="/images/specialities/ear.png"
                        alt="Dr. Thirishakamalai"
                        fill
                        className="object-cover"
                      />
                    </div>



                    {/* Experience Timeline */}
                    <div className="w-full">
                      <h4 className="text-sm font-bold text-gray-900 mb-4 text-left">Experience Timeline</h4>
                      <div className="relative pl-6">
                        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 to-gray-300"></div>
                        <div className="space-y-4">
                          <div className="relative">
                            <div className="absolute -left-6 top-0 w-4 h-4 rounded-full bg-primary-600 border-2 border-white shadow"></div>
                            <div className="bg-white/50 rounded p-2 text-left">
                              <span className="inline-block px-1.5 py-0.5 bg-primary-600 text-white rounded text-xs font-bold mb-1">2018</span>
                              <h5 className="font-bold text-gray-900 text-xs mb-0.5">MS ENT</h5>
                              <p className="text-xs text-gray-600">JIPMER Pondicherry</p>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-6 top-0 w-4 h-4 rounded-full bg-gray-400 border-2 border-white shadow"></div>
                            <div className="bg-white/50 rounded p-2 text-left">
                              <span className="inline-block px-1.5 py-0.5 bg-gray-600 text-white rounded text-xs font-bold mb-1">2012</span>
                              <h5 className="font-bold text-gray-900 text-xs mb-0.5">MBBS</h5>
                              <p className="text-xs text-gray-600">Thiruvanamalai Govt Medical College</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="md:col-span-8 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. Thirishakamalai</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <p className="text-lg md:text-xl text-primary-600 font-medium">MBBS, MS ENT</p>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold border border-secondary-100">
                        <span className="mr-1">★</span> 5+ Years Experience
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                      Dedicated Board-Certified Otolaryngologist with a passion for providing comprehensive ENT care. committed to patient well-being and advanced treatment methodologies.
                    </p>

                    {/* Areas of Expertise */}
                    <div className="border-t border-gray-100 pt-6 mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        </svg>
                        Areas of Expertise
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-3">
                        {[
                          "Sinus surgery & rhinoplasty",
                          "Voice disorders",
                          "Pediatric ENT",
                          "Hearing restoration",
                          "Head & neck surgery",
                          "Allergy management"
                        ].map((item) => (
                          <div key={item} className="flex items-center text-gray-700 text-sm">
                            <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex gap-3 pt-6 border-t border-gray-100">
                      <a href="tel:+1234567890" className="flex-1 flex items-center justify-center py-2.5 border border-gray-200 rounded-lg text-primary-600 font-semibold hover:bg-gray-50 transition-colors text-sm">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Clinic
                      </a>
                      <a href="#" className="flex-1 flex items-center justify-center py-2.5 border border-gray-200 rounded-lg text-primary-600 font-semibold hover:bg-gray-50 transition-colors text-sm">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        WhatsApp
                      </a>
                      <a href="/appointment/" className="flex-1 flex items-center justify-center py-2.5 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Patient Journey Timeline */}
            <div className="flex flex-col flex-1">
              {/* Timeline with React-based Animation */}
              <DoctorTimeline />
            </div>
          </div>
        </div>
      </section>



      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left: Symptom Checker */}
            <div className="w-full">
              <SymptomChecker />
            </div>

            {/* Right: Clinic Photo Showcase */}
            <div className="w-full h-full min-h-[500px]">
              <ClinicShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Patient Testimonials
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Hear from our patients about their experience with our care.
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <FAQAccordion
        title="Frequently Asked Questions"
        description="Get answers to common questions about our specialities, appointments, and care."
      />

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Take Control of Your ENT Health?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience compassionate, expert care from our team of specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/appointment/" className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600">
              Book Appointment Now
            </Link>
            <Link href="/contact/" className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
