'use client'

import Container from '@/components/design-system/Container'
import { Heading2, Heading4, BodyText } from '@/components/design-system/Typography'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/motion/ScrollReveal'

export default function ProcessJourney() {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Diagnosis',
      subtitle: 'Your first visit: what to expect',
      details: [
        'Detailed medical history review',
        'Comprehensive physical examination',
        'Diagnostic testing if needed',
        'Time for all your questions'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Treatment Planning',
      subtitle: 'We explain your options clearly',
      details: [
        'Review findings together',
        'Discuss all treatment paths',
        'Understand risks and benefits',
        'Create personalized care plan'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Care & Follow-up',
      subtitle: "We're with you throughout",
      details: [
        'Scheduled follow-up visits',
        'Direct access to care team',
        'Progress monitoring',
        'Long-term health management'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading2 className="mb-4">Transparent Care Every Step of the Way</Heading2>
            <BodyText className="text-lg">
              From your first consultation to long-term care, we guide you through each stage with clarity and compassion.
            </BodyText>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative">
                {/* Connection line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent" />
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-soft border border-deep-slate-100">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white font-bold text-lg mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-primary-600">
                    {step.icon}
                  </div>

                  <Heading4 className="mb-2">{step.title}</Heading4>
                  <p className="text-sm text-primary-600 font-medium mb-4">{step.subtitle}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-deep-slate-700">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
