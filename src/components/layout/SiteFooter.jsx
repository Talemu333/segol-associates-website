import { Mail, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link className="footer-brand-link" to="/">
          <img src="/segol-mark.svg" alt="Segol Associates" className="brand-logo" style={{ width: 39, height: 39, objectFit: 'contain' }} />
          <span><strong>SEGOL ASSOCIATES</strong><small>BUILDING POSSIBILITIES.</small></span>
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/brands">Our Brands</Link><Link to="/training">Training</Link><Link to="/contact">Contact</Link>
      </div>
      <div className="footer-links">
        <a href="tel:+2348033249127"><Phone size={15} /> +234 803 324 9127</a>
        <a href="https://wa.me/2349064504211" target="_blank" rel="noreferrer"><MessageCircle size={15} /> +234 906 450 4211</a>
        <a href="mailto:segolassociates@gmail.com"><Mail size={15} /> segolassociates@gmail.com</a>
      </div>
      <small className="copyright">Km 42 Lekki Expressway, beside Shoprite, Sangotedo · © 2026 Segol Associates. All rights reserved.</small>
    </footer>
  )
}
