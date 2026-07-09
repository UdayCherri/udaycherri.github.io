// ─── Security — CYB3R-BO1 ─────────────────────────────────────────────────────

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

// Blog post metadata. The rendered body for each post lives in a matching Markdown
// file under src/content/blog/security/<slug>.md (see docs/AUTHORING.md).
export const cyberBlogPosts = [
  {
    id: "blog-1",
    slug: "algorithm-confusion-deep-dive",
    title: "Algorithm Confusion: A Deep Dive",
    category: "Vulnerability Research",
    date: "2024-03",
    readTime: "12 min",
    excerpt:
      "JWT algorithm confusion vulnerabilities allow attackers to switch between symmetric and asymmetric algorithms. We analyzed 8 libraries, found 3 weaknesses, and worked with maintainers to patch all of them.",
  },
];
