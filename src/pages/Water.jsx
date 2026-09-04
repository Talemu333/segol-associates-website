import { ArrowRight, CheckCircle2, Droplets, Factory, ShieldCheck, Truck, Waves } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const EP_ASSET = 'https://raw.githubusercontent.com/Talemu333/eternalpraise/main/assets/img/'
const EP_PRODUCT = `${EP_ASSET}products/`

const products = [
  { name: 'Pure Sachet Water', description: 'Convenient everyday hydration for homes, offices, events and on-the-go moments.', image: `${EP_PRODUCT}product-img-7.jfif`, tag: 'EVERYDAY HYDRATION' },
  { name: 'Pure Bottled Water', description: 'A clean table-water presentation for meetings, hospitality, celebrations and daily use.', image: `${EP_PRODUCT}product-img-8.jfif`, tag: 'TABLE WATER' },
  { name: 'Bottled Water', description: 'Reliable packaged water for personal, family and business supply.', image: `${EP_PRODUCT}product-img-9.jfif`, tag: 'PACKAGED WATER' },
]

const reasons = [
  ['01', 'Quality & hygiene', 'A clear product story that puts cleanliness, quality and customer confidence first.', ShieldCheck],
  ['02', 'Reliable supply', 'A straightforward experience for customers, event planners, offices and business buyers.', Truck],
  ['03', 'Everyday refreshment', 'Water positioned naturally across home, work, hospitality, events and everyday life.', Droplets],
]

const process = [
  ['01', 'Prepare', 'The production journey begins with careful water preparation.'],
  ['02', 'Treat', 'Water is processed through the appropriate treatment stages before packaging.'],
  ['03', 'Bottle & seal', 'Finished water is packaged and sealed for a clean customer experience.'],
  ['04', 'Supply', 'Products move from production to customers, partners and everyday points of use.'],
]

export default function Water() {
  return (
    <InnerPage
      theme="water"
      hideHero
      ctaEyebrow="ORDER / ENQUIRE / PARTNER"
      ctaTitle={<>Stay refreshed.<br /><span>Choose Eternal Praise.</span></>}
      ctaLabel="Make an enquiry"
    >
      <section className="ep-water-hero">
        <img className="ep-water-hero-bg" src={`${EP_ASSET}hero-bg-4.jpg`} alt="Eternal Praise Water hero" />
        <div className="ep-water-hero-overlay" />
        <div className="ep-water-hero-content">
          <img className="ep-water-logo" src={`${EP_ASSET}logo-4.webp`} alt="Eternal Praise Water logo" />
          <span className="section-tag">PURE · REFRESHING · RELIABLE</span>
          <h1>Eternal Praise<br /><em>Water</em></h1>
          <p>Clean, refreshing water for everyday life — from homes and offices to hospitality, celebrations and business supply.</p>
          <div className="ep-water-actions">
            <Link className="button ep-primary-button" to="/contact">Place an order <ArrowRight size={17} /></Link>
            <Link className="button ep-outline-button" to="/contact">Contact us</Link>
          </div>
        </div>
        <div className="ep-water-hero-note"><Droplets size={18} /><span>PURE<br /><b>REFRESHING</b><br />RELIABLE</span></div>
      </section>

      <section className="ep-products" id="products">
        <div className="ep-section-heading">
          <div><span className="section-tag">ETERNAL PRAISE / PRODUCTS</span><h2>Water for <span>every occasion.</span></h2></div>
          <p>Our product presentation is built around the real Eternal Praise product imagery from the existing brand repository. Product names, pack sizes and pricing can be updated from approved client information.</p>
        </div>
        <div className="ep-product-grid">
          {products.map((product) => (
            <article className="ep-product-card" key={product.name}>
              <div className="ep-product-image"><img src={product.image} alt={product.name} /><span>{product.tag}</span></div>
              <div className="ep-product-copy"><h3>{product.name}</h3><p>{product.description}</p><Link to="/contact">Order / enquire <ArrowRight size={16} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ep-about">
        <div className="ep-about-visual"><img src={`${EP_ASSET}logo-4.webp`} alt="Eternal Praise Water" /><span>EST. 2017</span></div>
        <div className="ep-about-copy"><span className="section-tag">ABOUT ETERNAL PRAISE</span><h2>Pure water.<br /><span>A trusted everyday choice.</span></h2><p>Eternal Praise Water was established in 2017 with a focus on providing clean and refreshing water for individuals, families and businesses.</p><p>The website will turn that existing brand story into a stronger digital experience — with the products, ordering journey and verified business information taking centre stage.</p><div className="ep-about-points"><span><CheckCircle2 size={17} /> Product-led experience</span><span><CheckCircle2 size={17} /> Clear ordering pathway</span><span><CheckCircle2 size={17} /> Brand-first presentation</span></div></div>
      </section>

      <section className="ep-reasons">
        <div className="ep-section-heading compact"><div><span className="section-tag">WHY ETERNAL PRAISE</span><h2>Simple reasons to <span>choose us.</span></h2></div></div>
        <div className="ep-reason-grid">{reasons.map(([num, title, text, Icon]) => <article key={num}><span className="ep-reason-number">{num}</span><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="ep-process" id="process">
        <div className="ep-process-intro"><span className="section-tag">FROM SOURCE TO CUSTOMER</span><h2>A clearer <span>water journey.</span></h2><p>The production section is intentionally simple for now. Once the client provides verified factory details, equipment, certifications and approved production claims, this can become a detailed factory story.</p></div>
        <div className="ep-process-list">{process.map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="ep-health">
        <div className="ep-health-copy"><span className="section-tag">HEALTH / HYDRATION</span><h2>Make hydration part of <span>every day.</span></h2><p>Water is a simple part of healthy daily routines. This section gives Eternal Praise room for useful hydration education, practical tips and future brand content.</p><Link className="ep-text-link" to="/contact">Talk to us <ArrowRight size={16} /></Link></div>
        <div className="ep-health-card"><Waves size={30} /><strong>PURE</strong><span>REFRESH · HYDRATE · REPEAT</span></div>
      </section>

      <p className="ep-demo-note">Brand assets and product photography are sourced from the existing Eternal Praise repository for this client demo. Replace or update any product claims, sizes, prices, certifications, factory information and contact details with the client&apos;s approved current information before launch.</p>
    </InnerPage>
  )
}
