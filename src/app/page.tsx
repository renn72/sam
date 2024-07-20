'use client'
import { useState, useEffect, useRef } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import s from '@/app/home.module.scss'
import { useRect } from '@darkroom.engineering/hamo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Hero from '@/components/Hero'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

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

  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: container.current,
        pin: '.pin-me',
        start: 'center center',
        end: '=+500',
      })
    },
    { scope: container },
  )

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
        <Hero triggerRef={container} />

        <section ref={container}>
          <div className='flex h-screen flex-col items-center justify-center bg-white'>
            <Image
              src='/assets/beer_nuts.webp'
              alt=''
              width={400}
              height={400}
            />
          </div>
          <div className='flex h-screen w-full items-center justify-center bg-red-500'>
            <Image
              src='/assets/vodka.png'
              alt=''
              width={400}
              height={400}
            />
          </div>
        </section>
        <section>
          <div className='grid h-screen grid-cols-12 justify-items-center gap-0'>
            <div className='col-span-6 w-full place-items-center bg-white'>
              <h2 className='pin-me'>
                <Image
                  src='/assets/beer_nuts.webp'
                  alt=''
                  width={400}
                  height={400}
                  className='mx-auto'
                />
              </h2>
            </div>
            <aside className=''>
              <div className=''>
                <p className=''>
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
        <br />
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
