import Link from 'next/link'
import Image from 'next/image'

export default function HealthInsights() {
    const articles = [
        {
            id: 1,
            category: "Sinus Health",
            title: "Why Chronic Sinusitis Often Requires More Than Antibiotics",
            excerpt: "Understanding the structural causes of recurring sinus infections and modern minimally invasive solutions.",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            category: "Sleep Medicine",
            title: "The Silent Connection Between Sleep Apnea and Heart Health",
            excerpt: "Expert analysis on how untreated obstructive sleep apnea impacts cardiovascular longevity.",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            category: "Pediatric ENT",
            title: "Ear Tubes for Children: When is the Right Time?",
            excerpt: "A parent's guide to understanding the indications and benefits of tympanostomy tubes.",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80&w=800"
        }
    ]

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Medical Library</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-text-primary">
                            Expert Insights for Your Health
                        </h2>
                    </div>
                    <Link href="/blog" className="btn-secondary group">
                        View All Articles
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link key={article.id} href={`/blog/${article.id}`} className="group cursor-pointer">
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-surface-100">
                                {/* Placeholder Images - would be premium editorial shots */}
                                <div className="absolute inset-0 bg-primary-100 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity" />
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                                    <span className="text-primary-600">{article.category}</span>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-700 transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                                    {article.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
