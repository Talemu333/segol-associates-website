import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router'
import App from './App'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Training from './pages/Training'
import Brands from './pages/Brands'
import Topix from './pages/Topix'
import Water from './pages/Water'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

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

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [navigate])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavigationBridge />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/project-management" element={<ServiceDetail type="project" />} />
        <Route path="/services/oil-field-planning" element={<ServiceDetail type="oil" />} />
        <Route path="/services/construction" element={<ServiceDetail type="construction" />} />
        <Route path="/training" element={<Training />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/topix" element={<Topix />} />
        <Route path="/brands/eternal-praise-water" element={<Water />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
