import Image from 'next/image'
import { Zap } from 'lucide-react'
import { Badge } from '@/components/atoms/Badge'
import type { Game } from '@/types'

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-[#0D091C]/80 border border-brand-violet/25 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-violet/70 hover:shadow-[0_12px_40px_rgba(74,38,191,0.35),0_0_0_1px_rgba(74,38,191,0.3)]">
      {/* Image */}
      <div className="relative pb-[65%]">
        {game.image?.url ? (
          <Image
            src={game.image.url}
            alt={`${game.name} — ${game.provider}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/30 to-brand-blue/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D091C]/90 via-transparent to-transparent" />

        {game.badge && (
          <div className="absolute top-3 right-3">
            <Badge color={game.badgeColor}>{game.badge}</Badge>
          </div>
        )}

        {/* Hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-brand-violet/30">
          <div className="w-12 h-12 rounded-full bg-brand-cyan/90 flex items-center justify-center">
            <Zap size={22} color="#0D091C" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="font-sans text-[15px] font-bold text-brand-text mb-1">{game.name}</div>
        <div className="font-sans text-xs text-brand-muted">{game.provider}</div>
        {game.rtp && (
          <div className="font-sans text-xs text-brand-cyan/80 mt-1">RTP: {game.rtp}</div>
        )}
      </div>
    </div>
  )
}
