import type { SerializedEditorState } from 'lexical'

export interface MediaItem {
  id: string
  url: string
  alt: string
  filename?: string
  width?: number
  height?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  color?: string
}

export interface Post {
  id: string
  title: string
  slug: string
  excerpt?: string
  content?: SerializedEditorState
  featuredImage?: MediaItem
  categories?: Category[]
  publishedAt?: string
  readTime?: string
  status: 'draft' | 'published'
}

export interface Game {
  id: string
  name: string
  provider: string
  badge?: string
  badgeColor?: string
  image?: MediaItem
  rtp?: string
  featured?: boolean
  order?: number
}

export interface Course {
  id: string
  title: string
  level: 'Principiante' | 'Intermedio' | 'Avanzado'
  duration: string
  order?: number
}

export interface Provider {
  id: string
  name: string
  logo: MediaItem
  order?: number
}
