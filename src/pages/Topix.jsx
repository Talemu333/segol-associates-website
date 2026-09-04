import { useEffect, useState } from 'react'
import { ArrowRight, CakeSlice, CalendarDays, CheckCircle2, Gift, Heart, Sparkles, Users, UtensilsCrossed, X, ZoomIn } from 'lucide-react'
import InnerPage from '../components/layout/InnerPage'

const categories = [
  ['01', Heart, 'Weddings & celebrations', 'Elegant planning, styling and coordination for moments people remember.'],
  ['02', CakeSlice, 'Birthdays & kiddies events', 'Playful, polished experiences designed around children, families and fun.'],
  ['03', Users, 'Corporate events', 'Professional gatherings with thoughtful guest flow, styling and coordination.'],
  ['04', Gift, 'Private celebrations', 'Birthdays, showers, anniversaries and intimate occasions made personal.'],
  ['05', UtensilsCrossed, 'Party rentals & support', 'Practical event essentials, setup coordination and on-site support.'],
]

const packages = [
  ['01', 'Full Event Planning', 'For clients who want Topix involved from the first concept through event day.', ['Concept & planning', 'Styling direction', 'Vendor coordination', 'Event-day management']],
  ['02', 'Event Styling', 'For clients who have the occasion planned and want the setting to look exceptional.', ['Theme development', 'Decor direction', 'Tablescape styling', 'Setup presentation']],
  ['03', 'Event Support', 'Flexible support for celebrations that need dependable execution and practical help.', ['Setup support', 'Party rentals', 'On-site coordination', 'Event logistics']],
]

const gallery = [
  ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=88', 'Elegant reception styling', 'Weddings'],
  ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=88', 'Wedding tablescape', 'Weddings'],
  ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=88', 'Live celebration', 'Celebrations'],
  ['https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=88', 'Celebration styling', 'Birthdays'],
  ['https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=88', 'Corporate experience', 'Corporate'],
]

const steps = [
  ['01', 'Tell us the vision', 'Share your occasion, mood, guest expectations and the details that matter to you.'],
  ['02', 'Build the plan', 'We shape the styling, logistics, rentals and coordination around the event.'],
  ['03', 'Bring it to life', 'Our team coordinates the moving parts so the experience feels effortless.'],
  ['04', 'Enjoy the moment', 'You focus on your guests while Topix takes care of the details behind the scenes.'],
]

