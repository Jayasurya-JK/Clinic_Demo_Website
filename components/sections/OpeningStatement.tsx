'use client'

import Container from '@/components/design-system/Container'
import { Heading1, LeadText } from '@/components/design-system/Typography'
import ScrollReveal, { FadeIn } from '@/components/motion/ScrollReveal'
import ParallaxSection from '@/components/motion/ParallaxSection'

export default function OpeningStatement() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-medical-mint">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-medical-mint rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[60%,40%] gap-12 lg:gap-16 items-center">
          {/* Left: Statement */}
          <div className="space-y-8">
            <FadeIn>
              <Heading1 className="text-deep-slate-900">
                Your hearing, breathing, and voice deserve{' '}
                <span className="text-primary-600">expert care</span>
              </Heading1>
            </FadeIn>

            <ScrollReveal delay={0.2}>
              <LeadText className="text-deep-slate-700 max-w-2xl">
                Comprehensive ENT care from board-certified specialists, using advanced diagnostics 
                in a calm, patient-centered environment.
              </LeadText>
            </ScrollReveal>

            {/* Trust indicators - subtle, no buttons above fold */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-deep-slate-700">Board Certified</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-deep-slate-700">20+ Years Experience</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-deep-slate-700">10,000+ Patients</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Subtle visual presence */}
          <ScrollReveal delay={0.3} direction="left" className="hidden lg:block">
            <ParallaxSection speed={-20}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-medical-mint p-8 shadow-soft-lg">
                  <div className="w-full h-full rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-48 h-48 text-primary-600 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
            </ParallaxSection>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
