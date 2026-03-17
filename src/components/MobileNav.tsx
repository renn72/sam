'use client'

import { useState } from 'react'

import styles from '@/app/page.module.scss'

type NavItem = {
  href: string
  label: string
}

export default function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.mobileMenu}>
      <button
        aria-controls='mobile-nav-panel'
        aria-expanded={open}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        className={styles.menuButton}
        onClick={() => setOpen((current) => !current)}
        type='button'
      >
        <span />
        <span />
        <span />
      </button>
      {open ? (
        <nav
          aria-label='Mobile'
          className={styles.mobileNav}
          id='mobile-nav-panel'
        >
          {items.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
