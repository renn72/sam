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
import { cn } from '@/lib/utils'

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 3)
  const secondRow = products.slice(3, 6)
  const thirdRow = products.slice(6, 9)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 80, bounce: 1, mass: 1 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig,
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [-500, 500]),
    springConfig,
  )
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-[250vh] flex-col self-auto overflow-hidden',
        'py-40 antialiased [perspective:600px] [transform-style:preserve-3d]',
      )}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='mb-8 mt-4 flex flex-row-reverse space-x-2 space-x-reverse md:mb-20 md:mt-0 md:justify-center md:gap-8'>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='mb-8 flex flex-row  justify-center space-x-2 md:mb-20  md:space-x-20'>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse justify-center space-x-2 space-x-reverse md:gap-8'>
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
    <div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40'>
      <motion.h1
        whileInView={{ x: 100 }}
        transition={{ duration: 1.5 }}
        initial={{ x: 0 }}
        className='text-2xl font-bold dark:text-white md:text-7xl h-12'
      >
      </motion.h1>
      <motion.p
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        initial={{ x: -100 }}
        className='mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl z-10'>
        By blending science and creativity, I craft innovative dishes that push
        the boundaries of taste and texture. With a passion for experimentation
        and a flair for the unexpected, I'm constantly pioneering new culinary
        frontiers, delivering a feast for the senses that leaves a lasting
        impression.
      </motion.p>
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
      className='group/product relative h-56 w-56 flex-shrink-0 md:h-96 md:w-[30rem]'
    >
      <Image
        src={product.thumbnail}
        height='600'
        width='600'
        className='absolute inset-0 h-full w-full object-cover object-left-top drop-shadow-xl'
        alt={product.title}
      />
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-60'></div>
      <h2 className='absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100'>
        {product.title}
      </h2>
    </motion.div>
  )
}
