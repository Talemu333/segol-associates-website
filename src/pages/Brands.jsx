import { ArrowDownRight, ArrowRight, Droplets, ExternalLink, Sparkles } from 'lucide-react'
import { Link } from 'react-router'

const brands = [
  {
    number: '01',
    name: 'Topix',
    sub: 'Event Management',
    type: 'EVENTS / EXPERIENCES / CELEBRATIONS',
    text: 'A dedicated event experience brand for weddings, birthdays, corporate gatherings and memorable celebrations.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=88',
    href: '/brands/topix',
    className: 'brands-hub-topix',
    tags: ['Weddings', 'Corporate', 'Birthdays', 'Party Rentals'],
  },
  {
    number: '02',
    name: 'Eternal Praise',
    sub: 'Water',
    type: 'PURE / REFRESHING / RELIABLE',
    text: 'A focused water brand presented around the everyday essentials of quality, refreshment and dependable supply.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1600&q=88',
    href: '/brands/eternal-praise-water',
    className: 'brands-hub-water',
    tags: ['Water', 'Quality', 'Supply', 'Everyday Refreshment'],
  },
]

export default function Brands() {
  return (
    <div className="brands-hub">
      <header className="brands-hub-nav">
        <Link className="brands-hub-logo" to="/"><span>S</span><strong>SEGOL GROUP</strong></Link>
        <nav><a href="#portfolio">Our businesses</a><a href="#principle">Our standard</a><Link to="/contact">Work with us <ArrowRight size={15} /></Link></nav>
        <Link className="brands-hub-back" to="/"><ArrowDownRight size={17} /> Back to Segol</Link>
      </header>

      <main>
        <section className="brands-hub-hero">
          <div className="brands-hub-hero-grid" />
          <div className="brands-hub-hero-copy">
            <span className="brands-hub-kicker">SEGOL ASSOCIATES / BRAND PORTFOLIO</span>
            <h1>Different brands.<br /><em>Distinct experiences.</em></h1>
            <p>Welcome to the Segol brand portfolio — a collection of businesses built for different customer needs, connected by one standard of thoughtful service and dependable delivery.</p>
            <a href="#portfolio" className="brands-hub-scroll">Explore the brands <ArrowDownRight size={18} /></a>
          </div>
          <div className="brands-hub-index">02 BUSINESSES / 01 GROUP</div>
        </section>

        <section className="brands-hub-intro" id="principle">
          <div className="brands-hub-label">THE SEGOL STANDARD</div>
          <div className="brands-hub-intro-grid">
            <h2>One group.<br /><span>Different worlds.</span></h2>
            <div><p className="large">Segol Associates is the group behind a growing portfolio of focused businesses. Each brand is designed to speak directly to its market instead of forcing every customer into the same corporate experience.</p><p>That means Topix can feel energetic and celebratory. Eternal Praise Water can feel clean and refreshing. The connection is the standard behind both: clear service, professional execution and a commitment to the customer.</p></div>
          </div>
        </section>

        <section className="brands-hub-portfolio" id="portfolio">
          <div className="brands-hub-section-head"><span>01 / OUR BUSINESSES</span><p>Enter each brand&apos;s own space to explore its services, visual identity and story.</p></div>
          <div className="brands-hub-cards">
            {brands.map((brand) => (
              <article className={`brands-hub-card ${brand.className}`} key={brand.name}>
                <div className="brands-hub-card-image"><img src={brand.image} alt={`${brand.name} brand showcase`} loading="lazy" /><div className="brands-hub-card-overlay" /></div>
                <div className="brands-hub-card-content">
                  <div className="brands-hub-card-top"><span>{brand.number}</span><small>{brand.type}</small></div>
                  <div><h3>{brand.name} <i>{brand.sub}</i></h3><p>{brand.text}</p></div>
                  <div className="brands-hub-tags">{brand.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <Link to={brand.href} className="brands-hub-enter">Enter brand <ExternalLink size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="brands-hub-manifesto">
          <div className="brands-hub-manifesto-mark"><Sparkles size={30} /></div>
          <div><span>THE PRINCIPLE</span><h2>Specialized focus.<br /><em>Shared standards.</em></h2><p>We let every business build its own personality while keeping the quality of the customer experience connected to the wider Segol standard.</p></div>
        </section>

        <section className="brands-hub-cta">
          <div><span>READY TO TALK?</span><h2>Looking for the<br /><em>right Segol business?</em></h2></div>
          <Link to="/contact">Start a conversation <ArrowRight size={18} /></Link>
        </section>
      </main>

      <footer className="brands-hub-footer"><Link to="/">SEGOL ASSOCIATES</Link><span>Brand portfolio / 2026</span><Link to="/contact">Contact <ArrowRight size={14} /></Link></footer>
    </div>
  )
}
