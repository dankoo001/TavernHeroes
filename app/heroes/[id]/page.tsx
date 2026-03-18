"use client"

import { use, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/tavern/navigation"
import { FloatingParticles } from "@/components/tavern/floating-particles"
import { HeroPdfViewer } from "@/components/tavern/hero-pdf-viewer"
import { 
  ArrowLeft, Shield, Sword, Heart, Star, Scroll, 
  Skull, Trophy, Flame, Sparkles, Target, BookOpen,
  Users, MapPin, Calendar, Gem, FileText
} from "lucide-react"

// Mock data - в реальном приложении данные будут из базы
const heroesData: Record<string, HeroData> = {
  "1": {
    id: "1",
    name: "Виктор Равенхолд",
    title: "Охотник на чудовищ",
    race: "Человек",
    subrace: "Баровианец",
    className: "Следопыт",
    subclass: "Убийца монстров",
    level: 8,
    campaign: "Проклятие Страда",
    campaignId: "1",
    status: "active",
    player: "Алексей",
    backstory: `Виктор родился в маленькой деревне на окраине Баровии, в семье охотников. С детства он слышал истории о чудовищах, бродящих в тумане, и о вампире, правящем этими землями. Когда ему было 12, стая волков, ведомых вампиром-отродьем, напала на его деревню. Он единственный выжил, спрятавшись в колодце.
    
С тех пор Виктор посвятил свою жизнь охоте на нежить. Он странствовал по Баровии, изучая повадки монстров и оттачивая своё мастерство. Его цель — однажды встретиться лицом к лицу с самим Страдом и отомстить за свою семью и всех, кто погиб от его руки.`,
    personality: "Молчаливый и сосредоточенный. Редко улыбается, но имеет чёрное чувство юмора. Не доверяет незнакомцам, но верен до конца тем, кого считает друзьями.",
    ideals: "Защита невинных от зла любой ценой. Месть тем, кто причиняет страдания беззащитным.",
    bonds: "Память о погибшей семье. Клятва уничтожить Страда. Дружба с Иреной Коляной.",
    flaws: "Одержим местью. Иногда действует безрассудно, когда речь идёт о нежити. Не умеет просить о помощи.",
    appearance: "Высокий мужчина 28 лет с тёмными волосами и серыми глазами. На лице шрам от когтей — память о первой охоте. Носит потёртый кожаный плащ и арбалет за спиной. На поясе всегда святая вода и осиновые колья.",
    stats: {
      str: 14,
      dex: 18,
      con: 14,
      int: 12,
      wis: 16,
      cha: 10,
    },
    hp: { current: 52, max: 64 },
    ac: 16,
    speed: 30,
    proficiencyBonus: 3,
    skills: [
      "Выживание +6",
      "Скрытность +7",
      "Восприятие +6",
      "Природа +4",
      "Расследование +4",
    ],
    languages: ["Общий", "Баровианский диалект", "Сильван"],
    equipment: [
      { name: "Арбалет +1 'Рассветный луч'", type: "weapon", description: "Наносит +1d6 урона излучением нежити" },
      { name: "Кожаный доспех следопыта", type: "armor", description: "КД 12 + Ловкость, не мешает скрытности" },
      { name: "Плащ защиты от нежити", type: "wondrous", description: "Преимущество на спасброски от эффектов нежити" },
      { name: "10 осиновых болтов", type: "ammunition", description: "Игнорируют регенерацию вампиров" },
    ],
    abilities: [
      { name: "Избранный враг: Нежить", description: "Преимущество на проверки Мудрости для выслеживания и на проверки Интеллекта для вспоминания информации о нежити." },
      { name: "Охотничья метка", description: "Бонусным действием отмечает цель. +1d6 урона раз в ход, отслеживание без проверок." },
      { name: "Убийца монстров", description: "Дополнительная атака против крупных существ. Преимущество против существ с магическими способностями." },
    ],
    achievements: [
      { title: "Первая кровь", description: "Убил первого вампира-отродья", date: "Сессия 3" },
      { title: "Спаситель Баровии", description: "Защитил деревню от стаи волков", date: "Сессия 7" },
      { title: "Друг Вистани", description: "Заслужил доверие народа Вистани", date: "Сессия 12" },
    ],
    deaths: 0,
    sessionsPlayed: 24,
    killCount: 47,
    quotes: [
      "Тьма не пугает меня. Я сам стал её частью.",
      "Каждый монстр когда-то был чьим-то кошмаром. Я — кошмар для монстров.",
      "Святая вода и осиновый кол. Иногда простые решения — лучшие.",
    ],
    relationships: [
      { name: "Ирена Колянна", relation: "Близкий друг", notes: "Поклялся защищать её от Страда" },
      { name: "Исмарк Колянович", relation: "Союзник", notes: "Брат Ирены, сражается бок о бок" },
      { name: "Страд фон Зарович", relation: "Заклятый враг", notes: "Цель всей жизни — уничтожить его" },
    ],
    notes: "Виктор начал подозревать, что Ирена — реинкарнация Татьяны. Это может осложнить миссию, но он не отступит от своей клятвы защищать её.",
  },
}

interface HeroData {
  id: string
  name: string
  title: string
  race: string
  subrace?: string
  className: string
  subclass?: string
  level: number
  campaign: string
  campaignId: string
  status: "active" | "retired" | "fallen"
  player: string
  backstory: string
  personality: string
  ideals: string
  bonds: string
  flaws: string
  appearance: string
  stats: {
    str: number
    dex: number
    con: number
    int: number
    wis: number
    cha: number
  }
  hp: { current: number; max: number }
  ac: number
  speed: number
  proficiencyBonus: number
  skills: string[]
  languages: string[]
  equipment: { name: string; type: string; description: string }[]
  abilities: { name: string; description: string }[]
  achievements: { title: string; description: string; date: string }[]
  deaths: number
  sessionsPlayed: number
  killCount: number
  quotes: string[]
  relationships: { name: string; relation: string; notes: string }[]
  notes: string
  pdfUrl?: string
}

const statusConfig = {
  active: { label: "В строю", color: "bg-green-500", icon: Shield },
  retired: { label: "На покое", color: "bg-amber-500", icon: Trophy },
  fallen: { label: "Пал в бою", color: "bg-destructive", icon: Skull },
}

function StatBlock({ label, value, modifier }: { label: string; value: number; modifier: number }) {
  return (
    <div className="text-center p-3 bg-secondary/50 rounded-lg border border-border">
      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className={`text-sm font-medium ${modifier >= 0 ? 'text-green-400' : 'text-destructive'}`}>
        {modifier >= 0 ? '+' : ''}{modifier}
      </div>
    </div>
  )
}

function getModifier(stat: number) {
  return Math.floor((stat - 10) / 2)
}

export default function HeroDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const hero = heroesData[id]
  
  if (!hero) {
    return (
      <div className="min-h-screen bg-background noise-overlay flex items-center justify-center">
        <div className="text-center">
          <Skull className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Герой не найден</h1>
          <p className="text-muted-foreground mb-4">Возможно, он ещё не вписан в летописи таверны.</p>
          <Link href="/heroes" className="text-primary hover:underline">
            Вернуться в Зал Героев
          </Link>
        </div>
      </div>
    )
  }

  const config = statusConfig[hero.status]
  const StatusIcon = config.icon
  const [activeTab, setActiveTab] = useState<"info" | "pdf">("info")

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navigation />
      <FloatingParticles />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link 
            href="/heroes" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад в Зал Героев</span>
          </Link>

          {/* Hero Header */}
          <div className="relative mb-8 p-8 rounded-xl bg-card border border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row gap-8">
              {/* Portrait placeholder */}
              <div className="w-48 h-64 bg-secondary/50 rounded-lg border border-border flex items-center justify-center shrink-0">
                <Users className="w-16 h-16 text-muted-foreground" />
              </div>

              <div className="flex-1">
                {/* Status badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${config.color}/20 border border-current mb-4`}>
                  <StatusIcon className="w-4 h-4" />
                  <span className="text-foreground">{config.label}</span>
                </div>

                <h1 className="text-4xl font-bold text-foreground mb-2">{hero.name}</h1>
                {hero.title && (
                  <p className="text-xl text-primary italic mb-4">"{hero.title}"</p>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <span className="text-muted-foreground text-sm">Раса</span>
                    <p className="text-foreground font-medium">{hero.race}{hero.subrace && ` (${hero.subrace})`}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Класс</span>
                    <p className="text-foreground font-medium">{hero.className} {hero.level}</p>
                    {hero.subclass && <p className="text-primary text-sm">{hero.subclass}</p>}
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Игрок</span>
                    <p className="text-foreground font-medium">{hero.player}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Кампания</span>
                    <Link href={`/campaigns/${hero.campaignId}`} className="text-primary hover:underline font-medium block">
                      {hero.campaign}
                    </Link>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-destructive/20 rounded-lg">
                    <Heart className="w-4 h-4 text-destructive" />
                    <span className="text-foreground font-medium">{hero.hp.current}/{hero.hp.max} HP</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-lg">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">КД {hero.ac}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-lg">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">+{hero.proficiencyBonus} бонус мастерства</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("info")}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                ${activeTab === "info" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }
              `}
            >
              <BookOpen className="w-4 h-4" />
              Информация
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                ${activeTab === "pdf" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }
              `}
            >
              <FileText className="w-4 h-4" />
              Лист персонажа
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "pdf" ? (
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Лист персонажа (PDF)
              </h2>
              <HeroPdfViewer 
                heroId={hero.id} 
                heroName={hero.name} 
                initialPdfUrl={hero.pdfUrl}
              />
            </div>
          ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-primary" />
                  Характеристики
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  <StatBlock label="СИЛ" value={hero.stats.str} modifier={getModifier(hero.stats.str)} />
                  <StatBlock label="ЛОВ" value={hero.stats.dex} modifier={getModifier(hero.stats.dex)} />
                  <StatBlock label="ТЕЛ" value={hero.stats.con} modifier={getModifier(hero.stats.con)} />
                  <StatBlock label="ИНТ" value={hero.stats.int} modifier={getModifier(hero.stats.int)} />
                  <StatBlock label="МДР" value={hero.stats.wis} modifier={getModifier(hero.stats.wis)} />
                  <StatBlock label="ХАР" value={hero.stats.cha} modifier={getModifier(hero.stats.cha)} />
                </div>
              </section>

              {/* Backstory */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Предыстория
                </h2>
                <div className="prose prose-invert max-w-none">
                  {hero.backstory.split('\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Personality */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Личность
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-primary mb-2">Характер</h3>
                    <p className="text-muted-foreground text-sm">{hero.personality}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-primary mb-2">Идеалы</h3>
                    <p className="text-muted-foreground text-sm">{hero.ideals}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-primary mb-2">Привязанности</h3>
                    <p className="text-muted-foreground text-sm">{hero.bonds}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-primary mb-2">Слабости</h3>
                    <p className="text-muted-foreground text-sm">{hero.flaws}</p>
                  </div>
                </div>
              </section>

              {/* Appearance */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Внешность
                </h2>
                <p className="text-muted-foreground leading-relaxed">{hero.appearance}</p>
              </section>

              {/* Abilities */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-primary" />
                  Способности
                </h2>
                <div className="space-y-4">
                  {hero.abilities.map((ability, index) => (
                    <div key={index} className="p-4 bg-secondary/30 rounded-lg border border-border">
                      <h3 className="font-bold text-foreground mb-2">{ability.name}</h3>
                      <p className="text-muted-foreground text-sm">{ability.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Equipment */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sword className="w-5 h-5 text-primary" />
                  Снаряжение
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {hero.equipment.map((item, index) => (
                    <div key={index} className="p-3 bg-secondary/30 rounded-lg border border-border">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quotes */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scroll className="w-5 h-5 text-primary" />
                  Цитаты
                </h2>
                <div className="space-y-3">
                  {hero.quotes.map((quote, index) => (
                    <blockquote key={index} className="pl-4 border-l-2 border-primary italic text-muted-foreground">
                      "{quote}"
                    </blockquote>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column - sidebar */}
            <div className="space-y-6">
              {/* Statistics */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Статистика
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сессий сыграно</span>
                    <span className="text-foreground font-medium">{hero.sessionsPlayed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Убито врагов</span>
                    <span className="text-foreground font-medium">{hero.killCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Смертей</span>
                    <span className={`font-medium ${hero.deaths > 0 ? 'text-destructive' : 'text-green-400'}`}>
                      {hero.deaths}
                    </span>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-lg font-bold text-foreground mb-4">Навыки</h2>
                <div className="flex flex-wrap gap-2">
                  {hero.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-lg font-bold text-foreground mb-4">Языки</h2>
                <div className="flex flex-wrap gap-2">
                  {hero.languages.map((lang, index) => (
                    <span key={index} className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </section>

              {/* Relationships */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Связи
                </h2>
                <div className="space-y-3">
                  {hero.relationships.map((rel, index) => (
                    <div key={index} className="p-3 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground">{rel.name}</span>
                        <span className="text-xs text-primary">{rel.relation}</span>
                      </div>
                      <p className="text-muted-foreground text-xs">{rel.notes}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Достижения
                </h2>
                <div className="space-y-3">
                  {hero.achievements.map((achievement, index) => (
                    <div key={index} className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">{achievement.title}</span>
                      </div>
                      <p className="text-muted-foreground text-xs mb-1">{achievement.description}</p>
                      <p className="text-xs text-primary">{achievement.date}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Notes */}
              {hero.notes && (
                <section className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Scroll className="w-5 h-5 text-primary" />
                    Заметки мастера
                  </h2>
                  <p className="text-muted-foreground text-sm italic">{hero.notes}</p>
                </section>
              )}
            </div>
          </div>
          )}
        </div>
      </main>
    </div>
  )
}
