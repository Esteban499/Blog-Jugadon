'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NavLink } from '@/components/molecules/NavLink'
import { RegionModal } from '@/components/molecules/RegionModal'

const NAV_LINKS = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Academia Jugadon', href: '/#academia' },
  { label: 'Juegos Destacados', href: '/#juegos' },
  { label: 'Últimos Artículos', href: '/#articulos' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#')) return
    e.preventDefault()
    const target = document.querySelector(href.replace('/#', '#'))
    target?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D091C]/95 backdrop-blur-xl border-b border-brand-violet/25 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 h-[68px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" aria-label="Jugadon — Inicio" className="flex-shrink-0">
          <span className="font-display font-black text-2xl leading-none tracking-tight">
            <span className="text-brand-cyan">JUGAD</span>
            <span className="text-brand-text">ÓN</span>
          </span>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className={`lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 border rounded-md transition-all duration-200 ${
            isMenuOpen
              ? 'bg-brand-violet/25 border-brand-violet/50'
              : 'bg-white/[0.05] border-white/[0.12] hover:bg-brand-violet/25 hover:border-brand-violet/50'
          }`}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span
            className={`block w-[18px] h-[2px] bg-white rounded-sm transition-transform duration-300 origin-center ${
              isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] bg-white rounded-sm transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 w-0' : ''
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] bg-white rounded-sm transition-transform duration-300 origin-center ${
              isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        {/* Nav — desktop */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              label={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
            />
          ))}
        </nav>

        {/* Auth — desktop */}
        <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={() => setModal(true)}
            className="font-sans text-sm font-semibold text-brand-text px-5 py-[9px] rounded-lg border border-brand-violet/60 hover:bg-brand-violet/20 hover:border-brand-violet hover:shadow-[0_0_16px_rgba(74,38,191,0.35)] transition-all duration-200 whitespace-nowrap"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setModal(true)}
            className="font-sans text-sm font-semibold text-[#0D091C] px-5 py-[9px] rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(41,233,253,0.45)] transition-all duration-200 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #29E9FD, #1D57FC)' }}
          >
            Crear cuenta
          </button>
        </div>
      </div>

      {modal && <RegionModal onClose={() => setModal(false)} />}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[68px] left-0 right-0 bottom-0 bg-[#080511]/98 backdrop-blur-2xl border-t border-brand-violet/25 flex flex-col gap-1 p-5 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              label={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
            />
          ))}
          <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
            <button
              onClick={() => { setModal(true); setIsMenuOpen(false) }}
              className="font-sans text-[15px] font-semibold text-brand-text px-[18px] py-[14px] rounded-xl border border-brand-violet/35 text-center hover:bg-brand-violet/20 transition-all duration-200"
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => { setModal(true); setIsMenuOpen(false) }}
              className="font-sans text-[15px] font-semibold text-[#0D091C] px-[18px] py-[14px] rounded-xl text-center"
              style={{ background: 'linear-gradient(135deg, #29E9FD, #1D57FC)' }}
            >
              Crear cuenta
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
