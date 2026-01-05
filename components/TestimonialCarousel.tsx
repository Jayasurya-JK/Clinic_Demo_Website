'use client'

import React, { useState, useEffect } from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
    {
        name: "John Anderson",
        condition: "Chronic Sinusitis Treatment",
        testimonial: "After years of suffering, Dr. Johnson's treatment finally gave me relief. The staff is professional and caring. Highly recommend!",
        rating: 5
    },
    {
        name: "Maria Garcia",
        condition: "Pediatric ENT Care",
        testimonial: "Dr. Chen was wonderful with my son. He made him feel comfortable and explained everything clearly. We're so grateful for his expertise.",
        rating: 5
    },
    {
        name: "Robert Smith",
        condition: "Voice Disorder Treatment",
        testimonial: "Dr. Williams helped me regain my voice after a difficult condition. Her knowledge and compassionate care made all the difference.",
        rating: 5
    },
    {
        name: "Sarah Johnson",
        condition: "Allergy Management",
        testimonial: "The allergy shots have completely changed my life. I can finally enjoy the outdoors again without constant sneezing.",
        rating: 5
    },
    {
        name: "Michael Chen",
        condition: "Hearing Aid Fitting",
        testimonial: "The audiology team was patient and thorough. My new hearing aids are comfortable and the clarity is amazing.",
        rating: 5
    }
]

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsToShow, setItemsToShow] = useState(1)

    // Responsive items count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsToShow(3) // Desktop
            else if (window.innerWidth >= 640) setItemsToShow(2) // Tablet
            else setItemsToShow(1) // Mobile
        }

        // Initial call
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                // Determine max index based on visible items
                const maxIndex = Math.max(0, testimonials.length - itemsToShow)
                return prev >= maxIndex ? 0 : prev + 1
            })
        }, 5000) // 5 seconds per slide

        return () => clearInterval(interval)
    }, [itemsToShow])

    const maxIndex = Math.max(0, testimonials.length - itemsToShow)

    return (
        <div className="relative w-full">
            <div className="overflow-hidden py-4 -mx-4 px-4 sm:px-0"> {/* Negative margin to allow card shadow interactions if needed, but keeping it simple */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 px-3 transition-all duration-300"
                            style={{ width: `${100 / itemsToShow}%` }}
                        >
                            <div className="h-full">
                                <TestimonialCard {...t} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex
                                ? 'bg-primary-600 scale-125'
                                : 'bg-gray-300 hover:bg-primary-300'
                            }`}
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
