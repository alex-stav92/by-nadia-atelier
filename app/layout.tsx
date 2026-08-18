import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ByNadia — ателье пошива и ремонта одежды в Ставрополе',

  description:
    'ByNadia — ателье пошива и ремонта одежды в Ставрополе. Ремонт, подгонка, переделка и индивидуальный пошив одежды. Обсудим ваш заказ по фотографии, эскизу или образцу.',

  metadataBase: new URL('https://bynadia.ru'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'ByNadia — ателье пошива и ремонта одежды в Ставрополе',

    description:
      'Ремонт, подгонка, переделка и индивидуальный пошив одежды в Ставрополе. Обсудим ваш заказ по фотографии, эскизу или образцу.',

    url: 'https://bynadia.ru',

    siteName: 'ByNadia',

    locale: 'ru_RU',

    type: 'website',

    images: [
      {
        url: 'https://bynadia.ru/images/null-model.png',
        width: 1200,
        height: 630,
        alt: 'ByNadia — ателье пошива и ремонта одежды в Ставрополе',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'ByNadia — ателье пошива и ремонта одежды в Ставрополе',

    description:
      'Ремонт, подгонка, переделка и индивидуальный пошив одежды в Ставрополе.',

    images: [
      'https://bynadia.ru/images/null-model.png',
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FBF0EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}