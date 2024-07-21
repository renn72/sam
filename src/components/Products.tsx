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
  })
  return (
    <section
      className='pb-80'
      ref={container}
    >
      <div
        ref={image1Ref}
        className=' grid h-screen w-full grid-cols-2 bg-white'
      >
        <div className='flex h-screen flex-col items-center justify-center bg-white'>
          <Image
            src='/assets/beer_nuts.webp'
            alt=''
            width={400}
            height={400}
          />
        </div>
        <div className='flex h-full w-full justify-center bg-white items-center'>
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
        className=' grid h-screen w-full grid-cols-2 bg-white'
      >
        <div className='flex h-screen flex-col items-center justify-center bg-red-500'>
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
