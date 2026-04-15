import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Desenvolvedor Python & Data Science',
  description: 'Portfolio de um desenvolvedor especializado em Python e Data Science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
