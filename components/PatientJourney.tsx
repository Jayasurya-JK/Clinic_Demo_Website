'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface JourneyStep {
  id: number
  title: string
  description: string
  icon: ReactNode
}

const steps: JourneyStep[] = [
  {
    id: 1,
    title: 'Book Appointment',
    description: 'Schedule your visit online or by phone at your convenience',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Arrive & Check-in',
    description: 'Complete paperwork and meet our friendly staff',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Consultation',
    description: 'Meet with your specialist for comprehensive examination',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Treatment Plan',
    description: 'Receive personalized treatment recommendations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Follow-up Care',
    description: 'Ongoing support and monitoring for optimal recovery',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

export default function PatientJourney() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Journey to Better Health
          </h2>
          <p className="text-lg text-gray-600">
            From your first call to complete recovery, we guide you through every step with care and expertise.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block">
            <div
              className="h-full bg-primary-600 transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? `${(activeStep / (steps.length - 1)) * 100}%` : '0%'
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <div
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    activeStep === index ? 'ring-2 ring-primary-500 scale-105' : ''
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-100 text-primary-600'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div className="text-center mb-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        activeStep === index
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      Step {step.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gray-200">
                      <div
                        className={`w-full bg-primary-600 transition-all duration-500 ${
                          activeStep > index ? 'h-full' : 'h-0'
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Dots (Mobile) */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to step ${step.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
