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
  ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=88', 'Elegant wedding reception'],
  ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=88', 'Wedding tablescape'],
  ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=88', 'Live event production'],
  ['https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=88', 'Celebration styling'],
  ['https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=88', 'Corporate event experience'],
  ['https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=88', 'Guests and atmosphere'],
]

const clients = ['Corporate & private clients', 'Wedding celebrations', 'Family occasions', 'Kiddies events', 'Social celebrations', 'Business gatherings']

export default function Topix() {
  return <InnerPage theme="topix" eyebrow="08 / TOPIX EVENT MANAGEMENT" title="Moments made" accent="memorable." intro="Professional event management, styling and support for celebrations, corporate occasions and unforgettable guest experiences.">
    <section className="inner-section brand-detail-hero topix-detail"><div className="topix-hero-image"><img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=88" alt="Elegant event reception setup"/><div className="image-badge">TOPIX / EVENTS</div></div><div><span className="section-tag">TOPIX EVENT MANAGEMENT</span><h2>Plan beautifully.<br /><span>Experience effortlessly.</span></h2><p className="lead">From concept and styling to coordination and on-site support, Topix brings creativity and structure to the moments that matter.</p><Link className="button dark-button" to="/contact">Plan an event <ArrowRight size={17}/></Link></div></section>
    <section className="inner-section brand-services">{services.map(([num, title, text]) => <article key={title}><span>{num}</span><CalendarDays size={21}/><h3>{title}</h3><p>{text}</p></article>)}</section>
    <section className="inner-section topix-gallery"><div className="section-tag">OUR EVENT PORTFOLIO</div><h2>See the <span>experience.</span></h2><p className="section-intro-wide">A visual-first showcase of event styling, celebrations, guest experiences and production moments.</p><div className="topix-gallery-grid topix-masonry">{gallery.map(([src, alt], index) => <figure className={index === 0 ? 'featured' : ''} key={src}><img src={src} alt={alt} loading="lazy"/><figcaption>{alt}</figcaption></figure>)}</div><p className="portfolio-note">Demo imagery for client presentation. Replace with Topix&apos;s actual event photography before launch.</p></section>
    <section className="inner-section topix-trust"><div><span className="section-tag">EVENT CATEGORIES</span><h2>Built for <span>different moments.</span></h2><p>Topix can present its experience by occasion, making it easy for visitors to find the kind of event they want to plan.</p></div><div className="client-pill-grid">{clients.map((client, i) => <div key={client}><b>0{i + 1}</b><span>{client}</span></div>)}</div></section>
    <section className="inner-section quote-panel"><Heart size={27}/><span className="section-tag">THE TOPIX STANDARD</span><h2>Every detail has a role.<br /><span>Every guest feels it.</span></h2><p>Thoughtful planning, polished presentation and calm coordination are the foundation of a memorable event.</p><div><Star size={17}/><Star size={17}/><Star size={17}/><Star size={17}/><Star size={17}/></div></section>
  </InnerPage>
}
