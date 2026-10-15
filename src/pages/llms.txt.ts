import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Plain-text site summary for AI assistants (https://llmstxt.org), generated at build
// time so new blog posts are listed automatically.
export const GET: APIRoute = async ({ site }) => {
    const base = import.meta.env.BASE_URL;
    const url = (path: string) => new URL(`${base}${path}`, site).href;
    const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    const body = `# IgnitronDev

> IgnitronDev is an independent engineering studio founded in 2019 by Bima Adam Nugraha. It designs and builds software architecture, backend systems, cloud infrastructure, data flows, and AI systems, and runs its own independent products.

Key facts:

- Founder & CEO: Bima Adam Nugraha, also known as Beatz Bimz, the name he used to produce atmospheric phonk and instrumental music from 2017 to 2021.
- Bima listens to and writes about atmospheric phonk, phonk wave, and nightdrive music.
- Products: ShipRadar (maritime vessel tracking), IGN Volcano (Indonesian volcano activity observatory), Ignitron Clinical UI (open-source React components for clinical workflows, starting with @ignitrondev/odontogram).
- Client work includes Gladiool EMR for RSIA Gladiool (backend, frontend, and Kubernetes/Argo CD infrastructure) and Konter HQ, a multi-branch point-of-sale system for Hamstore Cell & Service.
- Contact: info@ignitrondev.space

## Pages

- [Home](${url('')}): What IgnitronDev does, its products, client projects, and approach
- [About Bima Adam Nugraha](${url('about/bima/')}): Profile of the founder, his engineering work, and his music as Beatz Bimz
- [Clinical UI catalog](${url('foundry/')}): Roadmap and status of Ignitron Clinical UI components
- [Blog](${url('blog/')}): Notes on engineering, products, and music

## Blog posts

${posts.map((post) => `- [${post.data.title}](${url(`blog/${post.slug}/`)}): ${post.data.seoDescription ?? post.data.excerpt}`).join('\n')}

## Elsewhere

- [ShipRadar](https://shipradar.my.id)
- [IGN Volcano](https://magma.ignitrondev.space)
- [Ignitron Clinical UI docs](https://ignitron-medic-ui.pages.dev/)
- [@ignitrondev/odontogram on npm](https://www.npmjs.com/package/@ignitrondev/odontogram)
- [GitHub: ignitrondev](https://github.com/ignitrondev)
- [Instagram: @ignitrondev](https://instagram.com/ignitrondev)
- [Instagram: @xiaobima__ (Bima Adam Nugraha)](https://instagram.com/xiaobima__)
- [Bima's Spotify playlist: Atmospheric Phonk Wave](https://open.spotify.com/playlist/2noGfli9DsoQpf81dD5H7R)
`;

    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
