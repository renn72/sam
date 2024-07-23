'use client'
import React from 'react'
import { HeroParallax } from '@/components/ui/hero-parallax'

const Parallax = () => {
  return <HeroParallax products={products} />
}

const products = [
  {
    title: 'Beer Nuts',
    thumbnail: '/assets/beer_nuts.webp',
  },
  {
    title: 'Cherry',
    thumbnail: '/assets/cherry.JPG',
  },
  {
    title: 'Cherry Vodka',
    thumbnail: '/assets/vodka.png',
  },
  {
    title: 'Jerked Nuts',
    thumbnail: '/assets/beer_nuts_jerk.webp',
  },
  {
    title: 'Mushrooms',
    thumbnail: '/assets/freeze_dry_mushroom.jpg',
  },
  {
    title: 'Sausages',
    thumbnail: '/assets/sausage.jpg',
  },
  {
    title: 'Sexy Beast',
    thumbnail: '/assets/mixer.jpg',
  },
  {
    title: 'Cider',
    thumbnail: '/assets/cider.jpg',
  },
  {
    title: 'Freeze Drying',
    thumbnail: '/assets/blood_orange.jpg',
  },
]

export default Parallax
