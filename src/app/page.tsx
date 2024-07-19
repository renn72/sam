'use client'
import { useState, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import s from './home.module.scss'
import { useRect } from '@darkroom.engineering/hamo'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const HeroTextIn = ({
  children,
  introOut,
}: {
  children: React.ReactNode
  introOut: boolean
}) => {
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
  const [whyRectRef, whyRect] = useRect()

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
          className={cn('relative flex h-screen items-center justify-center')}
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
            <h1
              className={cn(
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-6xl font-bold text-black text-foreground sm:text-9xl',
                introOut && s.show,
              )}
            >
              Sam Bate
            </h1>
          </div>
          <div
            className={cn(
              'absolute bottom-12 left-0 flex w-full justify-center',
            )}
          >
            <div
              className={cn(
                'hide-on-mobile',
                s['scroll-hint'],
                false && s.hide,
                introOut && s.show,
                'grid w-[90vw] grid-cols-3',
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
        <section
          className={s.why}
          data-lenis-scroll-snap-align='start'
        >
          <div className='grid h-screen grid-cols-12 justify-items-center gap-0'>
            <div className='col-span-6 h-full w-full place-items-center bg-white'>
              <h2 className={cn(s.sticky, 'h2')}>
                <Image
                  src='/assets/beer_nuts.webp'
                  alt=''
                  width={400}
                  height={400}
                  className='mx-auto'
                />
              </h2>
            </div>
            <aside
              className={s.features}
              ref={whyRectRef}
            >
              <div className={s.feature}>
                <p className='p'>
                  Beer nuts are a popular snack known for their irresistible
                  combination of crunch and flavor, making them an ideal
                  companion to a cold beverage. Typically made from premium
                  peanuts, these beer nuts are roasted to perfection and lightly
                  coated with a sweet and savory glaze, enhancing their natural
                  taste. The unique blend of seasoning often includes hints of
                  caramelized sugar and salt, striking a perfect balance that
                  appeals to a wide range of palates. Whether enjoyed at a
                  casual backyard barbecue or a lively pub, Australian beer nuts
                  offer a delightful snacking experience that complements the
                  laid-back, convivial spirit of Australian social gatherings
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section
          className={s.why}
          data-lenis-scroll-snap-align='start'
        >
          <div className='grid h-screen grid-cols-12 justify-items-center gap-0'>
            <div className='col-span-6 h-full w-full place-items-center bg-white'>
              <h2 className={cn(s.sticky, 'h2')}>
                <Image
                  src='/assets/vodka.png'
                  alt=''
                  width={400}
                  height={400}
                  className='mx-auto'
                />
              </h2>
            </div>
            <aside
              className={s.features}
              ref={whyRectRef}
            >
              <div className={s.feature}>
                <p className='p'>
                  We’ve heard all the reasons to not use smooth scroll. It feels
                  hacky. It’s inaccessible. It’s not performant. It’s
                  over-engineered. And historically, those were all true. But we
                  like to imagine things as they could be, then build them. So,
                  why should you use smooth scroll?
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section
          className={s.why}
          data-lenis-scroll-snap-align='start'
        >
          <div className='layout-grid'>
            <h2 className={cn(s.sticky, 'h2 h-screen')}>
              <Image
                src='/assets/beer_nuts.webp'
                alt=''
                width={400}
                height={400}
              />
            </h2>
            <aside
              className={s.features}
              ref={whyRectRef}
            >
              <div className={s.feature}>
                <p className='p'>
                  We’ve heard all the reasons to not use smooth scroll. It feels
                  hacky. It’s inaccessible. It’s not performant. It’s
                  over-engineered. And historically, those were all true. But we
                  like to imagine things as they could be, then build them. So,
                  why should you use smooth scroll?
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section className='flex min-h-screen w-full flex-col items-center justify-center'>
          <div className='flex h-screen w-full items-center justify-center'>
            <div className='grid h-full w-full grid-cols-2'>
              <div className='flex items-center justify-center bg-white'>
                <Image
                  src='/assets/beer_nuts.webp'
                  alt=''
                  width={400}
                  height={400}
                />
              </div>
              <div className='flex items-center justify-center'>
                <div>beer nuts</div>
              </div>
            </div>
          </div>
          <div className='flex h-screen w-full items-center justify-center'>
            <div className='grid h-full w-full grid-cols-2'>
              <div className='flex items-center justify-center bg-white'>
                <Image
                  src='/assets/vodka.png'
                  alt=''
                  width={400}
                  height={400}
                />
              </div>
              <div className='flex items-center justify-center'>
                <div>vodka</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  )
}
