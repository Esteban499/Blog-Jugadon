interface SectionLabelProps {
  text: string
  color?: string
}

export function SectionLabel({ text, color = '#29E9FD' }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-8 h-[3px] rounded-sm" style={{ backgroundColor: color }} />
      <span
        className="text-xs font-bold font-sans tracking-[0.2em] uppercase"
        style={{ color }}
      >
        {text}
      </span>
    </div>
  )
}
