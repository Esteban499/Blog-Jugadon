import type { ReactNode } from 'react'

interface SocialButtonProps {
  href: string
  label: string
  children: ReactNode
}

export function SocialButton({ href, label, children }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.07] border border-white/[0.12] text-brand-muted hover:bg-brand-blue/35 hover:text-brand-text hover:border-brand-cyan/50 transition-all duration-200"
    >
      {children}
    </a>
  )
}
