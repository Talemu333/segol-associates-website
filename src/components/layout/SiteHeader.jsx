import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/brands', 'Our Brands'],
  ['/training', 'Training'],
  ['/contact', 'Contact'],
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="inner-navbar">
      <Link className="brand" to="/" onClick={close}>
        <span className="brand-mark">S</span>
        <span><strong>SEGOL</strong><small>ASSOCIATES</small></span>
      </Link>
      <nav className={open ? 'inner-nav-links open' : 'inner-nav-links'}>
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={close}>{label}</NavLink>)}
      </nav>
      <Link className="nav-cta" to="/contact">Start a conversation <ArrowRight size={16} /></Link>
      <button className="menu-button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  )
}
