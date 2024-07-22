import Link from "next/link"

const Benefits = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="space-y-3 w-full">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            The Benefits of Our Food Products
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From organic ingredients to sustainable practices, our food products offer a range of benefits for you and
            the planet.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-start">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn More</span>
            </Link>
            <img
              src="/placeholder.jpg"
              alt="Organic"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/50 group-hover:opacity-70 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Organic</h3>
              <p className="text-sm leading-normal">
                Our products are made with certified organic ingredients, ensuring the highest quality and
                sustainability.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn More</span>
            </Link>
            <img
              src="/placeholder.jpg"
              alt="Fresh"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/50 group-hover:opacity-70 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Fresh</h3>
              <p className="text-sm leading-normal">
                Our products are made with the freshest ingredients, ensuring maximum flavor and nutrition.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn More</span>
            </Link>
            <img
              src="/placeholder.jpg"
              alt="Healthy"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/50 group-hover:opacity-70 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Healthy</h3>
              <p className="text-sm leading-normal">
                Our products are packed with essential nutrients and vitamins to support your overall health and
                well-being.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn More</span>
            </Link>
            <img
              src="/placeholder.jpg"
              alt="Sustainable"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/50 group-hover:opacity-70 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Sustainable</h3>
              <p className="text-sm leading-normal">
                Our products are made with sustainable practices, minimizing our environmental impact and supporting a
                healthier planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
