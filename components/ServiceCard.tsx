interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const CardContent = () => (
    <>
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {href && (
        <div className="mt-4 flex items-center text-primary-600 font-medium group-hover:text-primary-700">
          <span>Learn more</span>
          <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className="group block bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover">
        <CardContent />
      </a>
    )
  }

  return (
    <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <CardContent />
    </div>
  )
}
