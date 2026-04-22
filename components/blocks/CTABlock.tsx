import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'

interface CTABlockProps {
  text: string
  url: string
  variant?: Variant | null
  newTab?: boolean | null
}

const variantClasses: Record<Variant, string> = {
  primary:
    'text-[#0D091C] font-bold shadow-[0_2px_12px_rgba(41,233,253,0.25)] hover:shadow-[0_4px_24px_rgba(41,233,253,0.5)] hover:-translate-y-px',
  secondary:
    'bg-transparent border border-brand-violet/60 text-brand-text hover:bg-brand-violet/20 hover:border-brand-violet',
  ghost:
    'bg-transparent text-brand-muted hover:text-brand-text hover:bg-white/[0.07]',
}

export function CTABlock({ text, url, variant, newTab }: CTABlockProps) {
  const v = variant ?? 'primary'
  const classes = `inline-flex items-center justify-center px-9 py-4 text-base rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${variantClasses[v]}`
  const style =
    v === 'primary'
      ? { background: 'linear-gradient(135deg, #29E9FD, #1D57FC)' }
      : undefined

  return (
    <div className="my-8 flex justify-center">
      <Link
        href={url}
        className={classes}
        style={style}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {text}
      </Link>
    </div>
  )
}
