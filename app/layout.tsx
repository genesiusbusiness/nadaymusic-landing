import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NadayMusic — La plateforme musicale ouverte à tous',
  description: 'La plateforme musicale ouverte à tous. Crée, poste et partage ta musique librement. Que tu sois débutant, passionné ou artiste confirmé, tout le monde peut poster sa musique comme il le veut.',
  keywords: ['NadayMusic', 'musique', 'audio', 'social', 'streaming', 'création musicale', 'découverte musicale', 'ouvert à tous', 'création libre'],
  authors: [{ name: 'Naday Entertainment' }],
  openGraph: {
    title: 'NadayMusic — La plateforme musicale ouverte à tous',
    description: 'La plateforme musicale ouverte à tous. Crée, poste et partage ta musique librement. Que tu sois débutant, passionné ou artiste confirmé, tout le monde peut poster sa musique.',
    type: 'website',
    images: [
      {
        url: '/app-shot.png',
        width: 1200,
        height: 630,
        alt: 'NadayMusic App Screenshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NadayMusic — La plateforme musicale ouverte à tous',
    description: 'La plateforme musicale ouverte à tous. Crée, poste et partage ta musique librement. Que tu sois débutant, passionné ou artiste confirmé, tout le monde peut poster sa musique.',
    images: ['/app-shot.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#8B5CF6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-naday-darker">
        {children}
      </body>
    </html>
  )
}

