import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'About Our Clinic',
  description: 'Learn about our mission, vision, and patient-centered approach to ENT care. Meet our team of experienced specialists dedicated to your health.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Clinic
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dedicated to providing exceptional ear, nose, and throat care with compassion, expertise, and state-of-the-art technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-primary-50 p-8 md:p-12 rounded-2xl">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To provide comprehensive, patient-centered ENT care that combines clinical excellence with compassionate service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We strive to improve the quality of life for our patients through accurate diagnosis, effective treatment, and ongoing support for all ear, nose, and throat conditions.
              </p>
            </div>

            <div className="bg-medical-mint p-8 md:p-12 rounded-2xl">
              <div className="w-16 h-16 bg-medical-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To be the leading ENT clinic recognized for clinical excellence, innovative treatments, and exceptional patient experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where every patient receives personalized, evidence-based care in a comfortable environment that promotes healing and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient-Centric Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Patient-Centric Approach
            </h2>
            <p className="text-lg text-gray-600">
              Every aspect of our practice is designed with you in mind, ensuring comfort, convenience, and comprehensive care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We respect your time with minimal wait times and efficient appointment scheduling, including same-day appointments for urgent needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                We take time to listen to your concerns, explain diagnoses in understandable terms, and discuss all treatment options thoroughly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Our treatment plans are based on the latest medical research and proven best practices in ENT care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We treat every patient with kindness, respect, and dignity, creating a welcoming environment for all ages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                We invest in cutting-edge diagnostic and treatment equipment to provide the most accurate and effective care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Care</h3>
              <p className="text-gray-600 leading-relaxed">
                From pediatrics to geriatrics, we provide complete ENT care for patients of all ages and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Philosophy
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At our ENT Clinic, we believe that exceptional healthcare goes beyond treating symptoms—it's about understanding the whole person. Our philosophy is built on three core principles:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Patient Partnership</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We view each patient as a partner in their healthcare journey. Your input, concerns, and preferences are essential to developing the most effective treatment plan. We believe informed patients make better health decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Preventive Focus</h3>
                    <p className="text-gray-700 leading-relaxed">
                      While we excel at treating ENT conditions, we're equally committed to prevention. Through education and early detection, we help patients maintain optimal ear, nose, and throat health throughout their lives.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Continuous Improvement</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Medicine evolves, and so do we. Our team stays current with the latest research, techniques, and technologies to ensure you receive the most advanced care available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Clinic?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              With over 15 years of experience and thousands of successful treatments, we're the trusted choice for ENT care in our community.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-primary-100">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
                <div className="text-primary-100">Happy Patients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-100">Success Rate</div>
              </div>
            </div>
            <div className="mt-12">
              <CTAButton href="/appointment/" className="bg-white text-primary-600 hover:bg-gray-100">
                Schedule Your Visit Today
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
