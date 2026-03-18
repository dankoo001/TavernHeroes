import { Navigation } from "@/components/tavern/navigation"
import { FloatingParticles } from "@/components/tavern/floating-particles"
import { QuestCard } from "@/components/tavern/quest-card"
import { Skull, Filter } from "lucide-react"

const quests = [
  {
    id: "1",
    title: "Гоблины похитили кузнеца!",
    description: "Деревенский кузнец Торин был похищен гоблинами из пещер Красного Утёса. Жители деревни Дубравка отчаянно просят помощи у смелых искателей приключений. Награда гарантирована.",
    difficulty: "easy" as const,
    reward: "50 золотых",
    duration: "3-4 часа",
    slots: 4,
    filledSlots: 2,
  },
  {
    id: "2",
    title: "Склеп Забытого Короля",
    description: "В древнем склепе под холмом Трёх Дубов пробудилось зло. Нежить выходит на поверхность каждую ночь, угрожая окрестным фермам. Кто-то должен спуститься вниз и упокоить мёртвых навсегда.",
    difficulty: "medium" as const,
    reward: "150 золотых",
    duration: "4-5 часов",
    slots: 5,
    filledSlots: 3,
  },
  {
    id: "3",
    title: "Логово Мантикоры",
    description: "Чудовищная мантикора поселилась в горах и нападает на караваны. Гильдия купцов объявила щедрую награду за голову твари. Будьте осторожны — многие пытались, никто не вернулся.",
    difficulty: "hard" as const,
    reward: "300 золотых + магический предмет",
    duration: "5-6 часов",
    slots: 5,
    filledSlots: 1,
  },
  {
    id: "4",
    title: "Пробуждение Древнего",
    description: "Культисты проводят ритуал в заброшенном храме. Если их не остановить до полуночи, они призовут сущность из Дальнего Предела. Это задание не для слабонервных.",
    difficulty: "deadly" as const,
    reward: "500 золотых + редкие артефакты",
    duration: "6-8 часов",
    slots: 6,
    filledSlots: 0,
  },
  {
    id: "5",
    title: "Пропавший караван",
    description: "Торговый караван исчез на лесной дороге между Ясеневкой и Речным Бродом. Купцы наняли следопытов, но те тоже пропали. Нужны храбрецы, готовые разгадать эту тайну.",
    difficulty: "easy" as const,
    reward: "75 золотых",
    duration: "3-4 часа",
    slots: 4,
    filledSlots: 4,
  },
  {
    id: "6",
    title: "Конкурс бардов",
    description: "Ежегодный конкурс бардов в Серебряном Зале! Не только музыканты, но и их телохранители нужны — в прошлом году было покушение. Лёгкая работа с хорошей оплатой и бесплатной выпивкой.",
    difficulty: "easy" as const,
    reward: "30 золотых + бесплатная еда и выпивка",
    duration: "4 часа",
    slots: 3,
    filledSlots: 1,
  },
  {
    id: "7",
    title: "Башня безумного мага",
    description: "Маг Орфелиус заперся в своей башне три недели назад. С тех пор оттуда доносятся странные звуки, а вокруг бродят магические аномалии. Его ученик нанимает смельчаков для проверки.",
    difficulty: "medium" as const,
    reward: "200 золотых + доступ к библиотеке",
    duration: "4-5 часов",
    slots: 4,
    filledSlots: 2,
  },
  {
    id: "8",
    title: "Драконий Клад",
    description: "Ходят слухи, что в Пещерах Эхо лежит сокровище древнего дракона. Дракон давно мёртв, но его сокровища охраняют древние ловушки и, говорят, кое-что похуже.",
    difficulty: "hard" as const,
    reward: "Доля от сокровищ (до 500 золотых)",
    duration: "6-7 часов",
    slots: 5,
    filledSlots: 2,
  },
]

export default function QuestsPage() {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navigation />
      <FloatingParticles />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header with tavern notice board styling */}
          <div className="relative mb-10 p-8 rounded-lg bg-wood border-4 border-wood-light">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-wood-light rounded">
              <span className="text-parchment font-bold">ДОСКА ОБЪЯВЛЕНИЙ</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-parchment mb-4 text-center pt-4">
              Задания для искателей приключений
            </h1>
            <p className="text-parchment/80 text-center max-w-2xl mx-auto">
              Здесь вывешиваются ваншоты и разовые приключения. 
              Выбери задание по душе и запишись на участие!
            </p>
          </div>

          {/* Difficulty legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 p-4 rounded-lg bg-card border border-border">
            <span className="text-muted-foreground text-sm">Уровень сложности:</span>
            <div className="flex items-center gap-2">
              <Skull className="w-4 h-4 text-green-400" />
              <span className="text-sm text-foreground">Лёгкий</span>
            </div>
            <div className="flex items-center gap-1">
              <Skull className="w-4 h-4 text-yellow-400" />
              <Skull className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-foreground ml-1">Средний</span>
            </div>
            <div className="flex items-center gap-1">
              <Skull className="w-4 h-4 text-orange-400" />
              <Skull className="w-4 h-4 text-orange-400" />
              <Skull className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-foreground ml-1">Сложный</span>
            </div>
            <div className="flex items-center gap-1">
              <Skull className="w-4 h-4 text-red-400" />
              <Skull className="w-4 h-4 text-red-400" />
              <Skull className="w-4 h-4 text-red-400" />
              <Skull className="w-4 h-4 text-red-400" />
              <span className="text-sm text-foreground ml-1">Смертельный</span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Фильтры</span>
            </button>
            {["Все", "Есть места", "Лёгкие", "Средние", "Сложные"].map((filter) => (
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

          {/* Quest board grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quests.map((quest) => (
              <div key={quest.id} className="relative">
                {quest.filledSlots >= quest.slots && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
                    <span className="px-4 py-2 bg-muted text-muted-foreground rounded-lg font-bold">
                      НАБОР ЗАВЕРШЁН
                    </span>
                  </div>
                )}
                <QuestCard {...quest} />
              </div>
            ))}
          </div>

          {/* Add quest CTA for DMs */}
          <div className="mt-12 p-8 rounded-lg bg-card border border-border text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Хочешь провести свой ваншот?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Если ты мастер и хочешь провести одноразовое приключение для игроков таверны, 
              создай объявление и повесь его на доску!
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Создать задание
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
