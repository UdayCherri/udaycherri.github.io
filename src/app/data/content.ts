// ─── Uday Cherri Core ────────────────────────────────────────────────────────

export const udayProfile = {
  name: "Uday Cherri",
  archetype: "The Founder",
  motto: "You can do it too!",
  introduction:
    "Medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.",
  beliefs: [
    { statement: "Mastery is found at intersections.", index: "01" },
  ],
};

export const journeyMilestones = [
  {
    id: "m1",
    year: "2026",
    title: "NYX BUREAU",
    note: "Studio founded",
    discipline: "design",
  },
  {
    id: "m2",
    year: "2026",
    title: "TryHackMe",
    note: "Top 6%",
    discipline: "security",
  },
  {
    id: "m3",
    year: "2024",
    title: "Crack-In CTF 1.0",
    note: "Ranked 2nd",
    discipline: "security",
  },
    {
    id: "m3",
    year: "2025",
    title: "HackerTroupe",
    note: "Team founded",
    discipline: "security",
  },
];

export const currentFocus = [
  {
    id: "nyxbureau",
    name: "NYX BUREAU",
    category: "STUDIO",
    status: "Active",
    accent: "#67E8F9",
  },
];

// ─── Shared Project Type ──────────────────────────────────────────────────────

export interface Project {
  id: string;
  identity: "yuukaycee" | "spy" | "cyb3r" | "core";
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tags: string[];
  overview: string;
  problem: string;
  approach: string;
  process: string[];
  outcome: string;
  lessons: string;
  featured: boolean;
  coverColor: string;
}

// ─── YuuKayCee Projects ───────────────────────────────────────────────────────

export const yuukayceeProjects: Project[] = [
  {
    id: "nyx-rebrand",
    identity: "yuukaycee",
    title: "NYX Bureau",
    subtitle: "Brand Identity System",
    category: "Branding",
    year: "2024",
    tags: ["Brand Identity", "Typography", "Visual System"],
    overview:
      "A complete brand identity for a creative studio built to operate at the intersection of design and culture. Every element of the system was designed to communicate both elegance and edge.",
    problem:
      "The studio needed a visual identity that could represent high craft without feeling corporate, and experimental without feeling immature.",
    approach:
      "Developed a dual-register system: a refined formal layer for client-facing materials, and a more expressive layer for cultural projects. The wordmark uses a modified geometric serif.",
    process: [
      "Competitive landscape audit across creative studios",
      "Typography exploration — 40+ specimen studies",
      "Color system development with light and dark expressions",
      "Application across stationery, digital surfaces, and motion",
    ],
    outcome:
      "A brand system capable of representing both precision work and experimental projects without contradiction.",
    lessons:
      "The best brand systems hold tension rather than resolve it. NYX needed to feel like it could occupy two rooms simultaneously.",
    featured: true,
    coverColor: "#67E8F9",
  },
  {
    id: "archive-placeholder",
    identity: "yuukaycee",
    title: "Project Title",
    subtitle: "Project Subtitle",
    category: "Branding",
    year: "2024",
    tags: ["Tag One", "Tag Two"],
    overview: "A short overview of the project and what it set out to accomplish.",
    problem: "The problem this project was trying to solve.",
    approach: "The approach taken to solve it.",
    process: ["Step one", "Step two"],
    outcome: "The outcome and results.",
    lessons: "What was learned.",
    featured: false,
    coverColor: "#67E8F9",
  },
];

export const nyxBureau = {
  vision:
    "NYX Bureau is a creative practice operating at the intersection of craft and culture. We design visual systems, identities, and experiences for organizations and individuals with something real to say.",
  services: [
    {
      title: "Brand Identity",
      description:
        "Visual systems that communicate who you are across every surface and context. From naming through to full brand expression.",
    },
  ],
  process: [
    { step: "01", title: "Understand", description: "Deep listening before any mark is made." },
  ],
};

// ─── Spy D. Veloper Projects ──────────────────────────────────────────────────

