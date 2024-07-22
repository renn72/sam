'use client'
import { ReactLenis } from 'lenis/react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Benefits from '@/components/Benefits'

export default function Home() {
  return (
    <ReactLenis root>
      <main className='relative bg-gradient-to-r from-[rgb(224,224,224)] via-[rgb(251,251,251)] to-[rgb(224,224,224)]'>
        <nav className='absolute left-4 top-2 z-10 flex items-center justify-center'>
          <Image
            src='/logo/android-chrome-512x512.png'
            alt=''
            width={32}
            height={32}
          />
        </nav>
        <Hero />
        <Products />
        <Benefits />
        <About />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  )
}
