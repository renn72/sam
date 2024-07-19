import '@/styles/globals.css'
import '@/styles/global.scss'

import type { Metadata } from 'next'

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
        <body >{children}</body>
    </html>
  )
}
