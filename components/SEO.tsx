import type { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    tags?: string[]
  }
  noindex?: boolean
}

// Get base URL from environment or use default
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://jaywebstudio.in'
}

export function generateSEOMetadata({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  article,
  noindex = false
}: SEOProps): Metadata {
  const siteName = 'Premium ENT Clinic'
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const baseUrl = getBaseUrl()
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined
  const defaultImage = `${baseUrl}/og-image.jpg`

  return {
    title: fullTitle,
    description,
    ...(fullCanonical && { alternates: { canonical: fullCanonical } }),
    openGraph: {
      title: fullTitle,
      description,
      url: fullCanonical,
      siteName,
      type: ogType,
      images: [
        {
          url: ogImage || defaultImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      ...(article && {
        article: {
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
          authors: article.author ? [article.author] : undefined,
          tags: article.tags
        }
      })
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage || defaultImage]
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex
      }
    }
  }
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema() {
  const baseUrl = getBaseUrl()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Premium ENT Clinic',
    description: 'Premier ENT clinic offering comprehensive ear, nose, throat, hearing, and allergy care with experienced specialists and modern facilities.',
    url: baseUrl,
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
    priceRange: '$$'
  }
}

/**
 * Generate JSON-LD structured data for breadcrumbs
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = getBaseUrl()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  }
}

/**
 * Generate JSON-LD structured data for a physician
 */
export function generatePhysicianSchema(doctor: {
  name: string
  image: string
  jobTitle: string
  description: string
  telephone: string
  email: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    image: doctor.image,
    jobTitle: doctor.jobTitle,
    description: doctor.description,
    telephone: doctor.telephone,
    email: doctor.email,
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Premium ENT Clinic'
    },
    medicalSpecialty: 'Otolaryngology'
  }
}

/**
 * Generate JSON-LD structured data for a medical procedure/service
 */
export function generateMedicalProcedureSchema(service: {
  name: string
  description: string
  procedureType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    procedureType: service.procedureType || 'Diagnostic',
    bodyLocation: 'Ear, Nose, Throat'
  }
}

/**
 * Generate JSON-LD structured data for an article/blog post
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: {
    name: string
    image: string
  }
}) {
  const baseUrl = getBaseUrl()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author.name,
      image: article.author.image
    },
    publisher: {
      '@type': 'Organization',
      name: 'Premium ENT Clinic',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    }
  }
}
