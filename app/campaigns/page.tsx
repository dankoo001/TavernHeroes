import { Navigation } from "@/components/tavern/navigation"
import { FloatingParticles } from "@/components/tavern/floating-particles"
import { CampaignCard } from "@/components/tavern/campaign-card"
import { Filter, Search } from "lucide-react"

const campaigns = [
  {
    id: "1",
    title: "Проклятие Страда",
    world: "Баровия",
    description: "Тёмное готическое приключение в землях вечной тьмы, где правит древний вампир Страд фон Зарович. Выживете ли вы в этом кошмаре?",
    players: 4,
    maxPlayers: 5,
    sessions: 23,
    status: "active" as const,
  },
  {
    id: "2",
    title: "Драконий Рассвет",
    world: "Фейрун",
    description: "Эпическая сага о возвращении древних драконов и героях, которые должны остановить надвигающийся апокалипсис.",
    players: 5,
    maxPlayers: 5,
    sessions: 45,
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Тайны Эберрона",
    world: "Эберрон",
    description: "Нуарные детективы и магические технологии в мире после великой войны. Интриги, шпионаж и тайны на каждом шагу.",
    players: 2,
    maxPlayers: 4,
    sessions: 0,
    status: "recruiting" as const,
  },
  {
    id: "4",
    title: "Ледяной Ветер",
    world: "Долина Ледяного Ветра",
    description: "Суровое выживание на замёрзшем севере. Древнее зло пробуждается подо льдами, и только герои могут остановить вечную зиму.",
    players: 3,
    maxPlayers: 5,
    sessions: 12,
    status: "active" as const,
  },
  {
    id: "5",
    title: "Пираты Побережья Мечей",
    world: "Фейрун",
    description: "Морские приключения, сокровища и пиратские баталии. Станьте легендой семи морей или погибните, пытаясь.",
    players: 4,
    maxPlayers: 4,
    sessions: 31,
    status: "completed" as const,
  },
  {
    id: "6",
    title: "Хроники Сигила",
    world: "Planescape",
    description: "Путешествие по бесконечным планам существования. Город Дверей открывает портал в любой мир.",
    players: 1,
    maxPlayers: 5,
    sessions: 0,
    status: "recruiting" as const,
  },
  {
    id: "7",
    title: "Война Серебряных Марок",
    world: "Forgotten Realms",
    description: "Политические интриги и военные стратегии в борьбе за власть над Серебряными Марками. Каждое решение имеет последствия.",
    players: 5,
    maxPlayers: 6,
    sessions: 67,
    status: "completed" as const,
  },
  {
    id: "8",
    title: "Шёпот во Тьме",
    world: "Homebrew",
    description: "Хоррор-кампания в авторском мире. Что-то древнее и ужасное пробуждается в глубинах земли.",
    players: 3,
    maxPlayers: 4,
    sessions: 8,
    status: "active" as const,
  },
]

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navigation />
      <FloatingParticles />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Все кампейны
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Каждая кампания — это уникальный мир с собственной историей, 
              персонажами и приключениями. Выбери свою следующую историю.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск кампейнов..."
                className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Фильтры</span>
              </button>
            </div>
          </div>

          {/* Status filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Все", "Активные", "Набор", "Завершённые"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "Все"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Campaigns grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
