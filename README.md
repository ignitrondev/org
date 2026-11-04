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
the committed lockfile. Node 22.23+ is still required to run Astro 7 itself
(developed on Node 24; see `.node-version`).

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

Cloudflare Pages builds the `astro-clean` branch and publishes `dist/`, so
merging into `astro-clean` is a production deploy. The domain is served by
Cloudflare, which is why there is no `public/CNAME`.

`.node-version` pins Node 24 for that build: Astro 7 requires Node 22.23 or
newer, and without the pin the Pages build image may pick an older default.

The `deploy` script (publish `dist/` to the `gh-pages` branch) predates the
Cloudflare setup and is not what serves the live site.

## The 3D hero's weight

The hero island is by far the heaviest thing the site serves. It is mounted
with `client:visible`, so none of this blocks first paint, and
`prefers-reduced-motion: reduce` hides `.hero-logo-3d`, which also stops the
island hydrating (an `IntersectionObserver` never fires for a `display: none`
element). It does load on phones.

| Asset | Size |
| --- | --- |
| `HeroLogo3D.*.js` | 1.09 MB (286 kB gzipped) |
| `base_basic_pbr.glb` | 1.13 MB |
| `hdr/potsdamer-platz-512.hdr` | 302 kB |

The GLB was optimised from a 10.5 MB original that carried 1,000,000
triangles and three 2048x2048 PNG textures (~93 MB of VRAM) for a logo
rendered at most 520 px tall. It is now 50,000 triangles and 1024x1024 WebP
textures, ~18 MB of VRAM. Bounding box moved by at most 0.0004 units.

Normal and metallic/roughness maps use near-lossless WebP on purpose. Lossy
WebP always applies 4:2:0 chroma subsampling, and on a normal map those
channels are surface directions: at quality 95 the normal map measured a
0.83 deg mean angular error with outliers up to 68 deg, against 0.10 deg mean
and 1.7 deg max for near-lossless. Only the base colour map is lossy (q85).

To reproduce from a source export (each step decodes Draco and writes the
geometry back uncompressed, so Draco must be re-applied last):

```bash
G="bunx @gltf-transform/cli"
$G optimize source.glb s1.glb --texture-compress false \
  --simplify --simplify-ratio 0.05 --simplify-error 0.001 --compress draco
$G resize s1.glb s2.glb --width 1024 --height 1024   # PNG/JPEG only: before WebP
$G webp s2.glb s3.glb --slots baseColorTexture --quality 85
$G webp s3.glb s4.glb --slots "{normalTexture,metallicRoughnessTexture}" --near-lossless true
$G draco s4.glb public/base_basic_pbr.glb
```

The environment map used to come from drei's `preset="city"`, which fetches
1.5 MB from `raw.githack.com` on every visit. It is now a self-hosted 512x256
downscale, so the hero's lighting no longer depends on a third-party CDN.

## Known issues

- `bun audit` is clean for production dependencies. Three advisories remain in
  the dev-only tree, all reached through `shadcn`, which is kept solely for its
  `shadcn/tailwind.css` stylesheet.
