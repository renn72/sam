'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import styles from './product.module.scss'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Products = () => {
  const container = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)

  useGSAP(() => {
     const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: `${window.innerHeight * 1} top`,
        scrub: true,
        pin: true,
        markers: true,
      },
    })

    tl.from(image2Ref.current, {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      duration: 1,
      stagger: 2,
    })

    tl.to(image1Ref.current, {
      y: window.innerHeight,
      duration: 1,
      stagger: 2,
    }, '<')

  })

  return (
    <section
      className='relative w-full'
      ref={container}
    >
      <div
        ref={image1Ref}
        className='grid w-full grid-cols-2 card-flip'
      >
        <div className='flex h-screen flex-col items-center justify-center'>
          <Image
            src='/assets/beer_nuts.webp'
            alt=''
            width={400}
            height={400}
          />
        </div>
        <div className='flex h-full w-full items-center justify-center bg-white'>
          <p className='max-w-lg'>
            Beer nuts are a popular snack known for their irresistible
            combination of crunch and flavor, making them an ideal companion to
            a cold beverage. The unique blend of seasoning often includes hints
            of caramelized sugar and salt, striking a perfect balance that
            appeals to a wide range of palates. Whether enjoyed at a casual
            backyard barbecue or a lively pub, Australian beer nuts offer a
            delightful snacking experience that complements the laid-back,
            convivial spirit of Australian social gatherings
          </p>
        </div>
      </div>
      <div
        ref={image2Ref}
        className='grid h-screen w-full grid-cols-2 bg-white card-flip'
      >
        <div className='flex h-screen flex-col items-center justify-center bg-red-500'>
          <Image
            src='/assets/vodka.png'
            alt=''
            width={400}
            height={600}
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
