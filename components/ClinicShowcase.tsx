'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Clinic images
const clinicImages = [
    {
        id: 1,
        src: '/images/clinic/reception.png',
        alt: 'Clinic Reception',
        label: 'Reception Area'
    },
    {
        id: 2,
        src: '/images/clinic/consultation.png',
        alt: 'Consultation Room',
        label: 'Doctor Cabin'
    },
    {
        id: 3,
        src: '/images/clinic/ward.png',
        alt: 'Patient Ward',
        label: 'In-Patient Ward'
    },
    {
        id: 4,
        src: '/images/clinic/ot.png',
        alt: 'Minor OT',
        label: 'Procedure Room'
    },
    {
        id: 5,
        src: '/images/clinic/audiology.png',
        alt: 'Audiology Room',
        label: 'Hearing Test Lab'
    },
    {
        id: 6,
        src: '/images/clinic/exterior.png',
        alt: 'Clinic Entrance',
        label: 'Clinic Entrance'
    }
]

export default function ClinicShowcase() {
    const [activeImage, setActiveImage] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const resumeTimeout = React.useRef<NodeJS.Timeout | null>(null)

    // Auto-cycle through images to highlight one randomly or sequentially
    useEffect(() => {
        if (isPaused) return

        // Start interval to change images
        const interval = setInterval(() => {
            // Pick a random next image that isn't the current one to ensure change
            setActiveImage((prev) => {
                let next = Math.floor(Math.random() * clinicImages.length)
                if (clinicImages.length > 1) {
                    // Try to find a different image, but limit tries to avoid infinite loops if logic fails
                    let tries = 0;
                    while (next === prev && tries < 5) {
                        next = Math.floor(Math.random() * clinicImages.length)
                        tries++;
                    }
                }
                return next
            })
        }, 4000) // Change highlight every 4 seconds

        return () => clearInterval(interval)
    }, [isPaused])

    const handleImageClick = (index: number) => {
        setActiveImage(index)
        setIsPaused(true)

        // Clear existing timeout if any (restart the pause timer)
        if (resumeTimeout.current) {
            clearTimeout(resumeTimeout.current)
        }

        // Resume automation after 5 seconds of inactivity
        resumeTimeout.current = setTimeout(() => {
            setIsPaused(false)
        }, 5000)
    }

    return (
        <div className="h-full flex flex-col">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Modern Facility
                </h2>
                <p className="text-lg text-gray-600">
                    Designed for your comfort, safety, and optimal care experience
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex-1 flex flex-col relative min-h-[500px]">
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary-50 blur-3xl opacity-60"></div>

                {/* Dynamic Image Grid - "Scattered Layout" */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                    {clinicImages.map((img, index) => {
                        const isActive = index === activeImage

                        // Calculate random-ish positions for a "scattered" look based on index
                        // This is static randomness (deterministic) based on index to keep layout stable
                        // 0: Top Left, 1: Top Right, 2: Bottom Left, 3: Bottom Right
                        // But we center them and offset
                        const positions = [
                            "top-2 left-2 -rotate-2",
                            "top-6 right-2 rotate-2",
                            "bottom-12 left-6 rotate-1",
                            "bottom-4 right-6 -rotate-2",
                            "top-1/2 left-4 -translate-y-1/2 -rotate-3", // Position 5 (Middle Left)
                            "top-1/2 right-4 -translate-y-1/2 rotate-3"   // Position 6 (Middle Right)
                        ]

                        const positionClass = positions[index % positions.length]

                        return (
                            <div
                                key={img.id}
                                className={`
                  absolute w-[180px] sm:w-[220px] aspect-[4/3] rounded-xl shadow-lg border-4 border-white transition-all duration-1000 ease-in-out cursor-pointer
                  ${positionClass}
                  ${isActive
                                        ? 'z-20 scale-125 shadow-2xl opacity-100 rotate-0 !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2'
                                        : 'z-10 scale-95 opacity-70 hover:opacity-100 hover:scale-100 hover:z-15 grayscale-[30%]'
                                    }
                `}
                                onClick={() => handleImageClick(index)}
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-lg">
                                    {/* 
                     NOTE: In a real implementation using local files, we'd import them. 
                     Here using Next.js Image with placeholders.
                     We will update the src in page.tsx or passed as props, but for now mostly relying on artifact logic
                   */}
                                    <div className="relative w-full h-full bg-gray-200">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Label Overlay - Only visible when active */}
                                    <div className={`absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent text-white text-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                        <span className="text-sm font-medium">{img.label}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
