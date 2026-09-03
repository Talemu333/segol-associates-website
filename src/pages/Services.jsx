import { ArrowRight, Factory, HardHat, MonitorCog, Target } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const items = [
  ['/services/project-management', '01', 'Project Management', 'Structured planning, coordination and delivery support.', Target],
  ['/services/oil-field-planning', '02', 'Oil Field Planning', 'Planning and management support for oil field activities.', Factory],
  ['/services/construction', '03', 'Construction & Engineering', 'Disciplined project thinking from design coordination to completion.', HardHat],
  ['/training', '04', 'Professional Training', 'Practical project management training for professionals and teams.', MonitorCog],
]

export default function Services() {
  return <InnerPage eyebrow="02 / WHAT WE DO" title="Expertise built" accent="around delivery." intro="Our capabilities are designed to solve real project challenges — with clear thinking, structured planning and disciplined execution.">
    <section className="inner-section service-page-grid">
      {items.map(([to, number, title, text, Icon]) => <article className="service-page-card" key={number}><div className="service-page-icon"><Icon size={27}/></div><span>{number}</span><h3>{title}</h3><p>{text}</p><Link to={to}>Explore service <ArrowRight size={16}/></Link></article>)}
    </section>
    <section className="inner-section process-banner"><span className="section-tag">HOW WE WORK</span><h2>Discover. Plan. Execute. <span>Deliver.</span></h2><p>A simple operating mindset that keeps projects understandable, coordinated and moving.</p></section>
  </InnerPage>
}
