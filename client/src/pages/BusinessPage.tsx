import { useEffect, useState, type FormEvent, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, Globe2, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Link } from "wouter";
import BrandLogo from "../components/BrandLogo";
import MediaMagazines from "../components/MediaMagazines";
import MediaPodcasts from "../components/MediaPodcasts";
import { businessBySlug, businesses } from "../data/businesses";
import { SiteFooter, SiteHeader } from "./Home";

export function EnquiryForm({
  slug,
  name,
  email,
  secondaryEmail,
  formPrompt,
  services,
  selectedService,
  onSelectService,
  headquarters = "Nagpur, Maharashtra · India",
  headquartersLabel = "Regional Headquarters",
  extraInterests = [],
  selectLabel = "Service of interest",
  messagePlaceholder = "Share a brief overview of your project, property requirement, or hiring/career goals…",
}: {
  slug: string;
  name: string;
  email?: string;
  secondaryEmail?: string;
  formPrompt: string;
  services: { title: string }[];
  selectedService: string;
  onSelectService: (service: string) => void;
  headquarters?: string;
  headquartersLabel?: string;
  extraInterests?: string[];
  selectLabel?: string;
  messagePlaceholder?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const contactName = String(form.get("name") ?? "");
    const contactEmail = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const interest = String(form.get("interest") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = `Enquiry for ${name} — ${interest}`;
    const body = [
      `Name: ${contactName}`,
      `Email: ${contactEmail}`,
      phone ? `Phone: ${phone}` : "",
      `Area of interest: ${interest}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
      return;
    }

    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
    } catch {
      setCopyFailed(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="enquiry-layout">
      <div className="enquiry-copy">
        <span className="section-kicker">
          <span className="eyebrow-line" /> Start a conversation
        </span>
        <h2>
          Tell us what
          <br />
          <em>you have in mind.</em>
        </h2>
        <p className="enquiry-lead">{formPrompt}</p>
        <p>
          Share a few details about your goals or requirements and our specialist team at <strong>{name}</strong> will take the conversation forward.
        </p>

        <div className="enquiry-contact-cards">
          {email ? (
            <a className="enquiry-contact-card" href={`mailto:${email}`}>
              <span className="enquiry-card-icon"><Mail size={18} /></span>
              <div>
                <span className="enquiry-card-label">Direct Email Channel</span>
                <strong>{email}</strong>
              </div>
              <ArrowUpRight size={16} className="enquiry-card-arrow" />
            </a>
          ) : (
            <a className="enquiry-contact-card" href="https://globalindianagpur.com" target="_blank" rel="noreferrer">
              <span className="enquiry-card-icon"><Globe2 size={18} /></span>
              <div>
                <span className="enquiry-card-label">Group Portal</span>
                <strong>globalindianagpur.com</strong>
              </div>
              <ArrowUpRight size={16} className="enquiry-card-arrow" />
            </a>
          )}

          {secondaryEmail && (
            <a className="enquiry-contact-card" href={`mailto:${secondaryEmail}`}>
              <span className="enquiry-card-icon"><Mail size={18} /></span>
              <div>
                <span className="enquiry-card-label">Alternative Direct Email</span>
                <strong>{secondaryEmail}</strong>
              </div>
              <ArrowUpRight size={16} className="enquiry-card-arrow" />
            </a>
          )}

          <a className="enquiry-contact-card" href="tel:+919373216266">
            <span className="enquiry-card-icon"><Phone size={18} /></span>
            <div>
              <span className="enquiry-card-label">Contact Number</span>
              <strong>+91 9373216266</strong>
            </div>
            <ArrowUpRight size={16} className="enquiry-card-arrow" />
          </a>

          <div className="enquiry-contact-card enquiry-contact-static">
            <span className="enquiry-card-icon"><MapPin size={18} /></span>
            <div>
              <span className="enquiry-card-label">{headquartersLabel}</span>
              <strong>{headquarters}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="form-card">
        {submitted ? (
          <div className="form-success" role="status">
            <span className="success-icon">
              <Check size={24} />
            </span>
            <span className="section-kicker">Enquiry prepared</span>
            <h3>{email ? "Your email draft is ready." : "Your enquiry details are ready."}</h3>
            <p>
              {email
                ? `A draft addressed to ${email} has been opened in your email client. Please review the details and press Send.`
                : copied
                ? "Your formatted enquiry has been copied to your clipboard. You can paste and send it directly via the Global India Group portal."
                : copyFailed
                ? "Please reach out through the Global India Group website and include your enquiry details."
                : "Please connect with Global India Group through its official website to complete your enquiry."}
            </p>
            <div className="form-success-actions">
              {email ? (
                <a href={`mailto:${email}`} className="button button-brand">
                  Open {email} <ArrowRight size={16} />
                </a>
              ) : (
                <a className="button button-brand" href="https://globalindianagpur.com" target="_blank" rel="noreferrer">
                  Open Global India Group <ArrowUpRight size={16} />
                </a>
              )}
              <button
                className="reset-form"
                onClick={() => {
                  setSubmitted(false);
                  setCopied(false);
                  setCopyFailed(false);
                }}
              >
                Prepare another enquiry
              </button>
            </div>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={handleSubmit} data-slug={slug}>
            <div className="form-card-header">
              <h3>Direct Enquiry Form</h3>
              <span>{name}</span>
            </div>
            <div className="form-row">
              <label>
                Full name
                <input name="name" type="text" autoComplete="name" placeholder="e.g. Rajesh Sharma" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone number <span className="optional">Optional</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
              </label>
              <label>
                {selectLabel}
                <select
                  name="interest"
                  value={selectedService}
                  onChange={(e) => onSelectService(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a capability…
                  </option>
                  {slug === "media" && (
                    <option value="Annual Magazine Subscription (12 Issues)">
                      Annual Magazine Subscription (12 Issues / 1 Year)
                    </option>
                  )}
                  {extraInterests.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                  {selectedService &&
                    selectedService !== "Annual Magazine Subscription (12 Issues)" &&
                    !extraInterests.includes(selectedService) &&
                    !services.some((s) => s.title === selectedService) && (
                      <option value={selectedService}>{selectedService}</option>
                    )}
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              How can we help?
              <textarea
                name="message"
                rows={4}
                placeholder={messagePlaceholder}
                required
              />
            </label>
            <div className="form-footer-row">
              <button className="button button-brand form-submit" type="submit">
                {email ? "Prepare email enquiry" : "Copy & prepare enquiry"} <ArrowRight size={16} />
              </button>
              <p className="form-privacy">
                {email ? (
                  <>Opens directly in your default email client. No personal data is stored on this server.</>
                ) : (
                  <>Copies formatted enquiry details and directs you to the official group portal.</>
                )}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function OtherBusinesses({ currentSlug }: { currentSlug: string }) {
  return (
    <section className="other-businesses section-wrap">
      <div className="other-businesses-header">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-line" /> Part of something broader
          </span>
          <h3>Explore other specialist verticals in the Global India Group</h3>
        </div>
        <Link href="/" className="text-link">
          View group overview <ArrowRight size={15} />
        </Link>
      </div>
      <div className="other-business-links">
        {businesses
          .filter((item) => item.slug !== currentSlug)
          .map((item) => (
            <Link
              to={`/${item.slug}`}
              key={item.slug}
              className="other-business-card"
              style={{ "--other-brand": item.brand, "--other-soft": item.soft } as CSSProperties}
            >
              <div className="other-business-card-top">
                <BrandLogo kind={item.logo} compact />
                <span className="other-business-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <span className="other-business-desc">{item.descriptor}</span>
              <p>{item.tagline}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default function BusinessPage({ slug }: { slug: string }) {
  const business = businessBySlug(slug);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setSelectedService("");
    if (business) {
      document.title = `${business.name} | Global India Group`;
    }
  }, [slug, business]);

  if (!business) return null;

  const style = {
    "--brand": business.brand,
    "--brand-soft": business.soft,
    "--brand-ink": business.ink,
  } as CSSProperties;

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`site-shell business-page business-${business.slug}`} style={style}>
      <div className="business-top-accent" aria-hidden="true" />
      <SiteHeader activeSlug={business.slug} />
      <main>
        <section className="business-hero section-wrap">
          <div className="business-hero-copy">
            <BrandLogo kind={business.logo} className="business-hero-logo" />
            <h1>
              {business.heroTitle}
              <br />
              <em>
                {business.tagline === "Building Dreams. Creating Homes."
                  ? "Build from here."
                  : business.slug === "media"
                  ? "Reach the right people."
                  : "Find your next step."}
              </em>
            </h1>
            <p className="business-hero-intro">{business.heroCopy}</p>
            <div className="business-hero-actions">
              <a className="button button-brand" href="#enquiry">
                Talk to our team <ArrowRight size={16} />
              </a>
              {business.slug === "media" ? (
                <>
                  <a className="button button-outline" href="#podcasts">
                    Watch Podcasts
                  </a>
                  <a className="button button-outline" href="#magazines">
                    12 Monthly Magazines
                  </a>
                </>
              ) : (
                <a className="button button-outline" href="#services">
                  Explore {business.services.length} services
                </a>
              )}
            </div>
          </div>

          <div className="business-hero-image">
            <img src={business.heroImage} alt={business.heroAlt} />
            <span className="image-index">
              {business.shortName} <i>—</i> 01
            </span>
            <div className="image-quote">
              <Sparkles size={16} />
              <span>
                {business.slug === "media"
                  ? "Your story deserves a wider audience."
                  : business.slug === "properties"
                  ? "A foundation for what comes next."
                  : "Connecting potential with possibility."}
              </span>
            </div>
          </div>
          <div className="hero-vertical-label">{business.name.toUpperCase()}</div>
        </section>

        <section className="business-intro section-wrap">
          <div className="section-kicker">
            <span className="eyebrow-line" /> A thoughtful approach
          </div>
          <div className="business-intro-main">
            <h2>
              {business.slug === "media" ? (
                <>
                  From visibility
                  <br />
                  to <em>credibility.</em>
                </>
              ) : business.slug === "properties" ? (
                <>
                  More than a property.
                  <br />
                  <em>A future taking shape.</em>
                </>
              ) : (
                <>
                  A stronger connection
                  <br />
                  between <em>people and work.</em>
                </>
              )}
            </h2>
            <div className="business-intro-text">
              <p>{business.intro}</p>
              <div className="audience-callout">
                <CheckCircle2 size={18} />
                <span>{business.audience}</span>
              </div>
            </div>
          </div>
          {business.disclaimer ? (
            <p className="business-disclaimer">
              <strong>Important Note</strong>
              {business.disclaimer}
            </p>
          ) : null}
        </section>

        {business.slug === "media" && (
          <>
            <MediaPodcasts onEnquire={handleSelectService} />
            <MediaMagazines onEnquire={handleSelectService} />
          </>
        )}

        <section className="services-section section-wrap" id="services">
          <div className="services-heading">
            <div>
              <span className="section-kicker">
                <span className="eyebrow-line" /> What we do
              </span>
              <h2>
                Practical expertise.
                <br />
                <em>Personal attention.</em>
              </h2>
            </div>
            <p>
              {business.slug === "media"
                ? "A connected set of capabilities for brands and leaders that want to communicate with clarity and impact."
                : business.slug === "properties"
                ? "Dependable guidance through the decisions that shape where you live, work, and invest for the long term."
                : "Structured support for job aspirants and employers at every stage of the recruitment and career journey."}
            </p>
          </div>

          <div className="service-list">
            {business.services.map((service, index) => (
              <article
                className={`service-item ${selectedService === service.title ? "service-item-selected" : ""}`}
                key={service.title}
                onClick={() => handleSelectService(service.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectService(service.title);
                  }
                }}
              >
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-item-body">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <span className="service-enquire-hint">
                    Enquire about this service <ArrowRight size={13} />
                  </span>
                </div>
                <span className="service-index-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section section-wrap">
          <div className="gallery-heading">
            <div>
              <span className="section-kicker">
                <span className="eyebrow-line" /> The work, in context
              </span>
              <h2>
                Built around <em>real life.</em>
              </h2>
            </div>
            <span className="gallery-count">
              Perspective <span>02 — 03</span>
            </span>
          </div>
          <div className="gallery-grid">
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

        <section id="enquiry" className="enquiry-section-wrap section-wrap">
          <div className="enquiry-section">
            <EnquiryForm
              slug={business.slug}
              name={business.name}
              email={business.email}
              secondaryEmail={business.secondaryEmail}
              formPrompt={business.formPrompt}
              services={business.services}
              selectedService={selectedService}
              onSelectService={setSelectedService}
            />
          </div>
        </section>

        <OtherBusinesses currentSlug={business.slug} />
      </main>
      <SiteFooter />
    </div>
  );
}
