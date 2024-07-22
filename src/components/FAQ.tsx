import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-2 text-muted-foreground md:text-xl">
              Get answers to the most common questions about our food product development consulting services.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium bg-background rounded-md shadow-sm hover:bg-muted">
                <span>What services do you offer?</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-muted-foreground">
                We offer a range of food product development services, including:
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li>Recipe formulation and optimization</li>
                  <li>Ingredient sourcing and supplier management</li>
                  <li>Regulatory compliance and labeling</li>
                  <li>Sensory evaluation and consumer testing</li>
                  <li>Pilot production and scale-up assistance</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium bg-background rounded-md shadow-sm hover:bg-muted">
                <span>How much do your services cost?</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-muted-foreground">
                The cost of our services varies depending on the scope and complexity of the project. We offer
                customized pricing based on your specific needs and requirements. Our team will work with you to provide
                a detailed proposal and estimate upfront. We also offer flexible payment options to fit your budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium bg-background rounded-md shadow-sm hover:bg-muted">
                <span>What is your turnaround time?</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-muted-foreground">
                The turnaround time for our services depends on the specific project and the complexity of the work
                involved. However, we strive to provide timely and efficient service to our clients. Our team will work
                closely with you to establish a clear timeline and ensure that your project is completed within the
                agreed-upon timeframe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium bg-background rounded-md shadow-sm hover:bg-muted">
                <span>Do you have any case studies or references?</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-muted-foreground">
                Yes, we have a portfolio of successful case studies and references from our past clients. We'd be happy
                to share these with you to demonstrate our expertise and the positive impact we've had on other food
                product development projects. Please let us know if you'd like to see any specific examples.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium bg-background rounded-md shadow-sm hover:bg-muted">
                <span>How do I get started?</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-muted-foreground">
                To get started, simply reach out to our team to schedule an initial consultation. We'll discuss your
                specific needs and goals, and provide a customized proposal outlining our recommended approach and
                pricing. From there, we can work together to kick off your project and get the ball rolling. Don't
                hesitate to contact us with any questions or to learn more about our services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
