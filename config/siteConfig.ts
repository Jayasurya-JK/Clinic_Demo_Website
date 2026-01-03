/**
 * Site Configuration
 * 
 * Centralized configuration for site-wide settings.
 * Update these values to customize the clinic information.
 */

export const siteConfig = {
  name: 'Premium ENT Clinic',
  description: 'Premier ENT clinic offering comprehensive ear, nose, throat, hearing, and allergy care with experienced specialists and modern facilities.',
  url: 'https://jaywebstudio.in',
  
  // Contact Information
  contact: {
    phone: '+1-234-567-8900',
    email: 'info@entclinic.com',
    emergencyPhone: '911',
    urgentCarePhone: '+1-234-567-8901',
    whatsapp: '+12345678900', // Format: country code + number without special chars
  },

  // Address
  address: {
    street: '123 Medical Plaza, Healthcare District',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'US',
    mapUrl: 'https://maps.google.com/?q=Medical+Plaza+New+York',
  },

  // Business Hours
  hours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/entclinic',
    twitter: 'https://twitter.com/entclinic',
    instagram: 'https://instagram.com/entclinic',
    linkedin: 'https://linkedin.com/company/entclinic',
    youtube: 'https://youtube.com/@entclinic',
  },

  // Statistics
  stats: {
    yearsExperience: 15,
    happyPatients: '10,000',
    successRate: 98,
    specialists: 3,
  },

  // Features/Badges
  features: {
    boardCertified: true,
    latestTechnology: true,
    flexibleHours: true,
    familyCare: true,
    emergencyServices: false,
  },
}
