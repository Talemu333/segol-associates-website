import { Camera, MessageCircle } from 'lucide-react'
import { Link } from 'react-router'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand"><Link className="footer-brand-link" to="/"><span className="brand-mark">S</span><span><strong>SEGOL ASSOCIATES</strong><small>BUILDING POSSIBILITIES.</small></span></Link></div>
      <div className="footer-links">
        <Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/brands">Our Brands</Link><Link to="/training">Training</Link><Link to="/contact">Contact</Link>
      </div>
      <div className="footer-social"><a href="#contact" aria-label="Instagram"><Camera size={17} /></a><a href="#contact" aria-label="WhatsApp"><MessageCircle size={17} /></a></div>
      <small className="copyright">© 2026 Segol Associates. All rights reserved.</small>
    </footer>
  )
}
