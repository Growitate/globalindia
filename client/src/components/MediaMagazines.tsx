import { useState, type CSSProperties } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export type MagazineIssue = {
  issueNumber: string;
  month: string;
  shortMonth: string;
  themeTag: string;
  coverTitle: string;
  accent: string;
  bgStart: string;
  bgEnd: string;
  motif: "compass" | "grid" | "rings" | "skyline" | "nodes" | "horizon" | "gears" | "pillars" | "pulse" | "diamond" | "ledger" | "laurel";
  coverImage?: string;
};

export const annualMagazines: MagazineIssue[] = [
  {
    issueNumber: "01",
    month: "January",
    shortMonth: "JAN",
    themeTag: "Vision & Leadership",
    coverTitle: "The Year Ahead",
    accent: "#d8aa72",
    bgStart: "#14293a",
    bgEnd: "#23425b",
    motif: "compass",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_01_January.jpg.jpeg",
  },
  {
    issueNumber: "02",
    month: "February",
    shortMonth: "FEB",
    themeTag: "Enterprise & MSME",
    coverTitle: "Engines of Enterprise",
    accent: "#d99b66",
    bgStart: "#1d3040",
    bgEnd: "#314a61",
    motif: "grid",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_02_February.jpg.jpeg",
  },
  {
    issueNumber: "03",
    month: "March",
    shortMonth: "MAR",
    themeTag: "Women in Business",
    coverTitle: "Leading from the Front",
    accent: "#e0b084",
    bgStart: "#252b3d",
    bgEnd: "#3d455e",
    motif: "rings",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_03_March.jpg.jpeg",
  },
  {
    issueNumber: "04",
    month: "April",
    shortMonth: "APR",
    themeTag: "Real Estate & Infra",
    coverTitle: "Blueprints of Growth",
    accent: "#c9a875",
    bgStart: "#1b3330",
    bgEnd: "#2b4d48",
    motif: "skyline",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_04_April.jpg.jpeg",
  },
  {
    issueNumber: "05",
    month: "May",
    shortMonth: "MAY",
    themeTag: "Tech & Digital",
    coverTitle: "Connected Enterprise",
    accent: "#8cc2d8",
    bgStart: "#152838",
    bgEnd: "#24435a",
    motif: "nodes",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_05_May.jpg.jpeg",
  },
  {
    issueNumber: "06",
    month: "June",
    shortMonth: "JUN",
    themeTag: "Education & Talent",
    coverTitle: "Future Workforce",
    accent: "#d6ad79",
    bgStart: "#19333b",
    bgEnd: "#284f5b",
    motif: "horizon",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_06_June.jpg.jpeg",
  },
  {
    issueNumber: "07",
    month: "July",
    shortMonth: "JUL",
    themeTag: "Industry & Logistics",
    coverTitle: "Heartland Momentum",
    accent: "#d99f59",
    bgStart: "#1e2b36",
    bgEnd: "#334656",
    motif: "gears",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_07_July.jpg.jpeg",
  },
  {
    issueNumber: "08",
    month: "August",
    shortMonth: "AUG",
    themeTag: "Nation Builders",
    coverTitle: "Self-Reliant India",
    accent: "#e3a857",
    bgStart: "#16293a",
    bgEnd: "#28445c",
    motif: "pillars",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_08_August.jpg.jpeg",
  },
  {
    issueNumber: "09",
    month: "September",
    shortMonth: "SEP",
    themeTag: "Healthcare",
    coverTitle: "Advancing Care",
    accent: "#98c9be",
    bgStart: "#183034",
    bgEnd: "#274c52",
    motif: "pulse",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_09_September.jpg.jpeg",
  },
  {
    issueNumber: "10",
    month: "October",
    shortMonth: "OCT",
    themeTag: "Consumer & Retail",
    coverTitle: "Brands People Trust",
    accent: "#e4b36d",
    bgStart: "#2b2332",
    bgEnd: "#43364d",
    motif: "diamond",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_10_October.jpg.jpeg",
  },
  {
    issueNumber: "11",
    month: "November",
    shortMonth: "NOV",
    themeTag: "Finance & Strategy",
    coverTitle: "Capital & Governance",
    accent: "#cfb07c",
    bgStart: "#172632",
    bgEnd: "#2a4050",
    motif: "ledger",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_11_November.jpg.jpeg",
  },
  {
    issueNumber: "12",
    month: "December",
    shortMonth: "DEC",
    themeTag: "Annual Yearbook",
    coverTitle: "Icons of the Year",
    accent: "#e8be7b",
    bgStart: "#14202b",
    bgEnd: "#263a4b",
    motif: "laurel",
    coverImage: "/images/Global_India_Magazine_Intl_Ed1_12_December.jpg.jpeg",
  },
];

