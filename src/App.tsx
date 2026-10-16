import { FormEvent, useState } from "react";

type IconName =
  | "arrow"
  | "check"
  | "close"
  | "code"
  | "figma"
  | "menu"
  | "play"
  | "slides"
  | "social"
  | "spark";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    code: <><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></>,
    figma: <><path d="M8 3h4v6H8a3 3 0 0 1 0-6Z" /><path d="M12 3h4a3 3 0 0 1 0 6h-4Z" /><path d="M8 9h4v6H8a3 3 0 0 1 0-6Z" /><path d="M12 9h4a3 3 0 1 1-4 0Z" /><path d="M8 15h4v3a3 3 0 1 1-4-3Z" /></>,
    menu: <><path d="M4 8h16" /><path d="M4 16h16" /></>,
    play: <path d="m9 7 8 5-8 5V7Z" />,
    slides: <><rect x="3" y="5" width="18" height="13" rx="1" /><path d="M7 9h6M7 12h10M7 15h7" /></>,
    social: <><circle cx="7" cy="12" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="17" cy="17" r="3" /><path d="m9.7 10.7 4.6-2.4M9.7 13.3l4.6 2.4" /></>,
    spark: <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const coffeeUrl = "https://design-dats-coffee-website.vercel.app/";
const figmaUrl = "https://www.figma.com/make/awXBP7mN7GqszzljWUhgCP/Smart-EV-Charging-Locator?t=jwnx05XrO7uuEq32-1";

const projects = [
  {
    number: "01",
    category: "Frontend Website Design",
    title: "Coffee Website",
    description: "A modern coffee website concept focused on visual presentation, brand atmosphere, and an engaging browsing experience.",
    cta: "View Live Website",
    href: coffeeUrl,
    type: "coffee",
    badge: "Live website",
  },
  {
    number: "02",
    category: "UI/UX Design · Smart Mobility",
    title: "Smart EV Charging Locator",
    description: "A smart electric vehicle charging locator concept designed to help EV users discover charging stations and explore a more convenient charging experience.",
    cta: "Explore Figma Prototype",
    href: figmaUrl,
    type: "ev",
    badge: "Figma prototype",
  },
  {
    number: "03",
    category: "Presentation Design · Educational Content",
    title: "Burndown Chart Presentation",
    description: "An 8-slide presentation explaining burndown charts, their key components, ideal versus actual progress, and their use in Agile project management.",
    cta: "View Presentation",
    type: "presentation",
    badge: "Asset needed",
  },
  {
    number: "04",
    category: "AI Video Creation · Product Advertising",
    title: "AI Skincare Product Advertisement",
    description: "A short AI-generated skincare product advertisement featuring warm cinematic lighting, elegant product close-ups, and a premium beauty-campaign aesthetic.",
    cta: "Watch AI Video",
    type: "video",
    badge: "10-second video · Asset needed",
  },
];

