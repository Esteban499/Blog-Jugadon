import { GameCard } from '@/components/molecules/GameCard'
import type { Game } from '@/types'

interface GameCardBlockProps {
  game: string | Game
}

export function GameCardBlock({ game }: GameCardBlockProps) {
  if (!game || typeof game === 'string') return null

  return (
    <div className="my-8 max-w-sm">
      <GameCard game={game} />
    </div>
  )
}
