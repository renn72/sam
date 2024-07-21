'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Observer } from 'gsap/dist/Observer'
import { useGSAP } from '@gsap/react'

const RegisterGSAP = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, Observer)
  }, [])

  return null
}

export default RegisterGSAP
