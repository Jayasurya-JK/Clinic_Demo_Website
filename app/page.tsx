import type { Metadata } from 'next'
import Link from 'next/link'
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
      <FloatingContactButtons />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-medical-mint">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Care for Your
                <span className="text-primary-600"> Ear, Nose & Throat</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Experience compassionate, comprehensive ENT care from board-certified specialists using the latest medical technology in a comfortable, patient-centered environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <CTAButton href="/appointment/">
                  Book Appointment
                </CTAButton>
                <CTAButton href="/services/" variant="secondary">
                  View Services
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive ENT Services
            </h2>
            <p className="text-lg text-gray-600">
              From routine checkups to advanced procedures, we provide complete care for all ear, nose, and throat conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              title="Ear Care"
              description="Treatment for ear infections, hearing loss, tinnitus, and balance disorders with advanced diagnostic tools."
              href="/services/#ear-care"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              title="Nose & Sinus"
              description="Expert treatment for sinusitis, nasal congestion, allergies, and breathing difficulties."
              href="/services/#nose-sinus"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              }
              title="Throat & Voice"
              description="Comprehensive care for throat infections, voice disorders, and swallowing difficulties."
              href="/services/#throat-voice"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              }
              title="Hearing & Balance"
              description="Advanced hearing tests, hearing aid fittings, and treatment for balance disorders."
              href="/services/#hearing-balance"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              }
              title="Allergy Treatment"
              description="Comprehensive allergy testing and immunotherapy to manage seasonal and chronic allergies."
              href="/services/#allergy"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
              title="ENT Procedures"
              description="Minimally invasive surgical procedures performed with precision and care."
              href="/services/#procedures"
            />
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/services/">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Doctor Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-lg text-gray-600">
              Our board-certified ENT specialists bring decades of combined experience and are committed to providing exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                title: 'ENT Specialist & Surgeon',
                qualification: 'MD, FACS',
                experience: '15+ years experience',
                specialties: 'Sinus Surgery, Rhinoplasty'
              },
              {
                name: 'Dr. Michael Chen',
                title: 'Pediatric ENT Specialist',
                qualification: 'MD, Board Certified',
                experience: '12+ years experience',
                specialties: 'Pediatric Care, Hearing Disorders'
              },
              {
                name: 'Dr. Emily Williams',
                title: 'Head & Neck Surgeon',
                qualification: 'MD, PhD',
                experience: '18+ years experience',
                specialties: 'Voice Disorders, Thyroid Surgery'
              }
            ].map((doctor) => (
              <div key={doctor.name} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover">
                <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{doctor.name}</h3>
                <p className="text-primary-600 font-medium text-center mb-1">{doctor.title}</p>
                <p className="text-sm text-gray-500 text-center mb-4">{doctor.qualification}</p>
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <p className="text-sm text-gray-600 text-center">{doctor.experience}</p>
                  <p className="text-sm text-gray-600 text-center font-medium">Specialties: {doctor.specialties}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Patient Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our patients about their experience with our care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your ENT Health?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience compassionate, expert care from our team of specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
