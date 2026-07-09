// Loads blog post bodies (Markdown) at build time and keys them by slug.
// Post files live in src/app/content/blog/<section>/<slug>.md and are matched to
// their metadata (title, date, …) in the data modules by that slug.

const securityBodies = import.meta.glob("../content/blog/security/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const developmentBodies = import.meta.glob("../content/blog/development/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function keyBySlug(bodies: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [path, body] of Object.entries(bodies)) {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    out[slug] = body;
  }
  return out;
}

const bySection: Record<string, Record<string, string>> = {
  security: keyBySlug(securityBodies),
  development: keyBySlug(developmentBodies),
};

export type BlogSection = "security" | "development";

/** Returns the raw Markdown body for a post, or undefined if none exists. */
export function getPostBody(section: BlogSection, slug: string): string | undefined {
  return bySection[section]?.[slug];
}
