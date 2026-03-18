import Link from "next/link"
import { Navigation } from "@/components/tavern/navigation"
import { FloatingParticles } from "@/components/tavern/floating-particles"
import { HeroCard } from "@/components/tavern/hero-card"
import { Search, Filter, Trophy, Skull as SkullIcon, Shield } from "lucide-react"

const heroes = [
  {
    id: "1",
    name: "Виктор Равенхолд",
    title: "Охотник на чудовищ",
    race: "Человек",
    className: "Следопыт",
    level: 8,
    campaign: "Проклятие Страда",
    status: "active" as const,
  },
  {
    id: "2",
    name: "Ирена Колянна",
    title: "Дочь бургомистра",
    race: "Человек",
    className: "Клерик",
    level: 8,
    campaign: "Проклятие Страда",
    status: "active" as const,
  },
  {
    id: "3",
    name: "Торин Железнобород",
    title: "Последний из клана",
    race: "Дварф",
    className: "Воин",
    level: 12,
    campaign: "Драконий Рассвет",
    status: "retired" as const,
  },
  {
    id: "4",
    name: "Эльвира Лунный Свет",
    title: "Звёздная танцовщица",
    race: "Эльф",
    className: "Бард",
    level: 10,
    campaign: "Пираты Побережья Мечей",
    status: "retired" as const,
  },
  {
    id: "5",
    name: "Грок Разрушитель",
    title: "",
    race: "Полуорк",
    className: "Варвар",
    level: 7,
    campaign: "Ледяной Ветер",
    status: "active" as const,
  },
  {
    id: "6",
    name: "Сайлас Тёмный",
    title: "Беглец из Подземья",
    race: "Дроу",
    className: "Плут",
    level: 6,
    campaign: "Шёпот во Тьме",
    status: "fallen" as const,
  },
  {
    id: "7",
    name: "Лира Ветролист",
    title: "Голос леса",
    race: "Полуэльф",
    className: "Друид",
    level: 9,
    campaign: "Драконий Рассвет",
    status: "retired" as const,
  },
  {
    id: "8",
    name: "Магнус фон Штраль",
    title: "Рыцарь Ордена Серебряного Пламени",
    race: "Человек",
    className: "Паладин",
    level: 11,
    campaign: "Драконий Рассвет",
    status: "retired" as const,
  },
  {
    id: "9",
    name: "Зефир",
    title: "Тень из ниоткуда",
    race: "Тифлинг",
    className: "Колдун",
    level: 5,
    campaign: "Тайны Эберрона",
    status: "active" as const,
  },
  {
    id: "10",
    name: "Бранвен Дочь Огня",
    title: "Последняя из рода Пламенных",
    race: "Генази (огненный)",
    className: "Чародей",
    level: 8,
    campaign: "Ледяной Ветер",
    status: "active" as const,
  },
  {
    id: "11",
    name: "Корвус Чёрное Перо",
    title: "Вестник смерти",
    race: "Кенку",
    className: "Монах",
    level: 6,
    campaign: "Шёпот во Тьме",
    status: "active" as const,
  },
  {
    id: "12",
    name: "Орион Звездочёт",
    title: "Искатель забытых истин",
    race: "Человек",
    className: "Волшебник",
    level: 14,
    campaign: "Война Серебряных Марок",
    status: "retired" as const,
  },
]

const stats = {
  total: heroes.length,
  active: heroes.filter(h => h.status === "active").length,
  retired: heroes.filter(h => h.status === "retired").length,
  fallen: heroes.filter(h => h.status === "fallen").length,
}

export default function HeroesPage() {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navigation />
      <FloatingParticles />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Зал Героев
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Галерея легендарных персонажей, прошедших через наши истории. 
              Каждый герой — уникальная личность со своей историей и судьбой.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-4 rounded-lg bg-card border border-border text-center">
              <div className="text-3xl font-bold text-foreground">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Всего героев</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border text-center">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-3xl font-bold text-foreground">{stats.active}</span>
              </div>
              <div className="text-sm text-muted-foreground">В строю</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border text-center">
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">{stats.retired}</span>
              </div>
              <div className="text-sm text-muted-foreground">На покое</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border text-center">
              <div className="flex items-center justify-center gap-2">
                <SkullIcon className="w-5 h-5 text-destructive" />
                <span className="text-3xl font-bold text-foreground">{stats.fallen}</span>
              </div>
              <div className="text-sm text-muted-foreground">Пали в бою</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск героев..."
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
            {["Все", "В строю", "На покое", "Павшие"].map((filter) => (
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

          {/* Heroes grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {heroes.map((hero) => (
              <Link key={hero.id} href={`/heroes/${hero.id}`}>
                <HeroCard {...hero} />
              </Link>
            ))}
          </div>

          {/* Memorial section for fallen heroes */}
          {stats.fallen > 0 && (
            <div className="mt-16 p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <SkullIcon className="w-6 h-6 text-destructive" />
                <h2 className="text-2xl font-bold text-foreground">Памяти павших</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Эти герои отдали свои жизни ради спасения других. Их подвиги не будут забыты.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {heroes.filter(h => h.status === "fallen").map((hero) => (
                  <div key={hero.id} className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="font-bold text-foreground">{hero.name}</div>
                    {hero.title && <div className="text-sm text-destructive italic">"{hero.title}"</div>}
                    <div className="text-sm text-muted-foreground mt-2">
                      {hero.race} {hero.className}, ур. {hero.level}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Кампания: {hero.campaign}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
