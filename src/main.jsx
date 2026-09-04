import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes'
import './index.css'
import './multipage.css'
import './image-polish.css'
import './home-polish.css'
import './brands-hub.css'
import './project-proof.css'
import './projects.css'
import './brand-photo-polish.css'
import './segol-system.css'
import './brand-themes.css'
import './contact-polish.css'
import './water-premium.css'
import './eternal-praise.css'
import './eternal-praise-polish.css'
import './eternal-praise-order.css'
import './topix-premium.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
