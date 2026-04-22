import Link from 'next/link'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { ScrollReveal } from '@/components/atoms/ScrollReveal'
import { ArticleCard } from '@/components/molecules/ArticleCard'
import type { Post } from '@/types'

interface UltimosArticulosProps {
  posts: Post[]
}

export function UltimosArticulos({ posts }: UltimosArticulosProps) {
  return (
    <section
      id="articulos"
      className="bg-gradient-to-b from-brand-bg via-[#0f0a20] to-brand-bg py-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal delay={200}>
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel text="Blog oficial" />
              <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-black text-brand-text uppercase tracking-[-0.02em] leading-[1.05]">
                ÚLTIMOS <span className="text-brand-violet italic">ARTÍCULOS</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-sans text-sm font-bold text-brand-text px-7 py-3 rounded-xl border border-brand-violet/60 bg-brand-violet/15 hover:bg-brand-violet/35 hover:shadow-[0_0_20px_rgba(74,38,191,0.4)] transition-all duration-200 whitespace-nowrap"
            >
              Ver más →
            </Link>
          </div>

          {/* Articles grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-2">
              <p className="font-sans text-brand-muted">Próximamente artículos.</p>
              <p className="font-sans text-sm text-brand-dim">
                Publicá tu primer artículo desde el panel de administración.
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
