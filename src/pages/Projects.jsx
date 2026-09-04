import { useMemo, useState } from 'react'
import { ArrowRight, Building2, CheckCircle2, Filter, MapPin, Quote, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'

// FICTIONAL DEMO CONTENT — replace with Segol's verified project records before launch.
const projects = [
  { number: '01', slug: 'project-planning-coordination', category: 'PROJECT MANAGEMENT', categoryLabel: 'PROJECT MANAGEMENT', title: 'Project Planning & Coordination', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=88', location: 'Project location to be supplied', client: 'Approved client record to be supplied', scope: 'Planning · Programme · Coordination', status: 'Demonstration' },
  { number: '02', slug: 'oil-field-planning-execution', category: 'OIL FIELD PLANNING', categoryLabel: 'OIL FIELD PLANNING & MANAGEMENT', title: 'Field Planning & Execution Support', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1500&q=88', location: 'Project location to be supplied', client: 'Approved client record to be supplied', scope: 'Planning · Sequencing · Field Coordination', status: 'Demonstration' },
  { number: '03', slug: 'building-construction-delivery', category: 'CONSTRUCTION', categoryLabel: 'CONSTRUCTION DELIVERY', title: 'Building & Construction Delivery', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1500&q=88', location: 'Project location to be supplied', client: 'Approved client record to be supplied', scope: 'Design Coordination · Delivery · Handover', status: 'Demonstration' },
  { number: '04', slug: 'project-management-capability', category: 'TRAINING', categoryLabel: 'PROJECT MANAGEMENT TRAINING', title: 'Project Management Capability', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1500&q=88', location: 'Training location to be supplied', client: 'Approved training record to be supplied', scope: 'Project Management · Microsoft Project · Fast Track', status: 'Demonstration' },
]

const filters = ['ALL', 'PROJECT MANAGEMENT', 'OIL FIELD PLANNING', 'CONSTRUCTION', 'TRAINING']

const trustSteps = [
  ['01', 'See the work', 'Project photography and clear project descriptions show prospects what Segol is capable of delivering.'],
  ['02', 'Understand the delivery', 'Each project can explain scope, programme, challenge, Segol’s role and the outcome.'],
  ['03', 'Hear from clients', 'Approved testimonials and client references can sit beside the relevant work once supplied.'],
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const filteredProjects = useMemo(() => activeFilter === 'ALL' ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter])

  return (
    <div className="projects-page">
      <SiteHeader />
      <main>
        <section className="projects-hero">
          <div className="projects-hero-image" /><div className="projects-hero-overlay" />
          <div className="projects-hero-content"><span className="eyebrow">SEGOL ASSOCIATES / PROJECT PORTFOLIO</span><h1>Work that gives<br /><em>confidence.</em></h1><p>Explore how Segol’s four core capabilities can be presented through clear project context, delivery responsibility and verified outcomes.</p><div className="projects-hero-actions"><a href="#portfolio" className="button light-button">Explore selected work <ArrowRight size={17} /></a><Link to="/contact" className="text-link light-link">Discuss a project <ArrowRight size={16} /></Link></div></div>
          <div className="projects-hero-meta"><span>PORTFOLIO / 2026</span><span>PROJECT MANAGEMENT · OIL FIELD · CONSTRUCTION · TRAINING</span></div>
        </section>

        <section className="projects-intro section"><div className="section-tag">01 / WHY THIS PAGE MATTERS</div><div className="projects-intro-grid"><h2>Let the work<br /><span>do the talking.</span></h2><div><p className="lead">A strong portfolio should show more than attractive images. It should help a prospect understand what was planned, what was managed, where Segol contributed and what was delivered.</p><p>This presentation version uses fictional project records so the client can see the finished experience. Names, locations, outcomes and project facts are placeholders for Segol’s verified portfolio.</p></div></div></section>

        <section className="projects-portfolio section" id="portfolio"><div className="projects-section-head"><div><span className="section-tag">02 / SELECTED WORK</span><h2>Four capabilities.<br /><span>Real proof later.</span></h2></div><p>Filter the presentation by capability, then open any project to see the intended case-study experience.</p></div>
          <div className="project-filters" role="tablist" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'project-filter active' : 'project-filter'} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}><Filter size={14} />{filter}</button>)}</div>
          <div className="projects-grid">{filteredProjects.map((project) => <Link className="portfolio-project" key={project.number} to={`/projects/${project.slug}`} aria-label={`Open case study: ${project.title}`}><div className="portfolio-project-image"><img src={project.image} alt={`${project.categoryLabel} demonstration`} loading="lazy" /><span>{project.number}</span><span className="portfolio-project-open">VIEW CASE STUDY <ArrowRight size={15} /></span></div><div className="portfolio-project-body"><div className="portfolio-project-top"><small>{project.categoryLabel}</small><Building2 size={18} /></div><h3>{project.title}</h3><div className="portfolio-project-meta"><span><MapPin size={15} />{project.location}</span><span>{project.scope}</span></div><div className="portfolio-project-note"><CheckCircle2 size={16} /> {project.client} · {project.status}</div></div></Link>)}</div>
          {filteredProjects.length === 0 && <p className="project-empty">No demonstration projects are assigned to this category yet.</p>}
        </section>

        <section className="projects-trust"><div className="section projects-trust-inner"><div className="projects-trust-copy"><span className="section-tag">03 / THE TRUST LAYER</span><h2>From proof<br /><span>to confidence.</span></h2><p>The strongest version of this page combines completed work, client names, genuine reviews and measurable project outcomes — all approved by Segol before publication.</p></div><div className="projects-trust-steps">{trustSteps.map(([number, title, text]) => <div className="projects-trust-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

        <section className="projects-clients section"><div className="projects-clients-head"><div><span className="section-tag">04 / CLIENTS & REVIEWS</span><h2>Real relationships.<br /><span>Real words.</span></h2></div><p>The final site should replace these demonstration records with approved client names, logos and testimonials from Segol’s actual project history.</p></div><div className="projects-client-grid"><div className="client-placeholder-card"><ShieldCheck size={22} /><strong>CLIENT LOGOS</strong><span>Approved client and partner logos will appear here.</span></div><div className="review-placeholder-card"><Quote size={27} /><p>“An approved client testimonial can appear here, describing the challenge, Segol’s contribution and the outcome delivered.”</p><div><span className="review-avatar">C</span><span><strong>Approved client review</strong><small>To be supplied by Segol</small></span></div></div></div></section>

        <section className="projects-cta section"><div><span className="section-tag">05 / START A PROJECT</span><h2>Planning something<br /><span>worth building?</span></h2></div><div><p>Tell us what you are planning, where the work is and what kind of delivery support you need. We can start the conversation from there.</p><Link className="button dark-button" to="/contact">Start a project conversation <ArrowRight size={17} /></Link></div></section>
      </main><SiteFooter /><div className="projects-demo-note">FICTIONAL DEMO CONTENT / Names, locations, project records, images, reviews and outcomes on this presentation page are illustrative only and must be replaced with Segol’s verified records before launch.</div>
    </div>
  )
}
