import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import InnerPage from '../components/layout/InnerPage'

export default function NotFound() {
  return <InnerPage eyebrow="404 / PAGE NOT FOUND" title="That page" accent="isn&apos;t here." intro="The address may have changed or the page may still be under construction."><section className="inner-section not-found"><h2>Let&apos;s get you <span>back on track.</span></h2><Link className="button dark-button" to="/"><ArrowLeft size={17}/> Back home</Link></section></InnerPage>
}
