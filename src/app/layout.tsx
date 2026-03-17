import '@/styles/globals.css'
import '@/styles/global.scss'

import localFont from 'next/font/local'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sam Bate | Food Development and Product Innovation',
  description:
    'Sam Bate develops food and beverage products with a natural, commercially sharp approach spanning innovation, waste-to-value development, and launch-ready concepts.',
}

const myFont = localFont({
  src: '../../public/fonts/Slussen-Bold.woff2',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={myFont.className}
    >
      <body>{children}</body>
    </html>
  )
}
