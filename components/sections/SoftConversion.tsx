'use client'

import Link from 'next/link'
import Container from '@/components/design-system/Container'
import { Heading2, LeadText } from '@/components/design-system/Typography'
import Button from '@/components/design-system/Button'
import ScrollReveal from '@/components/motion/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export default function SoftConversion() {
  return (
    <section className="section-padding bg-gradient-to-br from-medical-calm via-cream-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-mint rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <Heading2 className="mb-4">
              Ready to get clarity on your ENT health?
            </Heading2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <LeadText className="text-deep-slate-700 max-w-2xl mx-auto">
              Schedule a consultation to discuss your symptoms and explore treatment options 
              tailored to your needs.
            </LeadText>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button href="/appointment/" size="lg" variant="primary">
                Book a Consultation
              </Button>
              <Button 
                href={`tel:${siteConfig.contact.phone}`} 
                size="lg" 
                variant="secondary"
              >
                Call {siteConfig.contact.phone}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-deep-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Most insurance accepted
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                New patients welcome
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Same-day appointments available
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
