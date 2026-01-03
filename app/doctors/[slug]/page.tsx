import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getDoctorBySlug, getAllDoctorSlugs } from '@/data/doctors'
import { generateSEOMetadata, generatePhysicianSchema, generateBreadcrumbSchema } from '@/components/SEO'

export async function generateStaticParams() {
  return getAllDoctorSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const doctor = getDoctorBySlug(params.slug)
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found'
    }
  }

  return generateSEOMetadata({
    title: `${doctor.name} - ${doctor.title}`,
    description: doctor.bio,
    canonical: `/doctors/${params.slug}`,
    ogImage: doctor.image,
    ogType: 'profile'
  })
}

export default function DoctorDetailPage({ params }: { params: { slug: string } }) {
  const doctor = getDoctorBySlug(params.slug)

  if (!doctor) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Our Doctors', url: '/doctors' },
    { name: doctor.name, url: `/doctors/${params.slug}` }
  ]

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePhysicianSchema({
            name: doctor.name,
            image: doctor.image,
            jobTitle: doctor.title,
            description: doctor.bio,
            telephone: doctor.phone,
            email: doctor.email
          }))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs))
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-medical-mint py-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary-600 font-medium">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.url} className="hover:text-primary-600 transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Doctor Image Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
                <div className="relative h-96 bg-gradient-to-br from-primary-100 to-primary-50">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h1>
                  <p className="text-primary-600 font-medium mb-1">
                    {doctor.title}
                  </p>
                  <p className="text-gray-600 mb-4">{doctor.qualification}</p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${doctor.phone}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{doctor.phone}</span>
                    </a>
                    <a
                      href={`mailto:${doctor.email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{doctor.email}</span>
                    </a>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/appointment/?doctor=${encodeURIComponent(doctor.name)}`}
                    className="block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {doctor.name.split(' ')[1]}</h2>
                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                    <p className="text-primary-600 font-medium">{doctor.experience}</p>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {doctor.specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg"
                    >
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-900 font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Training</h3>
                <div className="space-y-3">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      <p className="text-gray-700">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Board Certifications & Memberships</h3>
                <div className="space-y-3">
                  {doctor.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-gray-700">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Languages Spoken</h3>
                <div className="flex flex-wrap gap-3">
                  {doctor.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full font-medium"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span><strong>Available Days:</strong> {doctor.availableDays.join(', ')}</span>
                  </div>
                  {doctor.nextAvailable && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Next Available:</strong> {new Date(doctor.nextAvailable).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  )}
                </div>
                <Link
                  href={`/appointment/?doctor=${encodeURIComponent(doctor.name)}`}
                  className="mt-6 block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Schedule Appointment with {doctor.name.split(' ')[1]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
