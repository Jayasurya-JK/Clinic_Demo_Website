import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export default function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[90rem]'
  }

  return (
    <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export function Section({ 
  children, 
  className = '', 
  spacing = 'default',
  background = 'transparent' 
}: { 
  children: React.ReactNode
  className?: string
  spacing?: 'sm' | 'default' | 'lg'
  background?: 'transparent' | 'cream' | 'mint' | 'white' | 'slate'
}) {
  const spacingClasses = {
    sm: 'section-padding-sm',
    default: 'section-padding',
    lg: 'section-padding-lg'
  }

  const bgClasses = {
    transparent: 'bg-transparent',
    cream: 'bg-cream-50',
    mint: 'bg-medical-mint',
    white: 'bg-white',
    slate: 'bg-deep-slate-50'
  }

  return (
    <section className={`${spacingClasses[spacing]} ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  )
}
