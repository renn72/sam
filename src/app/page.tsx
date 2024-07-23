'use client'
import { ReactLenis } from 'lenis/react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Testimonial from '@/components/Testimonial'
import Parallax from '@/components/Parallax'

export default function Home() {
  return (
    <ReactLenis root>
      <main className='relative bg-[rgb(204,204,204)]'>
        <nav className='absolute left-4 top-2 z-10 flex items-center justify-center'>
          <Image
            src='/logo/android-chrome-512x512.png'
            alt=''
            width={32}
            height={32}
          />
        </nav>
        <Hero />
        <Parallax />
        <About />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  )
}
