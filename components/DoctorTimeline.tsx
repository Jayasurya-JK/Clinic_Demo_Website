'use client'

import { useState, useEffect } from 'react'

const steps = [
    {
        id: 1,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        label: 'STEP 1',
        title: 'Book Appointment',
        description: 'Schedule your visit online or by phone at your convenience'
    },
    {
        id: 2,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: 'STEP 2',
        title: 'Arrive & Check-in',
        description: 'Complete paperwork and meet our friendly staff'
    },
    {
        id: 3,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        label: 'STEP 3',
        title: 'Consultation',
        description: 'Meet with your specialist for comprehensive examination'
    },
    {
        id: 4,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        label: 'STEP 4',
        title: 'Treatment Plan',
        description: 'Receive personalized treatment recommendations'
    },
    {
        id: 5,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        label: 'STEP 5',
        title: 'Follow-up Care',
        description: 'Ongoing support and monitoring for optimal recovery'
    }
]

export default function DoctorTimeline() {
    const [activeStep, setActiveStep] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length)
        }, 3000) // Change step every 3 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative pl-10 flex-1 flex flex-col justify-center">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-primary-200"></div>

            <div className="space-y-4">
                {steps.map((step, index) => (
                    <div key={step.id} className="relative">
                        {/* Icon Circle */}
                        <div
                            className={`absolute -left-10 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm transition-all duration-500 ${activeStep === index
                                    ? 'bg-primary-600 border-primary-600 scale-110 text-white'
                                    : 'bg-white border-primary-200 text-primary-600'
                                }`}
                        >
                            {step.icon}
                        </div>

                        {/* Content Card */}
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-300">
                            <span className="inline-block text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full mb-2">
                                {step.label}
                            </span>
                            <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                            <p className="text-xs text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
