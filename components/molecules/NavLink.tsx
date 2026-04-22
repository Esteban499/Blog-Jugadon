'use client'

import Link from 'next/link'
import type { MouseEvent } from 'react'

interface NavLinkProps {
  label: string
  href: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function NavLink({ label, href, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-display text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-white/[0.07] px-[13px] py-2 rounded-md transition-colors duration-200 block whitespace-nowrap tracking-[0.01em]"
    >
      {label}
    </Link>
  )
}
