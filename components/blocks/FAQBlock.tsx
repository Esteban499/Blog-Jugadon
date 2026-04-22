interface FAQItem {
  id?: string | null
  question: string
  answer: string
}

interface FAQBlockProps {
  title?: string | null
  items: FAQItem[]
}

export function FAQBlock({ title, items }: FAQBlockProps) {
  if (!items?.length) return null

  return (
    <section className="my-8">
      {title && (
        <h3 className="mb-4 font-sans text-xl font-bold text-brand-text">
          {title}
        </h3>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <details
            key={item.id ?? i}
            className="group rounded-xl border border-brand-violet/25 bg-brand-surface overflow-hidden"
          >
            <summary className="cursor-pointer list-none px-4 py-3 font-sans text-sm font-semibold text-brand-text flex items-center justify-between hover:bg-white/[0.03]">
              <span>{item.question}</span>
              <span className="text-brand-muted transition-transform duration-200 group-open:rotate-45 text-xl leading-none">
                +
              </span>
            </summary>
            <div className="px-4 pb-4 pt-1 font-sans text-sm text-brand-soft leading-relaxed whitespace-pre-line">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
