import { ArrowRight, Building2, CheckCircle2, Quote, Star } from 'lucide-react'
import { Link } from 'react-router'

// Demo presentation only. Replace project names, locations, client names,
// photos and testimonials with Segol's verified records before advertising.
const projects = [
  {
    type: 'BUILDING & CONSTRUCTION',
    title: 'Residential Development',
    location: 'Project location to be supplied',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
  },
  {
    type: 'COMMERCIAL CONSTRUCTION',
    title: 'Commercial Building',
    location: 'Project location to be supplied',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
  },
  {
    type: 'PROJECT MANAGEMENT',
    title: 'Project Delivery & Coordination',
    location: 'Project location to be supplied',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
  },
  {
    type: 'ENGINEERING & SITE DELIVERY',
    title: 'Construction Execution',
    location: 'Project location to be supplied',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
  },
]

const proofPoints = [
  ['01', 'Planning before execution', 'Every engagement is structured around scope, resources, programme, risk and clear responsibilities.'],
  ['02', 'Visible project coordination', 'Clients get a clearer view of what needs to happen, who owns it and what comes next.'],
  ['03', 'Built for accountability', 'Our delivery mindset keeps attention on quality, communication, progress and handover.'],
]

export default function ProjectProof() {
  return (
    <section className="project-proof-section" id="projects">
      <div className="project-proof-top section">
        <div className="section-tag">03 / SELECTED PROJECTS</div>
        <div className="project-proof-heading">
          <div>
            <h2>Don&apos;t just take<br /><span>our word for it.</span></h2>
          </div>
          <div>
            <p className="lead">Construction and project management are trust businesses. Before a client commits, they need to see the kind of work, thinking and delivery discipline behind the promise.</p>
            <p>We are building this page around Segol&apos;s strongest proof: real project photography, project context, approved client names and genuine feedback.</p>
          </div>
        </div>
      </div>

      <div className="project-grid section">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt="Construction project showcase" loading="lazy" />
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
          <span className="proof-kicker"><CheckCircle2 size={16} /> CAPABILITY YOU CAN SEE</span>
          <h3>From the first plan to the final handover.</h3>
          <p>For the launch version, this area will become a detailed portfolio with project scope, client, location, timeline, photographs and outcomes — so serious prospects can evaluate Segol before making contact.</p>
        </div>
        <div className="proof-banner-actions">
          <Link className="button dark-button" to="/projects">View full project portfolio <ArrowRight size={17} /></Link>
          <Link className="text-link" to="/services/construction">Explore construction capability <ArrowRight size={16} /></Link>
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
          <div className="section-tag">04 / CLIENT TRUST</div>
          <h2>Real clients.<br /><span>Real words.</span></h2>
          <p>We will only publish testimonials and client names that Segol has approved. No invented reviews, no anonymous praise presented as fact.</p>
          <div className="rating-note"><Star size={17} fill="currentColor" /><span>Verified testimonials will be added from the client&apos;s records.</span></div>
        </div>
        <div className="testimonial-card">
          <Quote size={28} />
          <p className="testimonial-placeholder">“This is where an approved client testimonial will appear — ideally mentioning the project, the challenge Segol handled and the outcome delivered.”</p>
          <div className="testimonial-author"><span className="author-avatar">C</span><div><strong>Client name</strong><small>Project / Organisation</small></div></div>
        </div>
      </div>

      <div className="project-proof-note section">
        <strong>CONTENT NOTE FOR LAUNCH</strong>
        <span>Demo images are being used while the real Segol portfolio is collected. Replace these cards with approved project photos, client names, locations, delivery dates and testimonials before running paid ads.</span>
      </div>
    </section>
  )
}
