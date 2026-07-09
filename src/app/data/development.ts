// ─── Development — Spy D. Veloper ─────────────────────────────────────────────

import type { Project } from "./types";

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

// Blog post metadata. The rendered body for each post lives in a matching Markdown
// file under src/app/content/blog/development/<slug>.md (see docs/AUTHORING.md).
export const devBlogPosts = [
  {
    id: "dev-blog-1",
    slug: "hello-world",
    title: "Hello, World — Starting the Dev Journal",
    category: "Engineering",
    date: "2026-01",
    readTime: "2 min",
    excerpt:
      "A starter post and a template. How the Development writing section works, and how to publish your own Markdown posts to it.",
  },
];
