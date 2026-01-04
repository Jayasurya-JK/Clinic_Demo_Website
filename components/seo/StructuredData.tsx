import React from 'react'

interface StructuredDataProps {
  data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function MedicalClinicSchema({
  name,
  description,
  url,
  telephone,
  email,
  address,
  openingHours,
  services,
  physician
}: {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  openingHours: Array<{
    days: string[]
    opens: string
    closes: string
  }>
  services: Array<{
    name: string
    description: string
  }>
  physician?: {
    name: string
    specialty: string
    credentials: string[]
  }
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name,
    description,
    url,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: address.country
    },
    openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes
    })),
    medicalSpecialty: 'Otolaryngology',
    availableService: services.map(service => ({
      '@type': 'MedicalProcedure',
      name: service.name,
      description: service.description
    })),
    ...(physician && {
      physician: {
        '@type': 'Physician',
        name: physician.name,
        medicalSpecialty: physician.specialty,
        hasCredential: physician.credentials.map(credential => ({
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: credential
        }))
      }
    })
  }

  return <StructuredData data={schema} />
}
