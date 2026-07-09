// ─── Shared data types ────────────────────────────────────────────────────────

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
  /** Optional cover image, e.g. "/images/my-project.png" (file lives in public/images/). */
  cover?: string;
  /** Optional additional images shown in the project body. */
  gallery?: string[];
  /** Optional source-code link shown on the project page. */
  github?: string;
  /** Optional live/demo link shown on the project page. */
  website?: string;
}
