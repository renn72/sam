import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='py-8 text-foreground sm:py-12'>
      <div className='container flex max-w-5xl flex-col items-center justify-between gap-8 sm:flex-row'>
        <div className='flex items-center gap-4'>
          <span className='text-lg font-semibold'>Sam Bate</span>
        </div>
        <p className='max-w-md text-center text-muted-foreground sm:text-left'>
          Showcasing the best of my design and development work. Explore my
          portfolio to see what I can create.
        </p>
        <nav className='flex gap-4 sm:gap-6'>
          <Link
            href='#'
            className='text-sm underline-offset-4 hover:underline'
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href='#'
            className='text-sm underline-offset-4 hover:underline'
            prefetch={false}
          >
            About
          </Link>
          <Link
            href='#'
            className='text-sm underline-offset-4 hover:underline'
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href='#'
            className='text-sm underline-offset-4 hover:underline'
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
