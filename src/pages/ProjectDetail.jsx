import { ArrowLeft, ArrowRight, Building2, CalendarDays, CheckCircle2, Factory, HardHat, MapPin, MonitorCog, Quote, ShieldCheck, Target } from 'lucide-react'
import { Link, useParams } from 'react-router'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'
import '../project-detail.css'

// FICTIONAL DEMO CONTENT — replace all project facts, names, images and outcomes with Segol-approved records before launch.
const projects = {
  'project-planning-coordination': {
    number: '01', category: 'PROJECT MANAGEMENT', title: 'Project Planning & Coordination', icon: Target,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=90',
    location: 'Project location to be supplied', client: 'Approved client record to be supplied', scope: 'Planning · Programme · Coordination', timeline: 'Project timeline to be supplied',
    overview: 'A demonstration case study showing how Segol can bring structure to objectives, activities, resources, responsibilities and decisions across a project lifecycle.',
    challenge: 'The project required a clearer view of priorities, dependencies, responsibilities and next actions. The presentation demonstrates how those moving parts can be organised into a practical delivery framework.',
    role: 'Segol’s role can be presented around programme development, coordination, progress visibility, stakeholder communication and delivery follow-through once the verified project record is supplied.',
    approach: ['Programme planning and activity sequencing', 'Responsibility and action mapping', 'Progress monitoring and reporting', 'Stakeholder coordination', 'Risk, issue and change visibility'],
    outcome: 'The final case study will document the verified milestones, measurable outcomes and delivery contribution once the client record is supplied.',
    gallery: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=88'],
  },
  'oil-field-planning-execution': {
    number: '02', category: 'OIL FIELD PLANNING & MANAGEMENT', title: 'Field Planning & Execution Support', icon: Factory,
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1800&q=90',
    location: 'Field location to be supplied', client: 'Approved client record to be supplied', scope: 'Planning · Sequencing · Field Coordination', timeline: 'Project timeline to be supplied',
    overview: 'A demonstration case study showing how disciplined planning can connect field activities, resources, timing and execution readiness.',
    challenge: 'Multiple field activities needed to be sequenced around resources, operational constraints and changing conditions. The presentation demonstrates the importance of maintaining a practical, visible execution plan.',
    role: 'Segol’s verified role can be documented here around activity planning, sequencing, resource coordination, progress reporting and communication between the relevant teams.',
    approach: ['Activity and execution planning', 'Work sequencing and schedule coordination', 'Resource and logistics planning', 'Progress tracking and reporting', 'Execution readiness coordination'],
    outcome: 'The final case study will present verified field milestones, scope, dates and outcomes supplied by Segol.',
    gallery: ['https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=88'],
  },
  'building-construction-delivery': {
    number: '03', category: 'CONSTRUCTION DELIVERY', title: 'Building & Construction Delivery', icon: HardHat,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90',
    location: 'Project location to be supplied', client: 'Approved client record to be supplied', scope: 'Design Coordination · Delivery · Handover', timeline: 'Project timeline to be supplied',
    overview: 'A demonstration case study showing the connection between design intent, construction planning, site coordination, execution and completion.',
    challenge: 'The delivery environment required clear scope, coordinated activities and visibility across the work programme. The presentation demonstrates how disciplined project management supports construction execution.',
    role: 'Segol’s verified contribution can be documented here across design coordination, construction programme planning, site coordination, progress monitoring and handover.',
    approach: ['Design and scope coordination', 'Construction programme planning', 'Site and stakeholder coordination', 'Progress monitoring and reporting', 'Completion and handover coordination'],
    outcome: 'Verified project scope, completion information, photographs and measurable outcomes will replace this demonstration copy before launch.',
    gallery: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=88'],
  },
  'project-management-capability': {
    number: '04', category: 'PROJECT MANAGEMENT TRAINING', title: 'Project Management Capability', icon: MonitorCog,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=90',
    location: 'Training location to be supplied', client: 'Approved training record to be supplied', scope: 'Project Management · Microsoft Project · Fast Track', timeline: 'Programme dates to be supplied',
    overview: 'A demonstration case study for Segol’s professional training capability, showing how practical project-management knowledge and tools can be developed for professionals and teams.',
    challenge: 'Teams often need practical capability that connects project-management concepts with the tools and decisions used in day-to-day work. This presentation demonstrates how that learning experience can be structured.',
    role: 'The verified training record can document programme design, delivery, participant profile, learning objectives and the tools covered.',
    approach: ['Project management fundamentals', 'Microsoft Project training', 'Fast Track Project Management', 'Planning and scheduling techniques', 'Progress and project control'],
    outcome: 'Verified programme details, participant information and approved feedback can be added when supplied by Segol.',
    gallery: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88'],
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects[slug]
  if (!project) return <div className="project-detail-page"><SiteHeader /><main className="project-not-found section"><span className="section-tag">PROJECT NOT FOUND</span><h1>That project page<br /><em>doesn’t exist.</em></h1><Link className="button dark-button" to="/projects">Back to projects <ArrowLeft size={17} /></Link></main><SiteFooter /></div>
  const Icon = project.icon
  return <div className="project-detail-page"><SiteHeader /><main>
    <section className="case-hero"><img src={project.image} alt={`${project.title} demonstration`} /><div className="case-hero-overlay" /><div className="case-hero-content section"><Link className="case-back" to="/projects"><ArrowLeft size={16} /> Back to projects</Link><div className="case-kicker"><span>PROJECT {project.number}</span><span>{project.category}</span></div><h1>{project.title}</h1><p>{project.overview}</p></div></section>
    <section className="case-snapshot section"><div className="section-tag">01 / PROJECT SNAPSHOT</div><div className="case-snapshot-grid"><div><MapPin size={19} /><small>LOCATION</small><strong>{project.location}</strong></div><div><Building2 size={19} /><small>CLIENT</small><strong>{project.client}</strong></div><div><CheckCircle2 size={19} /><small>SCOPE</small><strong>{project.scope}</strong></div><div><CalendarDays size={19} /><small>TIMELINE</small><strong>{project.timeline}</strong></div></div></section>
    <section className="case-story section"><div className="case-story-intro"><span className="section-tag">02 / THE STORY</span><h2>What the project<br /><span>needed.</span></h2></div><div className="case-story-copy"><h3>The challenge</h3><p>{project.challenge}</p><h3>Segol’s role</h3><p>{project.role}</p><h3>The approach</h3><ul>{project.approach.map((item) => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></div></section>
    <section className="case-gallery section"><div className="case-gallery-head"><div><span className="section-tag">03 / PROJECT PHOTOS</span><h2>See the work<br /><span>in context.</span></h2></div><p>These are presentation images for the demo. Replace them with Segol’s approved project, field, training or construction photographs before launch.</p></div><div className="case-gallery-grid">{project.gallery.map((image, index) => <figure key={image}><img src={image} alt={`${project.title} image ${index + 1}`} loading="lazy" /><figcaption>{project.title} / Image {String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div></section>
    <section className="case-outcome"><div className="section case-outcome-inner"><div><span className="section-tag">04 / OUTCOME</span><h2>What was<br /><span>delivered.</span></h2></div><div className="case-outcome-copy"><Icon size={25} /><p>{project.outcome}</p><div className="case-outcome-note"><ShieldCheck size={17} /><span>Final project facts and metrics should be supported by approved project records.</span></div></div></div></section>
    <section className="case-testimonial section"><div className="case-testimonial-card"><Quote size={30} /><div><span className="section-tag">05 / CLIENT REVIEW</span><p>An approved client or participant testimonial can appear here once supplied and cleared for publication.</p><div className="case-review-author"><span>C</span><div><strong>Approved testimonial to be supplied</strong><small>Segol Associates</small></div></div></div></div></section>
    <section className="case-cta section"><div><span className="section-tag">06 / NEXT PROJECT</span><h2>Have a project<br /><span>like this?</span></h2></div><div><p>Bring the scope, location and delivery challenge. Let’s discuss what needs to happen next.</p><div className="case-cta-actions"><Link className="button dark-button" to="/contact">Start a conversation <ArrowRight size={17} /></Link><Link className="text-link" to="/projects">View more work <ArrowRight size={16} /></Link></div></div></section>
    <div className="case-demo-note section"><strong>FICTIONAL DEMO CONTENT</strong><span>This case study is intentionally populated with illustrative content and imagery for the client presentation. All project facts, client names, locations, timelines, outcomes, photographs and testimonials must be replaced with Segol’s verified and approved records before publication.</span></div>
  </main><SiteFooter /></div>
}
