import { ArrowLeft, ArrowRight, Building2, CalendarDays, CheckCircle2, MapPin, Quote, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'
import '../project-detail.css'

const projects = {
  'modern-residential-development': {
    number: '01',
    category: 'RESIDENTIAL CONSTRUCTION',
    title: 'Modern Residential Development',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90',
    location: 'Location to be supplied',
    client: 'Client name to be supplied',
    scope: 'Planning · Coordination · Construction',
    timeline: 'Timeline to be supplied',
    challenge: 'The project required a coordinated path from planning through site execution, with clear responsibilities, programme visibility and disciplined attention to the quality of the finished build.',
    role: 'Segol’s role will be documented here from the verified project record — including the planning, coordination, supervision and delivery responsibilities actually carried out.',
    outcome: 'Verified project outcome to be supplied. This section is intentionally reserved for measurable or clearly documented results rather than invented performance claims.',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  'contemporary-commercial-facility': {
    number: '02',
    category: 'COMMERCIAL CONSTRUCTION',
    title: 'Contemporary Commercial Facility',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90',
    location: 'Location to be supplied',
    client: 'Client name to be supplied',
    scope: 'Project Management · Site Delivery · Handover',
    timeline: 'Timeline to be supplied',
    challenge: 'A commercial project needs more than a finished building. The case study will document how scope, programme, stakeholders, site activities and handover requirements were coordinated across the delivery process.',
    role: 'Segol’s verified responsibilities will be inserted here, giving prospective clients a clear view of where the company added value across management and site delivery.',
    outcome: 'Verified project outcome to be supplied, including approved project metrics where they exist.',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  'structured-site-execution': {
    number: '03',
    category: 'ENGINEERING & SITE DELIVERY',
    title: 'Structured Site Execution',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90',
    location: 'Location to be supplied',
    client: 'Client name to be supplied',
    scope: 'Planning · Supervision · Progress Control',
    timeline: 'Timeline to be supplied',
    challenge: 'Site delivery depends on sequencing, communication and control. This case study will explain the project constraints, the delivery priorities and the coordination required to keep work moving.',
    role: 'Segol’s actual site and project-management responsibilities will be recorded here once the client project information is supplied and approved.',
    outcome: 'Verified project outcome to be supplied. No performance figure will be published until it is supported by the project record.',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  'project-coordination-delivery': {
    number: '04',
    category: 'PROJECT MANAGEMENT',
    title: 'Project Coordination & Delivery',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=90',
    location: 'Location to be supplied',
    client: 'Client name to be supplied',
    scope: 'Programme · Resources · Stakeholder Coordination',
    timeline: 'Timeline to be supplied',
    challenge: 'Complex projects create coordination pressure across people, resources, programme and decisions. The finished case study will show how the project was structured and how delivery priorities were managed.',
    role: 'Segol’s specific management role will be populated from the approved project record, including the areas of planning, reporting, coordination and delivery oversight actually provided.',
    outcome: 'Verified project outcome to be supplied, with measurable results added only where they can be substantiated.',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88',
    ],
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects[slug]

  if (!project) {
    return (
      <div className="project-detail-page">
        <SiteHeader />
        <main className="project-not-found section">
          <span className="section-tag">PROJECT NOT FOUND</span>
          <h1>That project page<br /><em>doesn’t exist.</em></h1>
          <Link className="button dark-button" to="/projects">Back to projects <ArrowLeft size={17} /></Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <SiteHeader />
      <main>
        <section className="case-hero">
          <img src={project.image} alt={`${project.title} project showcase`} />
          <div className="case-hero-overlay" />
          <div className="case-hero-content section">
            <Link className="case-back" to="/projects"><ArrowLeft size={16} /> Back to projects</Link>
            <div className="case-kicker"><span>PROJECT {project.number}</span><span>{project.category}</span></div>
            <h1>{project.title}</h1>
            <p>A detailed project story built around the facts prospective clients need to evaluate Segol’s capability.</p>
          </div>
        </section>

        <section className="case-snapshot section">
          <div className="section-tag">01 / PROJECT SNAPSHOT</div>
          <div className="case-snapshot-grid">
            <div><MapPin size={19} /><small>LOCATION</small><strong>{project.location}</strong></div>
            <div><Building2 size={19} /><small>CLIENT</small><strong>{project.client}</strong></div>
            <div><CheckCircle2 size={19} /><small>SCOPE</small><strong>{project.scope}</strong></div>
            <div><CalendarDays size={19} /><small>TIMELINE</small><strong>{project.timeline}</strong></div>
          </div>
        </section>

        <section className="case-story section">
          <div className="case-story-intro"><span className="section-tag">02 / THE STORY</span><h2>What the project<br /><span>needed.</span></h2></div>
          <div className="case-story-copy"><h3>The challenge</h3><p>{project.challenge}</p><h3>Segol’s role</h3><p>{project.role}</p></div>
        </section>

        <section className="case-gallery section">
          <div className="case-gallery-head"><div><span className="section-tag">03 / PROJECT PHOTOS</span><h2>See the work<br /><span>in context.</span></h2></div><p>Construction photography should show more than the final finish. The launch version will use Segol’s approved project images across key stages and details.</p></div>
          <div className="case-gallery-grid">
            {project.gallery.map((image, index) => <figure key={image}><img src={image} alt={`${project.title} project image ${index + 1}`} loading="lazy" /><figcaption>Project image {String(index + 1).padStart(2, '0')} / approved caption to be supplied</figcaption></figure>)}
          </div>
        </section>

        <section className="case-outcome">
          <div className="section case-outcome-inner">
            <div><span className="section-tag">04 / OUTCOME</span><h2>What was<br /><span>delivered.</span></h2></div>
            <div className="case-outcome-copy"><CheckCircle2 size={25} /><p>{project.outcome}</p><div className="case-outcome-note"><ShieldCheck size={17} /><span>Only verified project results will be published in the final version.</span></div></div>
          </div>
        </section>

        <section className="case-testimonial section">
          <div className="case-testimonial-card"><Quote size={30} /><div><span className="section-tag">05 / CLIENT REVIEW</span><p>“An approved client review will appear here, ideally describing the project, Segol’s role and the outcome from the client’s perspective.”</p><div className="case-review-author"><span> C </span><div><strong>{project.client}</strong><small>Organisation / Project</small></div></div></div></div>
        </section>

        <section className="case-cta section">
          <div><span className="section-tag">06 / NEXT PROJECT</span><h2>Have a project<br /><span>like this?</span></h2></div>
          <div><p>Bring the scope, location and delivery challenge. Let’s discuss what needs to happen next.</p><div className="case-cta-actions"><Link className="button dark-button" to="/contact">Start a conversation <ArrowRight size={17} /></Link><Link className="text-link" to="/projects">View more projects <ArrowRight size={16} /></Link></div></div>
        </section>

        <div className="case-demo-note section"><strong>DEMO CONTENT / VERIFICATION REQUIRED</strong><span>Images are presentation placeholders. Before launch, replace the project title, client, location, scope, timeline, challenge, role, outcome, captions and testimonial with Segol’s approved records.</span></div>
      </main>
      <SiteFooter />
    </div>
  )
}
