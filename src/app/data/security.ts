// ─── Security - CYB3R-BO1 ─────────────────────────────────────────────────────

export const cyberResearch: {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  severity: string;
  tags: string[];
  summary: string;
  findings: string[];
  coverColor: string;
}[] = [];

export const securityProjects: {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  coverColor: string;
}[] = [];

export const ctfArchive: {
  id: string;
  event: string;
  placement: string;
  year: string;
  categories: string[];
  notableSolves: string[];
}[] = [];

// Blog post metadata — currently empty: publishing happens on the off-site
// notebook. Entries here render natively under /security/blog/:slug.
export const cyberBlogPosts: {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}[] = [];
