import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import InnerPage from '../components/layout/InnerPage'

export default function Contact() {
  return <InnerPage eyebrow="10 / CONTACT" title="Let&apos;s talk about" accent="what you&apos;re building." intro="Tell us what you are planning, building, organizing or trying to improve. We can start with the right conversation.">
    <section className="inner-section contact-page-grid">
      <div className="contact-details"><span className="section-tag">GET IN TOUCH</span><h2>Start with the <span>brief.</span></h2><p>Share a little about the project and what you need. The contact details below are placeholders for the client&apos;s approved information.</p><div className="contact-detail-row"><Mail size={19}/><div><small>Email</small><b>hello@segolassociates.com</b></div></div><div className="contact-detail-row"><Phone size={19}/><div><small>Phone</small><b>+234 000 000 0000</b></div></div><div className="contact-detail-row"><MapPin size={19}/><div><small>Location</small><b>Nigeria</b></div></div></div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}><label>Name<input placeholder="Your name" /></label><label>Email<input type="email" placeholder="you@example.com" /></label><label>What can we help with?<select defaultValue=""><option value="" disabled>Select a service</option><option>Project Management</option><option>Oil Field Planning</option><option>Construction & Engineering</option><option>Professional Training</option><option>Topix Event Management</option><option>Eternal Praise Water</option></select></label><label>Message<textarea rows="5" placeholder="Tell us about your project..." /></label><button className="button dark-button" type="submit">Send enquiry <Send size={16}/></button></form>
    </section>
    <section className="inner-section contact-note"><MessageCircle size={24}/><div><span className="section-tag">NEXT STEP</span><h2>A clear brief makes a <span>strong start.</span></h2><p>Once the client provides the final contact details and enquiry workflow, this form can be connected to the preferred email or backend service.</p></div></section>
  </InnerPage>
}
