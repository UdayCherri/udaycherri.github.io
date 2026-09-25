// ─── Security - CYB3R-BO1 ─────────────────────────────────────────────────────

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
    id: "ctf-gaslight-2026",
    event: "gaslightCTF 2026",
    placement: "7th Open",
    year: "2026",
    categories: ["Misc", "Forensics", "Web", "Crypto"],
    notableSolves: [
      "12 solves: 5 misc, 4 forensics, 2 web, 1 crypto",
      "GF(2) linear algebra break of fake AES",
      "OSINT geolocation across 4 image challenges",
      "robots.txt maze with flag encoded in binary path",
    ],
  },
  {
    id: "ctf-script-2026",
    event: "scriptCTF 2026",
    placement: "55th",
    year: "2026",
    categories: ["Web", "Reverse", "OSINT"],
    notableSolves: [
      "Go binary red herring: flag hidden in .shstrtab",
      "robots.txt endpoint disclosure",
      "Taco Bell geolocation via street view",
    ],
  },
  {
    id: "ctf-bits-2026",
    event: "BITSCTF 2026",
    placement: "32nd of 862",
    year: "2026",
    categories: ["Web", "OSINT", "Crypto", "Pwn"],
    notableSolves: [
      "Rust proxy path-normalization bypass",
      "DES semi-weak key decryption oracle",
      "Stack pivot + partial GOT + SROP chain",
      "Scholar-trail professor OSINT",
    ],
  },
  {
    id: "ctf-0xl4ugh-2026",
    event: "0xL4ugh CTF v5 2026",
    placement: "19th of 1732",
    year: "2026",
    categories: ["DFIR", "Forensics"],
    notableSolves: [
      "Windows triage: Edge history to Sysmon timeline",
      "Sliver C2 attribution",
      "Run-key persistence mapping",
    ],
  },
  {
    id: "ctf-crackin-2024",
    event: "CRACK-IN 1.0 CTF",
    placement: "2nd",
    year: "2024",
    categories: [],
    notableSolves: ["Hosted by CyberHive of GGITS"],
  },
];

// Blog post metadata. The rendered body for each post lives in a matching Markdown
// file under src/app/content/blog/security/<slug>.md (see docs/AUTHORING.md).
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
