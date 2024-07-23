import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const Testimonial = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground">
            Hear from the satisfied clients who have worked with our food product development experts.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-lg bg-background shadow-lg">
          <Carousel className="px-10 py-12 md:px-16 md:py-24">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                  <Avatar className="h-20 w-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">Jane Doe</h3>
                    <p className="text-muted-foreground">Founder, Acme Foods</p>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed">
                      "The team at Food Product Experts helped us develop a new line of healthy snacks that have been a
                      huge hit with our customers. Their expertise and attention to detail were invaluable."
                    </blockquote>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                  <Avatar className="h-20 w-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">John Smith</h3>
                    <p className="text-muted-foreground">CEO, Organic Eats</p>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed">
                      "Working with the team at Food Product Experts was a game-changer for our business. Their insights
                      and guidance helped us create a new product line that has significantly boosted our revenue."
                    </blockquote>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                  <Avatar className="h-20 w-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">Sarah Lee</h3>
                    <p className="text-muted-foreground">R&D Manager, Healthy Bites</p>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed">
                      "The team at Food Product Experts has been an invaluable partner in our product development
                      process. Their expertise and attention to detail have helped us create innovative and delicious
                      products that our customers love."
                    </blockquote>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-muted focus:outline-none">
              <ChevronLeftIcon className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-muted focus:outline-none">
              <ChevronRightIcon className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function ChevronLeftIcon(props : { className? : string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props : { className? : string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function XIcon(props : { className? : string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default Testimonial
