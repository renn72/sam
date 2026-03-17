import Image from 'next/image'
import MobileNav from '@/components/MobileNav'

import styles from './page.module.scss'

const navItems = [
  { href: '#approach', label: 'Approach' },
  { href: '#work', label: 'Work' },
  { href: '#project', label: 'Cherry project' },
  { href: '#contact', label: 'Contact' },
] as const

const principles = [
  {
    title: 'Food development with a clear point of view',
    description:
      'Sam works across food and beverage concepts that feel honest, commercially viable, and grounded in the character of the raw ingredient.',
  },
  {
    title: 'Waste streams turned into products people want',
    description:
      'From cherry vodka to freeze-dried fruit and wholesale juice, the focus is on turning overlooked supply into value without losing the story of the produce itself.',
  },
  {
    title: 'From concept table to market shelf',
    description:
      'Product direction, packaging thinking, process innovation, and launch-ready outcomes are handled as one connected development process.',
  },
] as const

const selectedWork = [
  {
    title: 'Cherry waste reimagined',
    description: 'Commercial products developed from juice-grade cherries.',
    image: '/assets/media/cherry.jpg',
    alt: 'Fresh cherries in natural light.',
    layout: 'feature',
  },
  {
    title: 'Shelf-stable flavour',
    description:
      'Freeze drying and preservation with product character intact.',
    image: '/assets/freeze_dry_mushroom.jpg',
    alt: 'Freeze-dried mushroom pieces.',
    layout: 'portrait',
  },
  {
    title: 'Craft beverage development',
    description: 'Cider, vodka, and drinks with a stronger origin story.',
    image: '/assets/vodka.png',
    alt: 'Bottle of cherry vodka.',
    layout: 'square',
  },
  {
    title: 'Beer nut and savoury formats',
    description: 'Bold pantry products with commercial pull.',
    image: '/assets/beer_nuts.webp',
    alt: 'Packaged beer nuts.',
    layout: 'square',
  },
  {
    title: 'Product systems and tooling',
    description: '3D printed tools that unlock better processing outcomes.',
    image: '/assets/breville.png',
    alt: '3D printed cherry juicing attachment.',
    layout: 'landscape',
  },
  {
    title: 'Whole-product experimentation',
    description:
      'Sauces, sausage, dried formats, and ingredient-led iteration.',
    image: '/assets/sausage.jpg',
    alt: 'Cooked sausages plated on a board.',
    layout: 'landscape',
  },
] as const

