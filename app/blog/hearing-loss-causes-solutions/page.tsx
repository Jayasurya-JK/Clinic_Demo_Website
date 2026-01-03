import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hearing Loss: Causes & Modern Solutions',
  description: 'Understanding different types of hearing loss, their causes, and how modern technology can help restore your hearing and improve quality of life.',
  openGraph: {
    title: 'Hearing Loss: Causes & Modern Solutions',
    description: 'Expert guide on hearing loss and modern hearing restoration technology',
    type: 'article',
    publishedTime: '2025-01-05T00:00:00.000Z',
  }
}

export default function BlogPost() {
  return (
    <article className="bg-white">
      <header className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <Link href="/blog/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="mb-6">
            <span className="text-primary-600 font-medium">Hearing Health</span>
            <span className="text-gray-400 mx-2">•</span>
            <time className="text-gray-600" dateTime="2025-01-05">January 5, 2025</time>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-600">6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hearing Loss: Causes & Modern Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Exploring the types of hearing loss and how today's technology can help you hear clearly again.
          </p>
        </div>
      </header>

      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hearing loss affects approximately 48 million Americans, making it one of the most common health conditions. Understanding its causes and available solutions is the first step toward better hearing health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Hearing Loss</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Conductive Hearing Loss</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Occurs when sound waves cannot reach the inner ear due to blockages or damage in the outer or middle ear. Common causes include ear infections, fluid buildup, earwax blockage, or eardrum perforations. This type is often treatable with medication or surgery.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sensorineural Hearing Loss</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Results from damage to the inner ear or auditory nerve. This is the most common type of permanent hearing loss, often caused by aging, noise exposure, genetics, or certain medications. While typically permanent, modern hearing aids and cochlear implants can provide significant improvement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Mixed Hearing Loss</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A combination of conductive and sensorineural hearing loss, requiring a comprehensive treatment approach.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Causes</h2>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">Age-related hearing loss (presbycusis)</li>
              <li className="text-gray-700">Exposure to loud noises (occupational or recreational)</li>
              <li className="text-gray-700">Genetics and family history</li>
              <li className="text-gray-700">Ear infections and diseases</li>
              <li className="text-gray-700">Head trauma</li>
              <li className="text-gray-700">Certain medications (ototoxic drugs)</li>
              <li className="text-gray-700">Cardiovascular conditions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modern Solutions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Advanced Hearing Aids</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today's hearing aids are sophisticated devices offering:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">Bluetooth connectivity for streaming audio from phones and TVs</li>
              <li className="text-gray-700">Rechargeable batteries for convenience</li>
              <li className="text-gray-700">Automatic adjustments to different sound environments</li>
              <li className="text-gray-700">Nearly invisible designs</li>
              <li className="text-gray-700">AI-powered noise reduction and speech enhancement</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cochlear Implants</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              For severe to profound hearing loss, cochlear implants can bypass damaged portions of the ear and directly stimulate the auditory nerve, providing remarkable results for many patients.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Assistive Listening Devices</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Additional technologies like FM systems, captioned telephones, and alerting devices can complement hearing aids and improve daily communication.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Importance of Early Treatment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Research shows that untreated hearing loss can lead to social isolation, depression, cognitive decline, and reduced quality of life. Early intervention not only improves communication but also helps maintain brain health and social connections.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">Protect your ears from loud noises with earplugs or earmuffs</li>
              <li className="text-gray-700">Keep volume at safe levels when using headphones</li>
              <li className="text-gray-700">Get regular hearing screenings, especially after age 50</li>
              <li className="text-gray-700">Manage cardiovascular health</li>
              <li className="text-gray-700">Avoid inserting objects into ear canals</li>
            </ul>

            <div className="bg-medical-mint p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Hearing Evaluated</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you've noticed changes in your hearing, don't wait. Our comprehensive hearing evaluations can identify issues early and help you find the right solution.
              </p>
              <Link href="/appointment/" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Schedule a Hearing Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
