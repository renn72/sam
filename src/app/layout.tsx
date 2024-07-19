import '@/styles/globals.css'
import '@/styles/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sam Bate',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className=''
    >
        <body className={inter.className}>{children}</body>
    </html>
  )
}
