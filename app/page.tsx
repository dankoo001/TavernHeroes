import Link from "next/link"
import { Scroll, Users, Swords, ChevronRight, Sparkles } from "lucide-react"
import { Navigation } from "@/components/tavern/navigation"
import { FloatingParticles } from "@/components/tavern/floating-particles"
import { Torch } from "@/components/tavern/torch"
import { CampaignCard } from "@/components/tavern/campaign-card"
import { QuestCard } from "@/components/tavern/quest-card"

const featuredCampaigns = [
  {
    id: "1",
    title: "Проклятие Страда",
    world: "Баровия",
    description: "Тёмное готическое приключение в землях вечной тьмы, где правит древний вампир. Выживете ли вы?",
    players: 4,
    maxPlayers: 5,
    sessions: 23,
    status: "active" as const,
  },
  {
    id: "2",
    title: "Драконий Рассвет",
    world: "Фейрун",
    description: "Эпическая сага о возвращении древних драконов и героях, которые должны остановить их.",
    players: 5,
    maxPlayers: 5,
    sessions: 45,
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Тайны Эберрона",
    world: "Эберрон",
    description: "Нуарные детективы и магические технологии в мире после великой войны.",
    players: 2,
    maxPlayers: 4,
    sessions: 0,
    status: "recruiting" as const,
  },
]

const featuredQuests = [
  {
    id: "1",
    title: "Гоблины похитили кузнеца!",
    description: "Деревенский кузнец был похищен гоблинами. Жители просят помощи у смелых искателей приключений.",
    difficulty: "easy" as const,
    reward: "50 золотых",
    duration: "3-4 часа",
    slots: 4,
    filledSlots: 2,
  },
  {
    id: "2",
    title: "Склеп Забытого Короля",
    description: "В древнем склепе пробудилось зло. Нежить выходит на поверхность каждую ночь.",
    difficulty: "medium" as const,
    reward: "150 золотых",
    duration: "4-5 часов",
    slots: 5,
    filledSlots: 3,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navigation />
      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Decorative torches */}
        <div className="hidden lg:block absolute left-8 top-1/3">
          <Torch />
        </div>
        <div className="hidden lg:block absolute right-8 top-1/3">
          <Torch />
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-wood/20" />
        
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Welcome text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary animate-flicker" />
            <span className="text-sm text-muted-foreground">Добро пожаловать, путник</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-primary animate-shimmer bg-clip-text">Таверна Героев</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Присаживайся к огню, усталый путник. Здесь собираются искатели приключений, 
            чтобы найти свою следующую историю и верных товарищей.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/campaigns"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              <Scroll className="w-5 h-5" />
              <span>Смотреть кампейны</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/quests"
              className="group flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300 border border-border"
            >
              <Swords className="w-5 h-5" />
              <span>Доска заданий</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Кампейнов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">47</div>
              <div className="text-sm text-muted-foreground">Героев</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">156</div>
              <div className="text-sm text-muted-foreground">Сессий</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Активные кампейны
              </h2>
              <p className="text-muted-foreground">
                Истории, которые пишутся прямо сейчас
              </p>
            </div>
            <Link
              href="/campaigns"
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Все кампейны</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </div>
      </section>

      {/* Quest Board Preview */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Доска заданий
              </h2>
              <p className="text-muted-foreground">
                Ваншоты и одноразовые приключения
              </p>
            </div>
            <Link
              href="/quests"
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Все задания</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredQuests.map((quest) => (
              <QuestCard key={quest.id} {...quest} />
            ))}
          </div>
        </div>
      </section>

      {/* Heroes CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-card border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="relative z-10">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Зал Героев
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Галерея легендарных персонажей, прошедших через наши истории. 
                Каждый герой — уникальная история.
              </p>
              <Link
                href="/heroes"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
              >
                <span>Посетить зал</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scroll className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Таверна Героев
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Сделано с любовью к НРИ
          </p>
        </div>
      </footer>
    </div>
  )
}
