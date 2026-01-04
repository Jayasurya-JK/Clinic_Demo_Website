import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'glass' | 'flat'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = true
}: CardProps) {
  const variantClasses = {
    default: 'bg-white shadow-soft rounded-2xl',
    bordered: 'bg-white border-2 border-deep-slate-200 rounded-2xl',
    glass: 'glass-card rounded-2xl',
    flat: 'bg-white rounded-2xl'
  }

  const paddingClasses = {
    none: '',
    sm: 'p-4 sm:p-6',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10'
  }

  const hoverClass = hover ? 'card-hover' : ''

  return (
    <div className={`${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

// Bento Box Grid Components
export function BentoGrid({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
      {children}
    </div>
  )
}

export function BentoCard({
  children,
  className = '',
  size = 'default',
  color = 'white'
}: {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'large' | 'wide' | 'tall'
  color?: 'white' | 'mint' | 'cream' | 'slate'
}) {
  const sizeClasses = {
    default: '',
    large: 'md:col-span-2 md:row-span-2',
    wide: 'md:col-span-2',
    tall: 'md:row-span-2'
  }

  const colorClasses = {
    white: 'bg-white',
    mint: 'bg-medical-mint',
    cream: 'bg-cream-50',
    slate: 'bg-deep-slate-50'
  }

  return (
    <Card 
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`} 
      padding="lg"
    >
      {children}
    </Card>
  )
}
