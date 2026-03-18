"use client"

import { Shield, Sword, Heart, Star } from "lucide-react"

interface HeroCardProps {
  id: string
  name: string
  title: string
  race: string
  className: string
  level: number
  campaign: string
  status: "active" | "retired" | "fallen"
  imageUrl?: string
  onClick?: () => void
}

const statusConfig = {
  active: { label: "В строю", color: "bg-green-500" },
  retired: { label: "На покое", color: "bg-muted" },
  fallen: { label: "Пал в бою", color: "bg-destructive" },
}

export function HeroCard({
  name,
  title,
  race,
  className: charClass,
  level,
  campaign,
  status,
  imageUrl,
  onClick,
}: HeroCardProps) {
  const config = statusConfig[status]

  return (
    <button
      onClick={onClick}
      className="group block w-full text-left"
    >
      <article className="relative overflow-hidden rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-500">
        {/* Portrait */}
        <div className="aspect-[3/4] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: imageUrl
                ? `url(${imageUrl})`
                : `linear-gradient(180deg, var(--secondary) 0%, var(--muted) 100%)`,
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Status indicator */}
          <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${config.color} animate-pulse`} />

          {/* Level badge */}
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 rounded text-primary-foreground text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3" />
            <span>Ур. {level}</span>
          </div>

          {/* Character info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            {title && (
              <p className="text-sm text-primary italic">"{title}"</p>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{race}</span>
            <span className="text-foreground font-medium">{charClass}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-3 h-3" />
            <span className="truncate">{campaign}</span>
          </div>

          {/* Decorative stats */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Heart className="w-3 h-3 text-destructive" />
              <span>{config.label}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Sword className="w-3 h-3 text-primary" />
              <span>D&D 5e</span>
            </div>
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </article>
    </button>
  )
}
