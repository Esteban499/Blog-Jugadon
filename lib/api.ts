import { getPayloadClient } from './payload'
import type { Post, Game, Course, Provider } from '@/types'

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      limit,
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      depth: 2,
    })
    return result.docs as unknown as Post[]
  } catch {
    return []
  }
}

export async function getFeaturedGames(limit = 6): Promise<Game[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'games',
      limit,
      where: { featured: { equals: true } },
      sort: 'order',
      depth: 1,
    })
    return result.docs as unknown as Game[]
  } catch {
    return []
  }
}

export async function getCourses(limit = 4): Promise<Course[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'courses',
      limit,
      sort: 'order',
    })
    return result.docs as unknown as Course[]
  } catch {
    return []
  }
}

export async function getProviders(): Promise<Provider[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'providers',
      limit: 50,
      sort: 'order',
      depth: 1,
    })
    return result.docs as unknown as Provider[]
  } catch {
    return []
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      limit: 1000,
      depth: 0,
      select: { slug: true },
    })
    return result.docs.map((doc) => (doc as unknown as { slug: string }).slug)
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: 'published' } },
        ],
      },
      limit: 1,
      depth: 2,
    })
    return result.docs.length ? (result.docs[0] as unknown as Post) : null
  } catch {
    return null
  }
}
