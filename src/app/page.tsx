'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import Image from 'next/image'

export default function Home() {
  return (
    <ReactLenis root>
      <main
        className='relative bg-gradient-to-r from-[rgb(224,224,224)] via-[rgb(251,251,251)] to-[rgb(224,224,224)]'
      >
        <nav className='z-10 flex items-center justify-center absolute top-2 left-4'>
          <Image
            src='/logo/android-chrome-512x512.png'
            alt=''
            width={32}
            height={32}
          />
        </nav>
        <section className='flex h-screen items-center justify-center relative hero-after-gradient'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='left-0 top-0 z-0 h-full w-full object-cover'
          >
            <source
              src='/assets/top_hero.mp4'
              type='video/mp4'
            />
          </video>
          <h1
            className='text-center text-foreground text-6xl sm:text-9xl font-bold text-slate-900/99 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'
        >
          Sam Bate
        </h1>
        </section>
        <section className='h-screen w-full flex items-center justify-center test'>
        </section>
      </main>
    </ReactLenis>
  )
}
