import Link from 'next/link'
import { motion } from 'framer-motion'
const Linkedin = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      whileInView={{
        rotate: [5, -5, 5, -5, 5, -5, 0],
      }}
      transition={{
        duration: 0.5
      }}
    >
      <Link
        href='https://www.linkedin.com/in/samuel-bate-/'
        target='_blank'
        className='inline-flex w-56 items-center justify-center rounded-md bg-[#0077B5] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#005e8a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
        prefetch={false}
      >
        <LinkedinIcon className='mr-2 h-5 w-5' />
        Connect on LinkedIn
      </Link>
    </motion.div>
  )
}

function LinkedinIcon(props: { className?: string }) {
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
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect
        width='4'
        height='12'
        x='2'
        y='9'
      />
      <circle
        cx='4'
        cy='4'
        r='2'
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

export default Linkedin
