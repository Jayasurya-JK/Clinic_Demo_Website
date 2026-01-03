'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  icon: ReactNode
}

interface AnimatedStatsProps {
  stats: Stat[]
  duration?: number
}

export default function AnimatedStats({ stats, duration = 2000 }: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      const startTime = Date.now()
      const intervals: NodeJS.Timeout[] = []

      stats.forEach((stat, index) => {
        const targetValue = stat.value
        const updateInterval = 16 // ~60fps
        const totalSteps = duration / updateInterval

        const interval = setInterval(() => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function (ease-out)
          const easeOut = 1 - Math.pow(1 - progress, 3)
          const currentValue = Math.floor(targetValue * easeOut)

          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[index] = currentValue
            return newCounts
          })

          if (progress >= 1) {
            clearInterval(interval)
          }
        }, updateInterval)

        intervals.push(interval)
      })

      return () => {
        intervals.forEach(clearInterval)
      }
    }
  }, [isVisible, stats, duration])

  return (
    <div ref={sectionRef} className="flex items-center gap-8 pt-6 flex-wrap">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {counts[index]}{stat.suffix}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
