import { useState } from 'react'
import { ArrowRight, CheckCircle2, Droplets, Send, ShieldCheck, Truck, Waves } from 'lucide-react'
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
  const [orderProduct, setOrderProduct] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const scrollToOrder = (productName = '') => {
    if (productName) setOrderProduct(productName)
    setSubmitted(false)
    requestAnimationFrame(() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  const handleOrder = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <InnerPage theme="water" hideHero ctaEyebrow="ORDER / ENQUIRE / PARTNER" ctaTitle={<>Stay refreshed.<br /><span>Choose Eternal Praise.</span></>} ctaLabel="Make an enquiry">
      <section className="ep-water-hero">
        <img className="ep-water-hero-bg" src={`${EP_ASSET}hero-bg-4.jpg`} alt="Eternal Praise Water hero" />
        <div className="ep-water-hero-overlay" />
        <div className="ep-water-hero-content">
          <img className="ep-water-logo" src={`${EP_ASSET}logo-4.webp`} alt="Eternal Praise Water logo" />
          <span className="section-tag">PURE · REFRESHING · RELIABLE</span>
          <h1>Eternal Praise<br /><em>Water</em></h1>
          <p>Clean, refreshing water for everyday life — from homes and offices to hospitality, celebrations and business supply.</p>
          <div className="ep-water-actions">
            <button className="button ep-primary-button ep-order-button" type="button" onClick={() => scrollToOrder()}>Place an order <ArrowRight size={17} /></button>
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
              <div className="ep-product-copy">
                <h3>{product.name}</h3><p>{product.description}</p>
                <button className="ep-product-order-button" type="button" onClick={() => scrollToOrder(product.name)}>Order / enquire <ArrowRight size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ep-order-strip" id="order" aria-labelledby="order-heading">
        <div className="ep-order-strip-inner">
          <div>
            <span className="section-tag">ETERNAL PRAISE / ORDER</span>
            <h2 id="order-heading">Let&apos;s get your water sorted.</h2>
            <p>Tell us what you need and the team can follow up with the right product, quantity and delivery details. This demo keeps the enquiry flow simple and ready to connect to the client&apos;s real ordering system later.</p>
            <div className="ep-order-options">
              <div className="ep-order-option"><strong>Home &amp; personal</strong><span>Everyday hydration and household supply.</span></div>
              <div className="ep-order-option"><strong>Office &amp; business</strong><span>Regular supply for teams, workplaces and operations.</span></div>
              <div className="ep-order-option"><strong>Events &amp; bulk</strong><span>Water for celebrations, hospitality and larger needs.</span></div>
            </div>
          </div>
          <button className="button ep-order-strip-button" type="button" onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Start an enquiry <ArrowRight size={17} /></button>
        </div>
      </section>

      <section className="ep-order-form-section" id="order-form">
        <div className="ep-order-form-wrap">
          <span className="section-tag">ORDER / ENQUIRE</span>
          <h2>Tell us what you need.</h2>
          <p>Complete the form below and we&apos;ll have the information needed to respond. No prices or delivery areas are assumed here — those can be connected to approved Eternal Praise information before launch.</p>
          <form onSubmit={handleOrder}>
            <div className="ep-order-grid">
              <div className="ep-order-field"><label htmlFor="order-name">FULL NAME *</label><input id="order-name" name="name" required placeholder="Your full name" /></div>
              <div className="ep-order-field"><label htmlFor="order-phone">PHONE NUMBER *</label><input id="order-phone" name="phone" type="tel" required placeholder="Your phone number" /></div>
              <div className="ep-order-field"><label htmlFor="order-email">EMAIL ADDRESS</label><input id="order-email" name="email" type="email" placeholder="you@example.com" /></div>
              <div className="ep-order-field"><label htmlFor="order-type">ORDER TYPE *</label><select id="order-type" name="orderType" required defaultValue=""><option value="" disabled>Select an option</option><option>Home &amp; personal</option><option>Office &amp; business</option><option>Events &amp; bulk</option><option>Distributor / partnership</option></select></div>
              <div className="ep-order-field"><label htmlFor="order-product">PRODUCT *</label><select id="order-product" name="product" required value={orderProduct} onChange={(event) => { setOrderProduct(event.target.value); setSubmitted(false) }}><option value="" disabled>Select a product</option>{products.map((product) => <option key={product.name}>{product.name}</option>)}</select></div>
              <div className="ep-order-field"><label htmlFor="order-quantity">QUANTITY / PACKS</label><input id="order-quantity" name="quantity" placeholder="e.g. 10 packs" /></div>
              <div className="ep-order-field full"><label htmlFor="order-location">DELIVERY LOCATION *</label><input id="order-location" name="location" required placeholder="City / area" /></div>
              <div className="ep-order-field full"><label htmlFor="order-message">MESSAGE</label><textarea id="order-message" name="message" placeholder="Tell us anything else about your order or enquiry..." /></div>
            </div>
            <button className="button ep-order-submit" type="submit"><Send size={17} /> Send order enquiry</button>
            {submitted && <div className="ep-order-success" role="status"><CheckCircle2 size={18} /> Thanks — your order enquiry has been captured in this demo. The next step is to connect this form to Eternal Praise&apos;s real phone, email, WhatsApp or ordering backend.</div>}
          </form>
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
        <div className="ep-health-copy"><span className="section-tag">HEALTH / HYDRATION</span><h2>Make hydration part of <span>every day.</span></h2><p>Water is a simple part of healthy daily routines. This section gives Eternal Praise room for useful hydration education, practical tips and future brand content.</p><button className="ep-text-link ep-health-order-link" type="button" onClick={() => scrollToOrder()}>Talk to us <ArrowRight size={16} /></button></div>
        <div className="ep-health-card"><Waves size={30} /><strong>PURE</strong><span>REFRESH · HYDRATE · REPEAT</span></div>
      </section>

      <p className="ep-demo-note">Brand assets and product photography are sourced from the existing Eternal Praise repository for this client demo. Replace or update any product claims, sizes, prices, certifications, factory information and contact details with the client&apos;s approved current information before launch.</p>
    </InnerPage>
  )
}
