import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/atoms/Badge'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/types'

interface ArticleCardProps {
  post: Post
}

export function ArticleCard({ post }: ArticleCardProps) {
  const category = post.categories?.[0]
  const formattedDate = post.publishedAt ? formatDate(post.publishedAt) : null

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-[#0D091C]/80 border border-brand-violet/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-violet/60 hover:shadow-[0_12px_40px_rgba(74,38,191,0.3)]"
    >
      {/* Image */}
      <div className="relative pb-[55%] overflow-hidden flex-shrink-0">
        {post.featuredImage?.url ? (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/30 to-brand-blue/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D091C]/80 to-transparent" />
        {category && (
          <div className="absolute top-4 left-4">
            <Badge color={category.color}>{category.name}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-sans text-lg font-bold text-brand-text leading-[1.35]">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="font-sans text-sm text-brand-muted leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-violet/15">
          <div className="flex items-center gap-4">
            {formattedDate && (
              <div className="flex items-center gap-1.5">
                <Calendar size={13} className="text-brand-muted" />
                <span className="text-xs text-brand-muted">{formattedDate}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-brand-muted" />
                <span className="text-xs text-brand-muted">{post.readTime}</span>
              </div>
            )}
          </div>
          <ArrowRight size={16} className="text-brand-violet" />
        </div>
      </div>
    </Link>
  )
}
