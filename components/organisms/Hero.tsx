'use client'

import { useEffect, useState, useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  color: string
}

function FloatingParticle({ p }: { p: Particle }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: `${p.size}px`,
        height: `${p.size}px`,
        borderRadius: p.size > 4 ? '50%' : '1px',
        background: p.color,
        opacity: 0,
        animation: `float-up 6s ${p.delay}s infinite ease-in-out`,
        pointerEvents: 'none',
      }}
    />
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)

  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: (i * 5.55) % 100,
        y: (i * 7.3) % 100,
        size: i % 3 === 0 ? 6 : 3,
        delay: (i * 0.35) % 4,
        color: i % 2 === 0 ? '#29E9FD' : '#4A26BF',
      })),
    [],
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-brand-bg">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, rgba(13,9,28,0.97) 0%, rgba(74,38,191,0.55) 50%, rgba(29,87,252,0.45) 100%)',
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: '15%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(74,38,191,0.25) 0%, transparent 70%)',
          animation: 'hero-glow 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(29,87,252,0.2) 0%, transparent 70%)',
          animation: 'hero-glow 5s ease-in-out infinite 2s',
        }}
      />

      {/* Floating particles */}
      {mounted && particles.map((p) => <FloatingParticle key={p.id} p={p} />)}

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-[120px] pb-20 w-full">
        <div
          className="max-w-[680px]"
          style={{
            animation: mounted ? 'slide-in-left 0.9s ease forwards' : 'none',
            opacity: mounted ? undefined : 0,
          }}
        >
          <h1 className="font-sans text-[clamp(36px,5vw,68px)] font-black text-brand-text uppercase leading-[1.05] tracking-[-0.02em] mb-5">
            BIENVENIDO AL{' '}
            <span
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(90deg, #29E9FD, #1D57FC, #29E9FD)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer-text 3s linear infinite',
              }}
            >
              MUNDO DE LA
            </span>{' '}
            DIVERSIÓN
          </h1>

          <p className="font-sans text-[clamp(16px,2vw,20px)] text-brand-muted mb-10 max-w-[500px] leading-relaxed">
            Sitio Oficial de Casino Online y Apuestas Deportivas — La plataforma más emocionante de
            Argentina, con licencia y regulada.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#articulos"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#articulos')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-sans text-base font-semibold text-brand-text px-9 py-4 rounded-xl border border-brand-violet/60 hover:bg-brand-violet/20 hover:border-brand-violet transition-all duration-200 inline-block"
            >
              Explorar Blog
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        aria-hidden="true"
      >
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #29E9FD)',
            animation: 'float-up 2s ease-in-out infinite',
          }}
        />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29E9FD" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
