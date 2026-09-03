import { ArrowLeft, ArrowRight, Building2, CalendarDays, CheckCircle2, MapPin, Quote, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'
import '../project-detail.css'

// FICTIONAL DEMO CONTENT — written to demonstrate the finished case-study experience.
// Replace every project fact, client name, result and testimonial with Segol-approved records before launch.
const projects = {
  'modern-residential-development': {
    number: '01', category: 'RESIDENTIAL CONSTRUCTION', title: 'Modern Residential Development',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90',
    location: 'Lekki Phase 1, Lagos', client: 'Meridian Heights Developments', scope: 'Planning · Coordination · Construction', timeline: '14 months · 2024–2025', value: 'Private residential development',
    overview: 'A contemporary residential development planned around efficient space use, clean architectural lines and a disciplined construction programme. The project demonstrates how Segol can coordinate the journey from early planning through site delivery and final handover.',
    challenge: 'The brief called for a high-quality residential development delivered within a controlled programme while coordinating multiple trades, procurement activities and changing site requirements. The priority was to keep decisions moving without losing sight of workmanship and the intended finish.',
    role: 'Segol provided project planning and coordination, supported site activities, monitored progress against the programme and helped maintain communication between the project stakeholders and delivery teams.',
    approach: ['Programme planning and activity sequencing', 'Site coordination and progress monitoring', 'Resource and procurement coordination', 'Quality-focused delivery checks', 'Handover planning and close-out'],
    outcome: 'The development was presented as a completed residential project with the main construction scope delivered and the property prepared for handover. Final project metrics, dates and commercial figures will be replaced with verified records from Segol.',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88',
    ],
    review: '“Segol brought structure to the project and kept the different moving parts coordinated from planning through delivery. The communication and attention to progress gave us confidence throughout the build.”',
    reviewer: 'A. Okafor', reviewerRole: 'Development Director · Meridian Heights Developments',
  },
  'contemporary-commercial-facility': {
    number: '02', category: 'COMMERCIAL CONSTRUCTION', title: 'Contemporary Commercial Facility',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90',
    location: 'Victoria Island, Lagos', client: 'Harbour Point Properties', scope: 'Project Management · Site Delivery · Handover', timeline: '18 months · 2023–2025', value: 'Commercial development',
    overview: 'A commercial facility designed to provide flexible working and business space in a demanding urban environment. The project story focuses on coordination, programme control and the transition from active construction to a finished, usable facility.',
    challenge: 'The project involved a broad range of construction activities and stakeholder decisions that needed to be coordinated without disrupting the overall programme. The delivery team needed a clear view of priorities, dependencies and outstanding work at every stage.',
    role: 'Segol acted as a project-management and delivery coordination partner, helping structure the programme, monitor site progress, coordinate stakeholders and support the handover process.',
    approach: ['Integrated project programme', 'Weekly progress and coordination reviews', 'Stakeholder action tracking', 'Site delivery and quality coordination', 'Handover and outstanding-works close-out'],
    outcome: 'The commercial facility reached practical completion and moved into the handover stage. The final version will include verified completion dates, project value, scope quantities and any documented programme or cost outcomes.',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88',
    ],
    review: '“The value was in having someone keep the programme, site activities and stakeholder decisions connected. Segol helped us maintain visibility from the early stages through handover.”',
    reviewer: 'T. Williams', reviewerRole: 'Project Representative · Harbour Point Properties',
  },
  'structured-site-execution': {
    number: '03', category: 'ENGINEERING & SITE DELIVERY', title: 'Structured Site Execution',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90',
    location: 'Ibeju-Lekki, Lagos', client: 'Northshore Industrial Projects', scope: 'Planning · Supervision · Progress Control', timeline: '11 months · 2025–2026', value: 'Industrial site development',
    overview: 'An industrial site-delivery programme where sequencing, supervision and progress visibility were central to keeping multiple work fronts moving. The case study demonstrates Segol’s practical project-control mindset.',
    challenge: 'Several work fronts had to progress in a controlled sequence while materials, labour and specialist activities were coordinated around site conditions. The challenge was to keep the delivery plan practical, visible and responsive to changes on the ground.',
    role: 'Segol supported planning, site supervision, progress reporting and coordination between delivery teams. The role centred on maintaining a reliable picture of what had been completed, what was active and what needed attention next.',
    approach: ['Work-front planning and sequencing', 'Daily site coordination', 'Progress tracking and reporting', 'Resource and activity coordination', 'Issue escalation and resolution tracking'],
    outcome: 'The defined site-delivery scope progressed through its planned work stages. Verified completion percentages, dates, quantities and technical outcomes will be inserted when the actual project record is supplied.',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=88',
    ],
    review: '“The reporting structure made it easier to understand what was happening on site and where decisions were required. The team maintained good visibility of the delivery priorities.”',
    reviewer: 'K. Adeyemi', reviewerRole: 'Operations Lead · Northshore Industrial Projects',
  },
  'project-coordination-delivery': {
    number: '04', category: 'PROJECT MANAGEMENT', title: 'Project Coordination & Delivery',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=90',
    location: 'Abuja, FCT', client: 'Crestview Development Group', scope: 'Programme · Resources · Stakeholder Coordination', timeline: '9 months · 2025', value: 'Mixed-use development support',
    overview: 'A project-management engagement focused on turning a complex delivery plan into a coordinated sequence of decisions, resources and site activities. The emphasis is on the management discipline behind successful project execution.',
    challenge: 'The project involved multiple stakeholders with different priorities and a delivery programme that depended on timely decisions. Without a single coordinated view, small delays could quickly affect downstream activities.',
    role: 'Segol coordinated the project programme, tracked responsibilities and dependencies, supported stakeholder communication and maintained focus on the activities required to keep delivery moving.',
    approach: ['Programme development and tracking', 'Responsibility and action mapping', 'Stakeholder coordination meetings', 'Resource planning and follow-up', 'Progress reporting and delivery reviews'],
    outcome: 'The project reached its defined delivery milestones with the management framework supporting clearer coordination across the project team. Final verified milestones and measurable outcomes will be added from the client record.',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88',
    ],
    review: '“The project became easier to manage once the programme, responsibilities and next actions were clearly visible. Segol provided the structure we needed to keep the team aligned.”',
    reviewer: 'E. Ibrahim', reviewerRole: 'Development Manager · Crestview Development Group',
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects[slug]

  if (!project) return <div className="project-detail-page"><SiteHeader /><main className="project-not-found section"><span className="section-tag">PROJECT NOT FOUND</span><h1>That project page<br /><em>doesn’t exist.</em></h1><Link className="button dark-button" to="/projects">Back to projects <ArrowLeft size={17} /></Link></main><SiteFooter /></div>

  return (
    <div className="project-detail-page">
      <SiteHeader />
      <main>
        <section className="case-hero"><img src={project.image} alt={`${project.title} project showcase`} /><div className="case-hero-overlay" /><div className="case-hero-content section"><Link className="case-back" to="/projects"><ArrowLeft size={16} /> Back to projects</Link><div className="case-kicker"><span>PROJECT {project.number}</span><span>{project.category}</span></div><h1>{project.title}</h1><p>{project.overview}</p></div></section>

        <section className="case-snapshot section"><div className="section-tag">01 / PROJECT SNAPSHOT</div><div className="case-snapshot-grid"><div><MapPin size={19} /><small>LOCATION</small><strong>{project.location}</strong></div><div><Building2 size={19} /><small>CLIENT</small><strong>{project.client}</strong></div><div><CheckCircle2 size={19} /><small>SCOPE</small><strong>{project.scope}</strong></div><div><CalendarDays size={19} /><small>TIMELINE</small><strong>{project.timeline}</strong></div></div></section>

        <section className="case-story section"><div className="case-story-intro"><span className="section-tag">02 / THE STORY</span><h2>What the project<br /><span>needed.</span></h2></div><div className="case-story-copy"><h3>The challenge</h3><p>{project.challenge}</p><h3>Segol’s role</h3><p>{project.role}</p><h3>The approach</h3><ul>{project.approach.map((item) => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></div></section>

        <section className="case-gallery section"><div className="case-gallery-head"><div><span className="section-tag">03 / PROJECT PHOTOS</span><h2>See the work<br /><span>in context.</span></h2></div><p>The presentation uses high-quality construction imagery to demonstrate the intended experience. The launch version should replace these with Segol’s own site, progress and completion photographs.</p></div><div className="case-gallery-grid">{project.gallery.map((image, index) => <figure key={image}><img src={image} alt={`${project.title} project image ${index + 1}`} loading="lazy" /><figcaption>{project.title} / Project image {String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div></section>

        <section className="case-outcome"><div className="section case-outcome-inner"><div><span className="section-tag">04 / OUTCOME</span><h2>What was<br /><span>delivered.</span></h2></div><div className="case-outcome-copy"><CheckCircle2 size={25} /><p>{project.outcome}</p><div className="case-outcome-note"><ShieldCheck size={17} /><span>Final project metrics should be supported by approved project records.</span></div></div></div></section>

        <section className="case-testimonial section"><div className="case-testimonial-card"><Quote size={30} /><div><span className="section-tag">05 / CLIENT REVIEW</span><p>{project.review}</p><div className="case-review-author"><span>{project.reviewer.charAt(0)}</span><div><strong>{project.reviewer}</strong><small>{project.reviewerRole}</small></div></div></div></div></section>

        <section className="case-cta section"><div><span className="section-tag">06 / NEXT PROJECT</span><h2>Have a project<br /><span>like this?</span></h2></div><div><p>Bring the scope, location and delivery challenge. Let’s discuss what needs to happen next.</p><div className="case-cta-actions"><Link className="button dark-button" to="/contact">Start a conversation <ArrowRight size={17} /></Link><Link className="text-link" to="/projects">View more projects <ArrowRight size={16} /></Link></div></div></section>

        <div className="case-demo-note section"><strong>FICTIONAL DEMO CONTENT</strong><span>This case study is intentionally populated with realistic illustrative content for the client presentation. Client names, project facts, locations, timelines, outcomes, images and testimonials must be replaced with Segol’s verified and approved records before publication.</span></div>
      </main><SiteFooter />
    </div>
  )
}
