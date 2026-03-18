"use client"

import Link from "next/link"
import { Users, Calendar, MapPin } from "lucide-react"

interface CampaignCardProps {
  id: string
  title: string
  world: string
  description: string
  players: number
  maxPlayers: number
  sessions: number
  status: "active" | "completed" | "recruiting"
  imageUrl?: string
}

const statusColors = {
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  completed: "bg-muted text-muted-foreground border-border",
  recruiting: "bg-primary/20 text-primary border-primary/30",
}

const statusLabels = {
  active: "Идёт",
  completed: "Завершена",
  recruiting: "Набор игроков",
}

export function CampaignCard({
  id,
  title,
  world,
  description,
  players,
  maxPlayers,
  sessions,
  status,
  imageUrl,
}: CampaignCardProps) {
  return (
    <Link href={`/campaigns/${id}`} className="group block">
      <article className="relative overflow-hidden rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
        {/* Image */}
        <div className="aspect-[16/9] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: imageUrl
                ? `url(${imageUrl})`
                : `linear-gradient(135deg, var(--wood) 0%, var(--wood-light) 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Status badge */}
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full border text-xs font-medium ${statusColors[status]}`}>
            {statusLabels[status]}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{world}</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-4 pt-2 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{players}/{maxPlayers}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{sessions} сессий</span>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        </div>
      </article>
    </Link>
  )
}
