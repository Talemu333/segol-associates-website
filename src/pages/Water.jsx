import { ArrowRight, Droplets, Factory, ShieldCheck, Truck, Waves } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const process = [
  ['01', 'Source & prepare', 'Water preparation presented as the first step in a controlled production journey.', 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85'],
  ['02', 'Filter & treat', 'A visual introduction to the filtration and treatment stage.', 'https://images.unsplash.com/photo-1581093458791-9d42e3c8b0d7?auto=format&fit=crop&w=1000&q=85'],
  ['03', 'Bottle & seal', 'Clean product presentation from production through finished packaging.', 'https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=1000&q=85'],
  ['04', 'Pack & deliver', 'A dependable route from finished product to customers and partners.', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85'],
]

const gallery = [
  'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
]

export default function Water() {
  return <InnerPage eyebrow="09 / ETERNAL PRAISE WATER" title="Pure. Refreshing." accent="Made for everyday life." intro="A professional water brand presentation designed around product, production, quality and dependable supply.">
    <section className="inner-section water-detail"><div className="water-mark-large"><Droplets size={82}/><strong>EP</strong></div><div><span className="section-tag">ETERNAL PRAISE / TABLE WATER</span><h2>Quality at the source.<br /><span>Confidence in every bottle.</span></h2><p className="lead">Eternal Praise Water is presented as a consumer product brand within the Segol group, with a clear path from production to customer.</p><p className="water-disclaimer">Product sizes, certifications, factory details, approved claims and distribution areas should be replaced with the client&apos;s verified information before launch.</p><Link className="button dark-button" to="/contact">Make an enquiry <ArrowRight size={17}/></Link></div></section>
    <section className="inner-section water-values"><article><ShieldCheck size={24}/><h3>Quality focus</h3><p>Present the production standards and verified quality story clearly.</p></article><article><Factory size={24}/><h3>Production</h3><p>Show the facility, process and people behind the finished product.</p></article><article><Truck size={24}/><h3>Supply</h3><p>Make ordering, distribution and partnership pathways easy to find.</p></article></section>
    <section className="inner-section water-process"><div className="section-tag">FROM SOURCE TO CUSTOMER</div><h2>A modern <span>production story.</span></h2><p>Factory websites work best when customers can understand the product journey at a glance.</p><div className="water-process-grid">{process.map(([num,title,text,img]) => <article key={num}><img src={img} alt="" loading="lazy"/><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="inner-section water-gallery"><div className="section-tag">PRODUCT & FACILITY VISUALS</div><h2>Put the brand <span>in view.</span></h2><div className="water-gallery-grid">{gallery.map((src) => <img src={src} alt="Water product and production visual" key={src} loading="lazy" />)}</div><p className="portfolio-note">Demo imagery for client presentation — replace with Eternal Praise Water&apos;s actual product, factory and delivery photography before launch.</p></section>
    <section className="inner-section quote-panel"><Waves size={28}/><span className="section-tag">ETERNAL PRAISE WATER</span><h2>Simple product.<br /><span>Strong presentation.</span></h2><p>The final site will make product sizes, verified certifications, ordering information and distribution coverage immediately visible.</p></section>
  </InnerPage>
}
