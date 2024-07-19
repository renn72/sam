'use client'
import { useState, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import s from './home.module.scss'

const HeroTextIn = ({ children, introOut }) => {
  return (
    <div
      className={cn(s['hide-text'], introOut && s['show-text'], 'text-black')}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [introOut, setIntroOut] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIntroOut(true)
    }, 1000)
  }, [])

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
        <section
          className={cn(
            'relative flex h-screen items-center justify-center',
          )}
        >
          <div className='hero-after-gradient h-full w-full'>
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
            <h1 className='text-slate-900/99 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-6xl font-bold text-foreground sm:text-9xl'>
              Sam Bate
            </h1>
          </div>
          <div
            className={cn('absolute bottom-12 left-0 w-full flex justify-center')}
          >
            <div
              className={cn(
                'hide-on-mobile',
                s['scroll-hint'],
                false && s.hide,
                introOut && s.show,
                'grid grid-cols-3 w-[90vw]'
              )}
            >
              <div className={cn(s.text, 'ml-4')}>
                <HeroTextIn introOut={introOut}>
                  <p>scroll</p>
                </HeroTextIn>
                <HeroTextIn introOut={introOut}>
                  <p> to explore</p>
                </HeroTextIn>
              </div>
            </div>
            <div className={cn(s.text, '')}></div>
          </div>
        </section>
        <section className='flex min-h-screen w-full flex-col items-center justify-center'>
          <div className='flex h-screen items-center justify-center'>
            <Image
              src='/assets/beer_nuts.webp'
              alt=''
              width={400}
              height={400}
            />
          </div>
          <div className='flex h-screen items-center justify-center'>
            <Image
              src='/assets/vodka.png'
              alt=''
              width={400}
              height={400}
            />
          </div>
        </section>
      </main>
    </ReactLenis>
  )
}