export const spyProjects: Project[] = [
  {
    id: "vaultchain",
    identity: "spy",
    title: "VaultChain",
    subtitle: "Distributed Secret Management System",
    category: "Systems",
    year: "2024",
    tags: ["Distributed Systems", "Security", "Rust", "gRPC"],
    overview:
      "A distributed secret management system designed for multi-tenant environments. Handles key rotation, access auditing, and zero-trust distribution at scale.",
    problem:
      "Most secret management solutions either sacrifice security for usability or usability for security. VaultChain attempts to eliminate the tradeoff.",
    approach:
      "Built on a Merkle-based audit log with cryptographic proof chains. Each access event is verifiable without revealing the secret content.",
    process: [
      "Threat modeling and attack surface analysis",
      "Cryptographic protocol design",
      "Rust implementation of core storage engine",
      "gRPC API layer with mTLS",
      "Kubernetes operator for deployment",
    ],
    outcome:
      "System handles 50k+ secret operations per second. Sub-10ms p99 latency on secret retrieval.",
    lessons:
      "Security and performance are not opposites. The design constraint that forced both led to a better architecture than either alone would have.",
    featured: true,
    coverColor: "#CC1234",
  },
];

export const spySystems = [
  {
    id: "s1",
    title: "Zero-Trust Service Mesh",
    description:
      "Architecture for inter-service communication where no service is implicitly trusted. Every request authenticated, every connection encrypted.",
    components: ["mTLS", "Service Identity", "Policy Engine", "Audit Log"],
    status: "Production",
  },
];

export const openSourceRepos = [
  {
    name: "conduit",
    description: "Real-time data pipeline framework with 30+ connectors",
    language: "Go",
    stars: 1247,
    url: "#",
  },
];

// ─── CYB3R-BO1 Content ────────────────────────────────────────────────────────

export const cyberResearch = [
  {
    id: "jwt-confusion",
    title: "Algorithm Confusion in JWT Libraries",
    subtitle: "Vulnerability Research",
    year: "2024",
    severity: "High",
    tags: ["JWT", "Cryptography", "Web Security", "CVE"],
    summary:
      "Research into algorithm confusion vulnerabilities across 8 widely-used JWT libraries. Identified 3 previously undisclosed weaknesses in signature validation logic.",
    findings: [
      "2 CVEs assigned across two libraries",
      "All 8 libraries patched within 60 days of disclosure",
      "Attack technique documented with proof-of-concept",
    ],
    coverColor: "#10B981",
  },
];

export const securityProjects = [
  {
    id: "recon-engine",
    title: "Reconnaissance Engine",
    subtitle: "Automated Attack Surface Discovery",
    category: "Tool",
    year: "2024",
    tags: ["Recon", "OSINT", "Python", "Bug Bounty"],
    description:
      "A modular reconnaissance engine that correlates passive OSINT signals with active enumeration results. Used in bug bounty programs.",
    coverColor: "#10B981",
  },
];

export const ctfArchive = [
  {
    id: "ctf1",
    event: "DEF CON CTF Qualifier 2024",
    placement: "Top 15%",
    year: "2024",
    categories: ["Pwn", "Web", "Reverse Engineering"],
    notableSolves: ["Custom heap exploitation", "JWT confusion chain", "Multi-stage web challenge"],
  },
];

export const cyberBlogPosts = [
  {
    id: "blog-1",
    title: "Algorithm Confusion: A Deep Dive",
    category: "Vulnerability Research",
    date: "2024-03",
    readTime: "12 min",
    excerpt:
      "JWT algorithm confusion vulnerabilities allow attackers to switch between symmetric and asymmetric algorithms. We analyzed 8 libraries, found 3 weaknesses, and worked with maintainers to patch all of them.",
    externalUrl: "#",
  },
];

// ─── Featured Work (Core page) ────────────────────────────────────────────────

export const featuredWork = [
  {
    id: "nyx-rebrand",
    identity: "yuukaycee" as const,
    title: "NYX Bureau",
    discipline: "Brand Identity",
    year: "2024",
    description:
      "A complete visual identity system for a creative studio operating at the intersection of design and culture.",
    coverColor: "#67E8F9",
    path: "/yuukaycee",
  },
];
