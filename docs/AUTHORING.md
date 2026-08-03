# Authoring Guide — adding your work

All content lives in **`src/app/data/`**, split by section. Edit the section file,
not `content.ts` (that's just a barrel that re-exports everything).

| File | Section | What's in it |
|---|---|---|
| `data/core.ts` | Core landing (`/`) | profile, journey milestones, featured work |
| `data/design.ts` | Design — `/design` | YuuKayCee projects, NYX Bureau |
| `data/development.ts` | Development — `/development` | projects, systems, open-source repos, dev blog list |
| `data/security.ts` | Security — `/security` | research, security projects, CTF, security blog list |
| `data/types.ts` | — | the shared `Project` type |

After any edit, run `npm run dev` to preview or `npm run build` to verify.

---

## Images

1. Put the image file in **`public/images/`** (e.g. `public/images/my-project.png`).
2. Reference it anywhere as an absolute path: **`/images/my-project.png`**.

That's it — no imports. Files in `public/` are copied to the site root on build,
so the same path works locally and on GitHub Pages. Keep files reasonably small
(compress large photos) so the site stays fast.

---

## Add a project

Add an object to `yuukayceeProjects` (design) or `spyProjects` (development) in the
matching data file. All fields are required except the four optional ones at the end.

```ts
{
  id: "my-project",              // unique, becomes the URL: /project/my-project
  identity: "spy",               // "yuukaycee" | "spy" | "cyb3r" — controls theme
  title: "My Project",
  subtitle: "One-line description",
  category: "Systems",
  year: "2026",
  tags: ["Go", "CLI", "Crypto"],
  overview: "The elevator pitch.",
  problem: "What problem it solves.",
  approach: "How you approached it.",
  process: ["Step one", "Step two", "Step three"],
  outcome: "The result.",
  lessons: "What you learned.",
  featured: true,
  coverColor: "#CC1234",         // used for the cover gradient when no image is set

  // ── all optional ──
  cover: "/images/my-project.png",          // hero image (see Images above)
  gallery: ["/images/shot-1.png"],          // reserved for future gallery use
  github: "https://github.com/you/repo",    // shows a "Source" button
  website: "https://demo.example.com",      // shows a "Live" button
}
```

**Empty sections auto-hide.** If you leave `problem`, `approach`, `outcome`, or
`lessons` as `""` (or `process` as `[]`), that section simply won't render on the
project page. Fill in only what you have.

---

## Add an open-source repo (Development → Open Source)

Add to `openSourceRepos` in `data/development.ts`:

```ts
{ name: "deaddrop", description: "Encrypted secrets CLI", language: "Go", stars: 0, url: "https://github.com/you/deaddrop" }
```

Leave `url` as `"#"` for a placeholder — the card won't be clickable until it's a
real link.

---

## Add a blog post

Two small steps — a metadata entry and a Markdown file.

**1. Add metadata** to the list in the section's data file:
`cyberBlogPosts` in `data/security.ts` (Security blog) or `devBlogPosts` in
`data/development.ts` (Development blog):

```ts
{
  id: "post-2",
  slug: "my-post",              // must match the .md filename below
  title: "My Post Title",
  category: "Tutorial",
  date: "2026-07",
  readTime: "6 min",
  excerpt: "One or two sentences shown in the blog list.",
}
```

**2. Write the body** as a Markdown file whose name is the `slug`:

- Security: `src/app/content/blog/security/my-post.md`
- Development: `src/app/content/blog/development/my-post.md`

Write normal Markdown — headings, **bold**, lists, links, blockquotes, tables, and
fenced code blocks (```` ```go ````) all render in the section's fonts and colors.
Code blocks are intentionally plain (no syntax highlighting, to keep the bundle
small). Images go in `public/images/` and are referenced as
`![alt](/images/name.png)`.

The post is live at `/security/blog/my-post` (or `/development/blog/my-post`) and
appears automatically in that section's blog list.

---

## Deploying to GitHub Pages

The project is Pages-ready (base path `/`, SPA 404 fallback, `.nojekyll`). To go live:

1. Create a GitHub repo named exactly **`udaycherri.github.io`** and push this project to it.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` builds and deploys on every push to
   the default branch. Your site appears at `https://udaycherri.github.io`.
