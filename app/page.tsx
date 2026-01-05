import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import AnimatedStats from '@/components/AnimatedStats'
import PatientJourney from '@/components/PatientJourney'
import SymptomChecker from '@/components/SymptomChecker'
import FAQAccordion from '@/components/FAQAccordion'
import TrustBadges from '@/components/TrustBadges'
import EmergencyBanner from '@/components/EmergencyBanner'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import MobileNav from '@/components/MobileNav'
import { siteConfig } from '@/config/siteConfig'

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
        name: 'Hearing & Balance Services'
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
                <CTAButton href="/services/" variant="secondary">
                  Our Specialties
                </CTAButton>
              </div>
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

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Row 1 - Featured Large Card */}
            <ServiceCard
              className="md:col-span-2 lg:col-span-1"
              featured={true}
              icon={
                <Image
                  src="/images/1.png"
                  alt="Ear Care Icon"
                  width={48}
                  height={48}
                  className="object-contain filter brightness-0 saturate-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              }
              title="Ear Care"
              description="Treatment for ear infections, hearing loss, tinnitus, and balance disorders with advanced diagnostic tools."
              href="/services/#ear-care"
            />
            <ServiceCard
              icon={
                <Image
                  src="/images/2.png"
                  alt="Nose & Sinus Icon"
                  width={40}
                  height={40}
                  className="object-contain filter brightness-0 saturate-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              }
              title="Nose & Sinus"
              description="Expert treatment for sinusitis, nasal congestion, allergies, and breathing difficulties."
              href="/services/#nose-sinus"
            />
            <ServiceCard
              icon={
                <Image
                  src="/images/3.png"
                  alt="Throat & Voice Icon"
                  width={40}
                  height={40}
                  className="object-contain filter brightness-0 saturate-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              }
              title="Throat & Voice"
              description="Comprehensive care for throat infections, voice disorders, and swallowing difficulties."
              href="/services/#throat-voice"
            />

            {/* Row 2 */}
            <ServiceCard
              icon={
                <Image
                  src="/images/4.png"
                  alt="Hearing & Balance Icon"
                  width={40}
                  height={40}
                  className="object-contain filter brightness-0 saturate-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              }
              title="Hearing & Balance"
              description="Advanced hearing tests, hearing aid fittings, and treatment for balance disorders."
              href="/services/#hearing-balance"
            />
            <ServiceCard
              icon={
                <Image
                  src="/images/5.png"
                  alt="Allergy Treatment Icon"
                  width={40}
                  height={40}
                  className="object-contain filter brightness-0 saturate-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              }
              title="Allergy Treatment"
              description="Comprehensive allergy testing and immunotherapy to manage seasonal and chronic allergies."
              href="/services/#allergy"
            />
            <ServiceCard
              icon={
                <Image
                  src="/images/6.png"
                  alt="ENT Procedures Icon"
                  width={40}
                  height={40}
                  className="object-contain filter brightness-0 saturate-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              }
              title="ENT Procedures"
              description="Minimally invasive surgical procedures performed with precision and care."
              href="/services/#procedures"
            />
          </div>

          <div className="text-center mt-10 md:mt-14">
            <CTAButton href="/services/">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Doctor Highlights */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Our board-certified ENT specialists bring decades of combined experience and are committed to providing exceptional care.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-sm md:max-w-4xl mx-auto relative mb-24 md:mb-0">
            {/* Floating Experience Badge */}
            <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-3 text-center border border-gray-100 z-10 hidden md:block">
              <span className="block text-3xl font-bold text-primary-600">5+</span>
              <span className="text-xs text-gray-500 font-medium">Years Experience</span>
            </div>

            <div className="grid md:grid-cols-12 gap-0">
              {/* Doctor Image & Quick Stats - Left Side */}
              <div className="md:col-span-4 bg-primary-50 p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-full flex items-center justify-center mb-8 shadow-md z-10 mx-auto">
                  <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Classic Vertical Timeline Graph - Now in Left Column */}
                <div className="w-full mt-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-6 text-left">Experience Timeline</h4>

                  <div className="relative pl-8">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-gray-300"></div>

                    {/* Timeline Items */}
                    <div className="space-y-6">
                      {/* 2018 Entry */}
                      <div className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow-md flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="bg-white/50 rounded-lg p-3 text-left">
                          <span className="inline-block px-2 py-0.5 bg-primary-600 text-white rounded text-xs font-bold mb-2">2018</span>
                          <h5 className="font-bold text-gray-900 text-sm mb-1">MS ENT</h5>
                          <p className="text-xs text-gray-700 mb-0.5">JIPMER Pondicherry</p>
                          <p className="text-xs text-gray-500 italic">Prestigious Medical Institution</p>
                        </div>
                      </div>

                      {/* 2012 Entry */}
                      <div className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gray-400 border-4 border-white shadow-md flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="bg-white/50 rounded-lg p-3 text-left">
                          <span className="inline-block px-2 py-0.5 bg-gray-600 text-white rounded text-xs font-bold mb-2">2012</span>
                          <h5 className="font-bold text-gray-900 text-sm mb-1">MBBS</h5>
                          <p className="text-xs text-gray-700 mb-0.5">Thiruvanamalai Govt Medical College</p>
                          <p className="text-xs text-gray-500 italic">Foundational Medical Training</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Info - Right Side */}
              <div className="md:col-span-8 p-6 md:p-12 pb-0 md:pb-12">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. Thirishakamalai</h3>
                  <p className="text-lg md:text-xl text-primary-600 font-medium mb-4">MBBS, MS ENT</p>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Dedicated Board-Certified Otolaryngologist with a passion for providing comprehensive ENT care. committed to patient well-being and advanced treatment methodologies.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6 md:pt-8 mb-6 md:mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    Areas of Expertise
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-4">
                    {[
                      "Sinus surgery & rhinoplasty",
                      "Voice disorders",
                      "Pediatric ENT",
                      "Hearing restoration",
                      "Head & neck surgery",
                      "Allergy management"
                    ].map((item) => (
                      <div key={item} className="flex items-center text-gray-700 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-500 mr-2 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DESKTOP Action Menu (Hidden on Mobile) */}
                <div className="hidden md:flex gap-4 mt-8 pt-8 border-t border-gray-100">
                  <a href="tel:+1234567890" className="flex-1 flex items-center justify-center py-3 border border-gray-200 rounded-lg text-primary-600 font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Clinic
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center py-3 border border-gray-200 rounded-lg text-primary-600 font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a href="/appointment/" className="flex-1 flex items-center justify-center py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-8 md:mt-12">
            <CTAButton href="/doctors/">
              Meet All Doctors
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <PatientJourney />

      {/* Symptom Checker */}
      <SymptomChecker />

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <TestimonialCard
              name="John Anderson"
              condition="Chronic Sinusitis Treatment"
              testimonial="After years of suffering, Dr. Johnson's treatment finally gave me relief. The staff is professional and caring. Highly recommend!"
              rating={5}
            />
            <TestimonialCard
              name="Maria Garcia"
              condition="Pediatric ENT Care"
              testimonial="Dr. Chen was wonderful with my son. He made him feel comfortable and explained everything clearly. We're so grateful for his expertise."
              rating={5}
            />
            <TestimonialCard
              name="Robert Smith"
              condition="Voice Disorder Treatment"
              testimonial="Dr. Williams helped me regain my voice after a difficult condition. Her knowledge and compassionate care made all the difference."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <FAQAccordion
        title="Frequently Asked Questions"
        description="Get answers to common questions about our services, appointments, and care."
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
