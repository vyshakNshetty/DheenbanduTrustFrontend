import React, { Suspense, lazy, useEffect } from 'react'
import {  Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import LoadingSpinner from './components/common/LoadingSpinner'
import ScrollToTop from './components/common/ScrollToTop'
import ErrorBoundary from './components/common/ErrorBoundary'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Activities = lazy(() => import('./pages/Activities'))
const Gallery = lazy(() => import('./pages/Gallery'))
const GetInvolved = lazy(() => import('./pages/GetInvolved'))
const Donate = lazy(() => import('./pages/Donate'))
const Contact = lazy(() => import('./pages/Contact'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Lazy load layout
const Layout = lazy(() => import('./components/layout/Layout'))

function App() {
  return (
    
      <ThemeProvider>
        <ToastProvider>
          
            <ScrollToTop />
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner fullScreen />}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="activities" element={<Activities />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="get-involved" element={<GetInvolved />} />
                    <Route path="donate" element={<Donate />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="dashboard/*" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </ErrorBoundary>
          
        </ToastProvider>
      </ThemeProvider>
    
  )
}

export default App