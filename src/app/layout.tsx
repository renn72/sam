import '@/styles/globals.css'
import '@/styles/global.scss'

import localFont from 'next/font/local'

import type { Metadata } from 'next'
import RegisterGSAP from '@/components/RegisterGSAP'

export const metadata: Metadata = {
  title: 'Sam Bate',
  description: '',
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
      <RegisterGSAP />
      <body>{children}</body>
    </html>
  )
}
