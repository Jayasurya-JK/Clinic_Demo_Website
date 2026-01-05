'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function MobileNav() {
    const [isVisible, setIsVisible] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Don't show footer if we're at the very top
            if (currentScrollY < 50) {
                setIsVisible(false)
            }
            // Show footer when scrolling down, hide when scrolling up
            else if (currentScrollY > lastScrollY) {
                // Scrolling down - show footer
                setIsVisible(true)
            } else {
                // Scrolling up - hide footer
                setIsVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <div className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] pb-[env(safe-area-inset-bottom)] bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}>
            {/* Clean Professional Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

            <div className="flex h-[72px] items-center">
                {/* Call Button */}
                <a
                    href="tel:+1234567890"
                    className="flex-1 flex flex-col items-center justify-center gap-1.5 group relative border-r border-gray-100 active:bg-gray-50 transition-all duration-200 h-full"
                    aria-label="Call Clinic"
                >
                    <div className="p-2 rounded-lg bg-primary-50 text-primary-600 group-active:bg-primary-100 group-active:scale-95 transition-all duration-200">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-700 group-active:text-primary-600 transition-colors">Call</span>
                </a>

                {/* WhatsApp Button */}
                <button
                    className="flex-1 flex flex-col items-center justify-center gap-1.5 group relative border-r border-gray-100 active:bg-gray-50 transition-all duration-200 h-full"
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                    aria-label="Chat on WhatsApp"
                >
                    <div className="p-2 rounded-lg bg-secondary-50 text-secondary-600 group-active:bg-secondary-100 group-active:scale-95 transition-all duration-200">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-700 group-active:text-secondary-600 transition-colors">WhatsApp</span>
                </button>

                {/* Book Appointment - Primary CTA */}
                <Link
                    href="/appointment"
                    className="flex-1 flex flex-col items-center justify-center gap-1.5 group relative active:bg-primary-700 transition-all duration-200 bg-primary-600 h-full"
                >
                    <svg className="w-5 h-5 text-white group-active:scale-95 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">Book Now</span>
                </Link>
            </div>
        </div>
    )
}
