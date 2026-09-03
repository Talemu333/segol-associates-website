import { ArrowRight, Award, CheckCircle2, MonitorCog } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const courses = [
  ['01', 'Microsoft Project', 'Plan, schedule and track projects with practical workflows and project-control thinking.'],
  ['02', 'Fast Track Project Management', 'Build practical project management capability with focused, hands-on learning.'],
  ['03', 'Custom Training', 'Sessions shaped around your team, project environment and specific learning goals.'],
]

const trainingImages = [
  ['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1300&q=88', 'Professionals collaborating during training'],
  ['https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=88', 'Team learning and discussion'],
  ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=88', 'Professional workshop session'],
]

export default function Training() {
  return <InnerPage eyebrow="06 / PROFESSIONAL TRAINING" title="Learn the tools." accent="Lead the project." intro="Practical training for professionals who want stronger planning skills and greater confidence with modern project management tools.">
    <section className="inner-section training-intro training-visual-section"><div className="training-photo"><img src={trainingImages[0][0]} alt={trainingImages[0][1]}/><div className="training-photo-badge"><MonitorCog size={18}/><span>PROJECT<br/>MANAGEMENT<br/>TRAINING</span></div></div><div><span className="section-tag">TRAINING PHILOSOPHY</span><h2>Skills that <span>move projects.</span></h2><p className="lead">Training should not stop at theory. We focus on usable knowledge that professionals can take back into their projects.</p><p>Whether the goal is stronger scheduling, better project controls or a focused team session, our programmes are designed around practical application.</p></div></section>
    <section className="inner-section course-page-grid">{courses.map(([number, title, text]) => <article className="course-page-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><div><CheckCircle2 size={17}/> Practical application</div></article>)}</section>
    <section className="inner-section training-gallery"><div className="section-tag">LEARNING IN ACTION</div><h2>Professional development, <span>made practical.</span></h2><div className="training-image-grid">{trainingImages.slice(1).map(([src, alt]) => <figure key={src}><img src={src} alt={alt} loading="lazy"/><figcaption>{alt}</figcaption></figure>)}</div></section>
    <section className="inner-section dark-panel"><div><span className="section-tag light">FOR TEAMS & PROFESSIONALS</span><h2>Build capability<br /><span>that lasts.</span></h2></div><p>Tell us what your team needs to learn and we can shape a focused training conversation around it.</p><Link className="button primary" to="/contact">Enquire about training <ArrowRight size={17}/></Link></section>
  </InnerPage>
}