const services: { icon: IconName; number: string; title: string; text: string }[] = [
  { icon: "play", number: "01", title: "AI Video Ads", text: "Short product advertisements, cinematic AI visuals, and promotional content built to capture attention." },
  { icon: "slides", number: "02", title: "Presentation Design", text: "Professional presentations, pitch decks, educational slides, and clear visual storytelling." },
  { icon: "social", number: "03", title: "Social Media Design", text: "Posters, carousels, promotional graphics, thumbnails, and consistent branded content." },
  { icon: "code", number: "04", title: "Frontend Website Design", text: "Responsive landing pages, portfolios, small-business websites, and polished UI implementation." },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Maviya Creative Lab home">
        <span className="brand-symbol">M</span>
        <span>MAVIYA <b>CREATIVE LAB</b></span>
      </a>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {["Work", "Services", "Process", "About", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">Start a project <Icon name="arrow" size={17} /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <Icon name={open ? "close" : "menu"} />
      </button>
    </header>
  );
}

function HeroComposition() {
  return (
    <div className="hero-art" aria-label="Creative digital media composition">
      <div className="hero-glow" />
      <div className="chrome-orb" />
      <div className="media-card website-preview">
        <div className="browser-top"><i /><i /><i /></div>
        <div className="coffee-page">
          <span>BRØW</span>
          <strong>Crafted<br />with care.</strong>
          <div className="coffee-cup"><i /></div>
        </div>
      </div>
      <div className="media-card slide-preview">
        <small>PROJECT / 2025</small>
        <strong>Ideas in<br /><em>motion.</em></strong>
        <div className="slide-chart"><i /><i /><i /><i /></div>
      </div>
      <div className="media-card video-preview">
        <div className="product-bottle"><span>M</span></div>
        <span className="play-dot"><Icon name="play" size={18} /></span>
        <small>AI FILM · 00:10</small>
      </div>
      <div className="glass-loop" />
      <span className="art-caption">MULTIDISCIPLINARY CREATIVE PRACTICE</span>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "coffee") {
    return (
      <div className="project-art coffee-art">
        <div className="project-browser">
          <div className="browser-bar"><span /><span /><span /><i>design-dats-coffee-website.vercel.app</i></div>
          <div className="coffee-site">
            <nav><b>CO.</b><span>Home &nbsp; Story &nbsp; Shop</span></nav>
            <p>SLOW MORNINGS<br /><em>START HERE.</em></p>
            <div className="cup-large"><i /></div>
            <small>FRESHLY ROASTED · THOUGHTFULLY MADE</small>
          </div>
        </div>
      </div>
    );
  }
  if (type === "ev") {
    return (
      <div className="project-art ev-art">
        <div className="ev-phone">
          <div className="phone-head"><b>ChargeMap</b><span>•••</span></div>
          <div className="map-lines" />
          <i className="map-pin pin-one"><span /></i>
          <i className="map-pin pin-two"><span /></i>
          <i className="map-pin pin-three"><span /></i>
          <div className="station-card"><span className="bolt">ϟ</span><div><b>Fast charger</b><small>Available · 1.2 km</small></div></div>
        </div>
        <div className="ev-copy"><span>SMART MOBILITY</span><strong>Find. Charge.<br />Keep moving.</strong></div>
      </div>
    );
  }
  if (type === "presentation") {
    return (
      <div className="project-art presentation-art">
        <div className="slide slide-back"><span>02</span><b>Key components</b><div className="bars"><i /><i /><i /></div></div>
        <div className="slide slide-mid"><span>05</span><b>Ideal vs actual</b><div className="mini-chart"><i /><i /></div></div>
        <div className="slide slide-front"><span>01 / 08</span><small>AGILE PROJECT MANAGEMENT</small><b>Understanding<br /><em>Burndown Charts</em></b><p>Progress, visualized clearly.</p></div>
        <span className="placeholder-note">Replace with actual slide exports</span>
      </div>
    );
  }
  return (
    <div className="project-art video-art">
      <div className="video-stage">
        <div className="video-halo" />
        <div className="skincare-bottle"><span>MAVIYA</span><b>ÉLAN</b><small>SKIN SERUM</small></div>
        <div className="video-play"><Icon name="play" size={24} /></div>
        <div className="video-time">00:10</div>
      </div>
      <span className="placeholder-note">Replace with actual video thumbnail / MP4</span>
    </div>
  );
}

function SectionHeader({ number, label, title, intro }: { number: string; label: string; title: string; intro?: string }) {
  return (
    <div className="section-header">
      <p><span>{number}</span>{label}</p>
      <div><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
    </div>
  );
}

export default function App() {
  const [assetDialog, setAssetDialog] = useState<"presentation" | "video" | null>(null);
  const [formNotice, setFormNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNotice(true);
  };

  return (
    <main id="top">
      <Header />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span />AI CONTENT · DESIGN · FRONTEND DEVELOPMENT</p>
          <h1>Turning Ideas Into <em>Digital Experiences.</em></h1>
          <p className="hero-intro">I create AI-powered video content, compelling presentations, and modern websites that help ideas stand out.</p>
          <div className="button-row">
            <a className="button primary-button" href="#work">Explore My Work <Icon name="arrow" size={18} /></a>
            <a className="button secondary-button" href="#contact">Let’s Work Together</a>
          </div>
          <div className="hero-note"><span>Available for freelance projects</span><i />Based online · Working worldwide</div>
        </div>
        <HeroComposition />
        <a href="#work" className="scroll-hint"><span>Scroll</span><i /></a>
      </section>

      <section className="work section" id="work">
        <SectionHeader number="01" label="Selected work" title="Real Projects. Thoughtful Execution." intro="A focused selection across websites, product experiences, presentations, and AI-generated video." />
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.type}`} key={project.number}>
              <div className="project-visual">
                <ProjectVisual type={project.type} />
                <span className={`project-badge ${project.href ? "is-live" : ""}`}>{project.badge}</span>
              </div>
              <div className="project-info">
                <div className="project-number">{project.number}</div>
                <div className="project-copy">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.href ? (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      {project.cta}<Icon name="arrow" size={18} />
                    </a>
                  ) : (
                    <button className="project-link" onClick={() => setAssetDialog(project.type as "presentation" | "video")}>
                      {project.cta}<Icon name="arrow" size={18} />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <SectionHeader number="02" label="What I create" title="Focused Services for Digital Ideas." intro="Flexible creative support for founders, small businesses, creators, students, and growing teams." />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><div><Icon name={service.icon} size={24} /></div></div>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <a href="#contact">Discuss a project <Icon name="arrow" size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <SectionHeader number="03" label="Creative process" title="Clear Steps. Better Outcomes." />
        <div className="process-line">
          {[
            ["01", "Discover", "Understand your objective, audience, deliverables, and what success should look like."],
            ["02", "Plan", "Shape the content, visual direction, references, structure, and production approach."],
            ["03", "Create", "Design and build the agreed deliverable with care, clarity, and strong visual judgment."],
            ["04", "Refine", "Use your feedback to improve the details and prepare the final files for delivery."],
          ].map(([number, title, text]) => (
            <article key={number}>
              <div className="process-marker"><span>{number}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-art">
          <div className="about-grid" />
          <div className="about-orb"><span /></div>
          <div className="about-disc" />
          <span className="about-caption">CURIOSITY × TECHNOLOGY × CRAFT</span>
        </div>
        <div className="about-copy">
          <p className="section-label"><span>04</span>About</p>
          <h2>Creative Thinking Meets <em>Technology.</em></h2>
          <p className="about-lead">I’m a Computer Science student specializing in AI and Analytics, exploring the intersection of technology, visual storytelling, and digital experiences.</p>
          <p>I enjoy turning ideas into useful, engaging digital work through AI tools, design, and frontend development.</p>
          <div className="about-values">
            <div><span>01</span><p>Thoughtful visual decisions</p></div>
            <div><span>02</span><p>Curiosity-led exploration</p></div>
            <div><span>03</span><p>Clear, honest collaboration</p></div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro">
          <p className="section-label"><span>05</span>Project inquiry</p>
          <h2>Have an Idea?<br /><em>Let’s Build It.</em></h2>
          <p>Tell me what you’re working on, and let’s explore how I can help bring it to life.</p>
          <div className="contact-details">
            <div><span>Email</span><p>Add your email address</p></div>
            <div><span>Social</span><p>Add LinkedIn · Instagram · Behance</p></div>
          </div>
        </div>
        <div className="form-panel">
          <form onSubmit={handleSubmit}>
            <div className="field-row">
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
            </div>
            <div className="field-row">
              <label>Service required
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>AI Video Ads</option><option>Presentation Design</option><option>Social Media Design</option><option>Frontend Website Design</option>
                </select>
              </label>
              <label>Budget range
                <select name="budget" required defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option>Still exploring</option><option>Small, focused task</option><option>Multi-deliverable project</option><option>Custom scope</option>
                </select>
              </label>
            </div>
            <label>Project description<textarea name="description" required rows={5} placeholder="What would you like to create? Share your goal, timeline, and any helpful context." /></label>
            <button className="submit-button" type="submit">Send Project Inquiry <Icon name="arrow" size={18} /></button>
          </form>
          {formNotice && (
            <div className="form-notice" role="status">
              <Icon name="spark" size={18} />
              <p><strong>Form design complete — integration required.</strong> Connect your preferred form service or backend endpoint to receive submissions. No message was sent.</p>
              <button onClick={() => setFormNotice(false)} aria-label="Dismiss notice"><Icon name="close" size={17} /></button>
            </div>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="brand"><span className="brand-symbol">M</span><span>MAVIYA <b>CREATIVE LAB</b></span></div>
          <p>Creative Ideas. Intelligent Design. Digital Experiences.</p>
        </div>
        <div className="footer-bottom">
          <nav aria-label="Footer navigation">{["Work", "Services", "Process", "About", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
          <div className="social-links"><span>Email</span><span>LinkedIn</span><span>Instagram</span><small>Editable links</small></div>
          <p>© {new Date().getFullYear()} Maviya Creative Lab</p>
        </div>
      </footer>

      {assetDialog && (
        <div className="dialog-backdrop" onMouseDown={() => setAssetDialog(null)}>
          <div className="asset-dialog" role="dialog" aria-modal="true" aria-labelledby="asset-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="dialog-close" onClick={() => setAssetDialog(null)} aria-label="Close"><Icon name="close" /></button>
            <div className="dialog-icon"><Icon name={assetDialog === "video" ? "play" : "slides"} size={28} /></div>
            <p>Portfolio asset required</p>
            <h2 id="asset-title">{assetDialog === "video" ? "Add the skincare video" : "Add the presentation slides"}</h2>
            <p>{assetDialog === "video"
              ? "Upload the original 10-second video as an MP4 or WebM file. It can then replace this placeholder with inline playback, controls, and a real thumbnail."
              : "Upload the PowerPoint or PDF, plus exported slide images if available. The actual slides can then replace this mockup as a carousel with a presentation download or preview."}</p>
            <button className="dialog-action" onClick={() => setAssetDialog(null)}>Understood <Icon name="check" size={17} /></button>
          </div>
        </div>
      )}
    </main>
  );
}
