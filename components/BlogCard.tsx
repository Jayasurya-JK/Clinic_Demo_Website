import Link from 'next/link'
import Image from 'next/image'
import { type BlogPost } from '@/data/blogPosts'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover group">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="block relative h-48 bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {post.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            Featured
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Category & Read Time */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary-100">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {post.author.name}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-600 hover:text-primary-700 transition-colors"
            aria-label={`Read more about ${post.title}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
