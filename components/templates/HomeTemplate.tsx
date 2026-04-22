import { Header } from '@/components/organisms/Header'
import { Hero } from '@/components/organisms/Hero'
import { Academia } from '@/components/organisms/Academia'
import { JuegosDestacados } from '@/components/organisms/JuegosDestacados'
import { UltimosArticulos } from '@/components/organisms/UltimosArticulos'
import { Footer } from '@/components/organisms/Footer'
import type { Post, Game, Course, Provider } from '@/types'

interface HomeTemplateProps {
  posts: Post[]
  games: Game[]
  courses: Course[]
  providers: Provider[]
}

export function HomeTemplate({ posts, games, courses, providers }: HomeTemplateProps) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Academia courses={courses} />
        <JuegosDestacados games={games} providers={providers} />
        <UltimosArticulos posts={posts} />
      </main>
      <Footer />
    </>
  )
}
