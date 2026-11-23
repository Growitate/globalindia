import { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  Globe2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Briefcase,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import BrandLogo from "../components/BrandLogo";
import { businessBySlug } from "../data/businesses";
import { socialFoundationData } from "../data/socialFoundation";
import { EnquiryForm, OtherBusinesses } from "./BusinessPage";
import { SiteFooter, SiteHeader } from "./Home";

const PARTNER_ICONS = [
  Landmark,
  Building2,
  GraduationCap,
  HeartPulse,
  HandHeart,
  Briefcase,
  Users,
  Globe2,
];

export default function SocialFoundationPage() {
  const business = businessBySlug("social-foundation");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setSelectedService("");
    document.title = `${socialFoundationData.brandName} | Global India Group`;
  }, []);

  if (!business) return null;

  const style = {
    "--brand": business.brand,
    "--brand-soft": business.soft,
    "--brand-ink": business.ink,
  } as CSSProperties;

  const handleSelectInterest = (interest: string) => {
    setSelectedService(interest);
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="site-shell business-page business-social-foundation" style={style}>
      <div className="business-top-accent" aria-hidden="true" />
      <SiteHeader activeSlug={business.slug} />

      <main>
        {/* Hero */}
        <section className="business-hero section-wrap">
          <div className="business-hero-copy">
            <BrandLogo kind="foundation" className="business-hero-logo" />

            <div className="foundation-hero-badges">
              <span className="foundation-motto-pill">{socialFoundationData.mottoHindi}</span>
              <span className="foundation-hq-pill">
                <MapPin size={13} /> Head Office: {socialFoundationData.headOffice}
              </span>
            </div>

            <h1>
              Empowering People.
              <br />
              Transforming Communities.
              <br />
              <em>Building a Better India.</em>
            </h1>

            <p className="business-hero-intro">
              <strong>{socialFoundationData.legalName}</strong> ({socialFoundationData.brandName}) — creating inclusive, sustainable change across{" "}
              {socialFoundationData.focusAreas.join(", ")}.
            </p>

            <div className="business-hero-actions">
              <a className="button button-brand" href="#enquiry">
                Partner or Enquire <ArrowRight size={16} />
              </a>
              <a className="button button-outline" href="#initiatives">
                7 Initiatives
              </a>
              <a className="button button-outline" href="#roadmap">
                Roadmap 2027–2031
              </a>
            </div>
          </div>

          <div className="business-hero-image">
            <img src={business.heroImage} alt={business.heroAlt} />
            <span className="image-index">
              {business.shortName} <i>—</i> 01
            </span>
            <div className="image-quote">
              <Sparkles size={16} />
              <span>Together for Society. Together for Change.</span>
            </div>
          </div>

          <div className="hero-vertical-label">GLOBAL INDIA SOCIAL FOUNDATION</div>
        </section>

        {/* SECTION 1: About Us, Vision, Mission & 10 Objectives */}
        <section id="about-foundation" className="business-intro section-wrap foundation-section">
          <div className="section-kicker">
            <span className="eyebrow-line" /> Section 01 · About Us, Vision, Mission &amp; Objectives
          </div>

          <div className="business-intro-main">
            <h2>
              Meaningful social impact,
              <br />
              <em>rooted in Nagpur.</em>
            </h2>
            <div className="business-intro-text">
              {socialFoundationData.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="audience-callout">
                <MapPin size={18} />
                <span>
                  Head Office: {socialFoundationData.headOffice} · {socialFoundationData.mottoHindi}
                </span>
              </div>
            </div>
          </div>

          {/* Vision & Mission Duo Banner */}
          <div className="about-vm-banner foundation-vm-banner">
            <div className="about-vm-vision">
              <div className="about-sub-eyebrow">
                <span className="eyebrow-dot" /> Our Vision
              </div>
              <blockquote className="about-vision-statement">
                “{socialFoundationData.vision}”
              </blockquote>
            </div>

            <div className="about-vm-divider" aria-hidden="true" />

            <div className="about-vm-mission">
              <div className="about-sub-eyebrow">
                <span className="eyebrow-dot" /> Our Mission
              </div>
              <p className="foundation-mission-copy">{socialFoundationData.mission}</p>
            </div>
          </div>

          {/* 10 Objectives */}
          <div className="foundation-objectives-block">
            <div className="foundation-subheading">
              <span className="section-kicker">
                <Target size={14} /> Our Objectives
              </span>
              <h3>Ten foundational commitments guiding every initiative</h3>
            </div>
            <div className="foundation-objectives-grid">
              {socialFoundationData.objectives.map((objective, index) => (
                <div key={objective} className="foundation-objective-card">
                  <span className="foundation-objective-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Our Services & Initiatives (7 Pillars) + In-Action Gallery */}
        <section id="initiatives" className="services-section section-wrap foundation-section">
          <div className="services-heading">
            <div>
              <span className="section-kicker">
                <span className="eyebrow-line" /> Section 02 · Our Services &amp; Initiatives
              </span>
              <h2>
                Seven pillars of
                <br />
                <em>community transformation.</em>
              </h2>
            </div>
            <p>
              Comprehensive grassroots programmes designed to uplift education, healthcare, livelihoods, and civic sustainability. Click any pillar to collaborate.
            </p>
          </div>

          <div className="service-list foundation-initiatives-list">
            {socialFoundationData.initiatives.map((initiative) => (
              <article
                key={initiative.title}
                className={`service-item foundation-initiative-card ${
                  selectedService === initiative.title ? "service-item-selected" : ""
                }`}
                onClick={() => handleSelectInterest(initiative.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectInterest(initiative.title);
                  }
                }}
              >
                <span className="service-number">{initiative.number}</span>
                <div className="service-item-body">
                  <h3>{initiative.title}</h3>
                  <ul className="foundation-initiative-bullets">
                    {initiative.items.map((item) => (
                      <li key={item}>
                        <Check size={14} className="foundation-bullet-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="service-enquire-hint">
                    Collaborate on this initiative <ArrowRight size={13} />
                  </span>
                </div>
                <span className="service-index-mark" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>

          <div className="gallery-grid foundation-gallery-grid">
            {business.gallery.map((image, index) => (
              <figure className={`gallery-frame gallery-frame-${index + 1}`} key={image.image}>
                <img src={image.image} alt={image.alt} loading="lazy" />
                <figcaption>
                  <span>0{index + 2}</span>
                  <div>
                    <strong>{image.caption}</strong>
                    <small>{image.alt}</small>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* SECTION 3: Partnership Network & Future Roadmap (2027–2031) */}
        <section id="roadmap" className="foundation-network-section section-wrap foundation-section">
          <div className="services-heading">
            <div>
              <span className="section-kicker">
                <span className="eyebrow-line" /> Section 03 · Partnerships &amp; Future Roadmap
              </span>
              <h2>
                Collaborative network.
                <br />
                <em>Roadmap for 2027–2031.</em>
              </h2>
            </div>
            <p>
              Connecting public institutions, CSR leaders, educators, healthcare providers, and volunteers to scale social impact across Maharashtra and beyond.
            </p>
          </div>

          <div className="foundation-dual-grid">
            {/* Partnership Network */}
            <div className="foundation-panel foundation-partners-panel">
              <div className="foundation-panel-header">
                <span className="foundation-panel-tag">Our Partnership Network</span>
                <h3>We welcome collaboration with:</h3>
              </div>
              <ul className="foundation-partner-list">
                {socialFoundationData.partnerships.map((partner, index) => {
                  const Icon = PARTNER_ICONS[index % PARTNER_ICONS.length];
                  return (
                    <li key={partner} className="foundation-partner-item">
                      <span className="foundation-partner-icon">
                        <Icon size={17} />
                      </span>
                      <span>{partner}</span>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                className="button button-brand foundation-panel-cta"
                onClick={() => handleSelectInterest("Partnership & CSR Collaboration")}
              >
                Propose a Partnership / CSR Collaboration <ArrowRight size={16} />
              </button>
            </div>

            {/* Future Roadmap (2027-2031) */}
            <div className="foundation-panel foundation-roadmap-panel">
              <div className="foundation-panel-header">
                <span className="foundation-panel-tag">
                  <Compass size={13} /> Strategic Horizon · 2027–2031
                </span>
                <h3>Our Future Roadmap (2027–2031)</h3>
              </div>
              <ol className="foundation-roadmap-list">
                {socialFoundationData.roadmap.map((milestone, index) => (
                  <li key={milestone} className="foundation-roadmap-item">
                    <span className="foundation-roadmap-step">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="foundation-roadmap-copy">
                      <p>{milestone}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* SECTION 4: Our Commitment & Direct Enquiry */}
        <section id="enquiry" className="enquiry-section-wrap section-wrap foundation-section">
          <div className="foundation-commitment-banner">
            <div className="foundation-commitment-inner">
              <span className="section-kicker foundation-commitment-kicker">
                <span className="eyebrow-line" /> Section 04 · Our Commitment &amp; Connect
              </span>
              <h2>
                {socialFoundationData.closingMotto}
              </h2>
              <p className="foundation-commitment-text">{socialFoundationData.commitment}</p>
              <div className="foundation-commitment-meta">
                <div className="foundation-commitment-identity">
                  <strong>{socialFoundationData.legalName.toUpperCase()}</strong>
                  <span>{socialFoundationData.mottoHindi}</span>
                  <span>Head Office: {socialFoundationData.headOffice}</span>
                </div>
                <div className="foundation-focus-pills">
                  {socialFoundationData.focusAreas.map((area) => (
                    <span key={area} className="foundation-focus-pill">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="enquiry-section">
            <EnquiryForm
              slug={business.slug}
              name={business.name}
              email={business.email}
              formPrompt={business.formPrompt}
              services={business.services}
              selectedService={selectedService}
              onSelectService={setSelectedService}
              headquarters="Nagpur, Maharashtra · India"
              headquartersLabel="Head Office"
              extraInterests={[
                "Partnership & CSR Collaboration",
                "Volunteering & Community Support",
              ]}
              selectLabel="Initiative or collaboration area"
              messagePlaceholder="Share how you would like to collaborate, volunteer, partner on CSR, or support our initiatives across India…"
            />
          </div>
        </section>

        <OtherBusinesses currentSlug={business.slug} />
      </main>

      <SiteFooter />
    </div>
  );
}
