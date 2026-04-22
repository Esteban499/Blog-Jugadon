import type { Metadata } from 'next'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { getLatestPosts } from '@/lib/api'
import { ArticleCard } from '@/components/molecules/ArticleCard'

export const revalidate = 3600

export const metadata: Metadata = { title: 'Blog' }

export default async function BlogPage() {
  const posts = await getLatestPosts(12)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg pt-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h1 className="font-sans text-[clamp(32px,4vw,52px)] font-black text-brand-text uppercase tracking-[-0.02em] leading-[1.05] mb-12">
            Blog <span className="text-brand-violet italic">Oficial</span>
          </h1>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="font-sans text-brand-muted">
              Próximamente artículos. Publicá tu primer post desde el panel de administración.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
