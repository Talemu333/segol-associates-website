import { ArrowRight, CheckCircle2, Compass, Eye, ShieldCheck, Target, Users } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const principles = [
  ['01', 'Clarity', 'We bring structure to complex work so teams can understand priorities, responsibilities and the path ahead.', Compass],
  ['02', 'Coordination', 'We connect people, activities and decisions so that planning does not sit separately from execution.', Users],
  ['03', 'Accountability', 'We value visible progress, clear ownership and disciplined follow-through from start to finish.', ShieldCheck],
  ['04', 'Practicality', 'Our thinking is grounded in the realities of projects, field operations, construction and professional development.', Target],
]

const capabilities = [
  ['01', 'Project Management', 'Planning, coordination, monitoring and delivery support across the project lifecycle.', '/services/project-management'],
  ['02', 'Oil Field Planning & Management', 'Structured planning and execution support for field activities and operational requirements.', '/services/oil-field-planning'],
  ['03', 'Construction Delivery', 'From design intent through execution, completion and handover.', '/services/construction'],
  ['04', 'Project Management Training', 'Practical development programmes covering project management, Microsoft Project and Fast Track Project Management.', '/training'],
]

export default function About() {
  return <InnerPage eyebrow="01 / WHO WE ARE" title="Built around" accent="better delivery." intro="Segol Associates brings project management, oil field planning, construction delivery and professional training together under one disciplined delivery mindset." dark>
    <section className="about-statement inner-section">
      <div className="about-statement-copy">
        <span className="section-tag">OUR STORY</span>
        <h2>We help turn <span>intent into action.</span></h2>
        <p className="lead">Every worthwhile project begins with an idea. What happens next depends on planning, people, coordination and the discipline to keep moving.</p>
        <p>Segol Associates exists to help organizations navigate that journey. We bring practical project thinking to different environments — from project planning and oil field activities to construction delivery and professional training.</p>
        <p>Rather than treating these as disconnected services, we see them as different applications of the same principle: <strong>clear thinking creates stronger delivery.</strong></p>
      </div>
      <div className="about-statement-visual">
        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90" alt="Professionals collaborating around a project table" />
        <div className="about-visual-caption"><span>SEGOL ASSOCIATES</span><strong>Plan with purpose.<br />Deliver with confidence.</strong></div>
      </div>
    </section>

    <section className="about-belief">
      <div className="inner-section about-belief-inner">
        <div><span className="section-tag">WHAT WE BELIEVE</span><h2>Good delivery is <span>intentional.</span></h2></div>
        <p>Strong outcomes rarely happen by accident. They are shaped by the quality of the plan, the strength of coordination and the ability to respond when reality changes.</p>
      </div>
    </section>

    <section className="inner-section about-principles">
      <div className="about-section-heading"><span className="section-tag">02 / OUR PRINCIPLES</span><h2>The way we <span>work.</span></h2><p>Our approach is designed to stay useful in both boardrooms and on the ground.</p></div>
      <div className="about-principle-grid">
        {principles.map(([number, title, text, Icon]) => <article key={title} className="about-principle-card"><div className="about-card-top"><span>{number}</span><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="about-capabilities">
      <div className="inner-section">
        <div className="about-section-heading about-heading-light"><span className="section-tag light">03 / OUR CAPABILITIES</span><h2>Four disciplines.<br /><span>One delivery mindset.</span></h2><p>Segol is deliberately structured to support different client needs without losing the discipline that connects them.</p></div>
        <div className="about-capability-list">
          {capabilities.map(([number, title, text, href]) => <Link to={href} key={title} className="about-capability-row"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={20}/></Link>)}
        </div>
      </div>
    </section>

    <section className="inner-section about-perspective">
      <div className="about-perspective-image"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1500&q=90" alt="Construction professionals working on site" loading="lazy" /><span>DELIVERY / IN PRACTICE</span></div>
      <div className="about-perspective-copy"><span className="section-tag">04 / OUR PERSPECTIVE</span><h2>Different challenges.<br /><span>Same standard.</span></h2><p className="lead">The sector may change, but the fundamentals of good delivery remain remarkably consistent.</p><div className="about-checks"><div><CheckCircle2 size={18}/><span>Understand the objective</span></div><div><CheckCircle2 size={18}/><span>Build a practical plan</span></div><div><CheckCircle2 size={18}/><span>Coordinate the moving parts</span></div><div><CheckCircle2 size={18}/><span>Make progress visible</span></div></div></div>
    </section>

    <section className="about-values-strip">
      <div className="inner-section about-values-inner"><div className="about-value-mark"><Eye size={28}/></div><div><span className="section-tag">THE SEGOL STANDARD</span><h2>Useful. <span>Measured. Responsible.</span></h2><p>We aim to leave clients with more clarity, stronger coordination and greater confidence in the work ahead.</p></div></div>
    </section>

    <section className="inner-section about-cta"><div><span className="section-tag">05 / LET&apos;S WORK TOGETHER</span><h2>Have a project,<br /><span>challenge or capability gap?</span></h2></div><Link className="button dark-button" to="/contact">Start a conversation <ArrowRight size={17}/></Link></section>
  </InnerPage>
}
