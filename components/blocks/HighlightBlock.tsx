import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from 'lexical'
import { blockConverters } from './converters'

type Variant = 'default' | 'primary' | 'accent'

interface HighlightBlockProps {
  title?: string | null
  content: SerializedEditorState
  variant?: Variant | null
  icon?: string | null
}

const variantConfig: Record<Variant, string> = {
  default:
    'bg-gradient-to-br from-brand-violet/20 to-brand-blue/10 border-brand-violet/50',
  primary:
    'bg-gradient-to-br from-brand-blue/25 to-brand-cyan/10 border-brand-cyan/50',
  accent:
    'bg-gradient-to-br from-brand-violet/30 to-brand-violet/5 border-l-4 border-l-brand-cyan border-y border-r border-brand-violet/40',
}

export function HighlightBlock({
  title,
  content,
  variant,
  icon,
}: HighlightBlockProps) {
  const variantClass = variantConfig[variant ?? 'default'] ?? variantConfig.default

  return (
    <aside
      className={`my-8 rounded-2xl border p-6 shadow-lg shadow-brand-violet/10 ${variantClass}`}
    >
      {(title || icon) && (
        <div className="mb-3 flex items-center gap-2">
          {icon && <span className="text-2xl leading-none">{icon}</span>}
          {title && (
            <h3 className="font-display text-xl font-black text-brand-text">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="rich-text-content font-sans text-brand-soft leading-relaxed">
        <RichText data={content} converters={blockConverters} />
      </div>
    </aside>
  )
}
