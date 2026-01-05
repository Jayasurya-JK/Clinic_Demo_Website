interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
  className?: string
  featured?: boolean
}

export default function ServiceCard({ icon, title, description, href, className = '', featured = false }: ServiceCardProps) {
  const CardContent = () => (
    <div className="relative h-full flex flex-col">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Container - Much Larger */}
      <div className={`relative z-10 flex items-center justify-center ${featured ? 'w-20 h-20 md:w-24 md:h-24' : 'w-16 h-16 md:w-20 md:h-20'} mb-5 md:mb-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl shadow-lg`}>
        <div className="transform transition-all duration-500 group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className={`${featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-primary-600 transition-colors`}>
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 flex-1">
          {description}
        </p>

        {href && (
          <div className="flex items-center text-primary-600 font-semibold text-sm md:text-base group-hover:text-primary-700 group-hover:gap-2 gap-1 transition-all">
            <span>Learn more</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        className={`group block relative bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full overflow-hidden ${className}`}
      >
        <CardContent />
      </a>
    )
  }

  return (
    <div className={`group relative bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-100 h-full overflow-hidden ${className}`}>
      <CardContent />
    </div>
  )
}
