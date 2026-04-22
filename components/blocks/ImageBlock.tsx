import Image from 'next/image'
import type { MediaItem } from '@/types'

type Alignment = 'left' | 'center' | 'full'

interface ImageBlockProps {
  image: MediaItem
  caption?: string | null
  alignment?: Alignment | null
}

const wrapperByAlignment: Record<Alignment, string> = {
  left: 'mx-0 max-w-[60%]',
  center: 'mx-auto max-w-full',
  full: 'mx-0 max-w-full',
}

export function ImageBlock({ image, caption, alignment }: ImageBlockProps) {
  if (!image?.url) return null

  const align = alignment ?? 'center'
  const width = image.width ?? 1600
  const height = image.height ?? 900

  return (
    <figure className={`my-8 ${wrapperByAlignment[align]}`}>
      <div className="overflow-hidden rounded-xl border border-brand-violet/25">
        <Image
          src={image.url}
          alt={image.alt || caption || ''}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
          sizes={align === 'full' ? '100vw' : '(max-width: 800px) 100vw, 800px'}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-sans text-sm text-brand-muted italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
