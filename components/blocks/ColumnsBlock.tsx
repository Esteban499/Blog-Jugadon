import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from 'lexical'
import { blockConverters } from './converters'

type ColumnCount = '2' | '3' | '4'

interface ColumnsBlockProps {
  count: ColumnCount
  columns: { id?: string | null; content: SerializedEditorState }[]
}

const gridClass: Record<ColumnCount, string> = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
}

export function ColumnsBlock({ count, columns }: ColumnsBlockProps) {
  const cols = columns.slice(0, Number(count))

  return (
    <div className={`my-8 grid grid-cols-1 gap-6 ${gridClass[count] ?? gridClass['2']}`}>
      {cols.map((col, i) => (
        <div
          key={col.id ?? i}
          className="rich-text-content font-sans text-brand-soft leading-relaxed"
        >
          <RichText data={col.content} converters={blockConverters} />
        </div>
      ))}
    </div>
  )
}
