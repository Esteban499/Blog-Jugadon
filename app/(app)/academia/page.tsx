import type { Metadata } from 'next'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { getCourses } from '@/lib/api'
import { CourseItem } from '@/components/molecules/CourseItem'
import { SectionLabel } from '@/components/atoms/SectionLabel'

export const metadata: Metadata = { title: 'Academia Jugadon' }

export default async function AcademiaPage() {
  const courses = await getCourses(20)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg pt-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <SectionLabel text="Aprende con nosotros" />
          <h1 className="font-sans text-[clamp(32px,4vw,52px)] font-black text-brand-text uppercase tracking-[-0.02em] leading-[1.05] mb-12">
            ACADEMIA <span className="text-brand-violet italic">JUGADON</span>
          </h1>

          {courses.length > 0 ? (
            <div className="flex flex-col gap-3 max-w-[700px]">
              {courses.map((course, i) => (
                <CourseItem key={course.id} course={course} index={i} />
              ))}
            </div>
          ) : (
            <p className="font-sans text-brand-muted">
              Próximamente nuevos cursos. Agregá cursos desde el panel de administración.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
