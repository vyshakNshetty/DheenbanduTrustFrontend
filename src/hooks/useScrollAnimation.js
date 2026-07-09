import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return { ref, controls, inView }
}