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
      className={`relative bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transition-all duration-300 ${isDismissed ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-start sm:items-center justify-between gap-3 py-2 sm:py-3">
          {/* Icon */}
          <div className="flex-shrink-0 mt-0.5 sm:mt-0">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          {/* Message */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center text-sm gap-1 sm:gap-4">
            <div className="font-semibold flex items-center gap-2">
              <span>Medical Emergency?</span>
              <a href="tel:911" className="font-bold underline">Call 911</a>
            </div>
            <div className="flex items-center gap-2 text-red-100 text-xs sm:text-sm">
              <span className="hidden sm:inline">|</span>
              <span>Urgent ENT:</span>
              <a
                href="tel:+1-234-567-8901"
                className="font-semibold hover:underline inline-flex items-center gap-1"
              >
                +1-234-567-8901
              </a>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 hover:bg-red-800 rounded-lg transition-colors -mr-2"
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
