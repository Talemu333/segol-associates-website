import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import InnerPage from '../components/layout/InnerPage'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return <InnerPage eyebrow="10 / CONTACT" title="Let&apos;s talk about" accent="what you&apos;re building." intro="Tell us what you are planning, building, organizing or trying to improve. We can start with the right conversation.">
    <section className="inner-section contact-page-grid">
      <div className="contact-details"><span className="section-tag">GET IN TOUCH</span><h2>Start with the <span>brief.</span></h2><p>Share a little about the project and what you need. We are available by phone, WhatsApp and email.</p><div className="contact-detail-row"><Mail size={19}/><div><small>Email</small><b><a href="mailto:segolassociates@gmail.com">segolassociates@gmail.com</a></b></div></div><div className="contact-detail-row"><Phone size={19}/><div><small>Corporate Phone</small><b><a href="tel:+2348033249127">+234 803 324 9127</a></b></div></div><div className="contact-detail-row"><MessageCircle size={19}/><div><small>WhatsApp</small><b><a href="https://wa.me/2349064504211" target="_blank" rel="noreferrer">+234 906 450 4211</a></b></div></div><div className="contact-detail-row"><MapPin size={19}/><div><small>Corporate Office</small><b>Km 42 Lekki Expressway, beside Shoprite, Sangotedo</b></div></div></div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name<input name="name" required placeholder="Your name" /></label>
        <label>Email<input name="email" required type="email" placeholder="you@example.com" /></label>
        <label>What can we help with?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Project Management</option><option>Oil Field Planning</option><option>Construction & Engineering</option><option>Professional Training</option><option>Topix Event Management</option><option>Eternal Praise Water</option></select></label>
        <label>Message<textarea name="message" required rows="5" placeholder="Tell us about your project..." /></label>
        {sent && <div className="form-success" role="status"><CheckCircle2 size={18} /><span><b>Enquiry captured for the demo.</b><small>This frontend form is ready to connect to the client&apos;s preferred email or backend workflow.</small></span></div>}
        <button className="button dark-button" type="submit">{sent ? 'Send another enquiry' : 'Send enquiry'} <Send size={16}/></button>
      </form>
    </section>
    <section className="inner-section contact-note"><MessageCircle size={24}/><div><span className="section-tag">NEXT STEP</span><h2>A clear brief makes a <span>strong start.</span></h2><p>Reach Segol Associates through the corporate phone, WhatsApp, email or office address above.</p></div></section>
  </InnerPage>
}
