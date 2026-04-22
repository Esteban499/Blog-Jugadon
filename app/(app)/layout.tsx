import type { Metadata } from 'next'
import { Inter, Jost } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Jugadon Blog',
    default: 'Jugadon Blog — Casino Online y Apuestas Deportivas',
  },
  description:
    'El blog oficial de Jugadon. Casino online, apuestas deportivas, guías, academia y más.',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
