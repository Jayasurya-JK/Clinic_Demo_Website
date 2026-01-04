interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const CardContent = () => (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left h-full">
      <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 sm:w-16 sm:h-16 sm:mb-6">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-gray-900 mb-0 sm:text-xl sm:mb-3 leading-tight">{title}</h3>
      <p className="hidden sm:block text-gray-600 leading-relaxed">{description}</p>
      {href && (
        <div className="hidden sm:flex mt-auto pt-4 items-center text-primary-600 font-medium group-hover:text-primary-700">
          <span>Learn more</span>
          <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} className="group block bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 card-hover h-full">
        <CardContent />
      </a>
    )
  }

  return (
    <div className="group bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 h-full">
      <CardContent />
    </div>
  )
}
