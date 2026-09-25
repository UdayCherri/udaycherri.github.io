// ─── Design - YuuKayCee ───────────────────────────────────────────────────────

import type { Project } from "./types";

export const yuukayceeProjects: Project[] = [
  {
    id: "nyx-bureau",
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
      "Typography exploration: 40+ specimen studies",
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
