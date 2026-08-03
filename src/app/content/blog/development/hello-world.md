This is a starter post for the Development writing section. Delete it and drop
your own Markdown file in `src/app/content/blog/development/` — the site picks it
up automatically once you add a matching entry to `devBlogPosts` in
`src/app/data/development.ts`.

## Markdown just works

You can write **bold**, _italic_, `inline code`, and lists:

- Fenced code blocks render in a clean, plain monospace style
- Links, quotes, and tables render in the site's style
- Images go in `public/images/` and are referenced as `/images/name.png`

```ts
export function greet(name: string): string {
  return `hello, ${name}`;
}
```

> Everything here inherits the Development section's fonts and colors, so posts
> feel native to the site rather than pasted in.

Happy writing.
