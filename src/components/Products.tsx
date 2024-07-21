'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Products = () => {
  const container = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: image1Ref.current,
      pin: true,
      start: 'top top',
      end: '100%',
      scrub: true,
    })
    ScrollTrigger.create({
      trigger: image2Ref.current,
      pin: true,
      start: 'top top',
      end: '+=400',
      scrub: true,
    })
  })
  return (
    <section
      className='pb-80'
      ref={container}>
      <div className=' grid h-screen w-full grid-cols-2 bg-white'>
        <div
          ref={image1Ref}
          className='flex h-screen flex-col items-center justify-center bg-white'
        >
          <Image
            src='/assets/beer_nuts.webp'
            alt=''
            width={400}
            height={400}
          />
        </div>
        <div className='flex h-full w-full items-center justify-center bg-white'>
          text
        </div>
      </div>
      <div className=' grid h-screen w-full grid-cols-2 bg-white'>
        <div
          ref={image2Ref}
          className='flex h-screen flex-col items-center justify-center bg-red-500'
        >
          <Image
            src='/assets/vodka.png'
            alt=''
            width={400}
            height={400}
          />
        </div>
        <div className='flex h-full w-full items-center justify-center bg-white'>
          text
        </div>
      </div>
    </section>
  )
}

export default Products
