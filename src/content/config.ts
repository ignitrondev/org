import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    category: z.string(),
    label: z.string(),
    color: z.string().optional().default("var(--cyber-cyan)"),
    featured: z.boolean().optional().default(false),
  })
});

export const collections = {
  "blog": blogCollection,
};