import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Common Sinus Problems & Modern Treatments',
  description: 'Discover the causes of chronic sinusitis, symptoms to watch for, and the latest treatment options available for effective relief.',
  openGraph: {
    title: 'Common Sinus Problems & Modern Treatments',
    description: 'Expert guide on sinus health and modern treatment options',
    type: 'article',
    publishedTime: '2025-01-10T00:00:00.000Z',
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
            <span className="text-primary-600 font-medium">Sinus Health</span>
            <span className="text-gray-400 mx-2">•</span>
            <time className="text-gray-600" dateTime="2025-01-10">January 10, 2025</time>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-600">7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Common Sinus Problems & Modern Treatments
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding chronic sinusitis and exploring today's most effective treatment options.
          </p>
        </div>
      </header>

      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sinus problems affect millions of people worldwide, causing significant discomfort and impacting quality of life. Understanding the root causes and available treatments can help you find lasting relief.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Chronic Sinusitis?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chronic sinusitis is inflammation of the sinuses lasting 12 weeks or longer despite treatment. Unlike acute sinusitis, which typically resolves within a few weeks, chronic sinusitis persists and can significantly affect your daily life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Symptoms</h2>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">Facial pain and pressure, especially around the eyes, nose, and forehead</li>
              <li className="text-gray-700">Nasal congestion and difficulty breathing through your nose</li>
              <li className="text-gray-700">Thick, discolored nasal discharge</li>
              <li className="text-gray-700">Reduced sense of smell and taste</li>
              <li className="text-gray-700">Headaches and fatigue</li>
              <li className="text-gray-700">Post-nasal drip</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modern Treatment Options</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Conservative Treatments</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many patients find relief through non-surgical approaches:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">Nasal corticosteroid sprays to reduce inflammation</li>
              <li className="text-gray-700">Saline nasal irrigation to flush out irritants</li>
              <li className="text-gray-700">Oral or injectable corticosteroids for severe cases</li>
              <li className="text-gray-700">Antibiotics if bacterial infection is present</li>
              <li className="text-gray-700">Allergy medications and immunotherapy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Minimally Invasive Procedures</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When conservative treatments don't provide relief, modern minimally invasive procedures offer excellent results with faster recovery times. Balloon sinuplasty, for example, can open blocked sinuses without removing tissue or bone, allowing most patients to return to normal activities within days.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Endoscopic Sinus Surgery</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              For severe or complex cases, endoscopic sinus surgery offers a highly effective solution. Using tiny cameras and instruments, surgeons can remove polyps, correct structural issues, and improve sinus drainage with minimal discomfort and quick recovery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">Manage allergies effectively</li>
              <li className="text-gray-700">Avoid smoke and air pollutants</li>
              <li className="text-gray-700">Use a humidifier in dry environments</li>
              <li className="text-gray-700">Practice good hand hygiene</li>
              <li className="text-gray-700">Stay hydrated</li>
            </ul>

            <div className="bg-medical-mint p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Relief from Chronic Sinus Problems</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Don't let sinus problems control your life. Our specialists can help you find the right treatment plan for lasting relief.
              </p>
              <Link href="/appointment/" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
