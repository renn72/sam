import '@/styles/globals.css'
import '@/styles/globals.scss'

import type { Metadata } from 'next'
import RegisterGSAP from '@/components/RegisterGSAP'

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
        <RegisterGSAP />
        <body >{children}</body>
    </html>
  )
}
