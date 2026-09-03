import { ArrowRight, CalendarDays, Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const services = ['Weddings & celebrations', 'Birthdays & kiddies events', 'Corporate events', 'Party rentals & event support']

export default function Topix() {
  return <InnerPage eyebrow="08 / TOPIX EVENT MANAGEMENT" title="Make the moment" accent="worth remembering." intro="An event management brand focused on thoughtful planning, polished experiences and celebrations that feel distinctly yours.">
    <section className="inner-section brand-detail-hero topix-detail"><div className="brand-detail-symbol">T</div><div><span className="section-tag">TOPIX</span><h2>From the first idea<br /><span>to the final guest.</span></h2><p className="lead">Topix Event Management is built around the details that make an event feel effortless — planning, coordination, atmosphere and guest experience.</p><Link className="button dark-button" to="/contact">Plan an event <ArrowRight size={17}/></Link></div></section>
    <section className="inner-section brand-services">{services.map((service, i) => <article key={service}><span>0{i + 1}</span><CalendarDays size={21}/><h3>{service}</h3><p>Thoughtful coordination and practical event support shaped around the occasion.</p></article>)}</section>
    <section className="inner-section quote-panel"><Heart size={27}/><span className="section-tag">THE TOPIX PROMISE</span><h2>Well planned.<br /><span>Beautifully experienced.</span></h2><p>The goal is simple: create an event people remember for the right reasons.</p><Sparkles size={21}/></section>
  </InnerPage>
}
