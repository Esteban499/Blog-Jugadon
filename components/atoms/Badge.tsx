import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export function Badge({ children, color = '#4A26BF', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-[10px] py-0.5 rounded-md text-[10px] font-bold tracking-[0.08em] text-brand-text uppercase',
        className,
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  )
}
