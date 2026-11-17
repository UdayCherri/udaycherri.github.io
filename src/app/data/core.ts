// ─── Uday Cherri - Core identity ──────────────────────────────────────────────

export const udayProfile = {
  name: "Uday Cherri",
  archetypes: ["The Core", "A Student", "A Builder", "A Researcher", "A Designer"],
  motto: "You can do it too!",
  introduction:
    "I am a B.Tech Computer Science undergraduate (graduating May 2027) working across design, software development, and cybersecurity. I design visual identities as YuuKayCee, build systems and tools as Spy D. Veloper, and study application and AI security as CYB3R-BO1. I am seeking internships and early-career opportunities where I can build useful things and learn how to make them clear, reliable, and secure.",
  beliefs: [
    { statement: "Mastery is found at intersections.", index: "01" },
  ],
};

export const journeyMilestones: {
  id: string;
  year: string;
  title: string;
  note: string;
  discipline: string;
  path?: string;
}[] = [];

export const currentFocus: {
  id: string;
  name: string;
  category: string;
  status: string;
  accent: string;
}[] = [];

// ─── Featured Work (Core landing page) ────────────────────────────────────────
// Empty until real pieces are selected. Descriptions must reuse existing
// project/research copy; paths are deep project routes.

export const featuredWork: {
  id: string;
  identity: "yuukaycee" | "spy" | "cyb3r";
  title: string;
  discipline: string;
  year: string;
  description: string;
  coverColor: string;
  path: string;
}[] = [];

// ─── Profile (Uday Cherri - /profile) ────────────────────────────────────────
// Factual identity sheet. Copy lives here; CoreProfile.tsx only renders it.

export const profileAtAGlance = [
  { label: "Based in", value: "Visakhapatnam, Andhra Pradesh, India" },
  { label: "Education", value: "B.Tech CSE, RGUKT Nuzvid" },
  { label: "Graduating", value: "May 2027" },
  { label: "Open to", value: "Internships" },
  { label: "Work mode", value: "Remote or anywhere in India" },
  { label: "Email", value: "cherriuday@gmail.com", href: "mailto:cherriuday@gmail.com" },
];

export const profileAbout =
  "I’m a multidisciplinary builder working across design, software, and cybersecurity. I started with visual design, moved into computer science and software development, and eventually into security research. Today, I treat the three disciplines as connected practices rather than separate paths: design shapes how I see and communicate, software lets me turn ideas into systems, and security pushes me to understand how those systems behave under pressure. I’m interested in building useful things, understanding how they work, and finding better ways to make them clear, reliable, and secure.";

export const profileCurrent = [
  "Building systems",
  "Researching security",
  "Refining visual work",
  "Learning chess",
];

export const profileBackground =
  "Started in design, moved into software, and expanded into cybersecurity. The three disciplines continue to develop alongside each other.";

export const profileInterests = {
  professional: ["AI Security", "Graphic Design"],
  personal: ["Chess", "Movies", "Music"],
};

export const profileLinksPrimary = [
  { label: "LinkedIn", url: "https://linkedin.com/in/uday-kiran-cherri" },
  { label: "Email", url: "mailto:cherriuday@gmail.com" },
];

export const profileLinksSecondary: { label: string; url: string; note: string }[] = [];
