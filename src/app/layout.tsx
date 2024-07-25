import '@/styles/globals.css'
import '@/styles/global.scss'

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
      className='Slussen'
    >
        <RegisterGSAP />
        <body >{children}</body>
    </html>
  )
}
