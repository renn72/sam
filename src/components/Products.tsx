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

const Products = () => {
  const container = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)

  useGSAP(() => {

  })
  return (
    <section ref={container}>
      <div className='flex h-screen flex-col items-center justify-center bg-white'>
        <Image
          ref={image1Ref}
          src='/assets/beer_nuts.webp'
          alt=''
          width={400}
          height={400}
        />
      </div>
      <div className='flex h-screen w-full items-center justify-center bg-red-500'>
        <Image
          ref={image2Ref}
          src='/assets/vodka.png'
          alt=''
          width={400}
          height={400}
        />
      </div>
    </section>
  )
}

export default Products