export default function Topix() {
  const [submitted, setSubmitted] = useState(false)
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const filters = ['All', 'Weddings', 'Celebrations', 'Birthdays', 'Corporate']
  const visibleGallery = filter === 'All' ? gallery : gallery.filter(([, , type]) => type === filter)

  useEffect(() => {
    if (!lightbox) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  const scrollToEnquiry = () => {
    setSubmitted(false)
    requestAnimationFrame(() => document.getElementById('topix-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return <InnerPage theme="topix" eyebrow="08 / TOPIX EVENT MANAGEMENT" title="Moments made" accent="memorable." intro="Professional event management, styling and support for celebrations, corporate occasions and unforgettable guest experiences.">
    <div className="topix-premium">
      <section className="topix-hero">
        <div className="topix-hero-copy">
          <span className="topix-kicker">TOPIX EVENT MANAGEMENT</span>
          <h2>We create moments worth <em>remembering.</em></h2>
          <p>From the first idea to the final guest goodbye, Topix brings creativity, structure and calm coordination to events that deserve to feel special.</p>
          <div className="topix-hero-actions"><button className="topix-button topix-button-light" type="button" onClick={scrollToEnquiry}>Plan your event <ArrowRight size={17} /></button><a className="topix-button topix-button-outline" href="#topix-gallery">View our events <ArrowRight size={17} /></a></div>
        </div>
        <div className="topix-hero-photo"><img src={gallery[0][0]} alt={gallery[0][1]} /><span className="topix-photo-label">EVENTS · STYLING · EXPERIENCES</span></div>
      </section>

      <section className="topix-section topix-intro"><div><span className="topix-kicker">THE TOPIX EXPERIENCE</span><h2>Beautifully planned.<br /><span>Effortlessly enjoyed.</span></h2></div><p className="topix-intro-copy">Great events are felt before they are explained. We combine creative styling with practical coordination so every part of the occasion—from the first arrival to the last photograph—has a sense of intention.</p></section>

      <section className="topix-section" style={{ paddingTop: 0 }}><div className="topix-category-grid">{categories.map(([num, Icon, title, text]) => <article className="topix-category" key={title}><b>{num}</b><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="topix-dark-band"><div className="topix-dark-band-inner"><span className="topix-kicker">WHAT WE BRING TO THE TABLE</span><h2>From the big picture<br /><em>to the little details.</em></h2><p>Topix is designed to sit comfortably between creativity and execution: a partner for the concept, the look, the logistics and the guest experience.</p><div className="topix-feature-grid"><article className="topix-feature-card"><img src={gallery[2][0]} alt={gallery[2][1]} loading="lazy" /><div className="topix-feature-copy"><small>EVENT PRODUCTION</small><h3>Energy, atmosphere and flow.</h3></div></article><article className="topix-feature-card"><img src={gallery[3][0]} alt={gallery[3][1]} loading="lazy" /><div className="topix-feature-copy"><small>STYLING & DETAIL</small><h3>A setting that feels like yours.</h3></div></article></div></div></section>

      <section className="topix-section topix-packages"><div className="topix-packages-head"><div><span className="topix-kicker">WAYS TO WORK WITH TOPIX</span><h2>Support that fits <span>your event.</span></h2></div><p>Start with the level of support that feels right. The final scope can be tailored after your enquiry.</p></div><div className="topix-package-grid">{packages.map(([num, title, text, items], index) => <article className={index === 0 ? 'topix-package featured-package' : 'topix-package'} key={title}><div className="topix-package-number"><b>{num}</b>{index === 0 && <span>MOST REQUESTED</span>}</div><Sparkles size={21}/><h3>{title}</h3><p>{text}</p><ul>{items.map(item => <li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><button className="topix-package-button" type="button" onClick={scrollToEnquiry}>Discuss this option <ArrowRight size={16}/></button></article>)}</div><p className="topix-pricing-note">No fixed prices are shown in this demo. Event scope, guest count, date, venue and requirements can all affect the final proposal.</p></section>

      <section className="topix-section" id="topix-gallery"><div className="topix-gallery-head"><div><span className="topix-kicker">OUR EVENT PORTFOLIO</span><h2>See the <span>experience.</span></h2></div><p>A visual-first showcase of styling, celebrations, guest experiences and production moments. Replace these demo photographs with Topix's approved portfolio before launch.</p></div><div className="topix-gallery-filters" role="group" aria-label="Filter portfolio by event type">{filters.map(item => <button key={item} type="button" className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="topix-gallery-grid">{visibleGallery.map(([src, alt, type]) => <figure key={src}><button className="topix-gallery-image-button" type="button" onClick={() => setLightbox({ src, alt })} aria-label={`View ${alt}`}><img src={src} alt={alt} loading="lazy" /><span><ZoomIn size={19} /></span></button><figcaption><span>{type}</span>{alt}</figcaption></figure>)}</div></section>

      <section className="topix-section topix-process"><span className="topix-kicker">HOW WE WORK</span><h2>Simple process.<br /><span>Strong execution.</span></h2><div className="topix-process-grid">{steps.map(([num, title, text]) => <article className="topix-step" key={num}><b>{num}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="topix-trust-strip"><div><span className="topix-kicker">WHY CLIENTS CHOOSE TOPIX</span><h2>Creative enough to impress.<br /><em>Organised enough to deliver.</em></h2></div><div className="topix-trust-items"><div><strong>01</strong><span>Clear planning</span></div><div><strong>02</strong><span>Thoughtful styling</span></div><div><strong>03</strong><span>Practical coordination</span></div><div><strong>04</strong><span>Guest-first experience</span></div></div></section>

      <section className="topix-enquiry" id="topix-enquiry"><div className="topix-enquiry-grid"><div className="topix-enquiry-copy"><span className="topix-kicker">LET'S MAKE IT HAPPEN</span><h2>Your next event starts with a <span>conversation.</span></h2><p>Tell us a little about what you are planning. This demo form is designed to become Topix's enquiry workflow later, with real contact details and submission handling.</p><button className="topix-button" type="button" onClick={() => document.getElementById('topix-form-name')?.focus()}>Start an enquiry <ArrowRight size={17} /></button></div><form className="topix-enquiry-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>{submitted && <div className="topix-success" role="status"><CheckCircle2 size={18} /> Thanks! Your enquiry has been captured in this demo experience.</div>}<label id="topix-form-name">Full name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" placeholder="0800 000 0000" /></label><label>Email address<input type="email" name="email" placeholder="you@example.com" /></label><label>Event type<select required name="eventType" defaultValue=""><option value="" disabled>Select event type</option><option>Wedding</option><option>Birthday</option><option>Kiddies event</option><option>Corporate event</option><option>Private celebration</option><option>Other</option></select></label><label>Event date<input type="date" name="date" /></label><label>Estimated guests<input type="number" min="1" name="guests" placeholder="e.g. 100" /></label><label className="full">Event location<input required name="location" placeholder="Where will the event take place?" /></label><label className="full">Tell us what you need<textarea name="message" placeholder="Share your ideas, services needed, theme or anything else we should know." /></label><button className="topix-button" type="submit">Send enquiry <ArrowRight size={17} /></button></form></div><p className="topix-demo-note">DEMO PRESENTATION ONLY · Event photographs, client information, testimonials and business contact details should be replaced with Topix-approved records before launch.</p></section>

      {lightbox && <div className="topix-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={() => setLightbox(null)}><button type="button" className="topix-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image"><X size={25} /></button><div className="topix-lightbox-content" onClick={(event) => event.stopPropagation()}><img src={lightbox.src} alt={lightbox.alt} /><p>{lightbox.alt}</p></div></div>}
    </div>
  </InnerPage>
}
