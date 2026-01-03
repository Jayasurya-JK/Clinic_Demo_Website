import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Our ENT Specialists',
  description: 'Meet our board-certified ENT specialists with decades of combined experience in ear, nose, throat, and head & neck care.',
}

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'ENT Specialist & Surgeon',
      qualification: 'MD, FACS',
      experience: '15+ years',
      education: [
        'MD, Johns Hopkins School of Medicine',
        'Residency, Massachusetts General Hospital',
        'Fellowship, ENT & Head-Neck Surgery'
      ],
      specialties: [
        'Sinus Surgery',
        'Rhinoplasty',
        'Endoscopic Procedures',
        'Chronic Sinusitis'
      ],
      about: 'Dr. Johnson is a board-certified otolaryngologist with extensive experience in both medical and surgical management of ENT conditions. She specializes in advanced sinus surgery and has helped thousands of patients find relief from chronic sinus issues.'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Pediatric ENT Specialist',
      qualification: 'MD, Board Certified',
      experience: '12+ years',
      education: [
        'MD, Stanford University School of Medicine',
        'Residency, Children\'s Hospital of Philadelphia',
        'Fellowship, Pediatric Otolaryngology'
      ],
      specialties: [
        'Pediatric ENT Care',
        'Hearing Disorders',
        'Tonsil & Adenoid Surgery',
        'Ear Tube Placement'
      ],
      about: 'Dr. Chen is dedicated to providing compassionate care for children with ENT conditions. His gentle approach and expertise in pediatric otolaryngology make him a favorite among young patients and their families.'
    },
    {
      name: 'Dr. Emily Williams',
      title: 'Head & Neck Surgeon',
      qualification: 'MD, PhD',
      experience: '18+ years',
      education: [
        'MD & PhD, Harvard Medical School',
        'Residency, Mayo Clinic',
        'Fellowship, Head & Neck Oncology'
      ],
      specialties: [
        'Voice Disorders',
        'Thyroid Surgery',
        'Head & Neck Oncology',
        'Laryngology'
      ],
      about: 'Dr. Williams brings exceptional expertise in voice disorders and head & neck surgery. Her research contributions and clinical excellence have earned her recognition as a leading specialist in laryngology and thyroid surgery.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our ENT Specialists
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet our team of board-certified physicians dedicated to providing exceptional care with expertise and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Profiles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div key={doctor.name} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h2>
                  <p className="text-xl text-primary-600 font-medium mb-2">{doctor.title}</p>
                  <p className="text-gray-600 mb-6">{doctor.qualification} • {doctor.experience} experience</p>

                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Education
                      </h3>
                      <ul className="space-y-2">
                        {doctor.education.map((edu) => (
                          <li key={edu} className="text-sm text-gray-600 flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Specialties
                      </h3>
                      <ul className="space-y-2">
                        {doctor.specialties.map((specialty) => (
                          <li key={specialty} className="text-sm text-gray-600 flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <CTAButton href="/appointment/">
                    Book Appointment with {doctor.name.split(' ')[1]}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              All our physicians are board-certified and committed to continuing education, staying current with the latest advances in ENT care.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Certified</h3>
                <p className="text-gray-600">All specialists are certified by the American Board of Otolaryngology</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Education</h3>
                <p className="text-gray-600">Active in research and teaching the next generation of physicians</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">45+ Combined Years</h3>
                <p className="text-gray-600">Decades of experience treating thousands of patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Meet with one of our specialists and experience personalized, expert care.
          </p>
          <CTAButton href="/appointment/" className="bg-white text-primary-600 hover:bg-gray-100">
            Book an Appointment
          </CTAButton>
        </div>
      </section>
    </>
  )
}
