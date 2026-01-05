import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  return (
    <Link href={href} className={`inline-flex items-center justify-center w-full md:w-auto ${baseClasses} ${className}`}>
      {children}
    </Link>
  )
}
