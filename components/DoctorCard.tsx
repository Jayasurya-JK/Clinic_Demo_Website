import Link from 'next/link'
import Image from 'next/image'
import { type Doctor } from '@/data/doctors'

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover group">
      {/* Doctor Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Availability Badge */}
        {doctor.nextAvailable && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            Available Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {doctor.name}
        </h3>
        <p className="text-primary-600 font-medium mb-1">
          {doctor.title}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {doctor.qualification}
        </p>

        {/* Experience */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {doctor.experience}
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {doctor.specialties.slice(0, 2).map((specialty, index) => (
              <span
                key={index}
                className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
            {doctor.specialties.length > 2 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{doctor.specialties.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Next Available */}
        {doctor.nextAvailable && (
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium">Next available:</span>{' '}
            {new Date(doctor.nextAvailable).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/doctors/${doctor.slug}`}
            className="flex-1 text-center bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            View Profile
          </Link>
          <Link
            href={`/appointment/?doctor=${encodeURIComponent(doctor.name)}`}
            className="flex-1 text-center bg-white text-primary-600 border-2 border-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
