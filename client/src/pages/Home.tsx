import { useEffect, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, Check, ChevronDown, ChevronUp, Compass, Globe2, Layers, Mail, MapPin, Menu, Phone, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import BrandLogo from "../components/BrandLogo";
import { businesses } from "../data/businesses";

const cardSummaries: Record<string, string> = {
  media: "Podcasts, monthly magazines, PR, and digital storytelling for brands and leaders.",
  properties: "Residential, commercial, and land investments guided with transparency.",
  workforce: "Connecting job aspirants with career opportunities and employers with right-fit talent.",
  "social-foundation": "Education, healthcare, women empowerment, youth skilling, and community welfare across Maharashtra and India.",
};

const valuePillars = [
  {
    icon: Compass,
    title: "Clarity",
    copy: "Straightforward advice, transparent communication, and well-defined outcomes at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Credibility",
    copy: "Reputation built on dependable execution, ethical standards, and domain-specific expertise.",
  },
  {
    icon: Users,
    title: "Care",
    copy: "Personal attention tailored to every founder, home seeker, investor, candidate, and employer.",
  },
  {
    icon: Layers,
    title: "Long-term Value",
    copy: "Decisions, spaces, and partnerships designed to endure and compound over time.",
  },
];

export function SiteHeader({ activeSlug }: { activeSlug?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="home-brand" aria-label="Global India Group home">
          <BrandLogo compact />
        </Link>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          <Link
            href="/"
            className={`nav-link ${!activeSlug ? "nav-active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            The Group
          </Link>
          {businesses.map((business) => (
            <Link
              key={business.slug}
              href={`/${business.slug}`}
              className={`nav-link ${activeSlug === business.slug ? "nav-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-dot" style={{ background: business.brand }} aria-hidden="true" />
              {business.shortName}
            </Link>
          ))}
          {activeSlug ? (
            <a href="#enquiry" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Make an enquiry <ArrowUpRight size={15} />
            </a>
          ) : (
            <a href="#businesses" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Explore businesses <ArrowUpRight size={15} />
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <BrandLogo inverse />
            <p className="footer-tagline">
              Specialist enterprises and social initiatives—united by clarity, credibility, and a shared commitment to helping people, places, and ideas move forward.
            </p>
            <div className="footer-meta-badges">
              <span><Globe2 size={14} /> Nagpur · India</span>
              <a href="https://globalindianagpur.com" target="_blank" rel="noreferrer">
                globalindianagpur.com <ArrowUpRight size={13} />
              </a>
              <a href="mailto:contact@globalindianagpur.com">
                <Mail size={13} /> contact@globalindianagpur.com
              </a>
              <a href="tel:+919373216266">
                <Phone size={13} /> +91 9373216266
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Our Group Verticals</h4>
            <ul>
              {businesses.map((b) => (
                <li key={b.slug}>
                  <Link href={`/${b.slug}`}>
                    <span>{b.name}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Direct Enquiries</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">General & Media Enquiries</span>
                <a href="mailto:contact@globalindianagpur.com">contact@globalindianagpur.com</a>
              </li>
              <li>
                <span className="contact-label">Careers & Hiring</span>
                <a href="mailto:careers@globalindianagpur.com">careers@globalindianagpur.com</a>
              </li>
              <li>
                <span className="contact-label">Director’s Office</span>
                <a href="mailto:director@globalindianagpur.com">director@globalindianagpur.com</a>
              </li>
              <li>
                <span className="contact-label">Contact Number</span>
                <a href="tel:+919373216266">+91 9373216266</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Global India Group. All rights reserved.</span>
          <div className="footer-bottom-right">
            <span>People · Places · Possibilities</span>
            <span className="footer-bottom-sep" aria-hidden="true">·</span>
            <span className="footer-built-by">
              Built by{" "}
              <a
                href="https://growitate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-growitate-link"
              >
                GROWITATE
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [location] = useLocation();
  const [directorExpanded, setDirectorExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = "Global India Group | People, Places & Possibilities";
  }, [location]);

  return (
    <div className="site-shell home-page">
      <SiteHeader />
      <main>
        <section className="home-hero section-wrap">
          <div className="home-hero-copy">
            <BrandLogo className="hero-group-mark" />
            <h1>
              Different strengths.
              <br />
              <em>One wider vision.</em>
            </h1>
            <p className="hero-description">
              We bring together specialist businesses and social initiatives that help people, ideas and places move forward—across media &amp; communications, real estate development, workforce solutions, and community welfare.
            </p>
            <div className="hero-cta-group">
              <a className="button button-dark" href="#businesses">
                Explore our businesses <ArrowDown size={16} />
              </a>
              <a className="button button-outline" href="#values">
                Our group philosophy <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-dot" /> Rooted in Nagpur. Connected to opportunity across India.
            </div>
          </div>

          <div className="home-hero-visual" aria-label="A glimpse of our connected businesses">
            <div className="visual-rings" aria-hidden="true" />
            <Link href="/media" className="hero-photo photo-main">
              <img src={businesses[0].heroImage} alt="An Indian business founder speaking in a media studio" />
              <div className="hero-photo-overlay">
                <span className="hero-photo-tag">01 · MEDIA SERVICES</span>
                <strong>Stories &amp; Visibility</strong>
              </div>
            </Link>
            <Link href="/properties" className="hero-photo photo-small photo-property">
              <img src={businesses[1].heroImage} alt="A contemporary Indian home surrounded by greenery" />
              <div className="hero-photo-overlay">
                <span className="hero-photo-tag">02 · GLOBAL PROPERTIES</span>
                <strong>Places &amp; Value</strong>
              </div>
            </Link>
            <Link href="/workforce" className="hero-photo photo-small photo-people">
              <img src={businesses[2].heroImage} alt="An Indian candidate meeting with a recruiter" />
              <div className="hero-photo-overlay">
                <span className="hero-photo-tag">03 · WORKFORCE SOLUTIONS</span>
                <strong>People &amp; Potential</strong>
              </div>
            </Link>
            <div className="visual-caption">
              <span className="caption-spark"><Sparkles size={20} /></span>
              <div>
                <span>Connected verticals &amp; foundation.</span>
                <br />
                <b>One shared standard of trust.</b>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ABOUT GLOBAL INDIA GROUP
            ========================================================================= */}
        <section id="about" className="about-section section-wrap">
          {/* 1. Header */}
          <div className="about-header">
            <div className="section-kicker">
              <span className="eyebrow-line" /> ABOUT GLOBAL INDIA GROUP
            </div>
            <h2>
              Building opportunities. <em>Connecting businesses.</em>
            </h2>
            <p className="about-intro-text">
              Nagpur-based diversified group across media, real estate, workforce solutions, business services, and social welfare.
            </p>
          </div>

          {/* 2. Verticals (4 cards, number + title + one line) */}
          <div className="about-verticals-grid">
            <Link href="/media" className="about-card about-vertical-card about-vertical-card-media">
              <div className="about-vertical-row">
                <span className="about-vertical-num">01</span>
                <span className="about-card-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="about-vertical-title">Global India Media Services</h3>
              <p className="about-vertical-desc">Branding · Content · PR &amp; Media</p>
            </Link>

            <Link href="/properties" className="about-card about-vertical-card about-vertical-card-properties">
              <div className="about-vertical-row">
                <span className="about-vertical-num">02</span>
                <span className="about-card-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="about-vertical-title">Global Properties</h3>
              <p className="about-vertical-desc">Realty · Investments · Developments</p>
            </Link>

            <Link href="/workforce" className="about-card about-vertical-card about-vertical-card-workforce">
              <div className="about-vertical-row">
                <span className="about-vertical-num">03</span>
                <span className="about-card-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="about-vertical-title">India Workforce Solutions</h3>
              <p className="about-vertical-desc">Recruitment · Staffing · Careers</p>
            </Link>

            <Link href="/social-foundation" className="about-card about-vertical-card about-vertical-card-foundation">
              <div className="about-vertical-row">
                <span className="about-vertical-num">04</span>
                <span className="about-card-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="about-vertical-title">Global India Social Foundation</h3>
              <p className="about-vertical-desc">Education · Healthcare · Welfare</p>
            </Link>
          </div>

          {/* 3. Unified Vision & Mission Duo-Gradient Banner */}
          <div className="about-vm-banner">
            <div className="about-vm-vision">
              <div className="about-sub-eyebrow">
                <span className="eyebrow-dot" /> Our Vision
              </div>
              <blockquote className="about-vision-statement">
                “A trusted multi-sector business group serving India and international markets.”
              </blockquote>
            </div>

            <div className="about-vm-divider" aria-hidden="true" />

            <div className="about-vm-mission">
              <div className="about-sub-eyebrow">
                <span className="eyebrow-dot" /> Our Mission
              </div>
              <div className="about-mission-pillars">
                <div className="about-mission-pillar">
                  <span className="pillar-bullet"><Check size={13} strokeWidth={3} /></span>
                  <span>Professionally managed, value-driven entities</span>
                </div>
                <div className="about-mission-pillar">
                  <span className="pillar-bullet"><Check size={13} strokeWidth={3} /></span>
                  <span>Employment &amp; business opportunities</span>
                </div>
                <div className="about-mission-pillar">
                  <span className="pillar-bullet"><Check size={13} strokeWidth={3} /></span>
                  <span>Innovation, trust &amp; long-term partnerships</span>
                </div>
                <div className="about-mission-pillar">
                  <span className="pillar-bullet"><Check size={13} strokeWidth={3} /></span>
                  <span>Responsible, sustainable expansion</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Values: Pill chips */}
          <div className="about-values-strip">
            <div className="about-values-chips">
              {[
                "Integrity",
                "Transparency",
                "Professionalism",
                "Innovation",
                "Commitment",
                "Trust",
                "Growth",
              ].map((val) => (
                <span key={val} className="about-value-chip">
                  <span className="about-chip-dot" aria-hidden="true" />
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Director Profile (Single Executive Showcase: Arjun Krishnaraj Bhojraj) */}
          <div className="about-leadership-block">
            <div className={`about-card about-director-showcase ${directorExpanded ? "is-expanded" : "is-collapsed"}`}>
              {/* Header: Avatar, Name, Role, Location, Direct Email */}
              <div className="director-showcase-header">
                <div className="director-showcase-profile">
                  <div className="director-avatar" aria-hidden="true">
                    <span>AB</span>
                  </div>
                  <div className="director-meta">
                    <h3 className="director-name">Arjun Krishnaraj Bhojraj</h3>
                    <div className="director-subline">
                      <span className="director-role">Director · Global India Group</span>
                      <span className="director-loc">
                        <MapPin size={13} /> Nagpur, Maharashtra, India
                      </span>
                    </div>
                  </div>
                </div>

                <div className="director-contact-badges">
                  <a href="tel:+919373216266" className="director-email-badge">
                    <Phone size={14} />
                    <span>+91 9373216266</span>
                  </a>
                  <a href="mailto:director@globalindianagpur.com" className="director-email-badge">
                    <Mail size={14} />
                    <span>director@globalindianagpur.com</span>
                  </a>
                </div>
              </div>

              {/* Compact Summary (Always Visible) */}
              <div className="director-compact-summary">
                <p className="director-bio-lead">
                  Arjun Krishnaraj Bhojraj is the Director of Global India Group, Nagpur, Maharashtra. He is an entrepreneur with an interest in business development, entrepreneurship, media, infrastructure, workforce solutions and social welfare.
                </p>
                <div className="director-compact-chips">
                  <span className="director-chip">
                    <span className="director-chip-dot" /> Media &amp; Communication
                  </span>
                  <span className="director-chip">
                    <span className="director-chip-dot" /> Real Estate &amp; Infrastructure
                  </span>
                  <span className="director-chip">
                    <span className="director-chip-dot" /> Workforce Solutions
                  </span>
                  <span className="director-chip">
                    <span className="director-chip-dot" /> Social Foundation
                  </span>
                </div>
              </div>

              {/* Expandable Extended Details */}
              {directorExpanded && (
                <div className="director-expanded-content">
                  <div className="director-showcase-body">
                    {/* Left Column: Full Bio & Detailed Business Sectors */}
                    <div className="director-info-col">
                      <p className="director-bio-text">
                        With a vision to build a diversified business group, he believes in creating opportunities, encouraging entrepreneurship and developing business initiatives that contribute to economic progress. His business vision focuses on connecting local opportunities with national and international markets while developing a strong foundation across multiple sectors.
                      </p>

                      <div className="director-sectors-box">
                        <div className="director-sectors-label">Sector Capabilities</div>
                        <div className="director-sectors-list">
                          <div className="director-sector-item">
                            <span className="director-sector-dot" />
                            <div>
                              <strong>Media &amp; Communication:</strong> Digital media, news, journalism, magazines and podcast interviews.
                            </div>
                          </div>
                          <div className="director-sector-item">
                            <span className="director-sector-dot" />
                            <div>
                              <strong>Real Estate &amp; Infrastructure:</strong> Property development, real estate and construction-related activities.
                            </div>
                          </div>
                          <div className="director-sector-item">
                            <span className="director-sector-dot" />
                            <div>
                              <strong>Workforce Solutions:</strong> Employment opportunities, manpower services and workforce development.
                            </div>
                          </div>
                          <div className="director-sector-item">
                            <span className="director-sector-dot" />
                            <div>
                              <strong>Social Foundation:</strong> Education, healthcare, women empowerment, youth development and community welfare.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Vision & Leadership Philosophy */}
                    <div className="director-philosophy-col">
                      {/* Vision Callout */}
                      <div className="director-vision-card">
                        <div className="director-callout-kicker">Vision</div>
                        <blockquote className="director-vision-quote">
                          “To build a diversified and professionally managed business group that connects India with global opportunities through innovation, entrepreneurship and sustainable business development.”
                        </blockquote>
                      </div>

                      {/* Philosophy Box */}
                      <div className="director-philosophy-card">
                        <div className="director-callout-kicker">Leadership Philosophy</div>
                        <p className="director-philosophy-text">
                          Arjun Krishnaraj Bhojraj believes in long-term business relationships, professional integrity, continuous growth, teamwork and creating meaningful opportunities.
                        </p>
                        <p className="director-philosophy-subtext">
                          His approach is guided by the belief that business should create economic value through responsible and professional management.
                        </p>
                      </div>

                      {/* Group Motto Ribbon */}
                      <div className="director-motto-ribbon">
                        <Sparkles size={16} className="director-motto-sparkle" />
                        <span>Global India Group · Nagpur · <em>Our Vision. Our Commitment. Our Future.</em></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* View More / View Less Toggle Button */}
              <div className="director-toggle-row">
                <button
                  type="button"
                  className="director-toggle-btn"
                  aria-expanded={directorExpanded}
                  onClick={() => setDirectorExpanded((prev) => !prev)}
                >
                  <span>{directorExpanded ? "View Less" : "View Full Profile & Vision"}</span>
                  {directorExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* 6. Closing line */}
          <div className="about-closing">
            <div className="about-closing-card">
              <span className="about-closing-spark" aria-hidden="true">
                <Sparkles size={20} />
              </span>
              <p className="about-closing-line">
                “Connecting People, Businesses and Opportunities.”
              </p>
            </div>
          </div>
        </section>

        <section className="group-intro section-wrap">
          <div className="group-intro-card">
            <div className="group-intro-copy">
              <div className="section-kicker group-intro-kicker">
                <span className="eyebrow-line" /> A group built around connection
              </div>
              <h2 className="group-intro-title">
                Expertise with a<br />
                <em>human point of view.</em>
              </h2>
              <p className="group-intro-desc">
                Every enterprise in the Global India Group has its own craft, leadership focus, and identity. Together, they form an integrated platform for public visibility, dependable real estate, and meaningful career advancement.
              </p>
              <div className="group-intro-actions">
                <a href="#businesses" className="group-intro-cta">
                  <span>Explore The Companies</span>
                  <ArrowDown size={15} />
                </a>
              </div>
            </div>

            <div className="group-intro-badge">
              <div className="group-intro-logo-wrap">
                <BrandLogo />
              </div>
              <p className="group-intro-badge-caption">Diversified Enterprise Ecosystem · Nagpur</p>
              <div className="group-intro-sectors">
                <Link to="/media" className="group-intro-sector">
                  Media
                </Link>
                <span className="group-intro-sector-dot" aria-hidden="true" />
                <Link to="/properties" className="group-intro-sector">
                  Properties
                </Link>
                <span className="group-intro-sector-dot" aria-hidden="true" />
                <Link to="/workforce" className="group-intro-sector">
                  Workforce
                </Link>
                <span className="group-intro-sector-dot" aria-hidden="true" />
                <Link to="/social-foundation" className="group-intro-sector">
                  Social Foundation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="businesses" className="businesses-section section-wrap">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">
                <span className="eyebrow-line" /> The companies
              </div>
              <h2>
                Find the right <em>specialist.</em>
              </h2>
            </div>
            <p>Select a vertical below to explore its dedicated capabilities, portfolio context, and enquiry channel.</p>
          </div>

          <div className="business-card-list">
            {businesses.map((business, index) => (
              <Link
                key={business.slug}
                href={`/${business.slug}`}
                className={`business-card business-card-${business.slug}`}
                style={{ "--brand": business.brand, "--brand-soft": business.soft, "--brand-ink": business.ink } as CSSProperties}
              >
                <div className="business-card-top">
                  <BrandLogo kind={business.logo} compact />
                  <span className="card-index">0{index + 1}</span>
                </div>
                <div className="business-card-image">
                  <img src={business.heroImage} alt={business.heroAlt} loading="lazy" />
                  <span className="card-arrow" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <div className="business-card-copy">
                  <h3>{business.name}</h3>
                  <p>{cardSummaries[business.slug] ?? business.intro}</p>
                  <span className="text-link">
                    Explore {business.shortName} <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="values" className="group-values-wrap section-wrap">
          <div className="group-values">
            <div className="values-top">
              <div className="values-heading">
                <span className="section-kicker">
                  <span className="eyebrow-line" /> How we work
                </span>
                <h2>
                  Built on trust.
                  <br />
                  <em>Made for what’s next.</em>
                </h2>
              </div>
              <div className="values-body">
                <p>
                  Good connections make lasting progress possible. Across every media campaign, property transaction, and career placement, we uphold clear communication, responsible guidance, and a people-first approach.
                </p>
              </div>
            </div>

            <div className="values-grid">
              {valuePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="value-card">
                    <div className="value-card-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.copy}</p>
                  </div>
                );
              })}
            </div>

            <span className="values-orbit orbit-one" aria-hidden="true" />
            <span className="values-orbit orbit-two" aria-hidden="true" />
          </div>
        </section>

        <section className="home-contact section-wrap">
          <div>
            <span className="section-kicker">
              <span className="eyebrow-line" /> The next conversation
            </span>
            <h2>
              Let’s find where
              <br />
              <em>we can help.</em>
            </h2>
          </div>
          <p>
            Whether you’re building a brand presence, investing in residential or commercial property, strengthening your workforce, or collaborating on social welfare, connect directly with our specialist team.
          </p>
          <div className="home-contact-actions">
            <a className="button button-dark" href="#businesses">
              Choose a business <ArrowRight size={16} />
            </a>
            <a
              className="button button-outline"
              href="tel:+919373216266"
            >
              +91 9373216266 <Phone size={16} />
            </a>
            <a
              className="button button-outline"
              href="mailto:contact@globalindianagpur.com"
            >
              Email Group <Mail size={16} />
            </a>
            <a
              className="button button-outline"
              href="https://globalindianagpur.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit Group Portal <Building2 size={16} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
