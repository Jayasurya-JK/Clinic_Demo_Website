import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When Should You Visit an ENT Doctor?',
  description: 'Learn about the signs and symptoms that indicate it\'s time to see an ENT specialist for proper diagnosis and treatment of ear, nose, and throat conditions.',
  openGraph: {
    title: 'When Should You Visit an ENT Doctor?',
    description: 'Expert guide on recognizing when to see an ENT specialist',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
  }
}

export default function BlogPost() {
  return (
    <>
      {/* Article Header */}
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
              <span className="text-primary-600 font-medium">General Health</span>
              <span className="text-gray-400 mx-2">•</span>
              <time className="text-gray-600" dateTime="2025-01-15">January 15, 2025</time>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-600">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              When Should You Visit an ENT Doctor?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Understanding the signs and symptoms that indicate it's time to seek specialized care from an otolaryngologist.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <div className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many people wonder when their ear, nose, or throat symptoms warrant a visit to a specialist. While your primary care physician can handle many common issues, certain conditions require the expertise of an Ear, Nose, and Throat (ENT) doctor, also known as an otolaryngologist.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Persistent Ear Problems</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you experience any of the following ear-related symptoms, it's time to see an ENT specialist:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Chronic ear infections lasting more than a few days
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Persistent hearing loss or muffled hearing
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Ringing in the ears (tinnitus) that doesn't go away
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Balance problems or vertigo
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Ear pain or drainage
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Chronic Sinus and Nasal Issues</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sinus problems that persist despite standard treatment may require specialized care:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sinusitis lasting more than three months
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Frequent sinus infections (more than 4 per year)
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Chronic nasal congestion or difficulty breathing through your nose
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Loss of sense of smell
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Recurrent nosebleeds
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Throat and Voice Concerns</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your voice and throat health are important indicators that you may need specialized care:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Hoarseness lasting more than two weeks
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Persistent sore throat not related to a cold
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Difficulty swallowing
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Lump in the neck or throat
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Breathing difficulties or sleep apnea symptoms
                </li>
              </ul>

              <div className="bg-primary-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Seek Immediate Care</h3>
                <p className="text-gray-700 mb-3">
                  Some symptoms require immediate medical attention. Visit the emergency room if you experience:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    Severe difficulty breathing or swallowing
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    Sudden, complete hearing loss
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    Severe facial swelling
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    High fever with severe throat or ear pain
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Benefits of Early Intervention</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Seeing an ENT specialist early can prevent minor issues from becoming major problems. Early diagnosis often leads to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  More effective treatment options
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Faster recovery times
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Prevention of complications
                </li>
                <li className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Better long-term outcomes
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Expect at Your First Visit</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your first ENT appointment will typically include a comprehensive evaluation of your symptoms, a physical examination of your ears, nose, and throat, and possibly diagnostic tests. Your ENT specialist will work with you to develop a personalized treatment plan that addresses your specific needs.
              </p>

              <div className="bg-medical-mint p-8 rounded-xl mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to See a Specialist?</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you're experiencing any of the symptoms mentioned above, don't wait. Our experienced ENT specialists are here to help you find relief and improve your quality of life.
                </p>
                <Link href="/appointment/" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  Schedule Your Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
