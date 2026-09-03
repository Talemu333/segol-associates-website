import { ArrowRight, ShieldCheck, Target, Users } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

export default function About() {
  return <InnerPage eyebrow="01 / WHO WE ARE" title="A partner for" accent="ideas that need action." intro="Segol Associates brings project management, planning, construction and professional development together under one forward-looking group.">
    <section className="inner-section split-copy">
      <div><span className="section-tag">OUR APPROACH</span><h2>Clarity before complexity.</h2></div>
      <div><p className="lead">We help organizations turn goals into structured plans and structured plans into visible progress.</p><p>Our work is built around practical thinking, disciplined coordination and a clear understanding of what successful delivery looks like. Whether the challenge is a project, an oil field activity, a construction assignment or a team that needs new skills, we focus on the next useful step.</p></div>
    </section>
    <section className="inner-section values-grid">
      {[['People first', 'Collaboration that keeps teams aligned and communication moving.', Users], ['Purpose driven', 'Every activity connected to the outcome the client actually needs.', Target], ['Delivery focused', 'Plans are only valuable when they help work get done.', ShieldCheck]].map(([title, text, Icon]) => <article className="value-card" key={title}><Icon size={26}/><h3>{title}</h3><p>{text}</p></article>)}
    </section>
    <section className="inner-section dark-panel"><div><span className="section-tag light">ONE GROUP</span><h2>Project thinking<br /><span>across disciplines.</span></h2></div><p>Segol Associates is designed to be useful at different stages of a client&apos;s journey — from planning and training to execution and delivery.</p><Link className="text-link light-link" to="/services">Explore our services <ArrowRight size={16}/></Link></section>
  </InnerPage>
}
