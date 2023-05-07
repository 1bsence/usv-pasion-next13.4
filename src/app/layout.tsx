import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'USV-Passion',
  description: 'Made by pasion USV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"><head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-256x256.png"></link>
      <meta name="theme-color" content="#fff" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
    </head>
      <body className={inter.className + 'bg-white text-black dark:bg-slate-800 dark:text-white'}>{children}</body>
    </html>
  )
}
