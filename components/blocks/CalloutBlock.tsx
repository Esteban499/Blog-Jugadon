import { Info, Lightbulb, AlertTriangle, CheckCircle2 } from 'lucide-react'

type Variant = 'info' | 'tip' | 'warning' | 'success'

interface CalloutBlockProps {
  variant: Variant
  title?: string | null
  content: string
}

const variantConfig: Record<
  Variant,
  { icon: typeof Info; bg: string; border: string; iconColor: string }
> = {
  info: {
    icon: Info,
    bg: 'bg-brand-blue/10',
    border: 'border-brand-blue/40',
    iconColor: 'text-brand-cyan',
  },
  tip: {
    icon: Lightbulb,
    bg: 'bg-brand-violet/15',
    border: 'border-brand-violet/40',
    iconColor: 'text-brand-violet',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/40',
    iconColor: 'text-amber-400',
  },
  success: {
    icon: CheckCircle2,
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/40',
    iconColor: 'text-emerald-400',
  },
}

export function CalloutBlock({ variant, title, content }: CalloutBlockProps) {
  const config = variantConfig[variant] ?? variantConfig.info
  const Icon = config.icon

  return (
    <div
      className={`my-6 flex gap-3 rounded-xl border p-4 ${config.bg} ${config.border}`}
    >
      <Icon size={20} className={`shrink-0 mt-0.5 ${config.iconColor}`} />
      <div className="flex-1">
        {title && (
          <div className="mb-1 font-sans text-sm font-bold text-brand-text">
            {title}
          </div>
        )}
        <div className="font-sans text-brand-soft text-sm leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  )
}
