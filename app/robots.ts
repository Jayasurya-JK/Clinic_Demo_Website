import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Get base URL from environment or use default
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://jaywebstudio.in'
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
