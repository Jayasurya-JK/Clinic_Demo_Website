'use client'

import { useState, useEffect } from 'react'

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user has previously dismissed the banner
    const dismissed = localStorage.getItem('emergencyBannerDismissed')
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('emergencyBannerDismissed', 'true')
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`sticky top-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transition-all duration-300 ${
        isDismissed ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Icon */}
          <div className="flex-shrink-0 hidden sm:block">
            <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          {/* Message */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm sm:text-base">
            <span className="font-semibold">Medical Emergency?</span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <a
                href="tel:911"
                className="font-bold hover:underline inline-flex items-center gap-1"
              >
                Call 911
              </a>
              <span className="hidden sm:inline text-red-300">|</span>
              <span className="text-sm sm:text-base">For urgent ENT issues:</span>
              <a
                href="tel:+1-234-567-8901"
                className="font-semibold hover:underline inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1-234-567-8901
              </a>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 hover:bg-red-800 rounded-lg transition-colors"
            aria-label="Dismiss emergency banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
