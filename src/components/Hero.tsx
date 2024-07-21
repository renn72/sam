'use client'
import { useState, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'
import s from '@/app/home.module.scss'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(TextPlugin)
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

const Hero = () => {
  const [introOut, setIntroOut] = useState(false)
  const samRef = useRef(null)
  const bateRef = useRef(null)
  const nameRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      samRef.current,
      {
        x: '200%',
        opacity: 0.1,
        duration: 1,
        ease: 'power1.inOut',
      },
      {
        x: '0',
        duration: 1,
        opacity: 1,
        ease: 'power1.outIn',
        onComplete: () => {
          gsap.to(samRef.current, {
            y: '-10%',
            duration: 0.5,
            ease: 'power1.inOut',
          })
        },
      },
    )
    gsap.fromTo(
      bateRef.current,
      {
        x: '-200%',
        opacity: 0.1,
        duration: 1,
        ease: 'power1.inOut',
      },
      {
        x: '0',
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',
        onComplete: () => {
          gsap.to(bateRef.current, {
            y: '10%',
            duration: 0.5,
            ease: 'power1.inOut',
          })
        },
      },
    )
    gsap.to(nameRef.current, {
      scrollTrigger: {
        scrub: 1,
      },
      y: () => -ScrollTrigger.maxScroll(window) * 1,
    })
  })

  useEffect(() => {
    setTimeout(() => {
      setIntroOut(true)
    }, 1000)
  }, [])
  return (
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
        <div className='absolute left-0 top-0 z-10 flex h-screen w-full items-center justify-center'>
          <h1
            ref={nameRef}
            className={cn(
              'relative mt-24 font-bold text-slate-900/70 flex',
              'sm:text-[14rem] sm:tracking-normal text-[5.4rem] tracking-tighter sm:gap-2',
            )}
          >
            <div
              className=''
              ref={samRef}
            >
              Sam
            </div>
            <div ref={bateRef}>Bate</div>
          </h1>
        </div>
      </div>
      <div
        className={cn('absolute bottom-12 left-0 flex w-full justify-center')}
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
  )
}

export default Hero
