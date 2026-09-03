import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes'
import './index.css'
import './multipage.css'
import './image-polish.css'
import './home-polish.css'
import './brands-hub.css'
import './project-proof.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
