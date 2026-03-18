import { Navigation } from "@/components/tavern/navigation"
import { FloatingParticles } from "@/components/tavern/floating-particles"
import { HeroCard } from "@/components/tavern/hero-card"
import { 
  ArrowLeft, Calendar, Users, MapPin, Scroll, Clock, BookOpen, 
  Crown, Sparkles, Swords, Shield, Globe, Mountain, Castle, 
  Skull, Star, BookMarked, Compass, Gem, Flame, Heart
} from "lucide-react"
import Link from "next/link"

// Expanded campaign data with world-building details
const campaignData = {
  id: "1",
  title: "Проклятие Страда",
  world: "Баровия",
  setting: "Готический хоррор",
  system: "D&D 5e",
  status: "active" as const,
  players: 4,
  maxPlayers: 5,
  sessions: 23,
  schedule: "Каждую субботу, 19:00",
  startDate: "15 января 2024",
  lastSession: "2 марта 2024",
  dm: "Мастер Игорь",

  // World Overview
  worldDescription: `Баровия — земля вечных туманов и бесконечной ночи. Это полуплан страха, 
    отрезанный от остального мультивселенной непроницаемыми туманами. Здесь солнце никогда не светит в полную силу, 
    небо затянуто серыми тучами, а ночи наполнены ужасами, что не снились даже в кошмарах.
    
    Земля проклята древним злом — вампиром Страдом фон Заровичем, который правит этим мрачным краем уже много веков. 
    Туман не выпускает никого, кто попал в Баровию, пока Тёмный Лорд не позволит — или пока смерть не освободит пленника.`,

  worldHistory: `Когда-то Баровия была частью материального плана — процветающей долиной под властью рода Заровичей. 
    Страд был великим воином и полководцем, объединившим земли под своим знаменем.
    
    Но любовь к юной Татьяне, невесте его брата Сергея, толкнула его на сделку с тёмными силами. 
    В день свадьбы Страд убил брата и попытался завладеть Татьяной, но она бросилась со стен замка Равенлофт.
    
    В этот момент тёмные силы забрали Баровию, создав полуплан страха. Страд стал бессмертным вампиром, 
    проклятым вечно искать перерождение своей возлюбленной — и вечно терять её.`,

  // Playable Races
  races: [
    {
      name: "Люди",
      description: "Основное население Баровии. Забитые и суеверные, живущие в страхе перед ночью.",
      traits: "Адаптивность, Решимость",
      isHomebrew: false,
    },
    {
      name: "Вистани",
      description: "Кочевой народ, единственные, кто может свободно входить и покидать Баровию.",
      traits: "Проклятье Злого Глаза, Сопротивление очарованию",
      isHomebrew: true,
    },
    {
      name: "Дампиры",
      description: "Полувампиры — те, кто был укушен, но не до конца обращён.",
      traits: "Тёмное зрение 60 футов, Укус вампира, Паучье лазание",
      isHomebrew: true,
    },
    {
      name: "Реборны",
      description: "Воскресшие души в новых телах, часто созданные тёмной магией.",
      traits: "Память прошлой жизни, Сопротивление смерти",
      isHomebrew: true,
    },
  ],

  // Custom Subclasses
  subclasses: [
    {
      className: "Следопыт",
      subclassName: "Охотник на монстров",
      description: "Специализация на охоте за нежитью и чудовищами Баровии.",
      features: ["Знание монстров", "Убийственный удар", "Защитные обереги"],
    },
    {
      className: "Клерик",
      subclassName: "Домен Утренний Лорд",
      description: "Последователи забытого бога солнца, несущие свет во тьму.",
      features: ["Священный свет", "Развеять тьму", "Аура надежды"],
    },
    {
      className: "Колдун",
      subclassName: "Покровитель: Тёмные Силы",
      description: "Те, кто заключил сделку с самими Тёмными Силами Равенлофта.",
      features: ["Дар тьмы", "Теневой шаг", "Проклятие вечности"],
    },
  ],

  // Special Traits/Feats
  customTraits: [
    {
      name: "Выживший Баровии",
      description: "Вы провели достаточно времени в этой проклятой земле, чтобы научиться выживать.",
      effect: "Преимущество на спасброски от страха, +2 к Выживанию в Баровии",
    },
    {
      name: "Враг нежити",
      description: "Вы посвятили жизнь борьбе с нежитью.",
      effect: "+1d6 урона по нежити, знание её слабостей",
    },
    {
      name: "Благословение Утреннего Лорда",
      description: "Божественная искра защищает вас от тьмы.",
      effect: "Сопротивление некротическому урону, свечение по команде",
    },
    {
      name: "Отмеченный Страдом",
      description: "Тёмный Лорд проявил к вам интерес — благо это или проклятие?",
      effect: "Страд знает ваше местоположение, но вы чувствуете его приближение",
    },
  ],

  // Kingdoms/Factions
  kingdoms: [
    {
      name: "Замок Равенлофт",
      ruler: "Страд фон Зарович",
      description: "Зловещий замок на вершине столпа Равенлофт, дом Тёмного Лорда.",
      allegiance: "Тьма",
      features: ["Армия нежити", "Невозможная архитектура", "Сердце Баровии"],
    },
    {
      name: "Деревня Баровия",
      ruler: "Бургомистр Коля Индировия",
      description: "Маленькая деревня у подножия замка, живущая в вечном страхе.",
      allegiance: "Нейтральная",
      features: ["Забитое население", "Церковь Утреннего Лорда", "Дом бургомистра"],
    },
    {
      name: "Валлаки",
      ruler: "Барон Варгас Валлакович",
      description: "Город, где каждую неделю проводят фестивали, чтобы отгонять зло.",
      allegiance: "Нейтральная",
      features: ["Обязательные фестивали", "Культ Леди Ваховой", "Заговоры и интриги"],
    },
    {
      name: "Крезк",
      ruler: "Бургомистр Дмитрий Крезков",
      description: "Укреплённая деревня с Аббатством на холме.",
      allegiance: "Свет",
      features: ["Святой бассейн", "Аббатство Святой Марковии", "Аббат"],
    },
    {
      name: "Вистани",
      ruler: "Мадам Ева",
      description: "Кочевой народ, живущий вне законов Страда.",
      allegiance: "Неопределённая",
      features: ["Караваны", "Гадания на картах Таррока", "Проклятья и благословения"],
    },
  ],

  // Notable Locations
  locations: [
    {
      name: "Замок Равенлофт",
      type: "Замок",
      description: "Древняя крепость Страда, полная ловушек, нежити и тёмных секретов.",
      dangerLevel: 5,
      discovered: true,
    },
    {
      name: "Янтарный Храм",
      type: "Храм",
      description: "Скрытый храм в горах, где заточены вестиги — осколки тёмных богов.",
      dangerLevel: 5,
      discovered: true,
    },
    {
      name: "Аргинвостхольт",
      type: "Руины",
      description: "Разрушенная обитель Рыцарей Серебряного Дракона.",
      dangerLevel: 4,
      discovered: true,
    },
    {
      name: "Дом смерти",
      type: "Поместье",
      description: "Проклятый особняк культа в деревне Баровия.",
      dangerLevel: 3,
      discovered: true,
    },
    {
      name: "Озеро Барток",
      type: "Природа",
      description: "Туманное озеро, где, по слухам, живёт древнее существо.",
      dangerLevel: 3,
      discovered: true,
    },
    {
      name: "Виноградники Волшебника Вин",
      type: "Поместье",
      description: "Источник единственного вина в Баровии — и тайна оборотней.",
      dangerLevel: 3,
      discovered: true,
    },
    {
      name: "Башня Ван Рихтена",
      type: "Башня",
      description: "Укрытие легендарного охотника на монстров.",
      dangerLevel: 2,
      discovered: false,
    },
    {
      name: "Руины Берез",
      type: "Руины",
      description: "Уничтоженная деревня, где правит ведьма Баба Лысага.",
      dangerLevel: 4,
      discovered: true,
    },
  ],

  // Important NPCs
  npcs: [
    {
      name: "Страд фон Зарович",
      role: "Главный антагонист",
      description: "Древний вампир, Тёмный Лорд Баровии. Элегантен, жесток и бесконечно одинок.",
      attitude: "Враждебный",
    },
    {
      name: "Мадам Ева",
      role: "Провидица",
      description: "Древняя вистани-гадалка, знающая пути судьбы.",
      attitude: "Нейтральный",
    },
    {
      name: "Ирина Колянна",
      role: "Перерождение Татьяны",
      description: "Дочь бургомистра Баровии, очередное перерождение возлюбленной Страда.",
      attitude: "Дружелюбный",
    },
    {
      name: "Рудольф ван Рихтен",
      role: "Легендарный охотник",
      description: "Величайший охотник на монстров, скрывающийся в Баровии.",
      attitude: "Дружелюбный",
    },
    {
      name: "Рахадин",
      role: "Камергер замка",
      description: "Верный слуга Страда, эльф-дроу с тёмным прошлым.",
      attitude: "Враждебный",
    },
  ],

  // House Rules
  houseRules: [
    "Отдых: Короткий отдых — 8 часов, Длинный отдых — только в безопасном месте",
    "Безумие: Ужасы Баровии могут вызвать временное или долгосрочное безумие",
    "Тёмные дары: Можно принять дар вестига в Янтарном Храме (с последствиями)",
    "Воскрешение: Души не покидают Баровию — воскрешение возможно, но изменённым",
    "Солнечный свет: Настоящего солнца нет — заклинания с солнечным уроном работают на 50%",
  ],

  // Current Story Arc
  currentArc: {
    name: "Штурм Равенлофта",
    description: "Герои собрали все артефакты и готовятся к финальному противостоянию со Страдом.",
    objectives: [
      { text: "Найти Святой символ Равенкинда", completed: true },
      { text: "Добыть Меч Солнечного Клинка", completed: true },
      { text: "Получить Фолиант Страда", completed: true },
      { text: "Заручиться поддержкой союзника", completed: true },
      { text: "Победить Страда в его замке", completed: false },
    ],
  },

  // Artifacts
  artifacts: [
    {
      name: "Святой символ Равенкинда",
      description: "Древний символ, усиливающий силу против нежити.",
      found: true,
      owner: "Ирена (Клерик)",
    },
    {
      name: "Меч Солнечного Клинка",
      description: "Легендарный меч, излучающий солнечный свет.",
      found: true,
      owner: "Виктор (Следопыт)",
    },
    {
      name: "Фолиант Страда",
      description: "Дневник вампира, раскрывающий его слабости.",
      found: true,
      owner: "Партия",
    },
  ],
}

