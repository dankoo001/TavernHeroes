import type { Metadata } from 'next'
import { Cinzel, Cinzel_Decorative } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700']
});

const cinzelDecorative = Cinzel_Decorative({ 
  subsets: ["latin"],
  variable: '--font-cinzel-decorative',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Таверна Героев | НРИ Кампейны',
  description: 'Добро пожаловать в таверну, путник. Смотри кампейны, бери задания и знакомься с легендарными героями.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cinzelDecorative.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
