'use client'

import Link from 'next/link'
import Container from '@/components/design-system/Container'
import { Heading2, Heading3, BodyText } from '@/components/design-system/Typography'
import { BentoCard } from '@/components/design-system/Card'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/motion/ScrollReveal'
import { SoftHover } from '@/components/motion/MicroInteractions'

export default function ProblemServices() {
  const services = [
    {
      size: 'large' as const,
      color: 'mint' as const,
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      problem: 'Struggling to follow conversations in noise?',
      description: 'Comprehensive hearing evaluation using advanced audiometry to identify the root cause of your hearing challenges.',
      solutions: [
        'Diagnostic audiology',
        'Hearing aid fittings',
        'Cochlear implant consultation'
      ],
      href: '/services/#hearing-balance',
      label: 'Hearing Loss & Balance'
    },
    {
      size: 'large' as const,
      color: 'cream' as const,
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      problem: 'Chronic sinus pressure affecting your daily life?',
      description: 'Advanced sinus diagnostics and minimally invasive treatments to restore comfortable breathing and reduce inflammation.',
      solutions: [
        'Sinus CT scanning',
        'Balloon sinuplasty',
        'Endoscopic sinus surgery'
      ],
      href: '/services/#nose-sinus',
      label: 'Sinus & Breathing Issues'
    },
    {
      size: 'default' as const,
      color: 'white' as const,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      problem: 'Voice changes or throat discomfort?',
      description: 'Specialized voice analysis and treatment for hoarseness, vocal strain, and swallowing difficulties.',
      solutions: ['Voice therapy', 'Laryngoscopy', 'Swallow studies'],
      href: '/services/#throat-voice',
      label: 'Throat & Voice Disorders'
    },
    {
      size: 'default' as const,
      color: 'white' as const,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      problem: 'Dizzy spells or balance problems?',
      description: 'Comprehensive vestibular testing to diagnose and treat balance disorders and vertigo.',
      solutions: ['Balance testing', 'BPPV treatment', 'Vestibular therapy'],
      href: '/services/#hearing-balance',
      label: 'Balance & Dizziness'
    },
    {
      size: 'default' as const,
      color: 'white' as const,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      problem: 'Seasonal allergies making you miserable?',
      description: 'Personalized allergy testing and immunotherapy to provide long-term relief from allergic symptoms.',
      solutions: ['Allergy testing', 'Immunotherapy', 'Environmental counseling'],
      href: '/services/#allergy',
      label: 'Allergy Treatment'
    },
    {
      size: 'default' as const,
      color: 'white' as const,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      problem: 'Pediatric ENT concerns?',
      description: 'Gentle, specialized care for children with ear infections, tonsil issues, and breathing problems.',
      solutions: ['Ear tube placement', 'Tonsillectomy', 'Adenoidectomy'],
      href: '/services/#pediatric-ent',
      label: 'Pediatric ENT'
    }
  ]

  return (
    <section className="section-padding bg-deep-slate-50">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading2 className="mb-4">Expert Solutions for Your ENT Concerns</Heading2>
            <BodyText className="text-lg">
              We treat the problems that matter to you, with clarity and compassion.
            </BodyText>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <SoftHover>
                <Link href={service.href}>
                  <BentoCard size={service.size} color={service.color} className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        {service.icon}
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                          {service.label}
                        </span>
                      </div>
                      
                      <Heading3 className="text-xl">{service.problem}</Heading3>
                      
                      <BodyText className="text-sm text-deep-slate-600">
                        {service.description}
                      </BodyText>
                      
                      <div className="space-y-2 pt-2">
                        {service.solutions.map((solution, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-deep-slate-700">
                            <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                            {solution}
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4">
                        <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </BentoCard>
                </Link>
              </SoftHover>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
