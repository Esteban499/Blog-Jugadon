interface VideoEmbedBlockProps {
  url: string
  title?: string | null
}

function getEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.replace(/^www\./, '')

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = parsed.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}`
      const shortsMatch = parsed.pathname.match(/^\/shorts\/([^/]+)/)
      if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`
    }
    if (host === 'youtu.be') {
      const id = parsed.pathname.slice(1)
      if (id) return `https://www.youtube.com/embed/${id}`
    }
    if (host === 'vimeo.com') {
      const id = parsed.pathname.slice(1).split('/')[0]
      if (id) return `https://player.vimeo.com/video/${id}`
    }
    return null
  } catch {
    return null
  }
}

export function VideoEmbedBlock({ url, title }: VideoEmbedBlockProps) {
  const embedUrl = getEmbedUrl(url)
  if (!embedUrl) return null

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-brand-violet/25">
      <div className="relative pb-[56.25%]">
        <iframe
          src={embedUrl}
          title={title || 'Video embebido'}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
