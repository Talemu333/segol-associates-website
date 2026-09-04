import { ArrowRight, Factory, HardHat, MonitorCog, Target } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const items = [
  ['/services/project-management', '01', 'Project Management', 'Planning, coordination, monitoring and delivery support across the project lifecycle.', Target, 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=90'],
  ['/services/oil-field-planning', '02', 'Oil Field Planning & Management', 'Structured planning and execution support for field activities, resources, timing and operational requirements.', Factory, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=90'],
  ['/services/construction', '03', 'Construction Delivery', 'From design coordination through execution, completion and handover, with project discipline throughout.', HardHat, 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90'],
  ['/training', '04', 'Project Management Training', 'Practical development programmes covering project management, Microsoft Project and Fast Track Project Management.', MonitorCog, 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=90'],
]

const principles = [
  ['01', 'Understand', 'We begin by clarifying the objective, scope, constraints and priorities.'],
  ['02', 'Structure', 'We translate requirements into practical activities, timelines and responsibilities.'],
  ['03', 'Coordinate', 'We keep people, information and decisions connected as work progresses.'],
  ['04', 'Deliver', 'We maintain visibility through execution, completion and the next step.'],
]

export default function Services() {
  return <InnerPage eyebrow="02 / WHAT WE DO" title="Expertise built" accent="around delivery." intro="Four core capabilities. One disciplined approach to planning, coordination and execution.">
    <section className="services-intro inner-section">
      <div className="services-intro-heading"><span className="section-tag">OUR CAPABILITIES</span><h2>Different challenges.<br /><span>One delivery mindset.</span></h2></div>
      <div className="services-intro-copy"><p className="lead">Segol Associates supports organizations across project management, oil field planning and management, construction delivery and professional training.</p><p>Each capability is presented as a distinct area of expertise, while the same principles of clarity, coordination and accountability connect the way we work.</p></div>
    </section>

    <section className="services-capability-section">
      <div className="inner-section">
        <div className="services-section-heading"><span className="section-tag light">01 / CORE CAPABILITIES</span><h2>Where we can <span>add value.</span></h2><p>Explore each capability to understand the type of support Segol can bring to your work.</p></div>
        <div className="services-capability-list">
          {items.map(([to, number, title, text, Icon, image]) => <Link to={to} className="services-capability-card" key={number}>
            <div className="services-card-image" style={{backgroundImage:`linear-gradient(180deg,rgba(17,24,32,.05),rgba(17,24,32,.72)),url(${image})`}}><span>{number}</span><div className="services-card-icon"><Icon size={25}/></div></div>
            <div className="services-card-content"><span className="section-tag">CAPABILITY {number}</span><h3>{title}</h3><p>{text}</p><div className="services-card-link">Explore capability <ArrowRight size={17}/></div></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="inner-section services-approach">
      <div className="services-approach-heading"><span className="section-tag">02 / HOW WE WORK</span><h2>A practical system for <span>moving work forward.</span></h2></div>
      <div className="services-principle-grid">{principles.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="services-band">
      <div className="inner-section services-band-inner"><div><span className="section-tag light">03 / ONE PARTNER</span><h2>Four capabilities.<br /><span>One standard of delivery.</span></h2></div><p>Whether the requirement is a project plan, field activity, construction programme or professional development, Segol brings the same focus on clarity, coordination and responsible execution.</p></div>
    </section>

    <section className="inner-section services-cta"><div><span className="section-tag">04 / START A CONVERSATION</span><h2>Let&apos;s understand<br /><span>what you&apos;re working on.</span></h2></div><Link className="button dark-button" to="/contact">Discuss your needs <ArrowRight size={17}/></Link></section>
  </InnerPage>
}
