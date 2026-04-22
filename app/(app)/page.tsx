import { getLatestPosts, getFeaturedGames, getCourses, getProviders } from '@/lib/api'
import { HomeTemplate } from '@/components/templates/HomeTemplate'

export default async function HomePage() {
  const [posts, games, courses, providers] = await Promise.all([
    getLatestPosts(3),
    getFeaturedGames(6),
    getCourses(4),
    getProviders(),
  ])

  return <HomeTemplate posts={posts} games={games} courses={courses} providers={providers} />
}
