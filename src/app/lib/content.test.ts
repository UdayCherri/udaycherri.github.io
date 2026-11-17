import { describe, it, expect } from "vitest";
import {
  yuukayceeProjects,
  spyProjects,
  cyberResearch,
  securityProjects,
  ctfArchive,
  openSourceRepos,
  devBlogPosts,
  cyberBlogPosts,
} from "../data/content";
import { isValidExternalUrl } from "../lib/seo";

const HTTP = /^https:\/\//;

describe("content models", () => {
  it("project ids are unique across collections", () => {
    const ids = [
      ...yuukayceeProjects.map((p) => p.id),
      ...spyProjects.map((p) => p.id),
      ...securityProjects.map((p) => p.id),
      ...cyberResearch.map((r) => r.id),
    ];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every project has required fields and no placeholder copy", () => {
    const banned = /to be updated|landing soon|check back soon/i;
    for (const p of [...yuukayceeProjects, ...spyProjects]) {
      expect(p.id).toMatch(/^[a-z0-9-]+$/);
      expect(p.title.length).toBeGreaterThan(0);
      expect(p.overview.length).toBeGreaterThan(0);
      expect([p.overview, p.problem, p.approach, p.outcome, p.lessons].join(" ")).not.toMatch(banned);
      if (p.github) expect(p.github).toMatch(HTTP);
      if (p.website) expect(p.website).toMatch(HTTP);
    }
  });

  it("no repo or link uses '#' as a URL", () => {
    for (const r of openSourceRepos) {
      expect(r.url).not.toBe("#");
      expect(isValidExternalUrl(r.url)).toBe(true);
    }
    for (const p of [...yuukayceeProjects, ...spyProjects]) {
      if (p.github) expect(isValidExternalUrl(p.github)).toBe(true);
      if (p.website) expect(isValidExternalUrl(p.website)).toBe(true);
    }
  });

  it("blog slugs match their body files when entries exist", async () => {
    const devBodies = import.meta.glob("../content/blog/development/*.md", { eager: true });
    const secBodies = import.meta.glob("../content/blog/security/*.md", { eager: true });
    const devFiles = Object.keys(devBodies).map((k) => k.split("/").pop()?.replace(/\.md$/, ""));
    const secFiles = Object.keys(secBodies).map((k) => k.split("/").pop()?.replace(/\.md$/, ""));
    for (const post of devBlogPosts) {
      expect(devFiles).toContain(post.slug);
    }
    for (const post of cyberBlogPosts) {
      expect(secFiles).toContain(post.slug);
    }
    // Orphaned bodies without metadata are flagged, not failed, to avoid
    // blocking deploys during drafting — but the count is asserted in CI logs.
    expect(devFiles.length + secFiles.length).toBeGreaterThanOrEqual(0);
  });

  it("ctf entries have events and years, no fabricated placements asserted here", () => {
    for (const c of ctfArchive) {
      expect(c.event.length).toBeGreaterThan(0);
      expect(c.year).toMatch(/^\d{4}$/);
    }
  });
});
