'use client'
import React from 'react'
import { HeroParallax } from '@/components/ui/hero-parallax-2'

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
    thumbnail: '/assets/media/cherry.jpg',
  },
  {
    title: 'Cherry Vodka',
    thumbnail: '/assets/vodka.png',
  },
  {
    title: '',
    thumbnail: '/assets/media/plant.jpg',
  },
  {
    title: 'Mushrooms',
    thumbnail: '/assets/media/tubes.jpg',
  },
  {
    title: 'Sausages',
    thumbnail: '/assets/media/tuna.jpg',
  },
  {
    title: 'Freeze Drying',
    thumbnail: '/assets/media/freeze.jpg',
  },
  {
    title: 'Cider',
    thumbnail: '/assets/media/cider.jpg',
  },
  {
    title: 'Freeze Dry',
    thumbnail: '/assets/media/rub.jpg',
  },
]

export default Parallax
