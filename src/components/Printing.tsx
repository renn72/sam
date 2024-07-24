'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Printing = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container grid max-w-5xl items-center gap-8 px-4 md:px-6 lg:grid-cols-2'>
        <div className='grid gap-4'>
          <div className='space-y-4'>
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{
                rotate: [10, -10, 10, -10, 10, -10, 0],
              }}
              transition={{ duration: 0.5 }}
              className='w-max'
            >
              <Badge
                variant='secondary'
                className='font-bold'
              >
                3D Printed Innovation
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{
                easing: 'easeIn',
                duration: 2.5,
              }}
              className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'
            >
              Solving Food Development Challenges with 3D Printing
            </motion.h2>
          </div>
          <div className='grid gap-2'>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className='text-xl font-semibold'
            >
              Customized Attachment Streamlines Food Prep
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className='text-muted-foreground'
            >
              During the development of a new food product, our in-house food
              scientist encountered a recurring issue with a specific
              preparation step. To address this, they designed and 3D printed a
              custom attachment that significantly improved the efficiency and
              consistency of the process.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className='text-muted-foreground'
            >
              By leveraging the flexibility and rapid prototyping capabilities
              of 3D printing, they were able to iterate on the design until they
              found the perfect solution, saving time and resources in the
              product development cycle.
            </motion.p>
          </div>
        </div>
        <div className='grid gap-4'>
          <img
            src='/assets/cad.jpg'
            width={800}
            height={600}
            alt='3D Printed Attachment'
            className='mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center'
          />
          <div className='flex justify-center gap-4'>
            <Button
              variant='outline'
              className='hover:bg-muted-foreground'
            >
              <DownloadIcon className='mr-2 h-4 w-4' />
              Download STL
            </Button>
            <Link
              href='#'
              target='_blank'
              prefetch={false}
            >
              <Button
                variant='outline'
                className='hover:bg-muted-foreground'
              >
                <YoutubeIcon className='mr-2 h-4 w-4' />
                Watch Video
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='7 10 12 15 17 10' />
      <line
        x1='12'
        x2='12'
        y1='15'
        y2='3'
      />
    </svg>
  )
}

function XIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  )
}

function YoutubeIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
      <path d='m10 15 5-3-5-3z' />
    </svg>
  )
}

export default Printing
