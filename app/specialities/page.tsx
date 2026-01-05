import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'ENT Specialities',
  description: 'Comprehensive ear, nose, and throat specialities including ear care, sinus treatment, voice disorders, hearing tests, allergy treatment, and ENT procedures.',
}

export default function Specialities() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our ENT <span className="text-primary-600">Specialties</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Comprehensive diagnostic and treatment options for all ear, nose, and throat conditions using the latest medical technology.
            </p>
          </div>
        </div>
      </section>

      {/* Ear Care */}
      <section id="ear-care" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mr-4 p-3 border border-gray-100">
                  <Image
                    src="/images/1.png"
                    alt="Ear Care Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ear Care</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Expert diagnosis and treatment for a wide range of ear conditions, from common infections to complex hearing disorders.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ear Infections</h3>
                    <p className="text-sm text-gray-600">Advanced antibiotic and preventative care.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hearing Loss</h3>
                    <p className="text-sm text-gray-600">Comprehensive audiology and hearing aid services.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tinnitus</h3>
                    <p className="text-sm text-gray-600">Sound therapy and management options for ringing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Earwax Removal</h3>
                    <p className="text-sm text-gray-600">Safe microsuction and irrigation techniques.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-[8px] border-white">
              <Image
                src="/images/specialities/ear.png"
                alt="Specialized Ear Care"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nose & Sinus */}
      <section id="nose-sinus" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-[8px] border-white">
              <Image
                src="/images/specialities/nose.png"
                alt="Sinus & Nasal Treatment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mr-4 p-3 border border-gray-100">
                  <Image
                    src="/images/2.png"
                    alt="Nose & Sinus Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nose & Sinus</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Advanced care for nasal and sinus conditions, helping you breathe easier and feel better through medical and surgical interventions.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Sinusitis', desc: 'Long-term relief for chronic inflammation.' },
                  { title: 'Nasal Blockage', desc: 'Treatment for breathing difficulties.' },
                  { title: 'Deviated Septum', desc: 'Correction of nasal structural issues.' },
                  { title: 'Nasal Polyps', desc: 'Non-surgical and surgical management.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-medical-mint flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-medical-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Throat & Voice */}
      <section id="throat-voice" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mr-4 p-3 border border-gray-100">
                  <Image
                    src="/images/3.png"
                    alt="Throat & Voice Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Throat & Voice</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Specialized treatment for throat disorders and voice problems, helping you communicate clearly and comfortably.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Infections', desc: 'Tonsillitis and strep throat care.' },
                  { title: 'Hoarseness', desc: 'Vocal cord evaluation and therapy.' },
                  { title: 'Swallowing', desc: 'Diagnostic testing for throat issues.' },
                  { title: 'Reflux', desc: 'Management of silent reflux symptoms.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-[8px] border-white">
              <Image
                src="/images/specialities/throat.png"
                alt="Throat & Voice Care"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hearing & Balance */}
      <section id="hearing-balance" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-[8px] border-white">
              <Image
                src="/images/specialities/hearing.png"
                alt="Audiology Services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mr-4 p-3 border border-gray-100">
                  <Image
                    src="/images/4.png"
                    alt="Hearing & Balance Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hearing & Balance</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Comprehensive audiological evaluations and balance testing using state-of-the-art diagnostic equipment.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Hearing Tests', desc: 'Precision digital hearing assessments.' },
                  { title: 'Hearing Aids', desc: 'Selection and micro-adjustments.' },
                  { title: 'Vertigo', desc: 'Balance and inner ear diagnostics.' },
                  { title: 'Audiograms', desc: 'Detailed hearing profiles for all ages.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-medical-mint flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-medical-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allergy Treatment */}
      <section id="allergy" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mr-4 p-3 border border-gray-100">
                  <Image
                    src="/images/5.png"
                    alt="Allergy Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Allergy Care</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Comprehensive allergy testing and customized treatment plans to help you manage seasonal and chronic sensitivities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Skin Testing', desc: 'Identifying complex environmental triggers.' },
                  { title: 'Immunotherapy', desc: 'Long-term desensitization options.' },
                  { title: 'Hay Fever', desc: 'Seasonal allergy management plans.' },
                  { title: 'Nasal Allergy', desc: 'Targeted care for allergic rhinitis.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-[8px] border-white">
              <Image
                src="/images/specialities/allergy.png"
                alt="Allergy Testing & Treatment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ENT Procedures */}
      <section id="procedures" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 p-5 border border-gray-100">
              <Image
                src="/images/6.png"
                alt="ENT Procedures Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Minor <span className="text-primary-600">Procedures</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We perform a range of minimally invasive procedures with precision and care, ensuring optimal outcomes and quick recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Tonsillectomy & Adenoidectomy',
              'Sinus Surgery (Endoscopic)',
              'Ear Tube Placement',
              'Nasal Septoplasty',
              'Turbinate Reduction',
              'Vocal Cord Surgery',
              'Thyroid & Parathyroid Surgery',
              'Sleep Apnea Surgery',
              'Head & Neck Biopsies'
            ].map((procedure) => (
              <div key={procedure} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center group hover:border-primary-300 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mr-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 font-semibold">{procedure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="0" cy="0" r="40" fill="white" />
            <circle cx="100" cy="100" r="40" fill="white" />
          </svg>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional Care <br className="hidden sm:block" /> When You Need It Most
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation today and take the first step toward better ENT health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/appointment/" className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 text-lg">
              Book Appointment
            </CTAButton>
            <CTAButton href="/contact/" className="bg-primary-500 border-2 border-white hover:bg-primary-400 px-10 py-4 text-lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
