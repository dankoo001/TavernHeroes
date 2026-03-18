"use client"

import { useState } from "react"
import { Navigation } from "@/components/tavern/navigation"
import { FloatingParticles } from "@/components/tavern/floating-particles"
import { 
  Dices, RotateCcw, Sparkles, User, BookOpen, 
  Heart, Swords, MapPin, Ghost, Scroll
} from "lucide-react"

// d100 таблицы для рандомизации
const tables = {
  backgrounds: [
    "Прислужник", "Шарлатан", "Преступник", "Артист", "Народный герой",
    "Гильдейский ремесленник", "Отшельник", "Благородный", "Чужеземец", "Мудрец",
    "Моряк", "Солдат", "Беспризорник", "Пират", "Рыцарь",
    "Алхимик", "Охотник за головами", "Культист", "Дезертир", "Изгнанник",
    "Шпион", "Археолог", "Контрабандист", "Гладиатор", "Наёмник"
  ],
  traits: [
    "Я преклоняюсь перед героем и постоянно ссылаюсь на его подвиги",
    "Я могу найти общий язык с любым существом, если оно не слишком глупое",
    "Я вижу знамения во всём — это боги пытаются говорить со мной",
    "Ничто не может поколебать мой оптимизм",
    "Я цитирую священные тексты, даже когда это неуместно",
    "Я необычайно терпелив и готов выслушать обе стороны",
    "Мне нравится узнавать о других культурах и традициях",
    "Я всегда составляю запасной план на случай неудачи",
    "Я сохраняю спокойствие в любой ситуации",
    "Первое впечатление, которое я произвожу — всегда ошибочно",
    "Я одержим чистотой и порядком",
    "Мне нужно всё проверять самостоятельно",
    "Я разговариваю с самим собой, особенно когда нервничаю",
    "Я люблю хорошую загадку или тайну",
    "Я верю, что всё происходит по какой-то причине",
    "Я постоянно шучу, даже в неподходящих ситуациях",
    "Я груб с теми, кто не проявляет ко мне должного уважения",
    "Я люблю давать советы, даже когда меня не спрашивают",
    "Я легко завожу новых друзей",
    "Я не люблю признавать свои ошибки"
  ],
  ideals: [
    "Благо. Я помогаю тем, кто в нужде, это мой долг",
    "Честь. Я не обману даже врага",
    "Свобода. Цепи предназначены для того, чтобы их разрывать",
    "Власть. Я докажу, что заслуживаю лучшей судьбы",
    "Знание. Истина важнее всего остального",
    "Слава. Я должен прославиться любой ценой",
    "Справедливость. Закон один для всех",
    "Месть. Те, кто обидел меня, поплатятся",
    "Порядок. Хаос — это враг цивилизации",
    "Красота. То, что прекрасно, направляет нас к истине",
    "Традиция. Старые обычаи существуют не просто так",
    "Искупление. Я должен загладить свои прошлые грехи",
    "Верность. Я никогда не предам тех, кому доверяю",
    "Независимость. Я должен сам выбирать свой путь",
    "Логика. Эмоции не должны затмевать разум"
  ],
  bonds: [
    "Я защищаю тех, кто не может защитить себя",
    "Моя честь — это моя жизнь",
    "Кто-то спас мне жизнь, и теперь я в долгу",
    "Я ищу родственника, пропавшего много лет назад",
    "Я жажду отомстить за несправедливость",
    "Моя библиотека — мой самый ценный владение",
    "Я работаю над секретным проектом, который изменит мир",
    "Я должен защитить священное место или реликвию",
    "Моя семья — всё, что у меня есть",
    "Мой учитель доверил мне важную миссию",
    "Я храню тайну, которая может уничтожить репутацию моей семьи",
    "Мой инструмент — это связь с ушедшим близким человеком",
    "Я должен вернуть украденный артефакт моего народа",
    "Я влюблён в человека, который не знает о моих чувствах",
    "Мой корабль — мой дом, и я защищу его любой ценой"
  ],
  flaws: [
    "Я слишком доверчив",
    "Я не могу устоять перед красивым лицом",
    "Я одержим местью и не остановлюсь, пока не добьюсь цели",
    "У меня есть тайный порок, который я скрываю от всех",
    "Я убегаю при первых признаках опасности",
    "Золото — моя слабость, я не могу устоять перед богатством",
    "Я слишком горд, чтобы отступить",
    "Я легко поддаюсь гневу",
    "Я скрываю постыдную тайну",
    "Я верю, что особенный и предназначен для великих дел",
    "Я часто лгу, даже когда в этом нет необходимости",
    "Я не доверяю никому, кроме себя",
    "Я завидую чужим успехам",
    "Я трачу деньги быстрее, чем зарабатываю",
    "Я не умею держать язык за зубами"
  ],
  motivations: [
    "Найти давно потерянного члена семьи",
    "Отомстить тому, кто разрушил мою жизнь",
    "Раскрыть тайну своего происхождения",
    "Доказать свою невиновность в преступлении",
    "Найти легендарное сокровище",
    "Защитить родную землю от угрозы",
    "Заслужить прощение за прошлые грехи",
    "Стать величайшим мастером своего ремесла",
    "Уничтожить древнее зло",
    "Собрать компоненты для могущественного ритуала",
    "Освободить порабощённый народ",
    "Разгадать пророчество о себе",
    "Спасти умирающего близкого человека",
    "Восстановить честь своей семьи",
    "Найти и уничтожить проклятый артефакт"
  ],
  secrets: [
    "Я убил человека в порыве гнева и скрываю это",
    "Я на самом деле не тот, за кого себя выдаю",
    "Я заключил сделку с тёмными силами",
    "Я предал своих бывших товарищей",
    "Я ношу проклятие, о котором никто не знает",
    "Я видел нечто ужасное, что сломило мой разум",
    "Я тайно влюблён в члена группы",
    "Я на самом деле шпион другой фракции",
    "Я храню артефакт огромной силы",
    "Я последний из древнего рода",
    "Мои родители были не теми, за кого себя выдавали",
    "Я слышу голоса, которые направляют меня",
    "У меня есть ребёнок, о котором никто не знает",
    "Я был мёртв и вернулся к жизни",
    "Я причастен к великой катастрофе в прошлом"
  ],
  fears: [
    "Я боюсь темноты и того, что в ней скрывается",
    "Огонь вызывает у меня панику",
    "Я боюсь быть забытым после смерти",
    "Замкнутые пространства вселяют в меня ужас",
    "Я боюсь высоты",
    "Глубокая вода — мой худший кошмар",
    "Я боюсь потерять рассудок",
    "Пауки и насекомые вызывают у меня отвращение",
    "Я боюсь предательства близких",
    "Магия вселяет в меня страх и недоверие",
    "Я боюсь нежити больше всего на свете",
    "Я страшусь возвращения кого-то из прошлого",
    "Одиночество — мой главный страх",
    "Я боюсь, что не достоин своей миссии",
    "Потеря контроля над собой ужасает меня"
  ],
  events: [
    "Моя деревня была уничтожена загадочной силой",
    "Я стал свидетелем чуда или божественного знамения",
    "Меня похитили и держали в плену много лет",
    "Я нашёл древний артефакт, который изменил мою жизнь",
    "Мой учитель был убит, и я поклялся отомстить",
    "Я выжил в катастрофе, которая унесла жизни многих",
    "Меня обвинили в преступлении, которого я не совершал",
    "Я получил таинственное наследство от незнакомца",
    "Война разрушила всё, что я знал",
    "Я был изгнан из родного дома за ересь",
    "Болезнь унесла жизни моих близких",
    "Я встретил существо из другого мира",
    "Мне приснился пророческий сон",
    "Я потерял память о части своей жизни",
    "Странник научил меня древним секретам"
  ],
  hooks: [
    "В таверне ко мне подошёл незнакомец с запечатанным письмом",
    "Я нашёл карту, ведущую к забытым руинам",
    "Старый друг появился с просьбой о помощи",
    "Мне снится один и тот же кошмар каждую ночь",
    "Я услышал слухи о своём давно умершем родственнике",
    "Стража разыскивает меня по ложному обвинению",
    "Я получил предупреждение о грядущей опасности",
    "Артефакт в моём владении начал проявлять странные свойства",
    "Организация из моего прошлого вышла на мой след",
    "Я обнаружил, что за мной следят",
    "Пророчество упоминает кого-то, похожего на меня",
    "Мой должник исчез при загадочных обстоятельствах",
    "Я нашёл дневник с упоминанием моей семьи",
    "Незнакомая магия пробудилась во мне",
    "Гонец принёс весть о беде в моём родном крае"
  ],
  names: {
    human_male: ["Алдрик", "Борис", "Владимир", "Гарольд", "Дмитрий", "Эдмунд", "Фёдор", "Григорий", "Хельмут", "Иван", "Ярослав", "Конрад", "Леонард", "Михаил", "Николай", "Олег", "Пётр", "Квентин", "Родерик", "Сергей"],
    human_female: ["Анна", "Бригитта", "Катерина", "Дарья", "Елена", "Фрида", "Галина", "Хельга", "Ирина", "Юлия", "Кира", "Людмила", "Мария", "Наталья", "Ольга", "Полина", "Регина", "София", "Татьяна", "Ульяна"],
    elf_male: ["Аэлар", "Берриан", "Каледорн", "Дэйлин", "Эндриан", "Фаэлор", "Галадон", "Хелион", "Иллитран", "Джарион"],
    elf_female: ["Аэлис", "Бриэлла", "Целестия", "Даэнис", "Элария", "Фаэлин", "Галадриэль", "Хелиана", "Иллиана", "Джасмин"],
    dwarf_male: ["Баргрим", "Дурган", "Горин", "Хромар", "Краггон", "Морадин", "Торгрим", "Ульрик", "Вондал", "Зарак"],
    dwarf_female: ["Амбра", "Брунхильда", "Дагна", "Гердис", "Хельга", "Кетра", "Магда", "Рагна", "Торра", "Визра"]
  },
  quirks: [
    "Постоянно крутит монетку между пальцами",
    "Разговаривает с оружием как с живым существом",
    "Никогда не снимает один конкретный предмет одежды",
    "Собирает необычные камни или безделушки",
    "Насвистывает одну и ту же мелодию в стрессовых ситуациях",
    "Ведёт дневник и записывает всё происходящее",
    "Не может пройти мимо кошки, не погладив её",
    "Постоянно точит оружие, даже если оно уже острое",
    "Рассказывает одну и ту же историю снова и снова",
    "Боится определённого цвета",
    "Не ест мясо по религиозным соображениям",
    "Спит с открытыми глазами",
    "Коллекционирует зубы поверженных врагов",
    "Всегда входит в комнату последним",
    "Называет все предметы человеческими именами"
  ]
}

