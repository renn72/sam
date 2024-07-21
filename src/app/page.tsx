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
import Products from '@/components/Products'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

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

      </main>
    </ReactLenis>
  )
}
