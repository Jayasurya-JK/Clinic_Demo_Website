'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleUp'
  delay?: number
  threshold?: number
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) {
      return 'opacity-0'
    }
    
    switch (animation) {
      case 'fadeIn':
        return 'animate-fadeIn'
      case 'fadeInUp':
        return 'animate-fadeInUp'
      case 'fadeInDown':
        return 'animate-fadeInDown'
      case 'fadeInLeft':
        return 'animate-fadeInLeft'
      case 'fadeInRight':
        return 'animate-fadeInRight'
      case 'scaleUp':
        return 'animate-scaleUp'
      default:
        return 'animate-fadeInUp'
    }
  }

  return (
    <div ref={sectionRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
