'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './product.module.scss'

const Products = () => {
  const container = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)

  useGSAP(() => {})

  return (
    <section
      className='relative w-full'
      ref={container}
    >
      <div
        ref={image1Ref}
        className='card-flip grid w-full grid-cols-2'
      >
        <div className='flex h-screen flex-col items-center justify-center'>
          <Image
            src='/assets/beer_nuts.webp'
            alt=''
            width={400}
            height={400}
            className='rounded-full'
          />
        </div>
        <div className='flex h-full w-full items-center justify-center bg-white'>
          <p className='max-w-lg font-medium'>
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
        className='card-flip grid h-screen w-full grid-cols-2'
      >
        <div className='flex h-screen flex-col items-center justify-center'>
          <Image
            src='/assets/vodka.png'
            alt=''
            width={400}
            height={600}
            className='rounded-full'
          />
        </div>
        <div className='flex h-full w-full items-center justify-center bg-white'>
          <p className='max-w-lg font-medium'>
            Cherries in Victoria, Australia, thrive in the region's ideal
            climate, with cool winters and warm summers, particularly in the
            Yarra Valley, Mornington Peninsula, and Goulburn Valley. Known for
            their exceptional flavor, juiciness, and vibrant color, these
            cherries are harvested from November to early January. Victorian
            cherry growers are adopting sustainable practices like organic
            farming and water-efficient irrigation to ensure environmental
            health. As a result, Victoria's cherries are not only delicious but
            also support sustainable agriculture.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products
