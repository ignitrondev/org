import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  // Content Layer loader; the entry id is the filename without its
  // extension, which keeps the existing /blog/<slug> URLs.
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    category: z.string(),
    label: z.string(),
    color: z.string().optional().default("var(--cyber-cyan)"),
    featured: z.boolean().optional().default(false),
    // SEO overrides; fall back to title/excerpt when absent
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    updated: z.date().optional(),
    ogImage: z.string().optional(),
    // Spotify playlist ID rendered as an embed under the article
    spotifyPlaylist: z.string().optional(),
    spotifyPlaylistName: z.string().optional(),
  })
});

export const collections = {
  "blog": blogCollection,
};