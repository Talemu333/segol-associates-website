import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function InnerPage({ eyebrow, title, accent, intro, children, dark = false, theme = 'segol', hideHero = false, ctaEyebrow = 'READY WHEN YOU ARE', ctaTitle = <>Let&apos;s move the idea<br /><span>forward.</span></>, ctaLabel = 'Start a conversation' }) {
  const themeClass = theme === 'segol' ? '' : ` brand-site brand-site-${theme}`

  return (
    <div className={`inner-site${themeClass}`}>
      <SiteHeader />
      <main>
        {!hideHero && <section className={dark ? 'inner-hero dark-inner' : 'inner-hero'}>
          <div className="inner-hero-grid" />
          <div className="inner-hero-content">
            <div className="section-tag light"><span /> {eyebrow}</div>
            <h1>{title}<br /><em>{accent}</em></h1>
            <p>{intro}</p>
          </div>
          <div className="inner-hero-number">SEGOL / 2026</div>
        </section>}
        {children}
        <section className="inner-cta">
          <div><span className="section-tag">{ctaEyebrow}</span><h2>{ctaTitle}</h2></div>
          <Link className="button dark-button" to="/contact">{ctaLabel} <ArrowRight size={17} /></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
