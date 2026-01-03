/**
 * Doctor Data
 * 
 * Contains information about all doctors/specialists in the clinic.
 * Update this file to add, remove, or modify doctor information.
 */

import { images } from '@/config/images'

export interface Doctor {
  id: string
  slug: string
  name: string
  title: string
  qualification: string
  image: string
  specialties: string[]
  experience: string
  bio: string
  education: string[]
  certifications: string[]
  languages: string[]
  availableDays: string[]
  nextAvailable?: string
  videoIntroUrl?: string
  email: string
  phone: string
}

export const doctors: Doctor[] = [
  {
    id: '1',
    slug: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'ENT Specialist & Surgeon',
    qualification: 'MD, FACS',
    image: images.doctors.drSarahJohnson,
    specialties: ['Sinus Surgery', 'Rhinoplasty', 'Endoscopic Surgery', 'Allergy Treatment'],
    experience: '15+ years',
    bio: 'Dr. Sarah Johnson is a board-certified otolaryngologist with over 15 years of experience in treating ear, nose, and throat conditions. She specializes in advanced sinus surgery and rhinoplasty, utilizing the latest minimally invasive techniques to provide optimal patient outcomes.',
    education: [
      'Doctor of Medicine (MD) - Harvard Medical School',
      'Bachelor of Science in Biology - Stanford University',
      'Residency in Otolaryngology - Johns Hopkins Hospital',
      'Fellowship in Rhinology - University of Pennsylvania'
    ],
    certifications: [
      'Board Certified by American Board of Otolaryngology',
      'Fellow of American College of Surgeons (FACS)',
      'American Academy of Otolaryngology - Head and Neck Surgery Member',
      'American Rhinologic Society Member'
    ],
    languages: ['English', 'Spanish'],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    nextAvailable: '2026-01-06',
    email: 'dr.johnson@entclinic.com',
    phone: '+1-234-567-8900'
  },
  {
    id: '2',
    slug: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    title: 'Pediatric ENT Specialist',
    qualification: 'MD, Board Certified',
    image: images.doctors.drMichaelChen,
    specialties: ['Pediatric ENT', 'Hearing Disorders', 'Tonsillectomy', 'Ear Tube Placement'],
    experience: '12+ years',
    bio: 'Dr. Michael Chen is a compassionate pediatric ENT specialist dedicated to treating children with ear, nose, and throat conditions. With over 12 years of experience, he has a gentle approach that puts young patients and their families at ease while providing expert medical care.',
    education: [
      'Doctor of Medicine (MD) - Yale School of Medicine',
      'Bachelor of Science in Neuroscience - MIT',
      'Residency in Otolaryngology - Children\'s Hospital Boston',
      'Fellowship in Pediatric Otolaryngology - Cincinnati Children\'s Hospital'
    ],
    certifications: [
      'Board Certified by American Board of Otolaryngology',
      'American Society of Pediatric Otolaryngology Member',
      'American Academy of Pediatrics Fellow',
      'Society of Ear, Nose and Throat Advances in Children Member'
    ],
    languages: ['English', 'Mandarin', 'Cantonese'],
    availableDays: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
    nextAvailable: '2026-01-05',
    email: 'dr.chen@entclinic.com',
    phone: '+1-234-567-8901'
  },
  {
    id: '3',
    slug: 'dr-emily-williams',
    name: 'Dr. Emily Williams',
    title: 'Head & Neck Surgeon',
    qualification: 'MD, PhD',
    image: images.doctors.drEmilyWilliams,
    specialties: ['Voice Disorders', 'Thyroid Surgery', 'Head & Neck Oncology', 'Laryngology'],
    experience: '18+ years',
    bio: 'Dr. Emily Williams is a renowned head and neck surgeon with expertise in voice disorders and thyroid surgery. With both MD and PhD degrees, she brings a unique combination of clinical excellence and research innovation to patient care, having published numerous articles in peer-reviewed journals.',
    education: [
      'Doctor of Medicine (MD) - Columbia University',
      'PhD in Molecular Biology - MIT',
      'Bachelor of Science in Biochemistry - Princeton University',
      'Residency in Otolaryngology - UCSF Medical Center',
      'Fellowship in Laryngology - Vanderbilt University'
    ],
    certifications: [
      'Board Certified by American Board of Otolaryngology',
      'American Academy of Otolaryngology - Head and Neck Surgery Fellow',
      'American Laryngological Association Member',
      'American Head and Neck Society Member'
    ],
    languages: ['English', 'French', 'German'],
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    nextAvailable: '2026-01-07',
    email: 'dr.williams@entclinic.com',
    phone: '+1-234-567-8902'
  }
]

/**
 * Get doctor by slug
 */
export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find(doctor => doctor.slug === slug)
}

/**
 * Get all doctor slugs for static generation
 */
export function getAllDoctorSlugs(): string[] {
  return doctors.map(doctor => doctor.slug)
}
