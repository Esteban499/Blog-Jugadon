import { Play, BookOpen, Video } from 'lucide-react'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { ScrollReveal } from '@/components/atoms/ScrollReveal'
import { CourseItem } from '@/components/molecules/CourseItem'
import type { Course } from '@/types'

const FEATURES = [
  { Icon: BookOpen, label: 'Guías paso a paso' },
  { Icon: Video, label: 'Videos tutoriales' },
]

interface AcademiaProps {
  courses: Course[]
}

export function Academia({ courses }: AcademiaProps) {
  return (
    <section id="academia" className="relative overflow-hidden py-24 bg-gradient-to-b from-brand-bg via-[#130d2e] to-brand-bg">
      {/* Background decoration */}
      <div
        className="absolute top-1/2 -left-[200px] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(74,38,191,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="Aprende con nosotros" />
            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-black text-brand-text uppercase tracking-[-0.02em] leading-[1.05]">
              ACADEMIA <span className="text-brand-violet italic">JUGADON</span>
            </h2>
            <p className="font-sans text-[17px] text-brand-soft mt-4 max-w-[500px] leading-[1.7]">
              Todo lo que necesitás saber para jugar con confianza. Tutoriales, guías y estrategias
              creadas por expertos para nuevos jugadores y veteranos.
            </p>
          </div>
          <a
            href="/academia"
            className="font-sans text-sm font-bold text-brand-text px-7 py-3 rounded-xl border border-brand-violet/60 bg-brand-violet/15 hover:bg-brand-violet/35 hover:shadow-[0_0_20px_rgba(74,38,191,0.4)] transition-all duration-200 whitespace-nowrap"
          >
            Ver más →
          </a>
        </ScrollReveal>

        {/* Main layout */}
        <ScrollReveal delay={200} className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Video preview */}
          <div className="w-full lg:w-[520px] flex-shrink-0 rounded-2xl overflow-hidden border border-brand-violet/40 shadow-[0_0_50px_rgba(74,38,191,0.2)]">
            <div className="relative pb-[56.25%] bg-gradient-to-br from-brand-violet/30 to-brand-blue/20">
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-[0_0_30px_rgba(41,233,253,0.5)] hover:shadow-[0_0_50px_rgba(41,233,253,0.8)]"
                  style={{ background: 'linear-gradient(135deg, #29E9FD, #1D57FC)' }}
                  role="button"
                  aria-label="Reproducir video de presentación"
                >
                  <Play size={28} color="#0D091C" fill="#0D091C" style={{ marginLeft: 4 }} />
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-sans text-[11px] font-bold text-brand-cyan tracking-[0.15em] uppercase mb-1.5">
                  Video tipo presentación
                </div>
                <div className="font-sans text-lg font-bold text-brand-text">
                  Bienvenido a la Academia Jugadon
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 w-full">
            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {FEATURES.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-brand-violet/10 border border-brand-violet/25"
                >
                  <Icon size={20} className="text-brand-cyan flex-shrink-0" />
                  <span className="font-sans text-sm font-semibold text-brand-text">{label}</span>
                </div>
              ))}
            </div>

            {/* Course list */}
            <div className="flex flex-col gap-2.5">
              {courses.length > 0 ? (
                courses.map((course, i) => (
                  <CourseItem key={course.id} course={course} index={i} />
                ))
              ) : (
                <p className="font-sans text-sm text-brand-muted py-4">
                  Próximamente nuevos cursos.
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
