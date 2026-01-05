"use client"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { images } from '@/config/images'
import { siteConfig } from '@/config/siteConfig'

const awards = [
    { src: "/images/doctor-certifications/Gemini_Generated_Image_dw5kdgdw5kdgdw5k.png", label: "Board Certification" },
    { src: "/images/doctor-certifications/Gemini_Generated_Image_axkd88axkd88axkd.png", label: "Excellence in ENT" },
    { src: "/images/doctor-certifications/Gemini_Generated_Image_13b8dc13b8dc13b8.png", label: "Patient Care Award" },
    { src: "/images/doctor-certifications/Gemini_Generated_Image_g467mng467mng467.png", label: "Leadership Recognition" }
]

export default function TrustBadges() {
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll logic for mobile
    useEffect(() => {
        const autoPlay = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
                const itemWidth = clientWidth * 0.85 // Approximate width of one item

                // Loop check
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                } else {
                    scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' })
                }
            }
        }, 3000)

        return () => clearInterval(autoPlay)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.offsetWidth * 0.8
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Patients, Recognized by Industry
                    </h2>
                    <p className="text-lg text-gray-600">
                        We maintain the highest standards of medical excellence and patient care
                    </p>
                </div>

                {/* Compact Stats Bar (Icons Removed) */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-100">

                        {/* Years in Practice */}
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                                {siteConfig.stats.yearsExperience}+
                            </p>
                            <p className="text-sm font-medium text-gray-600">Years Excellence</p>
                        </div>

                        {/* Success Rate */}
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                                {siteConfig.stats.successRate}%
                            </p>
                            <p className="text-sm font-medium text-gray-600">Success Rate</p>
                        </div>

                        {/* Happy Patients */}
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">
                                {siteConfig.stats.happyPatients}+
                            </p>
                            <p className="text-sm font-medium text-gray-600">Happy Patients</p>
                        </div>

                        {/* Board Certified */}
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                                100%
                            </p>
                            <p className="text-sm font-medium text-gray-600">Board Certified</p>
                        </div>

                    </div>
                </div>

                {/* Certifications & Awards */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative group/container">
                    <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
                        Certifications & Recognitions
                    </h3>

                    {/* Mobile View: Scroll Snap Carousel with Arrows */}
                    <div className="md:hidden relative">
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {awards.map((item, index) => (
                                <div key={index} className="min-w-[85%] snap-center relative flex-shrink-0 flex flex-col items-center">
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                                        <Image
                                            src={item.src}
                                            alt={item.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="mt-4 text-center px-1">
                                        <p className="text-gray-900 font-bold text-lg leading-tight">{item.label}</p>
                                        <div className="w-10 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 top-[35%] -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-primary-600 border border-gray-100 z-20 hover:scale-105 active:scale-95 transition-all"
                            aria-label="Previous Award"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-[35%] -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-primary-600 border border-gray-100 z-20 hover:scale-105 active:scale-95 transition-all"
                            aria-label="Next Award"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* Desktop View: Moving Awards Carousel */}
                    <div className="hidden md:block w-full overflow-hidden relative group">
                        {/* Gradient Masks for smooth fade out */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                        <div className="flex animate-marquee gap-6 min-w-max py-4">
                            {[...awards, ...awards].map((item, index) => (
                                <div key={index} className="relative w-[300px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 flex-shrink-0 card-hover">
                                    <Image
                                        src={item.src}
                                        alt={item.label}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-bold text-lg leading-tight drop-shadow-sm">{item.label}</p>
                                        <div className="w-8 h-1 bg-yellow-400 mt-2 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
