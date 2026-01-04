'use client'

import Container from '@/components/design-system/Container'
import { Heading2, Heading3, BodyText, LeadText } from '@/components/design-system/Typography'
import Badge from '@/components/design-system/Badge'
import ScrollReveal from '@/components/motion/ScrollReveal'
import ParallaxSection from '@/components/motion/ParallaxSection'

export default function DoctorProfile() {
  const expertise = [
    'Sinus surgery & rhinoplasty',
    'Hearing restoration',
    'Voice disorders',
    'Head & neck surgery',
    'Pediatric ENT',
    'Allergy management'
  ]

  const milestones = [
    { year: '2005', event: 'MD, Johns Hopkins School of Medicine' },
    { year: '2010', event: 'ENT Residency, Massachusetts General Hospital' },
    { year: '2012', event: 'Fellowship in Rhinology, Stanford Medical Center' },
    { year: '2013', event: 'Joined ENT Clinic, began private practice' },
    { year: '2023', event: '10,000+ successful procedures milestone' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-cream-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-[45%,55%] gap-12 lg:gap-16 items-center">
          {/* Left: Professional Photo */}
          <ScrollReveal direction="right">
            <div className="relative">
              <ParallaxSection speed={-15}>
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-100 to-medical-mint p-2 shadow-soft-lg">
                  <div className="w-full h-full rounded-2xl bg-deep-slate-100 flex items-center justify-center">
                    {/* Placeholder for doctor photo */}
                    <div className="text-center p-8">
                      <svg className="w-48 h-48 mx-auto text-deep-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm text-deep-slate-500">Professional photo here</p>
                    </div>
                  </div>
                </div>
              </ParallaxSection>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-soft-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">20+</div>
                  <div className="text-xs text-deep-slate-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Credentials & Information */}
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <Heading2>Dr. Sarah Johnson, MD, FACS</Heading2>
                <LeadText className="text-primary-600">
                  Board-Certified Otolaryngologist
                </LeadText>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="success" size="md">Board Certified</Badge>
                  <Badge variant="info" size="md">FACS Fellow</Badge>
                  <Badge variant="primary" size="md">5,000+ Procedures</Badge>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                <Heading3 className="text-xl">Areas of Expertise</Heading3>
                <div className="grid grid-cols-2 gap-3">
                  {expertise.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-deep-slate-700">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="space-y-4">
                <Heading3 className="text-xl">Experience Timeline</Heading3>
                <div className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-16 text-sm font-bold text-primary-600">
                        {milestone.year}
                      </div>
                      <div className="flex-1 text-sm text-deep-slate-700 pt-0.5">
                        {milestone.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="space-y-4 p-6 rounded-2xl bg-medical-mint border border-primary-200">
                <Heading3 className="text-xl">Treatment Philosophy</Heading3>
                <BodyText className="italic text-deep-slate-700">
                  "I believe in thorough diagnosis, clear communication, and personalized care plans 
                  that respect each patient's unique needs and concerns. Every patient deserves to 
                  understand their condition and feel confident in their treatment decisions."
                </BodyText>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
