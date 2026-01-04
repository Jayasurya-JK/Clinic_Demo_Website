import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'info' | 'warning' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = ''
}: BadgeProps) {
  const variantClasses = {
    success: 'bg-primary-50 text-primary-700 border-primary-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    primary: 'bg-deep-slate-100 text-deep-slate-700 border-deep-slate-200'
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

export function TrustBadge({ 
  icon, 
  text, 
  subtext,
  className = '' 
}: { 
  icon: React.ReactNode
  text: string
  subtext?: string
  className?: string
}) {
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl bg-white shadow-soft ${className}`}>
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-deep-slate-900 text-sm">{text}</div>
        {subtext && <div className="text-xs text-deep-slate-600 mt-0.5">{subtext}</div>}
      </div>
    </div>
  )
}
