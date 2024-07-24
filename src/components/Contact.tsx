import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full py-12 md:py-24 lg:py-32'
    >
      <div className='container grid gap-12 px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Get in Touch
            </h2>
            <p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Have a project in mind or just want to say hello? Fill out the
              form below and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 justify-items-center gap-8 '>
          <div className='max-w-[700px] space-y-4'>
            <h3 className='text-xl font-bold'>Contact Us</h3>
            <form className='space-y-4'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    placeholder='Enter your name'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  placeholder='Enter your message'
                  rows={4}
                />
              </div>
              <Button type='submit'>Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
