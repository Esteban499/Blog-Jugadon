import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { blockConverters } from '@/components/blocks/converters'
import { getPostBySlug, getAllPostSlugs } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import { Calendar, Clock } from 'lucide-react'

export const revalidate = 3600

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const category = post.categories?.[0]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg pt-[68px]">
        <article className="max-w-[800px] mx-auto px-6 py-16">
          {/* Category */}
          {category && (
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-md text-xs font-bold text-brand-text uppercase tracking-widest"
                style={{ backgroundColor: category.color ?? '#4A26BF' }}
              >
                {category.name}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-sans text-[clamp(28px,4vw,48px)] font-black text-brand-text leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-brand-violet/20">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5 text-brand-muted text-sm">
                <Calendar size={14} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-1.5 text-brand-muted text-sm">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="font-sans text-lg text-brand-soft leading-relaxed mb-8 italic">
              {post.excerpt}
            </p>
          )}

          {/* Rich text content */}
          {post.content && (
            <div className="rich-text-content font-sans text-brand-soft text-base leading-relaxed">
              <RichText data={post.content} converters={blockConverters} />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
