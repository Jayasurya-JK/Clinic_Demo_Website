import React from 'react'

interface TypographyProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function Heading1({ children, className = '', as: Component = 'h1' }: TypographyProps) {
  return (
    <Component className={`text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-deep-slate-900 ${className}`}>
      {children}
    </Component>
  )
}

export function Heading2({ children, className = '', as: Component = 'h2' }: TypographyProps) {
  return (
    <Component className={`text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-deep-slate-900 ${className}`}>
      {children}
    </Component>
  )
}

export function Heading3({ children, className = '', as: Component = 'h3' }: TypographyProps) {
  return (
    <Component className={`text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.3] text-deep-slate-900 ${className}`}>
      {children}
    </Component>
  )
}

export function Heading4({ children, className = '', as: Component = 'h4' }: TypographyProps) {
  return (
    <Component className={`text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-[1.4] text-deep-slate-900 ${className}`}>
      {children}
    </Component>
  )
}

export function BodyText({ children, className = '', as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={`text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.75] text-deep-slate-700 ${className}`}>
      {children}
    </Component>
  )
}

export function LeadText({ children, className = '', as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={`text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.7] text-deep-slate-600 ${className}`}>
      {children}
    </Component>
  )
}
