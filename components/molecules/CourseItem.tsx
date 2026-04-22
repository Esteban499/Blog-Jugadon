import { Play } from 'lucide-react'
import type { Course } from '@/types'

interface CourseItemProps {
  course: Course
  index: number
}

export function CourseItem({ course, index }: CourseItemProps) {
  return (
    <div className="flex items-center gap-4 px-[18px] py-[14px] rounded-xl bg-[#0D091C]/60 border border-brand-violet/20 cursor-pointer transition-all duration-200 hover:border-brand-violet/60 hover:shadow-[0_0_20px_rgba(74,38,191,0.2)] hover:translate-x-1">
      {/* Number */}
      <div className="w-8 h-8 rounded-lg bg-brand-blue/25 flex items-center justify-center flex-shrink-0 font-sans text-xs font-bold text-brand-cyan">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="font-sans text-[15px] font-semibold text-brand-text">{course.title}</div>
        <div className="font-sans text-xs text-brand-muted mt-0.5">
          {course.level} · {course.duration}
        </div>
      </div>

      <Play size={16} className="text-brand-cyan flex-shrink-0" />
    </div>
  )
}