const testimonials = [
  {
    name: 'Rob Christopher',
    role: 'Director of Mundroola Farms',
    quote:
      'Sam was the perfect product developer for our expanding cherry farm. His industry expertise and network helped turn waste materials into products that reached the market.',
  },
  {
    name: 'Michael Appleton',
    role: 'CherryHill Orchards',
    quote:
      'Sam’s professionalism, knowledge, and diligence have been invaluable in transforming food waste into sustainable, commercially viable products.',
  },
] as const

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a
          className={styles.brand}
          href='#top'
        >
          <span className={styles.brandMark}>SB</span>
          <span>
            Sam Bate
            <small>Food development and product innovation</small>
          </span>
        </a>
        <MobileNav items={navItems} />
        <nav
          aria-label='Primary'
          className={styles.nav}
        >
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section
        className={styles.hero}
        id='top'
      >
        <video
          aria-hidden='true'
          autoPlay
          className={styles.heroVideo}
          loop
          muted
          playsInline
          preload='metadata'
        >
          <source
            src='/assets/top_hero.mp4'
            type='video/mp4'
          />
        </video>
        <div className={styles.heroWash} />
        <div className={styles.heroOrb} />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            Food development, NPD, waste to value.
          </p>
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Sam
                <span>Bate</span>
              </h1>
            </div>
            <div className={styles.heroCopy}>
              <p className={styles.heroLead}>
                Natural food and beverage development with real product
                character.
              </p>
              <p className={styles.heroBody}>
                Sam works with primary producers and processors to create
                products people actually want to buy, using a natural,
                uncomplicated approach that keeps the produce doing the talking.
              </p>
              <div className={styles.heroActions}>
                <a
                  className={styles.primaryAction}
                  href='#work'
                >
                  View work
                </a>
                <a
                  className={styles.secondaryAction}
                  href='https://www.linkedin.com/in/samuel-bate-/'
                  rel='noreferrer'
                  target='_blank'
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className={styles.heroStrap}>
            <span>Product strategy</span>
            <span>Packaging thinking</span>
            <span>Food waste innovation</span>
            <span>Design to market</span>
          </div>
        </div>
      </section>

      <section
        className={styles.intro}
        id='approach'
      >
        <div className={styles.sectionLabel}>Approach</div>
        <div className={styles.introBody}>
          <div className={styles.introHeading}>
            <h2>
              A hospitality-grounded point of view with commercial discipline.
            </h2>
            <p>
              The work spans concept creation, process development, brand
              thinking, and packaging, with a bias toward products that feel
              direct, useful, and hard to ignore.
            </p>
          </div>
          <div className={styles.principles}>
            {principles.map((principle, index) => (
              <article
                className={styles.principle}
                key={principle.title}
              >
                <span className={styles.principleNumber}>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.work}
        id='work'
      >
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Selected work</p>
          <h2>
            Built around flavour, process, and a sharper sense of what the
            product could become.
          </h2>
        </div>
        <div className={styles.workGrid}>
          {selectedWork.map((item) => (
            <article
              className={`${styles.workCard} ${styles[item.layout]}`}
              key={item.title}
            >
              <div className={styles.workImageWrap}>
                <Image
                  alt={item.alt}
                  className={styles.workImage}
                  fill
                  sizes='(max-width: 900px) 100vw, 50vw'
                  src={item.image}
                />
              </div>
              <div className={styles.workCardCopy}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.project}
        id='project'
      >
        <video
          aria-hidden='true'
          autoPlay
          className={styles.projectVideo}
          loop
          muted
          playsInline
          preload='metadata'
        >
          <source
            src='/assets/bg.mp4'
            type='video/mp4'
          />
        </video>
        <div className={styles.projectOverlay} />
        <div className={styles.projectPanel}>
          <p className={styles.sectionKicker}>Featured project</p>
          <h2>Sustainability Victoria</h2>
          <p>
            In 2022, Sam secured support to explore new commercial uses for the
            hundreds of tonnes of Victorian cherries wasted every year. The
            result is a growing family of products including cider, vodka,
            wholesale juice, and freeze-dried fruit.
          </p>
          <p>
            The project also produced a 3D printed attachment that helps turn a
            standard household juicer into a tool for producing high-quality
            cherry juice quickly.
          </p>
          <div className={styles.projectActions}>
            <a
              className={styles.primaryAction}
              href='/assets/breville_cherry.3mf'
            >
              Download 3MF
            </a>
            <a
              className={styles.secondaryAction}
              href='https://youtu.be/s6Q5RhvQXMA'
              rel='noreferrer'
              target='_blank'
            >
              Watch video
            </a>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>What collaborators say</p>
          <h2>
            Credibility matters. The work has to hold up in the real world.
          </h2>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <article
              className={styles.testimonial}
              key={testimonial.name}
            >
              <p className={styles.quoteMark}>“</p>
              <blockquote>{testimonial.quote}</blockquote>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.contact}
        id='contact'
      >
        <div className={styles.contactPanel}>
          <div>
            <p className={styles.sectionKicker}>Contact</p>
            <h2>
              Looking for a product idea that deserves more than a template?
            </h2>
            <p>
              If the brief involves food, beverage, packaging, or turning a
              waste stream into something commercially useful, that is the
              conversation to have.
            </p>
          </div>
          <div className={styles.contactActions}>
            <a
              className={styles.primaryAction}
              href='https://www.linkedin.com/in/samuel-bate-/'
              rel='noreferrer'
              target='_blank'
            >
              LinkedIn message
            </a>
            <a
              className={styles.secondaryAction}
              href='#top'
            >
              Back to top
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
