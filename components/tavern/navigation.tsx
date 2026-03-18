"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Scroll, Users, Swords, Home, Dices } from "lucide-react"

const navItems = [
  { href: "/", label: "Таверна", icon: Home },
  { href: "/campaigns", label: "Кампейны", icon: Scroll },
  { href: "/quests", label: "Доска заданий", icon: Swords },
  { href: "/heroes", label: "Зал Героев", icon: Users },
  { href: "/tools", label: "Инструменты", icon: Dices },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-glow">
                <Scroll className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 bg-flame/20 rounded-full blur-md animate-flicker" />
            </div>
            <span className="text-xl font-bold text-gold hidden sm:block group-hover:text-primary transition-colors">
              Таверна Героев
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
