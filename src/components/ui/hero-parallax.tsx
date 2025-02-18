'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'

import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width } = global?.window ? window : { innerWidth: 0 }
  return {
    width,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    thumbnail: string
  }[]
}) => {
  const { width } = useWindowDimensions()

  const firstRow = products.slice(0, 3)
  const secondRow = products.slice(3, 6)
  const thirdRow = products.slice(6, 9)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, width > 800 ? 800 : 200]),
    springConfig,
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, width > 800 ? -800 : -200]),
    springConfig,
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.1, 1]),
    springConfig,
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig,
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [-600, width > 800 ? 500 : 100]),
    springConfig,
  )
  return (
    <div
      ref={ref}
      className=' relative flex flex-col items-center self-auto overflow-hidden  py-40 antialiased [perspective:600px] [transform-style:preserve-3d] md:h-[300vh] md:px-60 md:py-40'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className='w-min'
      >
        <motion.div className='mb-4 flex flex-row-reverse space-x-2 space-x-reverse md:mb-10 md:gap-12'>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='mb-4 flex  flex-row space-x-2 md:mb-10 md:space-x-20 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-2 space-x-reverse md:gap-12'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-20 py-20  md:px-4 md:py-40'>
      <h1 className='text-4xl font-bold dark:text-white md:text-7xl'>
        Makin <br /> some cool shit
      </h1>
      <p className='mt-8 max-w-2xl text-base font-medium dark:text-white md:text-xl'>
        By blending science and creativity, I craft innovative dishes that push
        the boundaries of taste and texture. With a passion for experimentation
        and a flair for the unexpected, I'm constantly pioneering new culinary
        frontiers, delivering a feast for the senses that leaves a lasting
        impression.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className='group/product relative h-56 w-40 flex-shrink-0 md:h-96 md:w-[30rem] drop-shadow-lg hover:drop-shadow-2xl'
    >
      <Image
        src={product.thumbnail}
        height='600'
        width='600'
        className='absolute  inset-0 h-full w-full object-cover'
        alt={product.title}
      />
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-40'></div>
      <h2 className='absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100'>
        {product.title}
      </h2>
    </motion.div>
  )
}
