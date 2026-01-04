'use client'

import Container from '@/components/design-system/Container'
import { Heading2 } from '@/components/design-system/Typography'
import Badge from '@/components/design-system/Badge'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/motion/ScrollReveal'

export default function TrustAnchor() {
  const credentials = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: '20+ years treating ENT conditions'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: 'Board-certified Otolaryngologist'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      text: 'Trained at top medical institutions'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      text: 'Fellow, American Academy of Otolaryngology'
    }
  ]

  return (
    <section className="section-padding-sm bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading2>Trusted Expertise You Can Count On</Heading2>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((credential, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-3 p-6 rounded-xl bg-deep-slate-50 border border-deep-slate-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  {credential.icon}
                </div>
                <p className="text-sm font-medium text-deep-slate-800 leading-relaxed">
                  {credential.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
