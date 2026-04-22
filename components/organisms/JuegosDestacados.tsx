import Image from 'next/image'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { ScrollReveal } from '@/components/atoms/ScrollReveal'
import { GameCard } from '@/components/molecules/GameCard'
import type { Game, Provider } from '@/types'

interface JuegosDestacadosProps {
  games: Game[]
  providers: Provider[]
}

export function JuegosDestacados({ games, providers }: JuegosDestacadosProps) {
  const items = [...providers, ...providers]
  return (
    <section id="juegos" className="relative bg-brand-bg pt-24 overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(29,87,252,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,87,252,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel text="Los más jugados" color="#1D57FC" />
            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-black text-brand-text uppercase tracking-[-0.02em] leading-[1.05]">
              JUEGOS <span className="text-brand-cyan italic">DESTACADOS</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Games grid */}
        <ScrollReveal delay={300}>
          {games.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-2">
              <p className="font-sans text-brand-muted">Próximamente juegos destacados.</p>
              <p className="font-sans text-sm text-brand-dim">
                Agregá juegos desde el panel de administración y marcalos como destacados.
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>

      {/* Providers carousel — full width */}
      {providers.length > 0 && <div className="mt-16 border-y border-brand-violet/20 bg-brand-violet/5">
        <div className="max-w-[1280px] mx-auto px-6 pt-[18px] flex justify-center">
          <span className="font-sans text-sm font-bold text-brand-muted tracking-[0.12em] uppercase">
            Nuestros proveedores
          </span>
        </div>

        <div
          className="overflow-hidden py-6"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div
            className="flex items-center w-max"
            style={{ animation: 'marquee-scroll 22s linear infinite' }}
          >
            {items.map((provider, i) => (
              <div key={i} className="flex-shrink-0 mx-8 flex items-center">
                <Image
                  src={provider.logo.url}
                  alt={provider.name}
                  width={120}
                  height={40}
                  className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>}

      <div className="pb-24" />
    </section>
  )
}
