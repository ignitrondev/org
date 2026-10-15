import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Generated at build time so every blog post is listed under the live domain.
export const GET: APIRoute = async ({ site }) => {
    const base = import.meta.env.BASE_URL;
    const url = (path: string) => new URL(`${base}${path}`, site).href;
    const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
    const latestPost = posts[0]?.data.updated ?? posts[0]?.data.date ?? new Date();
    const buildDate = new Date();

    const entries = [
        { loc: url(''), lastmod: buildDate, priority: '1.0' },
        { loc: url('blog/'), lastmod: latestPost, priority: '0.9' },
        { loc: url('foundry/'), lastmod: buildDate, priority: '0.8' },
        { loc: url('about/bima/'), lastmod: buildDate, priority: '0.8' },
        ...posts.map((post) => ({
            loc: url(`blog/${post.slug}/`),
            lastmod: post.data.updated ?? post.data.date,
            priority: '0.7',
        })),
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
    .map((entry) => `    <url>
        <loc>${entry.loc}</loc>
        <lastmod>${entry.lastmod.toISOString()}</lastmod>
        <priority>${entry.priority}</priority>
    </url>`)
    .join('\n')}
</urlset>
`;

    return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
