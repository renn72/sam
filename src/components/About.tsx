'use client'
import { cn } from '@/lib/utils'
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
        <div className='grid h-screen content-center gap-8 lg:grid-cols-2 lg:gap-12'>
          <div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              About Sam
            </h2>
            <p className='mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              With over a decade of experience in the food industry, our food
              development consultant has a deep understanding of the challenges
              and opportunities facing food businesses. From optimizing recipes
              to developing innovative menus, we provide comprehensive
              consulting services to help our clients succeed.
            </p>
          </div>
          <div className='grid gap-6'>
            <div className='grid gap-1'>
              <h3 className='text-xl font-bold'>Menu Development</h3>
              <p className='text-muted-foreground'>
                Craft unique and profitable menus that delight your customers.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-xl font-bold'>Recipe Optimization</h3>
              <p className='text-muted-foreground'>
                Improve the taste, cost, and efficiency of your recipes.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-xl font-bold'>Food Business Strategy</h3>
              <p className='text-muted-foreground'>
                Develop a comprehensive strategy to grow your food business.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-xl font-bold'>Culinary Innovation</h3>
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
