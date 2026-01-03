import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ENT Health Blog',
  description: 'Expert advice and information about ear, nose, throat, hearing, and allergy health from our experienced ENT specialists.',
}

const blogPosts = [
  {
    slug: 'when-to-visit-ent-doctor',
    title: 'When Should You Visit an ENT Doctor?',
    excerpt: 'Learn about the signs and symptoms that indicate it\'s time to see an ENT specialist for proper diagnosis and treatment.',
    date: '2025-01-15',
    category: 'General Health',
    readTime: '5 min read',
    image: 'medical-consultation'
  },
  {
    slug: 'sinus-problems-treatments',
    title: 'Common Sinus Problems & Modern Treatments',
    excerpt: 'Discover the causes of chronic sinusitis, symptoms to watch for, and the latest treatment options available.',
    date: '2025-01-10',
    category: 'Sinus Health',
    readTime: '7 min read',
    image: 'sinus-treatment'
  },
  {
    slug: 'hearing-loss-causes-solutions',
    title: 'Hearing Loss: Causes & Modern Solutions',
    excerpt: 'Understanding different types of hearing loss, their causes, and how modern technology can help restore your hearing.',
    date: '2025-01-05',
    category: 'Hearing Health',
    readTime: '6 min read',
    image: 'hearing-aid'
  }
]

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ENT Health Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert advice, health tips, and the latest information about ear, nose, and throat care from our specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover">
                <Link href={`/blog/${post.slug}/`}>
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <svg className="w-20 h-20 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="text-primary-600 font-medium">{post.category}</span>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-gray-500" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                      <span className="text-primary-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Informed About Your ENT Health
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Subscribe to our newsletter for health tips, latest treatments, and clinic updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email address"
              />
              <button type="submit" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
