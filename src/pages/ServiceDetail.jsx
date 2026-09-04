import { ArrowRight, CheckCircle2, Factory, HardHat, MonitorCog, Target } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const data = {
  project: {
    eyebrow: '01 / PROJECT MANAGEMENT', title: 'Turn complexity', accent: 'into controlled delivery.',
    intro: 'Segol Associates brings structure, coordination and visibility to projects from planning through execution and closeout.', icon: Target,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Professionals reviewing project plans',
    overview: 'Project management is the discipline that connects objectives, people, time, resources and decisions. Our approach is built around making those moving parts easier to understand and manage.',
    services: ['Project planning and work breakdown', 'Programme and schedule coordination', 'Resource and stakeholder coordination', 'Progress monitoring and reporting', 'Risk, issue and change visibility', 'Delivery and closeout support'],
  },
  oil: {
    eyebrow: '02 / OIL FIELD PLANNING & MANAGEMENT', title: 'Plan the field', accent: 'before execution.',
    intro: 'Planning and management support for oil field activities, with attention to scope, sequencing, resources, timing and execution readiness.', icon: Factory,
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Industrial energy infrastructure',
    overview: 'Oil field work demands disciplined planning because multiple activities, teams, resources and operational constraints have to move together. Segol provides structured planning and coordination support that keeps execution aligned.',
    services: ['Activity and execution planning', 'Work sequencing and schedule coordination', 'Resource and logistics planning', 'Progress tracking and reporting', 'Operational communication support', 'Execution readiness and coordination'],
  },
  construction: {
    eyebrow: '03 / CONSTRUCTION DELIVERY', title: 'From design intent', accent: 'to completed work.',
    intro: 'Construction delivery supported by practical planning, coordination and disciplined project management from early design through completion.', icon: HardHat,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Construction site and building work',
    overview: 'Successful construction is more than putting materials in place. It requires clear scope, coordinated activities, responsible execution and consistent visibility from design through handover.',
    services: ['Design and scope coordination', 'Construction programme planning', 'Site and stakeholder coordination', 'Progress monitoring and reporting', 'Execution and delivery support', 'Completion and handover coordination'],
  },
  training: {
    eyebrow: '04 / PROJECT MANAGEMENT TRAINING', title: 'Build capability', accent: 'that lasts beyond the project.',
    intro: 'Practical project management training designed to help professionals and teams plan, schedule, coordinate and control work more effectively.', icon: MonitorCog,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Professionals participating in training',
    overview: 'Strong project delivery depends on capable people. Segol training combines practical project management thinking with tools and techniques that participants can apply directly to their work.',
    services: ['Project management fundamentals', 'Microsoft Project training', 'Fast Track Project Management', 'Planning and scheduling techniques', 'Progress and project control', 'Custom team training programmes'],
  },
}

const capabilityLinks = [
  ['project', 'Project Management'], ['oil', 'Oil Field Planning & Management'], ['construction', 'Construction Delivery'], ['training', 'Project Management Training'],
]

export default function ServiceDetail({ type }) {
  const item = data[type] || data.project
  const Icon = item.icon
  return <InnerPage eyebrow={item.eyebrow} title={item.title} accent={item.accent} intro={item.intro} dark>
    <section className="cap-detail-intro inner-section">
      <div className="cap-detail-image"><img src={item.image} alt={item.imageAlt}/><div className="cap-detail-image-tag"><Icon size={17}/><span>SEGOL / CAPABILITY</span></div></div>
      <div className="cap-detail-overview"><span className="section-tag">01 / CAPABILITY OVERVIEW</span><h2>Clear thinking.<br/><span>Disciplined delivery.</span></h2><p className="lead">{item.overview}</p><Link className="button dark-button" to="/contact">Discuss a project <ArrowRight size={17}/></Link></div>
    </section>

    <section className="cap-detail-services inner-section">
      <div className="cap-detail-section-heading"><span className="section-tag">02 / WHAT WE DELIVER</span><h2>Practical capability, <span>not just promises.</span></h2><p>Our support is shaped around the decisions, coordination and delivery requirements that keep work moving.</p></div>
      <div className="cap-detail-service-grid">{item.services.map((service, index) => <article className="cap-detail-service" key={service}><span>0{index + 1}</span><CheckCircle2 size={19}/><h3>{service}</h3><p>Structured support designed to improve clarity, coordination and delivery confidence.</p></article>)}</div>
    </section>

    <section className="cap-detail-process inner-section">
      <div><span className="section-tag">03 / OUR APPROACH</span><h2>Discover. Plan.<br/><span>Execute. Deliver.</span></h2></div>
      <div className="cap-process-list"><div><b>01</b><h3>Discover</h3><p>Understand objectives, scope, constraints and the people involved.</p></div><div><b>02</b><h3>Plan</h3><p>Translate requirements into clear activities, priorities, timelines and responsibilities.</p></div><div><b>03</b><h3>Execute</h3><p>Coordinate the work, monitor progress and keep decisions visible.</p></div><div><b>04</b><h3>Deliver</h3><p>Drive completion, handover and the visibility needed for confident closeout.</p></div></div>
    </section>

    <section className="cap-detail-practice inner-section"><div className="cap-practice-copy"><span className="section-tag">04 / CAPABILITY IN PRACTICE</span><h2>Built around <span>real-world work.</span></h2><p>Once client project information is available, this space can showcase relevant case studies, project photographs, schedules, drawings, team activity and measurable outcomes.</p><p>For the current presentation, the focus is on demonstrating the breadth and professionalism of Segol's capability without inventing client project claims.</p></div><img src={item.image} alt={item.imageAlt} loading="lazy"/></section>

    <section className="cap-detail-why inner-section"><span className="section-tag">05 / WHY SEGOL</span><h2>One partner. <span>Four core capabilities.</span></h2><div className="cap-why-grid"><div><b>01</b><h3>Structured</h3><p>Clear planning and defined responsibilities.</p></div><div><b>02</b><h3>Practical</h3><p>Focused on what teams need to execute.</p></div><div><b>03</b><h3>Connected</h3><p>Coordination across people, activities and decisions.</p></div><div><b>04</b><h3>Accountable</h3><p>Visibility that supports confident delivery.</p></div></div></section>

    <section className="cap-detail-related inner-section"><span className="section-tag">06 / EXPLORE SEGOL</span><h2>More than one discipline.<br/><span>One delivery mindset.</span></h2><div className="cap-related-grid">{capabilityLinks.map(([key, label], index) => <Link key={key} to={key === 'training' ? '/training' : `/services/${key === 'project' ? 'project-management' : key === 'oil' ? 'oil-field-planning' : 'construction'}`} className={`cap-related-card ${key === type ? 'current' : ''}`}><span>0{index + 1}</span><strong>{label}</strong><ArrowRight size={17}/></Link>)}</div></section>

    <section className="cap-detail-cta"><div><span className="section-tag">READY TO TALK?</span><h2>Bring us the challenge.<br/><span>Let's plan the way forward.</span></h2><p>Tell us what you are working on and where you need stronger project delivery support.</p></div><Link className="button light-button" to="/contact">Start a conversation <ArrowRight size={17}/></Link></section>
  </InnerPage>
}
