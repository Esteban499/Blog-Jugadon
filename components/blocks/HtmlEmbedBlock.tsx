interface HtmlEmbedBlockProps {
  html: string
  css?: string | null
}

// WARNING: renders raw HTML/CSS from the CMS. Only admin/editor can create posts
// (see Posts.ts access). If that changes, sanitize with DOMPurify or restrict this block.
export function HtmlEmbedBlock({ html, css }: HtmlEmbedBlockProps) {
  return (
    <div className="my-6">
      {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
