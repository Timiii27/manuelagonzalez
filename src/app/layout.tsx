import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manuela González - Artista',
  description: 'Portfolio artístico de Manuela González. Explorando la creatividad a través de diferentes medios y expresiones artísticas.',
  keywords: 'arte, artista, portfolio, Manuela González, pintura, escultura, arte contemporáneo',
  authors: [{ name: 'Manuela González' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
