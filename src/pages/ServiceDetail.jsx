import { ArrowRight, CheckCircle2, Factory, HardHat, Target } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const data = {
  project: { eyebrow: '03 / PROJECT MANAGEMENT', title: 'Make the project', accent: 'easier to control.', intro: 'Structured project management support that connects objectives, people, schedules, resources and delivery.', icon: Target, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=88', imageAlt: 'Professionals reviewing a project plan', points: ['Project planning and work breakdown', 'Schedule coordination and progress tracking', 'Resource and stakeholder coordination', 'Risk, issue and delivery visibility'] },
  oil: { eyebrow: '04 / OIL FIELD PLANNING', title: 'Plan the field', accent: 'before execution.', intro: 'Planning and management support that helps oil field activities stay aligned around scope, resources, timing and execution.', icon: Factory, image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1500&q=88', imageAlt: 'Industrial energy infrastructure', points: ['Activity and execution planning', 'Schedule and resource coordination', 'Operational communication and reporting', 'Progress and delivery support'] },
  construction: { eyebrow: '05 / CONSTRUCTION & ENGINEERING', title: 'From design intent', accent: 'to completed work.', intro: 'Construction delivery support built around coordination, practical planning and disciplined project management.', icon: HardHat, image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1500&q=88', imageAlt: 'Construction site and building work', points: ['Design and scope coordination', 'Construction programme planning', 'Progress and stakeholder coordination', 'Handover and completion support'] },
}

export default function ServiceDetail({ type }) {
  const item = data[type]
  const Icon = item.icon
  return <InnerPage eyebrow={item.eyebrow} title={item.title} accent={item.accent} intro={item.intro} dark>
    <section className="inner-section detail-layout detail-visual-layout"><div className="detail-photo"><img src={item.image} alt={item.imageAlt}/><div className="detail-photo-label"><Icon size={17}/><span>SEGOL / DELIVERY</span></div></div><div><span className="section-tag">WHAT WE BRING</span><h2>Structure that helps<br /><span>work move.</span></h2><p className="lead">Good delivery depends on knowing what needs to happen, who owns it, when it needs to happen and how progress will be measured.</p><p>Our role is to bring clarity to those moving parts and support the team through execution without adding unnecessary complexity.</p></div></section>
    <section className="inner-section detail-case-image"><img src={item.image} alt={item.imageAlt} loading="lazy"/><div><span className="section-tag">DELIVERY IN PRACTICE</span><h2>Plan clearly.<br /><span>Build confidently.</span></h2><p>Use this area for completed project photography, site progress, drawings, team activity and project outcomes once the client supplies the real portfolio.</p></div></section>
    <section className="inner-section checklist"><div><span className="section-tag">CAPABILITIES</span><h2>Built for <span>real-world delivery.</span></h2></div><div>{item.points.map((point) => <div className="check-row" key={point}><CheckCircle2 size={19}/><span>{point}</span></div>)}</div></section>
    <section className="inner-section quote-panel"><span className="section-tag">THE OUTCOME</span><h2>Better visibility.<br /><span>Better decisions.</span></h2><p>We help teams see the work clearly enough to make confident decisions and keep momentum.</p><Link className="button dark-button" to="/contact">Discuss your project <ArrowRight size={17}/></Link></section>
  </InnerPage>
}
