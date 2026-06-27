import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import OmniPortalCaseStudy from './pages/OmniPortalCaseStudy'

const ArchivePage = lazy(() => import('./components/archive/ArchivePage'))

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#eef2ff] dark:bg-[#070b14] text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/omni-portal" element={<OmniPortalCaseStudy />} />
          <Route
            path="/archive"
            element={
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center pt-24">
                  <span className="gradient-text text-xl font-bold">Loading archive...</span>
                </div>
              }>
                <ArchivePage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