function CoverMotif({ motif }: { motif: MagazineIssue["motif"] }) {
  switch (motif) {
    case "compass":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <circle cx="60" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
          <polygon points="60,22 67,60 60,98 53,60" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <rect x="20" y="20" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
          <path d="M46 20v80M74 20v80M20 46h80M20 74h80" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
        </svg>
      );
    case "rings":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <circle cx="49" cy="60" r="29" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <circle cx="71" cy="60" r="29" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </svg>
      );
    case "skyline":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <path d="M16 98h88M26 98V56h18v42M48 98V30h24v68M76 98V46h18v52" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </svg>
      );
    case "nodes":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <path d="M28 84L56 34l36 26-20 34-44-10Z" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
          <circle cx="56" cy="34" r="4.5" fill="currentColor" opacity="0.8" />
          <circle cx="92" cy="60" r="4.5" fill="currentColor" opacity="0.8" />
          <circle cx="72" cy="94" r="4.5" fill="currentColor" opacity="0.8" />
          <circle cx="28" cy="84" r="4.5" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case "horizon":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <path d="M16 78h88M28 90h64" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
          <path d="M24 78a36 36 0 0 1 72 0" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
        </svg>
      );
    case "gears":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="1.3" strokeDasharray="7 6" opacity="0.65" />
          <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
        </svg>
      );
    case "pillars":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <path d="M22 34h76M22 94h76M34 34v60M52 34v60M68 34v60M86 34v60" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
        </svg>
      );
    case "pulse":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <path d="M16 62h24l10-22 16 44 12-28 8 6h18" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <polygon points="60,18 100,60 60,102 20,60" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.65" />
        </svg>
      );
    case "ledger":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <path d="M24 92V70M48 92V54M72 92V40M96 92V26" stroke="currentColor" strokeWidth="5" opacity="0.35" />
          <path d="M22 74l26-16 24-14 26-18" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        </svg>
      );
    case "laurel":
      return (
        <svg viewBox="0 0 120 120" className="mag-motif-svg" aria-hidden="true">
          <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.7" />
          <text x="60" y="67" textAnchor="middle" fill="currentColor" fontSize="20" fontFamily="Georgia, serif" opacity="0.85">XII</text>
        </svg>
      );
  }
}

export default function MediaMagazines({
  onEnquire,
}: {
  onEnquire: (serviceTitle: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const visibleIssues = expanded ? annualMagazines : annualMagazines.slice(0, 4);

  return (
    <section id="magazines" className="magazines-section section-wrap">
      <div className="magazines-header">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-line" /> Annual Print &amp; Digital Series · 12 Issues / Year
          </span>
          <h2>
            Monthly magazines. <em>One annual series.</em>
          </h2>
        </div>

        <button
          type="button"
          className="mag-subscribe-link"
          onClick={() => onEnquire("Annual Magazine Subscription (12 Issues)")}
        >
          1-Year Subscription (12 Issues) <ArrowRight size={15} />
        </button>
      </div>

      {/* Minimal 4-Card Shelf (Expands to 12 on click) */}
      <div className="magazines-minimal-grid">
        {visibleIssues.map((issue) => (
          <article
            key={issue.issueNumber}
            className="mag-minimal-item"
            onClick={() =>
              onEnquire(`Magazine Feature / Ad — Edition ${issue.issueNumber} (${issue.month})`)
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onEnquire(`Magazine Feature / Ad — Edition ${issue.issueNumber} (${issue.month})`);
              }
            }}
          >
            <div
              className={`magazine-cover ${issue.coverImage ? "has-photo" : ""}`}
              style={
                {
                  "--mag-start": issue.bgStart,
                  "--mag-end": issue.bgEnd,
                  "--mag-accent": issue.accent,
                } as CSSProperties
              }
            >
              <span className="magazine-spine" aria-hidden="true" />
              {issue.coverImage ? (
                <div className="magazine-cover-photo-wrap">
                  <img
                    src={issue.coverImage}
                    alt={`Global India Magazine - Edition ${issue.issueNumber} (${issue.month})`}
                    className="magazine-cover-img"
                    loading="lazy"
                  />
                  <div className="magazine-cover-sheen" aria-hidden="true" />
                </div>
              ) : (
                <>
                  <div className="magazine-cover-top">
                    <div className="magazine-masthead">
                      <strong>GLOBAL INDIA</strong>
                      <span>REVIEW</span>
                    </div>
                    <span className="magazine-vol-badge">{issue.shortMonth}</span>
                  </div>

                  <div className="magazine-cover-art">
                    <CoverMotif motif={issue.motif} />
                  </div>

                  <div className="magazine-cover-bottom">
                    <span className="magazine-theme-kicker">{issue.themeTag}</span>
                    <h4>{issue.coverTitle}</h4>
                  </div>
                </>
              )}
            </div>

            <div className="mag-minimal-caption">
              <span>
                <b>{issue.issueNumber}</b> · {issue.month}
              </span>
              <span className="mag-minimal-action">Enquire ↗</span>
            </div>
          </article>
        ))}
      </div>

      {/* Minimal Expand / Collapse Footer */}
      <div className="magazines-expand-bar">
        <span className="magazines-count-note">
          Showing {visibleIssues.length} of 12 annual editions
        </span>
        <button
          type="button"
          className="mag-expand-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? (
            <>
              Show fewer editions <ChevronUp size={16} />
            </>
          ) : (
            <>
              View all 12 monthly editions <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
