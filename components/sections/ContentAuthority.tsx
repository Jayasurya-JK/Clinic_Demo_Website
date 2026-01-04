'use client'

import Link from 'next/link'
import Container from '@/components/design-system/Container'
import { Heading2, Heading3, BodyText } from '@/components/design-system/Typography'
import Card from '@/components/design-system/Card'
import Badge from '@/components/design-system/Badge'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/motion/ScrollReveal'
import { SoftHover } from '@/components/motion/MicroInteractions'

export default function ContentAuthority() {
  const articles = [
    {
      featured: true,
      category: 'Patient Education',
      title: 'When Should You See an ENT Specialist?',
      excerpt: 'Learn the warning signs that indicate it\'s time to consult with an otolaryngologist for your ear, nose, or throat concerns.',
      readTime: '5 min',
      href: '/blog/when-to-visit-ent-doctor',
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-primary-200 to-medical-mint rounded-xl flex items-center justify-center">
          <svg className="w-20 h-20 text-primary-600 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      category: 'Hearing Health',
      title: 'Understanding Hearing Loss: Causes, Types, and Treatments',
      excerpt: 'A comprehensive guide to hearing loss, from age-related changes to noise-induced damage and modern treatment options.',
      readTime: '7 min',
      href: '/blog/hearing-loss-causes-solutions',
      image: (
        <div className="aspect-video bg-gradient-to-br from-medical-mint to-primary-100 rounded-lg flex items-center justify-center">
          <svg className="w-12 h-12 text-primary-600 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
      )
    },
    {
      category: 'Sinus Health',
      title: 'Chronic Sinusitis: Modern Treatment Options',
      excerpt: 'Discover the latest advances in sinus treatment, from medical management to minimally invasive procedures.',
      readTime: '6 min',
      href: '/blog/sinus-problems-treatments',
      image: (
        <div className="aspect-video bg-gradient-to-br from-cream-100 to-medical-mint rounded-lg flex items-center justify-center">
          <svg className="w-12 h-12 text-primary-600 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      )
    }
  ]

  return (
    <section className="section-padding bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading2 className="mb-4">ENT Health Insights & Education</Heading2>
            <BodyText className="text-lg">
              Expert articles and resources to help you understand and manage your ENT health.
            </BodyText>
          </div>
        </ScrollReveal>

        {/* Featured Article */}
        <ScrollReveal>
          <SoftHover>
            <Link href={articles[0].href}>
              <Card padding="none" className="mb-8 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="order-2 md:order-1 p-8 lg:p-10 flex flex-col justify-center">
                    <Badge variant="primary" size="sm" className="mb-4 inline-block w-fit">
                      {articles[0].category}
                    </Badge>
                    <Heading3 className="mb-4">{articles[0].title}</Heading3>
                    <BodyText className="mb-6 text-deep-slate-600">
                      {articles[0].excerpt}
                    </BodyText>
                    <div className="flex items-center gap-4 text-sm text-deep-slate-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {articles[0].readTime} read
                      </span>
                      <span className="text-primary-600 font-medium inline-flex items-center gap-1">
                        Read article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    {articles[0].image}
                  </div>
                </div>
              </Card>
            </Link>
          </SoftHover>
        </ScrollReveal>

        {/* Supporting Articles */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {articles.slice(1).map((article, index) => (
            <StaggerItem key={index}>
              <SoftHover>
                <Link href={article.href}>
                  <Card padding="none" className="h-full overflow-hidden">
                    {article.image}
                    <div className="p-6">
                      <Badge variant="primary" size="sm" className="mb-3 inline-block">
                        {article.category}
                      </Badge>
                      <Heading3 className="text-xl mb-3">{article.title}</Heading3>
                      <BodyText className="text-sm mb-4 text-deep-slate-600">
                        {article.excerpt}
                      </BodyText>
                      <div className="flex items-center gap-4 text-sm text-deep-slate-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime} read
                        </span>
                        <span className="text-primary-600 font-medium inline-flex items-center gap-1">
                          Read more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </SoftHover>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
