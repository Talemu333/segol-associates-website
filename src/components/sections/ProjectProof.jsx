import { ArrowRight, Building2, CheckCircle2, Quote, Star } from 'lucide-react'
import { Link } from 'react-router'

// Demo presentation only. Replace project names, locations, client names,
// photos and testimonials with Segol's verified records before launch.
const projects = [
  {
    type: 'PROJECT MANAGEMENT',
    title: 'Project Planning & Coordination',
    location: 'Project details to be supplied',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  },
  {
    type: 'OIL FIELD PLANNING',
    title: 'Field Planning & Execution Support',
    location: 'Project details to be supplied',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85',
  },
  {
    type: 'CONSTRUCTION DELIVERY',
    title: 'Building & Construction Delivery',
    location: 'Project details to be supplied',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85',
  },
  {
    type: 'PROFESSIONAL TRAINING',
    title: 'Project Management Capability',
    location: 'Training programme details to be supplied',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85',
  },
]

const proofPoints = [
  ['01', 'Planning before execution', 'Every engagement is structured around scope, resources, programme, risk and clear responsibilities.'],
  ['02', 'Connected capability', 'Different disciplines are supported by the same practical approach to planning, coordination and delivery.'],
  ['03', 'Built for accountability', 'Our delivery mindset keeps attention on quality, communication, progress and completion.'],
]

export default function ProjectProof() {
  return (
    <section className="project-proof-section" id="projects">
      <div className="project-proof-top section">
        <div className="section-tag">04 / SELECTED WORK</div>
        <div className="project-proof-heading">
          <div>
            <h2>Capability should be<br /><span>easy to understand.</span></h2>
          </div>
          <div>
            <p className="lead">The strongest proof of a delivery partner is the way its capabilities connect to real work. This section gives each of Segol's four core disciplines equal visual weight.</p>
            <p>For launch, these cards can become verified case studies with approved project photography, scope, client context, timelines and outcomes.</p>
          </div>
        </div>
      </div>

      <div className="project-grid section">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={`${project.type} showcase`} loading="lazy" />
              <span>{project.type}</span>
            </div>
            <div className="project-card-body">
              <div>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
              <Building2 size={19} />
            </div>
          </article>
        ))}
      </div>

      <div className="proof-banner section">
        <div className="proof-banner-copy">
          <span className="proof-kicker"><CheckCircle2 size={16} /> ONE DELIVERY STANDARD</span>
          <h3>Different challenges. One disciplined approach.</h3>
          <p>As real project information becomes available, this area can evolve into a portfolio that demonstrates how Segol plans, coordinates, executes and delivers across its core capabilities.</p>
        </div>
        <div className="proof-banner-actions">
          <Link className="button dark-button" to="/projects">View project portfolio <ArrowRight size={17} /></Link>
          <Link className="text-link" to="/services">Explore all capabilities <ArrowRight size={16} /></Link>
        </div>
      </div>

      <div className="proof-points section">
        {proofPoints.map(([number, title, text]) => (
          <div className="proof-point" key={number}>
            <span>{number}</span>
            <div><h4>{title}</h4><p>{text}</p></div>
          </div>
        ))}
      </div>

      <div className="client-trust section">
        <div className="client-trust-intro">
          <div className="section-tag">PROJECT CREDIBILITY</div>
          <h2>Real work.<br /><span>Real evidence.</span></h2>
          <p>We will only publish testimonials, client names and project outcomes that Segol has approved. No invented reviews or unsupported claims.</p>
          <div className="rating-note"><Star size={17} fill="currentColor" /><span>Verified project evidence will be added from the client's records.</span></div>
        </div>
        <div className="testimonial-card">
          <Quote size={28} />
          <p className="testimonial-placeholder">“An approved client testimonial can appear here, ideally describing the challenge, Segol's contribution and the outcome delivered.”</p>
          <div className="testimonial-author"><span className="author-avatar">C</span><div><strong>Client name</strong><small>Project / Organisation</small></div></div>
        </div>
      </div>

      <div className="project-proof-note section">
        <strong>CONTENT NOTE FOR LAUNCH</strong>
        <span>Demo images are being used while the real Segol portfolio is collected. Replace these cards with approved project photos, client names, locations, delivery dates and testimonials before public launch.</span>
      </div>
    </section>
  )
}
