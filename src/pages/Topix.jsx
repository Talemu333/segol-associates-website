import { ArrowRight, CalendarDays, Heart, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const services = [
  ['01', 'Weddings & celebrations', 'Planning, styling and coordination for beautiful celebrations.'],
  ['02', 'Birthdays & kiddies events', 'Fun, polished setups designed around the occasion and guests.'],
  ['03', 'Corporate events', 'Professional event planning and guest experience for business occasions.'],
  ['04', 'Party rentals & support', 'Event essentials, setup coordination and practical on-site support.'],
]

const gallery = [
  ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1500&q=85', 'Elegant reception setup'],
  ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=85', 'Wedding celebration'],
  ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1100&q=85', 'Live event atmosphere'],
  ['https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85', 'Beautifully styled occasion'],
]

export default function Topix() {
  return <InnerPage eyebrow="08 / TOPIX EVENT MANAGEMENT" title="Make the moment" accent="worth remembering." intro="Professional event management, styling and support for celebrations and corporate experiences.">
    <section className="inner-section brand-detail-hero topix-detail"><div className="brand-detail-symbol">T</div><div><span className="section-tag">TOPIX / EVENT MANAGEMENT</span><h2>Plan beautifully.<br /><span>Experience effortlessly.</span></h2><p className="lead">From the first concept to the final guest, Topix brings structure, creativity and coordination to the moments that matter.</p><Link className="button dark-button" to="/contact">Plan an event <ArrowRight size={17}/></Link></div></section>
    <section className="inner-section brand-services">{services.map(([num, title, text]) => <article key={title}><span>{num}</span><CalendarDays size={21}/><h3>{title}</h3><p>{text}</p></article>)}</section>
    <section className="inner-section topix-gallery"><div className="section-tag">SELECTED EVENT WORK</div><h2>A glimpse of the <span>experience.</span></h2><p>Gallery presentation for weddings, celebrations, corporate occasions and event setups.</p><div className="topix-gallery-grid">{gallery.map(([src, alt]) => <img src={src} alt={alt} key={src} loading="lazy" />)}</div><p className="portfolio-note">Demo imagery for client presentation — replace with Topix&apos;s actual event photography before launch.</p></section>
    <section className="inner-section quote-panel"><Heart size={27}/><span className="section-tag">THE TOPIX STANDARD</span><h2>Every detail has a role.<br /><span>Every guest feels it.</span></h2><p>Thoughtful planning, polished presentation and calm coordination are the foundation of a memorable event.</p><div><Star size={17}/> <Star size={17}/> <Star size={17}/> <Star size={17}/> <Star size={17}/></div></section>
  </InnerPage>
}
