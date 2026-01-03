'use client'

import { useEffect } from 'react'

/**
 * Analytics Component
 * 
 * This component sets up Google Analytics 4 and event tracking.
 * 
 * To enable analytics:
 * 1. Create a Google Analytics 4 property
 * 2. Get your measurement ID (starts with G-)
 * 3. Set NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable
 * 4. Uncomment the script tags in the component
 */

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export default function Analytics() {
  useEffect(() => {
    // Track page views on route change
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname
      })
    }
  }, [])

  return (
    <>
      {/* 
        Uncomment these scripts when you're ready to enable Google Analytics:
        
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      */}
    </>
  )
}

/**
 * Track custom events
 * Usage: trackEvent('button_click', { button_name: 'Book Appointment' })
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string) {
  trackEvent('form_submission', {
    form_name: formName
  })
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname
  })
}

/**
 * Track phone call clicks
 */
export function trackPhoneCall(phoneNumber: string) {
  trackEvent('phone_call', {
    phone_number: phoneNumber
  })
}

/**
 * Track appointment bookings
 */
export function trackAppointmentBooking(doctor?: string, service?: string) {
  trackEvent('appointment_booking', {
    doctor,
    service
  })
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', {
    depth_percentage: depth
  })
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}
