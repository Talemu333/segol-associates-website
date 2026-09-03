import { ArrowRight, Factory, HardHat, MonitorCog, Target } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const items = [
  ['/services/project-management', '01', 'Project Management', 'Structured planning, coordination and delivery support.', Target, 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85'],
  ['/services/oil-field-planning', '02', 'Oil Field Planning', 'Planning and management support for oil field activities.', Factory, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85'],
  ['/services/construction', '03', 'Construction & Engineering', 'Disciplined project thinking from design coordination to completion.', HardHat, 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85'],
  ['/training', '04', 'Professional Training', 'Practical project management training for professionals and teams.', MonitorCog, 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85'],
]

export default function Services() {
  return <InnerPage eyebrow="02 / WHAT WE DO" title="Expertise built" accent="around delivery." intro="Our capabilities are designed to solve real project challenges — with clear thinking, structured planning and disciplined execution.">
    <section className="inner-section service-page-grid">{items.map(([to, number, title, text, Icon, image]) => <article className="service-page-card service-visual-card" key={number} style={{backgroundImage:`linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,255,255,.97)),url(${image})`}}><div className="service-page-icon"><Icon size={27}/></div><span>{number}</span><h3>{title}</h3><p>{text}</p><Link to={to}>Explore service <ArrowRight size={16}/></Link></article>)}</section>
    <section className="inner-section process-banner"><span className="section-tag">HOW WE WORK</span><h2>Discover. Plan. Execute. <span>Deliver.</span></h2><p>A simple operating mindset that keeps projects understandable, coordinated and moving.</p></section>
  </InnerPage>
}
