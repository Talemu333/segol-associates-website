import { ArrowRight, CheckCircle2, MonitorCog, Users, CalendarDays, Layers3 } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

const courses = [
  { number: '01', title: 'Microsoft Project', text: 'Learn how to build schedules, organise tasks, track progress and use Microsoft Project more effectively.', icon: MonitorCog, points: ['Project schedules and task structure', 'Dependencies, calendars and resources', 'Baseline and progress tracking'] },
  { number: '02', title: 'Fast Track Project Management', text: 'A focused programme for professionals who want a practical understanding of how projects are planned, coordinated and controlled.', icon: Layers3, points: ['Project lifecycle and planning', 'Scope, time, cost and risk thinking', 'Practical project-control techniques'] },
  { number: '03', title: 'Custom Team Training', text: 'Focused sessions shaped around your organisation, project environment, tools and specific capability gaps.', icon: Users, points: ['Team-specific learning objectives', 'Relevant project examples and exercises', 'Flexible delivery format'] },
]

const trainingImages = [
  ['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=90', 'Professionals collaborating during training'],
  ['https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90', 'Team learning and discussion'],
  ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=90', 'Professional workshop session'],
]

const outcomes = [
  ['01', 'Plan with clarity', 'Turn project objectives into structured activities, priorities and realistic schedules.'],
  ['02', 'Control progress', 'Use practical tools and routines to understand where work stands and what needs attention.'],
  ['03', 'Coordinate better', 'Strengthen communication, responsibilities and decision-making across the project team.'],
  ['04', 'Apply immediately', 'Take useful techniques back into real projects rather than leaving learning in the classroom.'],
]

export default function Training() {
  return <InnerPage eyebrow="06 / PROFESSIONAL TRAINING" title="Build capability." accent="Lead with confidence." intro="Practical project management training for professionals and teams who want stronger planning, scheduling, coordination and project-control skills.">
    <section className="training-intro-premium inner-section">
      <div className="training-intro-image"><img src={trainingImages[0][0]} alt={trainingImages[0][1]}/><div className="training-image-label"><MonitorCog size={17}/><span>SEGOL / LEARNING & DEVELOPMENT</span></div></div>
      <div className="training-intro-copy"><span className="section-tag">01 / TRAINING PHILOSOPHY</span><h2>Knowledge is useful when it <span>changes how you work.</span></h2><p className="lead">Segol training is designed around practical application. We focus on the tools, thinking and routines professionals can use when they return to their projects.</p><p>From Microsoft Project and Fast Track Project Management to custom team programmes, each learning experience can be shaped around the participant's working environment and objectives.</p><Link className="button dark-button" to="/contact">Discuss your training needs <ArrowRight size={17}/></Link></div>
    </section>

    <section className="training-course-section">
      <div className="inner-section"><div className="training-section-heading"><div><span className="section-tag">02 / OUR PROGRAMMES</span><h2>Training built for <span>real project work.</span></h2></div><p>Choose a focused programme or speak with us about a learning experience designed for your team.</p></div>
      <div className="training-course-grid">{courses.map(({number,title,text,icon:Icon,points}) => <article className="training-course-card" key={title}><div className="training-course-top"><span>{number}</span><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><ul>{points.map(point => <li key={point}><CheckCircle2 size={16}/>{point}</li>)}</ul><Link to="/contact" className="text-link">Enquire about this programme <ArrowRight size={16}/></Link></article>)}</div></div>
    </section>

    <section className="inner-section training-outcomes"><div className="training-section-heading"><div><span className="section-tag">03 / WHAT PARTICIPANTS BUILD</span><h2>Skills that <span>move projects forward.</span></h2></div><p>The goal is not simply to complete a course. It is to leave with clearer ways of thinking and working.</p></div><div className="training-outcome-grid">{outcomes.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="training-learning-section"><div className="inner-section"><div className="training-section-heading training-heading-light"><div><span className="section-tag light">04 / LEARNING IN ACTION</span><h2>Professional development, <span>made practical.</span></h2></div><p>Use the presentation imagery for now; these can later be replaced with Segol's own classroom, workshop and participant photographs.</p></div><div className="training-image-grid-premium">{trainingImages.slice(1).map(([src,alt],index) => <figure key={src} className={index === 0 ? 'large' : ''}><img src={src} alt={alt} loading="lazy"/><figcaption><span>0{index + 2}</span>{alt}</figcaption></figure>)}</div></div></section>

    <section className="inner-section training-delivery"><div><span className="section-tag">05 / TRAINING DELIVERY</span><h2>Designed around <span>your people.</span></h2></div><div className="training-delivery-grid"><div><CalendarDays size={21}/><h3>Focused</h3><p>Clear learning objectives and practical content.</p></div><div><Users size={21}/><h3>Collaborative</h3><p>Built to encourage discussion, questions and application.</p></div><div><MonitorCog size={21}/><h3>Tool-aware</h3><p>Useful project tools and techniques where they add value.</p></div></div></section>

    <section className="inner-section dark-panel training-final-cta"><div><span className="section-tag light">06 / START LEARNING</span><h2>Build capability<br/><span>that lasts.</span></h2><p>Tell us what you or your team needs to improve, and we can start shaping the right training conversation.</p></div><Link className="button primary" to="/contact">Enquire about training <ArrowRight size={17}/></Link></section>
  </InnerPage>
}
