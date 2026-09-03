import { ArrowRight, Droplets, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

export default function Water() {
  return <InnerPage eyebrow="09 / ETERNAL PRAISE WATER" title="Pure. Refreshing." accent="Made for everyday life." intro="A dedicated water brand built around the essentials: purity, refreshment and reliability.">
    <section className="inner-section water-detail"><div className="water-mark-large"><Droplets size={82}/><strong>EP</strong></div><div><span className="section-tag">ETERNAL PRAISE</span><h2>A simple promise:<br /><span>refreshment you can trust.</span></h2><p className="lead">Eternal Praise Water is presented as a focused consumer brand within the wider Segol group.</p><p>For the final website, we will replace this demonstration copy with the client&apos;s exact product story, packaging details, distribution information and approved claims.</p><Link className="button dark-button" to="/contact">Partner with us <ArrowRight size={17}/></Link></div></section>
    <section className="inner-section water-values">{[['Purity', 'A clean, clear brand promise.'], ['Refreshment', 'Designed around everyday hydration.'], ['Reliability', 'A dependable product experience.']].map(([title, text]) => <article key={title}><ShieldCheck size={24}/><h3>{title}</h3><p>{text}</p></article>)}</section>
  </InnerPage>
}
