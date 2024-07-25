'use client'
import { cn } from '@/lib/utils'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
const About = () => {
  return (
    <section
      id='about'
      className='top-gradient relative h-[120vh] w-full'
    >
      <div
        className={cn(
          'absolute left-0 top-0 z-10 h-[10vh] w-full',
          'bg-gradient-to-b from-background to-transparent',
        )}
      ></div>
      <div
        className={cn(
          'absolute -bottom-1 left-0 z-10 h-[10vh] w-full',
          'bg-gradient-to-b from-transparent to-background',
        )}
      ></div>
      <video
        autoPlay
        muted
        loop
        className='h-[120vh] w-full object-cover'
      >
        <source
          src='/assets/bg.mp4'
          type='video/mp4'
        />
      </video>
      <div className='container absolute left-0 right-0 top-0 z-10 px-4 md:px-6'>
        <div className='grid h-screen content-center gap-8 lg:grid-cols-1 lg:gap-12'>
          <motion.div className='grid md:gap-24'>
            <motion.h2
              whileInView={{ opacity: 1 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                bounce: 0.5,
                damping: 10,
                stiffness: 100,
              }}
              className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-center md:text-5xl'
            >
              About Sam
            </motion.h2>
            <motion.p
              whileInView={{ x: 0 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                bounce: 0.5,
                damping: 10,
                stiffness: 100,
              }}
              initial={{ x: -190 }}
              className='mt-4 max-w-[500px] text-base tracking-tighter text-muted-foreground md:justify-self-start md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
            >
              I am a food and beverage innovator with a catalogue of food
              solutions. From a hospitality background I leverage the culinary
              and people skills that come with it.
            </motion.p>
            <motion.p
              whileInView={{ x: 0 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                bounce: 0.5,
                damping: 10,
                stiffness: 100,
              }}
              initial={{ x: 190 }}
              className='mt-4 max-w-[500px] text-base tracking-tighter text-muted-foreground md:justify-self-end md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
            >
              I work with primary producers and food processors to create
              products that consumers value. I favour a natural uncomplicated
              approach to showcase food’s natural attributes and deliver an
              honest product.
            </motion.p>
            <motion.p
              whileInView={{ x: 0 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                bounce: 0.5,
                damping: 10,
                stiffness: 100,
              }}
              initial={{ x: -190 }}
              className='mt-4 max-w-[500px] text-base tracking-tighter text-muted-foreground md:justify-self-start md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
            >
              I develop brands using locally grown produce. Incorporating
              original packaging and design, I can bring a product from the
              design table to the market.
            </motion.p>
          </motion.div>
          <div className='grid hidden gap-6'>
            <div className='grid gap-1'>
              <motion.h3
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                initial={{ opacity: 0 }}
                className='text-xl font-bold'
              >
                Menu Development
              </motion.h3>
              <p className='text-muted-foreground'>
                Craft unique and profitable menus that delight your customers.
              </p>
            </div>
            <div className='grid gap-1'>
              <motion.h3
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                initial={{ opacity: 0 }}
                className='text-xl font-bold'
              >
                Recipe Optimization
              </motion.h3>
              <p className='text-muted-foreground'>
                Improve the taste, cost, and efficiency of your recipes.
              </p>
            </div>
            <div className='grid gap-1'>
              <motion.h3
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                initial={{ opacity: 0 }}
                className='text-xl font-bold'
              >
                Food Business Strategy
              </motion.h3>
              <p className='text-muted-foreground'>
                Develop a comprehensive strategy to grow your food business.
              </p>
            </div>
            <div className='grid gap-1'>
              <motion.h3
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                initial={{ opacity: 0 }}
                className='text-xl font-bold'
              >
                Culinary Innovation
              </motion.h3>
              <p className='text-muted-foreground'>
                Discover new ingredients, techniques, and trends to stay ahead
                of the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
