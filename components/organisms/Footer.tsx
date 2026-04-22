import Link from 'next/link'
import Image from 'next/image'
import { Music2 } from 'lucide-react'
import { SocialButton } from '@/components/molecules/SocialButton'

/* ── Icons ──────────────────────────────────────────────── */

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
)

const TwitterXIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

/* ── Data ────────────────────────────────────────────────── */

const SOCIAL_GENERAL = [
  { href: 'https://www.youtube.com/channel/UCTM5tJIZsBNafsqqqDAYdXw', label: 'YouTube',    icon: <YoutubeIcon /> },
  { href: 'https://twitter.com/jugadonbet',                            label: 'Twitter / X', icon: <TwitterXIcon /> },
  { href: 'https://tiktok.com/@jugadon.ok',                           label: 'TikTok',      icon: <TikTokIcon /> },
  { href: 'https://open.spotify.com/user/317gntai2wlxn4tdon7du6lisemu', label: 'Spotify',  icon: <Music2 size={20} /> },
]

const REGIONS = [
  {
    name: 'CABA',
    facebook:  'https://www.facebook.com/jugadoncaba',
    instagram: 'https://www.instagram.com/jugadoncaba/',
  },
  {
    name: 'Córdoba',
    facebook:  'https://www.facebook.com/jugadoncordoba',
    instagram: 'https://www.instagram.com/jugadon.cba/',
  },
  {
    name: 'La Rioja',
    facebook:  'https://www.facebook.com/profile.php?id=61570165033034',
    instagram: 'https://www.instagram.com/jugadonrioja/',
  },
  {
    name: 'San Luis',
    facebook:  'https://www.facebook.com/jugadonsl',
    instagram: 'https://www.instagram.com/jugadon.sl/',
  },
]

const LOTTERIES = [
  {
    name: 'Lotería de La Rioja',
    href: 'https://lr.lotemovil.com.ar/#',
    src: 'https://afiliados.jugadon.bet.ar/assets/images/loteriaLaRioja.webp',
  },
  {
    name: 'Lotería de San Luis',
    href: 'https://www.loteriadesanluis.com/',
    src: 'https://afiliados.jugadon.bet.ar/assets/images/logo-loteria-01.webp',
  },
  {
    name: 'Lotería de Córdoba',
    href: 'https://loteriadecordoba.com.ar/',
    src: 'https://afiliados.jugadon.bet.ar/assets/images/logo-loteria-footer-color-2.webp',
  },
  {
    name: 'LOTBA Buenos Aires',
    href: 'https://www.loteriadelaciudad.gob.ar/',
    src: 'https://afiliados.jugadon.bet.ar/assets/images/lotba-logo.webp',
  },
]

/* ── Component ───────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] text-brand-text" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-6">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" aria-label="Jugadon — Inicio" className="font-display font-black text-3xl tracking-tight">
            <span className="text-brand-cyan">JUGAD</span>
            <span className="text-brand-text">ÓN</span>
          </Link>
        </div>

        <hr className="border-white/[0.07] mb-8" />

        {/* Social — general */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <span className="font-sans text-sm font-bold text-brand-muted">Seguinos en redes</span>
          <div className="flex gap-2.5">
            {SOCIAL_GENERAL.map((s) => (
              <SocialButton key={s.label} href={s.href} label={s.label}>
                {s.icon}
              </SocialButton>
            ))}
          </div>
        </div>

        {/* Social — regional */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {REGIONS.map((region) => (
            <div key={region.name} className="flex flex-col items-center gap-2">
              <span className="font-sans text-xs font-bold text-brand-dim uppercase tracking-[0.1em]">
                {region.name}
              </span>
              <div className="flex gap-2">
                <SocialButton href={region.facebook} label={`Facebook ${region.name}`}>
                  <FacebookIcon />
                </SocialButton>
                <SocialButton href={region.instagram} label={`Instagram ${region.name}`}>
                  <InstagramIcon />
                </SocialButton>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-white/[0.07] mb-8" />

        {/* Regulated by */}
        <div className="text-center mb-8">
          <p className="font-sans text-xs font-bold text-brand-dim uppercase tracking-[0.12em] mb-5">
            Regulado por
          </p>
          <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-12 place-items-center">
            {LOTTERIES.map((lot) => (
              <a
                key={lot.name}
                href={lot.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={lot.src}
                  alt={lot.name}
                  width={110}
                  height={44}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-white/[0.07] mb-6" />

        {/* Contact */}
        <div className="text-center mb-6">
          <span className="font-sans text-sm text-brand-muted">
            Contacto:{' '}
            <a
              href="mailto:contacto@jugadon.bet.ar"
              className="text-brand-cyan hover:text-brand-text transition-colors duration-200"
            >
              contacto@jugadon.bet.ar
            </a>
            {' · '}
            <a
              href="tel:0800-666-6176"
              className="text-brand-cyan hover:text-brand-text transition-colors duration-200"
            >
              0800-666-6176
            </a>
          </span>
        </div>

        {/* Legal */}
        <div className="text-center">
          <p className="font-sans text-[13px] text-brand-dim leading-[1.9]">
            Copyright © 2026 |{' '}
            <span className="text-brand-cyan">blog.jugadon.bet.ar</span>
            {' '}| Todos los Derechos Reservados © 2026 – Jugadon
            <br />
            Si el juego comienza a ser un problema, pedí ayuda al{' '}
            <a href="tel:0800-666-6176" className="text-brand-cyan hover:text-brand-text transition-colors duration-200">
              0800-666-6176
            </a>.
            <br />
            Solo para mayores de 18 años.
          </p>
        </div>

      </div>
    </footer>
  )
}
