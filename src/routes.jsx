import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router'
import App from './App'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Training = lazy(() => import('./pages/Training'))
const Brands = lazy(() => import('./pages/Brands'))
const Topix = lazy(() => import('./pages/Topix'))
const Water = lazy(() => import('./pages/Water'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const legacyRoutes = {
  '#home': '/',
  '#about': '/about',
  '#services': '/services',
  '#brands': '/brands',
  '#training': '/training',
  '#contact': '/contact',
}

function NavigationBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const destination = legacyRoutes[anchor.getAttribute('href')]
      if (!destination) return
      event.preventDefault()
      navigate(destination)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return null
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavigationBridge />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/project-management" element={<ServiceDetail type="project" />} />
          <Route path="/services/oil-field-planning" element={<ServiceDetail type="oil" />} />
          <Route path="/services/construction" element={<ServiceDetail type="construction" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/training" element={<Training />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/topix" element={<Topix />} />
          <Route path="/brands/eternal-praise-water" element={<Water />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
