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
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Arrive & Check-in',
    description: 'Complete paperwork and meet our friendly staff',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Consultation',
    description: 'Meet with your specialist for comprehensive examination',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Treatment Plan',
    description: 'Receive personalized treatment recommendations',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Follow-up Care',
    description: 'Ongoing support and monitoring for optimal recovery',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-0 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex md:block gap-4 relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Left Column: Icon + Line (Mobile) */}
                <div className="md:hidden flex flex-col items-center flex-shrink-0 relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-6 bottom-[-2rem] w-0.5 bg-gray-200 -mb-8" />
                  )}

                  {/* Icon */}
                  <div
                    className={`
                      relative z-10
                      w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${activeStep === index
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                        : 'bg-white text-primary-600 border border-gray-100'
                      }
                    `}
                  >
                    <div className="w-6 h-6">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Desktop Icon Wrapper (Hidden on Mobile) */}
                <div className="hidden md:flex justify-center mb-4 relative z-10 px-6">
                  <div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${activeStep === index
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-100 text-primary-600'
                      }
                    `}
                  >
                    <div className="w-8 h-8">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content Wrapper */}
                <div
                  className={`
                    flex-1 md:text-center
                    bg-transparent md:bg-white
                    p-0 md:p-6 mb-8 md:mb-0
                    rounded-none md:rounded-xl
                    shadow-none md:shadow-md hover:shadow-none md:hover:shadow-xl
                    transition-all duration-300 cursor-pointer
                    ${activeStep === index ? 'md:ring-2 md:ring-primary-500 md:scale-105' : ''}
                  `}
                >
                  {/* Step Number */}
                  <div className="md:mb-2 mb-1.5">
                    <span
                      className={`
                        inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold
                        ${activeStep === index
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                        }
                      `}
                    >
                      Step {step.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-gray-900 md:mb-2 mb-0.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 md:text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Dots (Mobile) - Removed as vertical list doesn't need pagination dots */}
        </div>
      </div>
    </section>
  )
}
