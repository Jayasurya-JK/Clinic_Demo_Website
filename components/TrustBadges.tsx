import Image from 'next/image'
import { images } from '@/config/images'
import { siteConfig } from '@/config/siteConfig'

export default function TrustBadges() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Patients, Recognized by Industry
          </h2>
          <p className="text-lg text-gray-600">
            We maintain the highest standards of medical excellence and patient care
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {/* Years in Practice */}
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-2xl md:text-4xl font-bold text-primary-600 mb-1 md:mb-2">
              {siteConfig.stats.yearsExperience}+
            </p>
            <p className="text-sm md:text-base text-gray-700 font-medium">Years of Excellence</p>
          </div>

          {/* Success Rate */}
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-2xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">
              {siteConfig.stats.successRate}%
            </p>
            <p className="text-sm md:text-base text-gray-700 font-medium">Patient Satisfaction</p>
          </div>

          {/* Happy Patients */}
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-2xl md:text-4xl font-bold text-orange-600 mb-1 md:mb-2">
              {siteConfig.stats.happyPatients}+
            </p>
            <p className="text-sm md:text-base text-gray-700 font-medium">Happy Patients</p>
          </div>

          {/* Board Certified */}
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-2xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
              100%
            </p>
            <p className="text-sm md:text-base text-gray-700 font-medium">Board Certified</p>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Recognitions
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            <div className="text-center p-4">
              <div className="relative h-20 mb-2 flex items-center justify-center">
                <Image
                  src={images.trust.certification1}
                  alt="Board Certification"
                  width={120}
                  height={80}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-xs text-gray-600">Board Certified</p>
            </div>

            <div className="text-center p-4">
              <div className="relative h-20 mb-2 flex items-center justify-center">
                <Image
                  src={images.trust.certification2}
                  alt="Medical Accreditation"
                  width={120}
                  height={80}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-xs text-gray-600">Accredited Facility</p>
            </div>

            <div className="text-center p-4">
              <div className="relative h-20 mb-2 flex items-center justify-center">
                <Image
                  src={images.trust.insurance1}
                  alt="Insurance Accepted"
                  width={150}
                  height={80}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-xs text-gray-600">Insurance Partner</p>
            </div>

            <div className="text-center p-4">
              <div className="relative h-20 mb-2 flex items-center justify-center">
                <Image
                  src={images.trust.insurance2}
                  alt="Insurance Network"
                  width={150}
                  height={80}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-xs text-gray-600">Network Provider</p>
            </div>

            <div className="text-center p-4">
              <div className="relative h-20 mb-2 flex items-center justify-center">
                <Image
                  src={images.trust.insurance3}
                  alt="Major Insurance"
                  width={150}
                  height={80}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-xs text-gray-600">Accepted Plans</p>
            </div>
          </div>
        </div>

        {/* Safety Protocols */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Sterilization Protocols</h4>
            <p className="text-sm text-gray-600">Hospital-grade sterilization for all equipment</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Patient Safety First</h4>
            <p className="text-sm text-gray-600">Comprehensive safety measures at every step</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
            <p className="text-sm text-gray-600">Regular audits and quality checks</p>
          </div>
        </div>
      </div>
    </section>
  )
}
