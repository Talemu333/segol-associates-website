import { ArrowRight, Droplets, Sparkles } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

export default function Brands() {
  return <InnerPage eyebrow="07 / OUR BRANDS" title="Different businesses." accent="One standard." intro="Specialized brands with a shared commitment to quality, thoughtful execution and customer experience.">
    <section className="inner-section brand-page-grid">
      <article className="brand-page-card topix-card"><div className="mini-logo">T</div><span>EVENT MANAGEMENT</span><h2>Topix<br /><i>Event Management</i></h2><p>Events designed to feel effortless, memorable and distinctly yours — from celebrations to corporate experiences.</p><div className="brand-tags"><span>Weddings</span><span>Birthdays</span><span>Corporate</span><span>Party Rentals</span></div><Link to="/brands/topix">Explore Topix <ArrowRight size={16}/></Link></article>
      <article className="brand-page-card water-card"><div className="mini-logo">E</div><span>PURE / REFRESHING / RELIABLE</span><h2>Eternal Praise<br /><i>Water</i></h2><p>A dedicated water brand built around the everyday essentials: purity, refreshment and reliability.</p><div className="brand-water-icon"><Droplets size={48}/></div><Link to="/brands/eternal-praise-water">Explore Eternal Praise Water <ArrowRight size={16}/></Link></article>
    </section>
    <section className="inner-section brand-principle"><Sparkles size={28}/><div><span className="section-tag">THE GROUP PRINCIPLE</span><h2>Specialized focus.<br /><span>Shared standards.</span></h2><p>Each brand can speak in its own voice while remaining connected to the wider Segol commitment to thoughtful service and dependable delivery.</p></div></section>
  </InnerPage>
}
