// ─── Development - Spy D. Veloper ─────────────────────────────────────────────

import type { Project } from "./types";

export const spyProjects: Project[] = [];

export const spySystems: {
  id: string;
  title: string;
  description: string;
  components: string[];
  status: string;
}[] = [];

export const openSourceRepos: {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
}[] = [];

// Blog post metadata. The rendered body for each post lives in a matching Markdown
// file under src/app/content/blog/development/<slug>.md (see docs/AUTHORING.md).
export const devBlogPosts: {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}[] = [];
