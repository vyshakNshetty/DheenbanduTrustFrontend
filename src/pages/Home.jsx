import React, { lazy, Suspense } from 'react'
// import { Helmet } from 'react-helmet-async'
import LoadingSpinner from '../components/common/LoadingSpinner'

// Lazy load sections
const Hero = lazy(() => import('../components/sections/Hero'))
const Statistics = lazy(() => import('../components/sections/Statistics'))
const AboutPreview = lazy(() => import('../components/sections/AboutPreview'))
const Programs = lazy(() => import('../components/sections/Programs'))
const SuccessStories = lazy(() => import('../components/sections/SuccessStories'))
const VolunteerCTA = lazy(() => import('../components/sections/VolunteerCTA'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const GalleryPreview = lazy(() => import('../components/sections/GalleryPreview'))
const Newsletter = lazy(() => import('../components/sections/Newsletter'))

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title>HopeBridge — Empowering Communities, Transforming Lives</title>
        <meta name="description" content="Join HopeBridge in our mission to empower communities through education, healthcare, and sustainable development." />
      </Helmet> */}

      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Hero />
        <Statistics />
        <AboutPreview />
        {/* <SuccessStories /> */}
        {/* <Testimonials /> */}
        <Programs />
        <GalleryPreview />
        <VolunteerCTA />
        {/* <Newsletter /> */}
      </Suspense>
    </>
  )
}

export default Home