import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function InnerPage({ eyebrow, title, accent, intro, children, dark = false }) {
  return (
    <div className="inner-site">
      <SiteHeader />
      <main>
        <section className={dark ? 'inner-hero dark-inner' : 'inner-hero'}>
          <div className="inner-hero-grid" />
          <div className="inner-hero-content">
            <div className="section-tag light"><span /> {eyebrow}</div>
            <h1>{title}<br /><em>{accent}</em></h1>
            <p>{intro}</p>
          </div>
          <div className="inner-hero-number">SEGOL / 0{Math.floor(Math.random() * 8) + 1}</div>
        </section>
        {children}
        <section className="inner-cta">
          <div><span className="section-tag">READY WHEN YOU ARE</span><h2>Let&apos;s move the idea<br /><span>forward.</span></h2></div>
          <Link className="button dark-button" to="/contact">Start a conversation <ArrowRight size={17} /></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
