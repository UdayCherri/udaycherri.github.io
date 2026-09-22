// ─── Uday Cherri — Core identity ──────────────────────────────────────────────

export const udayProfile = {
  name: "Uday Cherri",
  archetype: "The Core",
  motto: "You can do it too!",
  introduction:
    "Medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.",
  beliefs: [
    { statement: "Mastery is found at intersections.", index: "01" },
  ],
};

export const journeyMilestones = [
  {
    id: "m3",
    year: "2024",
    title: "Crack-In CTF 1.0",
    note: "Runner-up",
    discipline: "security",
  },
  {
    id: "m5",
    year: "2024",
    title: "VaultChain",
    note: "Systems",
    discipline: "development",
    path: "/project/vaultchain",
  },
  {
    id: "m4",
    year: "2025",
    title: "HackerTroupe",
    note: "Team",
    discipline: "security",
  },
  {
    id: "m1",
    year: "2026",
    title: "NYX BUREAU",
    note: "Studio",
    discipline: "design",
    path: "/project/nyx-bureau",
  },
  {
    id: "m2",
    year: "2026",
    title: "TryHackMe",
    note: "Top 6%",
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

// ─── Featured Work (Core landing page) ────────────────────────────────────────
// One entry per discipline, in chronological discipline order. Descriptions
// reuse the existing project/research copy; paths are deep project routes.

export const featuredWork = [
  {
    id: "nyx-rebrand",
    identity: "yuukaycee" as const,
    title: "NYX Bureau",
    discipline: "Brand Identity",
    year: "2024",
    description:
      "A complete visual identity system for a creative studio operating at the intersection of design and night.",
    coverColor: "#67E8F9",
    path: "/project/nyx-bureau",
  },
  {
    id: "vaultchain",
    identity: "spy" as const,
    title: "VaultChain",
    discipline: "Systems",
    year: "2024",
    description:
      "A distributed secret management system designed for multi-tenant environments. Handles key rotation, access auditing, and zero-trust distribution at scale.",
    coverColor: "#CC1234",
    path: "/project/vaultchain",
  },
  {
    id: "jwt-confusion",
    identity: "cyb3r" as const,
    title: "Algorithm Confusion in JWT Libraries",
    discipline: "Vulnerability Research",
    year: "2024",
    description:
      "Research into algorithm confusion vulnerabilities across 8 widely-used JWT libraries. Identified 3 previously undisclosed weaknesses in signature validation logic.",
    coverColor: "#10B981",
    path: "/project/jwt-confusion",
  },
];
