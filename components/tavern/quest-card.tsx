"use client"

import { Clock, Skull, Coins, Users } from "lucide-react"

interface QuestCardProps {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard" | "deadly"
  reward: string
  duration: string
  slots: number
  filledSlots: number
  onClick?: () => void
}

const difficultyConfig = {
  easy: { label: "Лёгкий", color: "text-green-400", skulls: 1 },
  medium: { label: "Средний", color: "text-yellow-400", skulls: 2 },
  hard: { label: "Сложный", color: "text-orange-400", skulls: 3 },
  deadly: { label: "Смертельный", color: "text-red-400", skulls: 4 },
}

export function QuestCard({
  title,
  description,
  difficulty,
  reward,
  duration,
  slots,
  filledSlots,
  onClick,
}: QuestCardProps) {
  const config = difficultyConfig[difficulty]

  return (
    <button
      onClick={onClick}
      className="group block w-full text-left"
    >
      <article className="relative p-6 parchment-bg rounded-lg border-2 border-wood-light hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10 transform hover:-rotate-1 hover:scale-[1.02]">
        {/* Wax seal effect */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-glow">
          <span className="text-accent-foreground font-bold text-xs">НОВОЕ</span>
        </div>

        {/* Pin effect */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-wood-light rounded-full border-2 border-wood shadow-md" />

        {/* Content */}
        <div className="space-y-4 text-wood">
          <h3 className="text-xl font-bold pr-8 leading-tight">
            {title}
          </h3>

          <p className="text-sm leading-relaxed opacity-80 line-clamp-3">
            {description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2">
              <div className={`flex ${config.color}`}>
                {Array.from({ length: config.skulls }).map((_, i) => (
                  <Skull key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-xs font-medium">{config.label}</span>
            </div>

            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-gold-dark" />
              <span className="text-xs font-medium">{reward}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-wood-light" />
              <span className="text-xs font-medium">{duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-wood-light" />
              <span className="text-xs font-medium">{filledSlots}/{slots} игроков</span>
            </div>
          </div>

          {/* Join button */}
          <div className="pt-2">
            <div className="w-full py-2 bg-wood text-parchment text-center rounded font-medium text-sm hover:bg-wood-light transition-colors">
              Записаться
            </div>
          </div>
        </div>

        {/* Aged paper texture overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-lg opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }} 
        />
      </article>
    </button>
  )
}
