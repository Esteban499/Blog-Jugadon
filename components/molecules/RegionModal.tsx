'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

const REGIONS = [
  { name: 'San Luis',  province: 'San Luis',     href: 'https://sanluis.jugadon.bet.ar' },
  { name: 'Córdoba',   province: 'Córdoba',       href: 'https://cordoba.jugadon.bet.ar' },
  { name: 'CABA',      province: 'Buenos Aires',  href: 'https://caba.jugadon.bet.ar' },
  { name: 'La Rioja',  province: 'La Rioja',      href: 'https://larioja.jugadon.bet.ar' },
]

interface RegionModalProps {
  onClose: () => void
}

export function RegionModal({ onClose }: RegionModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Seleccioná tu región"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-[#0D091C] border border-brand-violet/40 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(74,38,191,0.2)] p-6 animate-[modal-in_0.2s_ease_forwards]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-brand-muted hover:text-brand-text hover:bg-white/[0.06] transition-colors duration-150"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <p className="font-sans text-xs font-bold text-brand-cyan tracking-[0.14em] uppercase mb-1">
            Seleccioná tu provincia
          </p>
          <h2 className="font-sans text-xl font-black text-brand-text">
            ¿Desde dónde jugás?
          </h2>
          <p className="font-sans text-sm text-brand-muted mt-1">
            Cada provincia opera bajo su propia licencia regulada.
          </p>
        </div>

        {/* Region list */}
        <div className="flex flex-col gap-3">
          {REGIONS.map((region) => (
            <a
              key={region.name}
              href={region.href}
              className="group flex items-center justify-between px-4 py-3.5 rounded-xl border border-brand-violet/25 bg-brand-violet/5 hover:bg-brand-violet/15 hover:border-brand-violet/60 hover:shadow-[0_0_20px_rgba(74,38,191,0.2)] transition-all duration-200"
            >
              <div>
                <span className="block font-sans text-[15px] font-bold text-brand-text group-hover:text-white transition-colors duration-150">
                  {region.name}
                </span>
                <span className="block font-sans text-xs text-brand-muted">
                  {region.province}
                </span>
              </div>
              <svg
                className="w-4 h-4 text-brand-muted group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all duration-150"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
