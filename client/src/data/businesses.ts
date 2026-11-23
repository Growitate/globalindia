// Paste the official Global India Media Services Podcast YouTube channel link below:
export const MEDIA_YOUTUBE_CHANNEL_URL = "https://youtube.com/@bhojrajindiagroup?si=fngv_7EdULAMt2wn";

export type Business = {
  slug: string;
  name: string;
  shortName: string;
  descriptor: string;
  tagline: string;
  intro: string;
  heroTitle: string;
  heroCopy: string;
  brand: string;
  soft: string;
  ink: string;
  logo: "media" | "property" | "workforce" | "foundation";
  logoImage?: string;
  heroImage: string;
  heroAlt: string;
  gallery: { image: string; alt: string; caption: string }[];
  services: { title: string; copy: string }[];
  email?: string;
  secondaryEmail?: string;
  audience: string;
  formPrompt: string;
  disclaimer?: string;
};

export const businesses: Business[] = [
  {
    slug: "media",
    name: "Global India Media Services",
    shortName: "Media Services",
    descriptor: "Media · Digital · PR · Content · Events",
    tagline: "Connecting Brands, People & Ideas with India and the World",
    intro:
      "An integrated media and communication partner helping businesses, professionals and institutions build visibility, credibility and meaningful connections.",
    heroTitle: "Make your story matter.",
    heroCopy:
      "From a first announcement to a wider reputation, we bring media, content and communication together around your next move.",
    brand: "#123254",
    soft: "#edf2f7",
    ink: "#0b2239",
    logo: "media",
    logoImage: "/logos/logo-media.png",
    heroImage: "/images/global_india_podcast_design.jpg.jpeg",
    heroAlt: "Global India Podcast studio brand and production design",
    gallery: [
      {
        image: "/manus-storage/async-images/vZ88wgWRYaveG6BlUrjwiV/image-2.webp?v=2",
        alt: "A journalist and entrepreneur developing a story together",
        caption: "Ideas shaped into stories",
      },
      {
        image: "/manus-storage/async-images/vZ88wgWRYaveG6BlUrjwiV/image-3.webp?v=2",
        alt: "A business leadership summit being filmed by a camera operator",
        caption: "Moments that reach further",
      },
    ],
    services: [
      { title: "Media publicity & PR", copy: "Business and product publicity, press releases, media coverage, campaign planning and reputation-building communication." },
      { title: "Digital media & growth", copy: "Social media management, website content, digital marketing, search visibility, online campaigns and reputation support." },
      { title: "Publications & profiles", copy: "Corporate profiles, industry articles, entrepreneur stories, sponsored features and magazine advertising." },
      { title: "Podcasts & interviews", copy: "Leadership conversations, expert interviews and video or audio podcast production." },
      { title: "Video & creative", copy: "Corporate, promotional and short-form video, reels, interviews, event coverage, photography, editing and graphic design." },
      { title: "Events & campaigns", copy: "Conferences, seminars, awards, launches and exhibitions with media coverage, advertising and live digital reporting." },
      { title: "Corporate branding", copy: "Company profiles, presentations, brochures, catalogues, logo identity and cohesive communication materials." },
      { title: "Special media projects", copy: "Editorial series, entrepreneur stories, industry reports and business award programmes." },
    ],
    email: "contact@globalindianagpur.com",
    audience: "For businesses, institutions, entrepreneurs and professionals ready to be seen clearly.",
    formPrompt: "Tell us what you want your next audience to know.",
  },
  {
    slug: "properties",
    name: "Global Properties",
    shortName: "Properties",
    descriptor: "Development · Property Solutions · Investment",
    tagline: "Building Dreams. Creating Homes.",
    intro:
      "A professionally managed real-estate enterprise focused on reliable guidance, transparent dealings and spaces designed for long-term value.",
    heroTitle: "A better place to begin.",
    heroCopy:
      "Find the right space for the way you live, work or invest—with thoughtful options and support at every step.",
    brand: "#c46210",
    soft: "#fbf1e8",
    ink: "#964706",
    logo: "property",
    logoImage: "/images/global_properties_logo.png",
    heroImage: "/manus-storage/async-images/vZ88wgWRYaveG6BlUrjwiV/image-4.webp?v=2",
    heroAlt: "Contemporary residence framed by landscaped gardens in warm afternoon light",
    gallery: [
      {
        image: "/manus-storage/async-images/vZ88wgWRYaveG6BlUrjwiV/image-5.webp?v=2",
        alt: "Bright contemporary apartment with a leafy balcony",
        caption: "Homes that feel considered",
      },
      {
        image: "/manus-storage/async-images/KvOASsHDXBhrl6CKLP31s3/image-1.webp?v=2",
        alt: "A modern commercial building in an Indian business district",
        caption: "Spaces for what's next",
      },
    ],
    services: [
      { title: "Residential properties", copy: "Apartments, premium projects, residential plots, villas and independent homes." },
      { title: "Commercial properties", copy: "Shops, offices, showrooms and investment-oriented commercial spaces." },
      { title: "Property development", copy: "Residential and mixed-use development, land projects and development partnerships." },
      { title: "Sales & marketing", copy: "Project marketing, buyer assistance, property presentation and site visits." },
      { title: "Investment advisory", copy: "Location-led options and guidance for residential and commercial property investment." },
      { title: "Consultation & transaction support", copy: "Property selection, documentation coordination and transaction guidance." },
      { title: "Resale & brokerage", copy: "Buying and selling support with owner–buyer coordination and negotiation assistance." },
    ],
    email: "contact@globalindianagpur.com",
    audience: "For home seekers, owners, organisations and investors exploring their next move.",
    formPrompt: "Share the kind of property or guidance you're looking for.",
  },
  {
    slug: "workforce",
    name: "India Workforce Solutions",
    shortName: "Workforce Solutions",
    descriptor: "Careers · Recruitment · Workforce Support",
    tagline: "Connecting Aspirants with Opportunities • Building Careers • Supporting Employers",
    intro:
      "A professional employment-support initiative connecting job aspirants with suitable opportunities and helping employers find capable, motivated candidates.",
    heroTitle: "The right connection changes everything.",
    heroCopy:
      "A clearer employment journey for candidates. A more focused connection to talent for organisations.",
    brand: "#193c8f",
    soft: "#ecf2fb",
    ink: "#102863",
    logo: "workforce",
    logoImage: "/images/India_Workforce_Solutions_Logo_FullHD.png",
    heroImage: "/manus-storage/async-images/KvOASsHDXBhrl6CKLP31s3/image-2.webp?v=2",
    heroAlt: "A candidate and recruiter having a focused conversation in a modern office",
    gallery: [
      {
        image: "/manus-storage/async-images/KvOASsHDXBhrl6CKLP31s3/image-3.webp?v=2",
        alt: "An Indian candidate meeting with an interviewer in a bright room",
        caption: "Confidence for the conversation",
      },
      {
        image: "/manus-storage/async-images/KvOASsHDXBhrl6CKLP31s3/image-4.webp?v=2",
        alt: "Graduates learning practical workplace skills with a mentor",
        caption: "Skills that open doors",
      },
    ],
    services: [
      { title: "Job placement assistance", copy: "Connect registered candidates with relevant opportunities based on their profile." },
      { title: "Candidate registration", copy: "A structured starting point for aspirants exploring employment opportunities." },
      { title: "Recruitment support", copy: "Candidate sourcing, preliminary screening and workforce coordination for employers." },
      { title: "Career guidance", copy: "General guidance on roles, eligibility, career options and professional development." },
      { title: "Resume & profile support", copy: "Present qualifications, skills and experience clearly and professionally." },
      { title: "Interview preparation", copy: "Practical preparation guidance to help candidates approach interviews with confidence." },
      { title: "Fresher & experienced support", copy: "Employment connections for new graduates, skilled workers and experienced professionals." },
      { title: "Workforce solutions", copy: "Candidate sourcing and coordination shaped around an organisation's workforce needs." },
    ],
    email: "careers@globalindianagpur.com",
    audience: "For job aspirants at every career stage—and employers seeking suitable candidates.",
    formPrompt: "Let us know if you're exploring a role or hiring for one.",
    disclaimer: "India Workforce Solutions facilitates employment-related support and connections between candidates and prospective employers. Job selection and employment are subject to the eligibility criteria, recruitment process and final decision of the respective employer.",
  },
  {
    slug: "social-foundation",
    name: "Global India Social Foundation",
    shortName: "Social Foundation",
    descriptor: "Social Welfare · Education · Healthcare · Empowerment · Community Development",
    tagline: "Empowering People. Transforming Communities. Building a Better India.",
    intro:
      "Bhojraj India Social Foundation is a social welfare and community development organisation based in Nagpur, Maharashtra, dedicated to education, healthcare, women empowerment, youth development, rural upliftment, and sustainability.",
    heroTitle: "Empowering People.",
    heroCopy:
      "Transforming communities and building a better India through सेवा • समर्पण • सहयोग.",
    brand: "#0f5d4c",
    soft: "#ebf5f2",
    ink: "#083d32",
    logo: "foundation",
    logoImage: "/logos/logo-social-foundation.png",
    heroImage: "/images/foundation-hero.webp",
    heroAlt: "Volunteers teaching digital literacy and distributing books to schoolchildren in India",
    gallery: [
      {
        image: "/images/foundation-empowerment.webp",
        alt: "Women participating in a vocational tailoring and financial literacy workshop",
        caption: "Skills for self-reliance",
      },
      {
        image: "/images/foundation-community.webp",
        alt: "Youth volunteers conducting a tree plantation and public health awareness drive",
        caption: "Communities growing together",
      },
    ],
    services: [
      { title: "Education & Child Welfare", copy: "Educational assistance, scholarships, study materials, digital literacy, and student development programmes." },
      { title: "Healthcare & Medical Support", copy: "Free health check-up camps, blood donation drives, hygiene awareness, and women & child healthcare." },
      { title: "Women Empowerment", copy: "Entrepreneurship development, vocational training, self-help groups, financial literacy, and safety programmes." },
      { title: "Youth Development & Employment", copy: "Skill development, career counselling, placement assistance, startup awareness, and leadership initiatives." },
      { title: "Social Welfare & Community Development", copy: "Food, ration, and essential supplies distribution, senior citizen welfare, family support, and disaster relief." },
      { title: "Environment & Sustainability", copy: "Tree plantation campaigns, cleanliness drives, water conservation, and plastic-free environment campaigns." },
      { title: "Social Awareness & Public Welfare", copy: "Road safety, anti-drug campaigns, legal literacy, and community development seminars and workshops." },
    ],
    email: "contact@globalindianagpur.com",
    audience: "For individuals, institutions, corporates, government bodies, volunteers, and social organisations.",
    formPrompt: "Collaborate, volunteer, or enquire about our social welfare initiatives.",
  },
];

export const businessBySlug = (slug: string) => businesses.find((business) => business.slug === slug);
