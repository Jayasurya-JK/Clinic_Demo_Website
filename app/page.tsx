import type { Metadata } from 'next'
import OpeningStatement from '@/components/sections/OpeningStatement'
import TrustAnchor from '@/components/sections/TrustAnchor'
import ProblemServices from '@/components/sections/ProblemServices'
import ProcessJourney from '@/components/sections/ProcessJourney'
import DoctorProfile from '@/components/sections/DoctorProfile'
import ContentAuthority from '@/components/sections/ContentAuthority'
import SoftConversion from '@/components/sections/SoftConversion'
import StickyBottomBar from '@/components/mobile/StickyBottomBar'
import { MedicalClinicSchema } from '@/components/seo/StructuredData'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Premium ENT Care | Board-Certified Specialists',
  description: 'Comprehensive ENT care from board-certified specialists. Expert treatment for hearing, sinus, throat, voice, balance, and allergy conditions in a patient-centered environment.',
  keywords: [
    'ENT specialist',
    'otolaryngologist',
    'hearing loss treatment',
    'sinus treatment',
    'throat specialist',
    'voice disorders',
    'balance disorders',
    'allergy treatment',
    'board certified ENT'
  ],
  openGraph: {
    title: 'Premium ENT Care | Board-Certified Specialists',
    description: 'Comprehensive ENT care from board-certified specialists using advanced diagnostics.',
    type: 'website',
  }
}

export default function Home() {
  return (
    <>
      {/* Enhanced Schema Markup for SEO */}
      <MedicalClinicSchema
        name={siteConfig.name}
        description="Comprehensive ENT care from board-certified specialists using advanced diagnostics in a patient-centered environment."
        url={siteConfig.url}
        telephone={siteConfig.contact.phone}
        email={siteConfig.contact.email}
        address={{
          street: siteConfig.address.street,
          city: siteConfig.address.city,
          state: siteConfig.address.state,
          zip: siteConfig.address.zip,
          country: siteConfig.address.country
        }}
        openingHours={[
          {
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          },
          {
            days: ['Saturday'],
            opens: '09:00',
            closes: '14:00'
          }
        ]}
        services={[
          {
            name: 'Hearing Evaluation and Treatment',
            description: 'Comprehensive hearing tests, hearing aid fittings, and cochlear implant consultation'
          },
          {
            name: 'Sinus and Nasal Treatment',
            description: 'Advanced sinus diagnostics, balloon sinuplasty, and endoscopic sinus surgery'
          },
          {
            name: 'Throat and Voice Care',
            description: 'Specialized voice analysis, laryngoscopy, and treatment for voice disorders'
          },
          {
            name: 'Balance and Vestibular Services',
            description: 'Comprehensive balance testing and treatment for dizziness and vertigo'
          },
          {
            name: 'Allergy Testing and Treatment',
            description: 'Personalized allergy testing and immunotherapy for long-term relief'
          },
          {
            name: 'Pediatric ENT Care',
            description: 'Specialized care for children including ear tubes, tonsillectomy, and adenoidectomy'
          }
        ]}
        physician={{
          name: 'Dr. Sarah Johnson',
          specialty: 'Otolaryngology - Head and Neck Surgery',
          credentials: [
            'MD, Board Certified in Otolaryngology',
            'FACS - Fellow of the American College of Surgeons',
            'Fellowship in Rhinology and Sinus Surgery'
          ]
        }}
      />

      {/* Mobile Sticky Bottom Bar */}
      <StickyBottomBar />

      {/* Section 1: Opening Statement (NOT Hero) */}
      <OpeningStatement />

      {/* Section 2: Trust Anchor (Immediate Credibility) */}
      <TrustAnchor />

      {/* Section 3: Problem-First Services (Bento-box Layout) */}
      <ProblemServices />

      {/* Section 4: Process Transparency (Patient Journey) */}
      <ProcessJourney />

      {/* Section 5: Doctor Credibility Section */}
      <DoctorProfile />

      {/* Section 6: Content Authority (Featured Articles) */}
      <ContentAuthority />

      {/* Section 7: Soft Conversion (Final CTA) */}
      <SoftConversion />
    </>
  )
}
