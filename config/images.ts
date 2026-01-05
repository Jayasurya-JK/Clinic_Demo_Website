/**
 * Centralized Image Configuration
 * 
 * This file contains all image URLs used throughout the website.
 * Replace these URLs with your own images to customize the site.
 * 
 * Using Unsplash for demo purposes - replace with your own hosted images in production.
 */

export const images = {
  // Hero Section Images
  hero: {
    main: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=800&fit=crop',
    background: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop',
  },

  // Doctor Photos
  doctors: {
    drSarahJohnson: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    drMichaelChen: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    drEmilyWilliams: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
  },

  // Speciality Images
  specialities: {
    earCare: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    noseSinus: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
    throatVoice: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    hearingBalance: 'https://images.unsplash.com/photo-1588776813397-a3a3a2c7f86f?w=600&h=400&fit=crop',
    allergy: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
    procedures: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop',
  },

  // Facility Photos (Virtual Tour)
  facility: {
    reception: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    waitingRoom: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&h=600&fit=crop',
    examinationRoom: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop',
    equipment: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop',
    consultationRoom: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
  },

  // Blog Featured Images
  blog: {
    sinusTreatment: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    hearingLoss: 'https://images.unsplash.com/photo-1588776813397-a3a3a2c7f86f?w=800&h=500&fit=crop',
    allergyManagement: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop',
    voiceCare: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop',
    entSpecialist: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
  },

  // Insurance/Trust Badges (Placeholder)
  trust: {
    insurance1: 'https://via.placeholder.com/150x80/0284c7/ffffff?text=Insurance+1',
    insurance2: 'https://via.placeholder.com/150x80/0284c7/ffffff?text=Insurance+2',
    insurance3: 'https://via.placeholder.com/150x80/0284c7/ffffff?text=Insurance+3',
    certification1: 'https://via.placeholder.com/120x120/10b981/ffffff?text=Certified',
    certification2: 'https://via.placeholder.com/120x120/10b981/ffffff?text=Accredited',
  },

  // Default/Fallback Images
  placeholder: {
    doctor: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    speciality: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop',
    blog: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
  },
}

/**
 * Helper function to get Open Graph image
 */
export function getOGImage(type: 'doctor' | 'speciality' | 'blog', identifier?: string): string {
  // Return appropriate OG image based on type
  switch (type) {
    case 'doctor':
      return images.doctors.drSarahJohnson
    case 'speciality':
      return images.specialities.earCare
    case 'blog':
      return images.blog.sinusTreatment
    default:
      return images.hero.main
  }
}