type TableKey = keyof typeof tables

interface RandomizerSection {
  id: string
  title: string
  icon: React.ElementType
  description: string
  tableKeys: TableKey[]
}

const sections: RandomizerSection[] = [
  {
    id: "full",
    title: "Полное создание персонажа",
    icon: User,
    description: "Сгенерировать всё сразу: предысторию, черты, идеалы, привязанности, слабости и многое другое",
    tableKeys: ["backgrounds", "traits", "ideals", "bonds", "flaws", "motivations", "secrets", "fears", "events", "quirks"]
  },
  {
    id: "personality",
    title: "Личность",
    icon: Sparkles,
    description: "Черты характера, идеалы, привязанности и слабости",
    tableKeys: ["traits", "ideals", "bonds", "flaws"]
  },
  {
    id: "backstory",
    title: "Предыстория",
    icon: BookOpen,
    description: "Происхождение, мотивация, секреты и ключевые события прошлого",
    tableKeys: ["backgrounds", "motivations", "secrets", "events"]
  },
  {
    id: "hooks",
    title: "Сюжетные зацепки",
    icon: Scroll,
    description: "Причины для приключений и завязки историй",
    tableKeys: ["hooks", "motivations"]
  },
  {
    id: "fears",
    title: "Страхи и слабости",
    icon: Ghost,
    description: "Фобии, уязвимости и психологические особенности",
    tableKeys: ["fears", "flaws"]
  },
  {
    id: "quirks",
    title: "Причуды",
    icon: Heart,
    description: "Уникальные привычки и особенности поведения",
    tableKeys: ["quirks"]
  }
]

