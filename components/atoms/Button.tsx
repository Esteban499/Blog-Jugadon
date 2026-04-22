import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  primary:
    'text-[#0D091C] font-bold shadow-[0_2px_12px_rgba(41,233,253,0.25)] hover:shadow-[0_4px_24px_rgba(41,233,253,0.5)] hover:-translate-y-px active:translate-y-0',
  secondary:
    'bg-transparent border border-brand-violet/60 text-brand-text hover:bg-brand-violet/20 hover:border-brand-violet',
  ghost:
    'bg-transparent text-brand-muted hover:text-brand-text hover:bg-white/[0.07]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-[22px] py-[10px] text-sm rounded-lg',
  lg: 'px-9 py-4 text-base rounded-xl',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer whitespace-nowrap',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      style={
        variant === 'primary'
          ? { background: 'linear-gradient(135deg, #29E9FD, #1D57FC)', ...style }
          : style
      }
      {...props}
    />
  )
}
