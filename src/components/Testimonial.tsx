import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const Testimonial = () => {
  return (
    <section className='py-12 md:py-16 lg:py-20'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            What Our Clients Say
          </h2>
          <p className='mt-4 text-muted-foreground'></p>
        </div>
        <div className='mt-10 overflow-hidden rounded-lg bg-background shadow-lg'>
          <Carousel className='px-10 py-12 md:px-16 md:py-24'>
            <CarouselContent>
              <CarouselItem>
                <div className='flex flex-col items-center gap-6 md:flex-row md:gap-8'>
                  <Avatar className='h-20 w-20 border-2 border-primary'>
                    <AvatarImage src='/assets/avatar-1.svg' />
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                  <div className='text-center md:text-left'>
                    <h3 className='text-xl font-semibold'>Rob Christopher</h3>
                    <p className='text-muted-foreground'>
                      Director of Mundroola Farms
                    </p>
                    <blockquote className='mt-4 text-lg font-medium leading-relaxed'>
                      Sam was the perfect product developer for our expanding
                      cherry farm. His industry expertise and extensive network
                      of contacts enabled him to create a range of products from
                      our waste materials and successfully bring them to market.
                      He is professional, diligent, and hands-on in every aspect
                      of his work.
                    </blockquote>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className='flex flex-col items-center gap-6 md:flex-row md:gap-8'>
                  <Avatar className='h-20 w-20 border-2 border-primary'>
                    <AvatarImage src='/assets/avatar-2.svg' />
                    <AvatarFallback>MA</AvatarFallback>
                  </Avatar>
                  <div className='text-center md:text-left'>
                    <h3 className='text-xl font-semibold'>Michael Appletion</h3>
                    <p className='text-muted-foreground'>CherryHill Orchards</p>
                    <blockquote className='mt-4 text-lg font-medium leading-relaxed'>
                      We have collaborated with Sam Bate on several of
                      CherryHill's non-fresh NPD initiatives, including a cherry
                      vodka made entirely from waste cherries. Sam's
                      professionalism, knowledge, and diligence have been
                      invaluable in supporting CherryHill’s journey to
                      transforming our food waste into sustainable, commercially
                      viable products. His commitment to sustainability and
                      innovative approach aligns perfectly with our values.
                      Working with Sam is always a positive experience, and we
                      look forward to continuing our partnership.
                    </blockquote>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-muted focus:outline-none'>
              <ChevronLeftIcon className='h-6 w-6' />
            </CarouselPrevious>
            <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-muted focus:outline-none'>
              <ChevronRightIcon className='h-6 w-6' />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function ChevronLeftIcon(props: { className?: string }) {
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
      <path d='m15 18-6-6 6-6' />
    </svg>
  )
}

function ChevronRightIcon(props: { className?: string }) {
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
      <path d='m9 18 6-6-6-6' />
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

export default Testimonial