const partyMembers = [
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
    title: "Несущая свет",
    race: "Человек",
    className: "Клерик",
    level: 8,
    campaign: "Проклятие Страда",
    status: "active" as const,
  },
  {
    id: "3",
    name: "Эзмеральда д'Авенир",
    title: "Вистани-изгнанница",
    race: "Человек",
    className: "Боец/Плут",
    level: 8,
    campaign: "Проклятие Страда",
    status: "active" as const,
  },
  {
    id: "4",
    name: "Кассиус Тень",
    title: "Отмеченный тьмой",
    race: "Дампир",
    className: "Колдун",
    level: 8,
    campaign: "Проклятие Страда",
    status: "active" as const,
  },
]

const sessionLog = [
  { number: 23, title: "Замок Равенлофт: Финал близко", date: "2 марта 2024", summary: "Партия проникла в замок через катакомбы..." },
  { number: 22, title: "Склеп Страда", date: "24 февраля 2024", summary: "Обнаружили гробницы предков Страда..." },
  { number: 21, title: "Битва у врат замка", date: "17 февраля 2024", summary: "Сражение с армией зомби у подъёмного моста..." },
  { number: 20, title: "Подготовка к штурму", date: "10 февраля 2024", summary: "Финальные приготовления, союз с ван Рихтеном..." },
  { number: 19, title: "Янтарный Храм", date: "3 февраля 2024", summary: "Искушение вестигов, Кассиус принял тёмный дар..." },
]