function rollD100() {
  return Math.floor(Math.random() * 100) + 1
}

function getRandomFromTable<T>(table: T[]): { result: T; roll: number } {
  const roll = rollD100()
  const index = Math.floor((roll - 1) / (100 / table.length))
  return { result: table[Math.min(index, table.length - 1)], roll }
}

function DiceAnimation({ rolling }: { rolling: boolean }) {
  return (
    <div className={`relative w-16 h-16 ${rolling ? 'animate-spin' : ''}`}>
      <div className="absolute inset-0 bg-primary rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-2xl font-bold text-primary-foreground">d100</span>
      </div>
      {rolling && (
        <div className="absolute inset-0 bg-primary/50 rounded-xl blur-md animate-pulse" />
      )}
    </div>
  )
}

export default function ToolsPage() {
  const [rolling, setRolling] = useState(false)
  const [results, setResults] = useState<Record<string, { result: string; roll: number }>>({})
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleRoll = async (section: RandomizerSection) => {
    setRolling(true)
    setActiveSection(section.id)
    
    // Simulate dice rolling animation
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newResults: Record<string, { result: string; roll: number }> = {}
    
    section.tableKeys.forEach(key => {
      if (key === "names") return // Skip names, handle separately
      const table = tables[key]
      if (Array.isArray(table)) {
        newResults[key] = getRandomFromTable(table)
      }
    })
    
    setResults(newResults)
    setRolling(false)
  }

  const handleRollSingle = async (tableKey: TableKey) => {
    setRolling(true)
    
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const table = tables[tableKey]
    if (Array.isArray(table)) {
      setResults(prev => ({
        ...prev,
        [tableKey]: getRandomFromTable(table)
      }))
    }
    
    setRolling(false)
  }

  const clearResults = () => {
    setResults({})
    setActiveSection(null)
  }

  const tableLabels: Record<string, string> = {
    backgrounds: "Предыстория",
    traits: "Черта характера",
    ideals: "Идеал",
    bonds: "Привязанность",
    flaws: "Слабость",
    motivations: "Мотивация",
    secrets: "Секрет",
    fears: "Страх",
    events: "Ключевое событие",
    hooks: "Сюжетная зацепка",
    quirks: "Причуда"
  }

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navigation />
      <FloatingParticles />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Dices className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Инструменты игрока
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Рандомайзеры на основе d100 для создания персонажей, 
              генерации историй и сюжетных зацепок. Бросьте кости судьбы!
            </p>
          </div>

          {/* Randomizer sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sections.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleRoll(section)}
                  disabled={rolling}
                  className={`
                    relative p-6 rounded-xl border text-left transition-all duration-300
                    ${isActive 
                      ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20' 
                      : 'bg-card border-border hover:border-primary/50 hover:bg-card/80'
                    }
                    disabled:opacity-50 disabled:cursor-not-allowed
                    group
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors
                      ${isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground'}
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                  
                  {/* Dice indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-muted-foreground">
                    <Dices className="w-4 h-4" />
                    <span>{section.tableKeys.length}x d100</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Rolling animation */}
          {rolling && (
            <div className="flex flex-col items-center justify-center py-12">
              <DiceAnimation rolling={true} />
              <p className="mt-4 text-lg text-primary animate-pulse">Бросаю кости судьбы...</p>
            </div>
          )}

          {/* Results */}
          {Object.keys(results).length > 0 && !rolling && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Результаты броска
                </h2>
                <button
                  onClick={clearResults}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Очистить
                </button>
              </div>

              <div className="grid gap-4">
                {Object.entries(results).map(([key, { result, roll }]) => (
                  <div 
                    key={key} 
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-primary">
                            {tableLabels[key] || key}
                          </span>
                          <span className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
                            d100: {roll}
                          </span>
                        </div>
                        <p className="text-foreground leading-relaxed">{result}</p>
                      </div>
                      <button
                        onClick={() => handleRollSingle(key as TableKey)}
                        disabled={rolling}
                        className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors opacity-0 group-hover:opacity-100"
                        title="Перебросить"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Copy all button */}
              <button
                onClick={() => {
                  const text = Object.entries(results)
                    .map(([key, { result, roll }]) => `${tableLabels[key] || key} (d100: ${roll}): ${result}`)
                    .join('\n\n')
                  navigator.clipboard.writeText(text)
                }}
                className="w-full p-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Scroll className="w-5 h-5" />
                Скопировать все результаты
              </button>
            </div>
          )}

          {/* Individual tables */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Swords className="w-6 h-6 text-primary" />
              Отдельные таблицы
            </h2>
            <p className="text-muted-foreground mb-8">
              Бросьте кубик для конкретной категории
            </p>
            
            <div className="flex flex-wrap gap-3">
              {Object.entries(tableLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleRollSingle(key as TableKey)}
                  disabled={rolling}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  <Dices className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Name generator */}
          <div className="mt-16 p-6 rounded-xl bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              Генератор имён
            </h2>
            <p className="text-muted-foreground mb-6">
              Случайные имена для разных рас и полов
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { key: "human_male", label: "Человек (муж)" },
                { key: "human_female", label: "Человек (жен)" },
                { key: "elf_male", label: "Эльф (муж)" },
                { key: "elf_female", label: "Эльф (жен)" },
                { key: "dwarf_male", label: "Дварф (муж)" },
                { key: "dwarf_female", label: "Дварф (жен)" },
              ].map(({ key, label }) => {
                const names = tables.names[key as keyof typeof tables.names]
                const result = results[`name_${key}`]
                
                return (
                  <div key={key} className="p-4 bg-secondary/30 rounded-lg">
                    <button
                      onClick={() => {
                        const { result, roll } = getRandomFromTable(names)
                        setResults(prev => ({
                          ...prev,
                          [`name_${key}`]: { result, roll }
                        }))
                      }}
                      className="w-full text-left"
                    >
                      <span className="text-sm text-muted-foreground">{label}</span>
                      {result ? (
                        <p className="text-lg font-bold text-primary mt-1">{result.result}</p>
                      ) : (
                        <p className="text-foreground mt-1 opacity-50">Нажмите для броска</p>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
