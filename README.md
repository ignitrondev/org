# IgnitronDev

Marketing and portfolio site for IgnitronDev, an independent engineering studio.
Static site built with [Astro](https://astro.build), deployed to
[ignitrondev.space](https://ignitrondev.space).

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Astro 4 (`output: 'static'`) |
| Interactive islands | React 18 via `@astrojs/react` |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) + custom tokens in `src/styles.css` |
| 3D hero | `three` + `@react-three/fiber` / `drei` / `postprocessing`, Draco-compressed |
| Animation | GSAP, Lenis (smooth scroll) |
| Fonts | Geist Variable (`@fontsource-variable/geist`) |
| Content | Astro content collections (Markdown) |

## Getting started

This project uses [Bun](https://bun.sh) as its package manager; `bun.lock` is
the committed lockfile. Node 18+ is still required to run Astro itself
(developed on Node 24).

```bash
bun install
bun run dev      # dev server at http://localhost:4321
```

`bun run check` needs more than the default V8 heap, because the three.js type
graph is large:

```bash
NODE_OPTIONS=--max-old-space-size=6144 bun run check
```

Note that `astro check` currently requires TypeScript 6; TypeScript 7's native
compiler does not yet expose the API it relies on, which is why `typescript` is
pinned to `^6`.

## Scripts

| Script | Purpose |
| --- | --- |
| `bun run dev` | Start the dev server |
| `bun run build` | Build to `dist/` |
| `bun run check` | Type-check `.astro` and TypeScript files |
| `bun run preview` | Serve the built output locally |
| `bun run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

## Project layout

```
src/
  pages/            Routes (file-based)
    index.astro       Home
    blog.astro        Post index
    blog/[slug].astro Post detail, generated from the content collection
    foundry.astro     Foundry page
    about/bima.astro  Founder profile
    403 404 500 503   Error pages
    sitemap.xml.ts    Generated sitemap
    llms.txt.ts       Generated plain-text site summary (llmstxt.org)
  components/
    home/             Homepage sections
    HeroLogo3D.tsx    React Three Fiber hero, mounted with client:visible
    C.astro           Inline translatable copy (see i18n below)
  content/blog/       Markdown posts; schema in src/content/config.ts
  data/schema.json    JSON-LD graph injected by BaseLayout
  layouts/            BaseLayout (meta, OG tags, schema)
  styles.css          Design tokens and global styles
public/               Served verbatim (images, Draco decoder, robots.txt, CMS admin)
```

## Content

Blog posts are Markdown files in `src/content/blog/`. Frontmatter is validated by
the Zod schema in `src/content/config.ts`:

```yaml
---
title: "Post title"
date: 2024-08-10T00:00:00Z
excerpt: "One-line summary"
category: "story"
label: "STORY"
color: "var(--matrix-green)"   # optional, defaults to var(--cyber-cyan)
featured: true                 # optional, defaults to false
# also optional:
# seoTitle, seoDescription, keywords, updated, ogImage
# spotifyPlaylist, spotifyPlaylistName
---
```

`color` and `label` drive the accent and tag shown on the post card, and
`featured` promotes a post on the index.

A build fails on frontmatter that does not match the schema, so a typo surfaces
at build time rather than in production.

## Internationalisation

Translation is client-side. `LanguageToggle.astro` swaps text for every element
carrying `data-i18n`, reading the `data-t-en` / `data-t-id` / `data-t-zh`
attributes. The `C.astro` component is the convenient way to emit those:

```astro
<C tag="h2" en="Engineering" id="Rekayasa" zh="工程" />
```

Supported locales live in `src/i18n/index.ts`. Because the swap happens in the
browser, the served HTML is always English — worth remembering when checking SEO
output.

## Styling notes

`src/styles.css` holds the design tokens (`--text-*`, `--line-*`, `--font-*`).
Most components use plain scoped CSS with those tokens rather than Tailwind
utilities; Tailwind is present mainly for its preflight and the odd utility.
`body` sets its font explicitly from `--font-family`, so Tailwind's default font
stack does not apply.

## Continuous integration

`.github/workflows/ci.yml` runs `bun install --frozen-lockfile`, `astro check`
and `bun run build` on every push and pull request, and uploads `dist/` as an
artifact.

## Deployment

`bun run deploy` runs the build and pushes `dist/` to the `gh-pages` branch.
The domain is fronted by Cloudflare, so there is deliberately no `public/CNAME`.

## Known issues

- The 3D hero chunk is ~1.1 MB in a single bundle. It is loaded with
  `client:visible`, so it does not block first paint, but it is the main weight
  on the page.
- `npm audit` reports vulnerabilities that can only be cleared by upgrading to
  Astro 7, a breaking change from the current Astro 4. The site is fully static
  with no server runtime, so the practical exposure is low.