function DangerStars({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Skull 
          key={star} 
          className={`w-3 h-3 ${star <= level ? 'text-red-500' : 'text-muted-foreground/30'}`} 
        />
      ))}
    </div>
  )
}

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const campaign = campaignData

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navigation />
      <FloatingParticles />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад к кампейнам</span>
          </Link>

          {/* Header */}
          <header className="mb-10 p-8 rounded-xl bg-gradient-to-r from-card via-card/80 to-card border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/parchment-texture.png')] opacity-5" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm">
                  Идёт
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  {campaign.system}
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  {campaign.setting}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-serif">
                {campaign.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-lg">{campaign.world}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{campaign.players}/{campaign.maxPlayers} игроков</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{campaign.sessions} сессий</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  <span>{campaign.dm}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Current Story Arc */}
          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Текущая арка: {campaign.currentArc.name}</h2>
            </div>
            <p className="text-muted-foreground mb-4">{campaign.currentArc.description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {campaign.currentArc.objectives.map((obj, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    obj.completed ? 'bg-green-500/10 border border-green-500/30' : 'bg-secondary/50 border border-border'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    obj.completed ? 'bg-green-500 text-background' : 'bg-muted border border-border'
                  }`}>
                    {obj.completed && <span className="text-xs">✓</span>}
                  </div>
                  <span className={obj.completed ? 'text-green-400 line-through' : 'text-foreground'}>
                    {obj.text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* World Description */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  О мире
                </h2>
                <div className="prose prose-invert max-w-none">
                  {campaign.worldDescription.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </section>

              {/* World History */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <BookMarked className="w-6 h-6 text-primary" />
                  История мира
                </h2>
                <div className="prose prose-invert max-w-none">
                  {campaign.worldHistory.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </section>

              {/* Kingdoms/Factions */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Castle className="w-6 h-6 text-primary" />
                  Королевства и фракции
                </h2>
                <div className="grid gap-4">
                  {campaign.kingdoms.map((kingdom) => (
                    <div 
                      key={kingdom.name}
                      className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{kingdom.name}</h3>
                          <p className="text-sm text-primary">Правитель: {kingdom.ruler}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          kingdom.allegiance === 'Тьма' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          kingdom.allegiance === 'Свет' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          'bg-secondary text-muted-foreground border border-border'
                        }`}>
                          {kingdom.allegiance}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{kingdom.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {kingdom.features.map((feature) => (
                          <span key={feature} className="px-2 py-1 text-xs bg-background rounded border border-border text-muted-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Locations */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Mountain className="w-6 h-6 text-primary" />
                  Локации
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {campaign.locations.map((location) => (
                    <div 
                      key={location.name}
                      className={`p-4 rounded-lg border transition-colors ${
                        location.discovered 
                          ? 'bg-secondary/30 border-border hover:border-primary/30' 
                          : 'bg-secondary/10 border-dashed border-muted-foreground/30'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className={`font-bold ${location.discovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {location.discovered ? location.name : '???'}
                          </h3>
                          <span className="text-xs text-primary">{location.type}</span>
                        </div>
                        <DangerStars level={location.dangerLevel} />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {location.discovered ? location.description : 'Эта локация ещё не обнаружена...'}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Races */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Играбельные расы
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {campaign.races.map((race) => (
                    <div 
                      key={race.name}
                      className="p-4 rounded-lg bg-secondary/30 border border-border"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-foreground">{race.name}</h3>
                        {race.isHomebrew && (
                          <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full">
                            Homebrew
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{race.description}</p>
                      <p className="text-xs text-primary">
                        <Sparkles className="w-3 h-3 inline mr-1" />
                        {race.traits}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Subclasses */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Swords className="w-6 h-6 text-primary" />
                  Кастомные подклассы
                </h2>
                <div className="space-y-4">
                  {campaign.subclasses.map((subclass) => (
                    <div 
                      key={subclass.subclassName}
                      className="p-4 rounded-lg bg-secondary/30 border border-border"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                          {subclass.className}
                        </span>
                        <h3 className="font-bold text-foreground">{subclass.subclassName}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{subclass.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {subclass.features.map((feature) => (
                          <span key={feature} className="px-2 py-1 text-xs bg-background rounded border border-border text-muted-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Custom Traits */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Особые черты
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {campaign.customTraits.map((trait) => (
                    <div 
                      key={trait.name}
                      className="p-4 rounded-lg bg-secondary/30 border border-border"
                    >
                      <h3 className="font-bold text-foreground mb-2">{trait.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{trait.description}</p>
                      <p className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
                        {trait.effect}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Artifacts */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Gem className="w-6 h-6 text-primary" />
                  Ключевые артефакты
                </h2>
                <div className="space-y-3">
                  {campaign.artifacts.map((artifact) => (
                    <div 
                      key={artifact.name}
                      className={`p-4 rounded-lg border flex items-center justify-between ${
                        artifact.found 
                          ? 'bg-yellow-500/10 border-yellow-500/30' 
                          : 'bg-secondary/30 border-border'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <Gem className={`w-4 h-4 ${artifact.found ? 'text-yellow-400' : 'text-muted-foreground'}`} />
                          <h3 className="font-bold text-foreground">{artifact.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{artifact.description}</p>
                      </div>
                      {artifact.found && (
                        <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          У: {artifact.owner}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* NPCs */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  Ключевые NPC
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {campaign.npcs.map((npc) => (
                    <div 
                      key={npc.name}
                      className="p-4 rounded-lg bg-secondary/30 border border-border"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-foreground">{npc.name}</h3>
                          <p className="text-xs text-primary">{npc.role}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          npc.attitude === 'Враждебный' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          npc.attitude === 'Дружелюбный' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          'bg-secondary text-muted-foreground border border-border'
                        }`}>
                          {npc.attitude}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{npc.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Party */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Партия героев
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {partyMembers.map((hero) => (
                    <HeroCard key={hero.id} {...hero} />
                  ))}
                </div>
              </section>

              {/* Session log */}
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Scroll className="w-6 h-6 text-primary" />
                  Журнал сессий
                </h2>
                <div className="space-y-3">
                  {sessionLog.map((session) => (
                    <div
                      key={session.number}
                      className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-lg bg-primary/20 text-primary font-bold flex items-center justify-center">
                            {session.number}
                          </span>
                          <span className="font-bold text-foreground">{session.title}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{session.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground ml-13 pl-13">{session.summary}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-4 sticky top-24">
                <h3 className="font-bold text-foreground text-lg">Информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Расписание</div>
                      <div className="text-foreground font-medium">{campaign.schedule}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Начало</div>
                      <div className="text-foreground font-medium">{campaign.startDate}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Scroll className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Последняя сессия</div>
                      <div className="text-foreground font-medium">{campaign.lastSession}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Мастер</div>
                      <div className="text-foreground font-medium">{campaign.dm}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-primary" />
                    Правила стола
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {campaign.houseRules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Join CTA */}
              {campaign.players < campaign.maxPlayers && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Есть свободное место!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    В партии есть место для ещё одного героя. Готов бросить вызов Тёмному Лорду?
                  </p>
                  <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                    <Swords className="w-4 h-4" />
                    Подать заявку
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
