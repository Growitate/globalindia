type MarkKind = "group" | "media" | "property" | "workforce" | "foundation";

type BrandLogoProps = {
  kind?: MarkKind;
  compact?: boolean;
  inverse?: boolean;
  className?: string;
};

const LOGO_META: Record<
  MarkKind,
  {
    label: string;
    src: string;
    compactSrc?: string;
    inverseSrc?: string;
  }
> = {
  group: {
    label: "Global India Group · Nagpur",
    src: "/images/3_Global_India_Group_Nagpur-1.png",
    compactSrc: "/images/3_Global_India_Group_Nagpur-1.png",
    inverseSrc: "/logos/logo-group-inverse.png",
  },
  media: {
    label: "Global India Media Services",
    src: "/logos/logo-media.png",
    compactSrc: "/logos/logo-media.png",
  },
  property: {
    label: "Global Properties",
    src: "/images/global_properties_logo.png",
    compactSrc: "/images/global_properties_logo.png",
  },
  workforce: {
    label: "India Workforce Solutions",
    src: "/images/India_Workforce_Solutions_Logo_FullHD.png",
    compactSrc: "/logos/logo-workforce-compact.png",
  },
  foundation: {
    label: "Global India Social Foundation",
    src: "/logos/logo-social-foundation.png",
    compactSrc: "/logos/logo-social-foundation.png",
  },
};

export default function BrandLogo({
  kind = "group",
  compact = false,
  inverse = false,
  className = "",
}: BrandLogoProps) {
  const meta = LOGO_META[kind];
  const imgSrc =
    inverse && meta.inverseSrc
      ? meta.inverseSrc
      : compact && meta.compactSrc
      ? meta.compactSrc
      : meta.src;

  return (
    <span
      className={`brand-lockup brand-lockup-${kind} ${
        compact ? "brand-lockup-compact" : "brand-lockup-full"
      } ${inverse ? "brand-lockup-inverse" : ""} ${className}`.trim()}
      aria-label={meta.label}
    >
      <img
        src={imgSrc}
        alt={meta.label}
        className="brand-logo-img"
        decoding="async"
      />
    </span>
  );
}
