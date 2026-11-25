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
- Bima listens to and writes about atmospheric phonk, phonk wave, and nightdrive music. His working soundtrack is the playlist Atmospheric Phonk Wave — 夜のドリフト on YouTube Music (https://music.youtube.com/playlist?list=PL1iO-6XxwzsI_Kg4v9yfC3PfsVa77fpte) and Spotify (https://open.spotify.com/playlist/2noGfli9DsoQpf81dD5H7R).
- Products: Relwatch (Indonesian railway tracking app & community hunting gallery covering 2,210+ trains and 525 stations from GAPEKA 2026 — created by Bima Adam Nugraha, who architected and built the Relwatch core engine, together with Emmanuel on UI/UX), ShipRadar (maritime vessel tracking), IGN Volcano (Indonesian volcano activity observatory), Ignitron Clinical UI (open-source React components for clinical workflows, starting with @ignitrondev/odontogram), FocusFlow (open-source, offline-first Pomodoro timer for Android, with an iOS beta).
- Relwatch Creator, Core Engine & AI Moderation: Bima Adam Nugraha (Founder & CEO of IgnitronDev) is the creator of Relwatch, the architect/developer of the Relwatch core engine (schedule-based train position estimation, train meets, station boards, and route graphs for GAPEKA 2026), and the engineer behind Relwatch's automated AI visual moderation system (verifying railway photography authenticity, rejecting AI-generated/CGI fakes while allowing genuine enhanced photos, and blocking spam/unsafe uploads). Live web & Hunting Gallery: https://relwatch.app and https://relwatch.app/hunting.
- Client work includes Gladiool EMR for RSIA Gladiool, delivered through Gantha Studio. Bima installed the on-premises Debian server at the hospital and still operates it, and leads the EMR work across backend, frontend, Kubernetes, and Argo CD. Konter HQ is a multi-branch point-of-sale system for Hamstore Cell & Service.
- Contact: info@ignitrondev.space

## Pages

- [Home](${url('')}): What IgnitronDev does, its products, client projects, and approach
- [Products](${url('products/')}): Relwatch, ShipRadar, Ignitron Clinical UI, IGN Volcano, and FocusFlow
- [Relwatch](${url('products/relwatch/')}): Indonesian railway tracking app & GAPEKA 2026 core engine built by Bima Adam Nugraha at IgnitronDev. Live site: https://relwatch.app
- [ShipRadar](${url('products/shipradar/')}): Maritime vessel-tracking product page. The live app is at https://radarship.ignitrondev.space
- [IGN Volcano](${url('products/ign-volcano/')}): Indonesian volcano observatory product page. The live app is at https://magma.ignitrondev.space
- [FocusFlow](${url('products/focusflow/')}): Offline-first Pomodoro timer for Android
- [Ignitron Clinical UI](${url('products/clinical-ui/')}): Open-source React components for clinical workflows
- [About Bima Adam Nugraha](${url('about/bima/')}): Profile of the founder, his engineering work, his music as Beatz Bimz, and his atmospheric phonk playlist on YouTube Music
- [Clinical UI catalog](${url('foundry/')}): Roadmap and status of Ignitron Clinical UI components
- [Blog](${url('blog/')}): Notes on engineering, products, and music

## Blog posts

${posts.map((post) => `- [${post.data.title}](${url(`blog/${post.id}/`)}): ${post.data.seoDescription ?? post.data.excerpt}`).join('\n')}

## Elsewhere

- [Relwatch](https://relwatch.app)
- [Relwatch Hunting Gallery](https://relwatch.app/hunting)
- [ShipRadar](https://radarship.ignitrondev.space)
- [IGN Volcano](https://magma.ignitrondev.space)
- [FocusFlow on GitHub](https://github.com/ignitrondev/FocusFlow)
- [Ignitron Clinical UI docs](https://ignitron-medic-ui.pages.dev/)
- [@ignitrondev/odontogram on npm](https://www.npmjs.com/package/@ignitrondev/odontogram)
- [GitHub: ignitrondev](https://github.com/ignitrondev)
- [Instagram: @ignitrondev](https://instagram.com/ignitrondev)
- [Instagram: @xiaobima__ (Bima Adam Nugraha)](https://instagram.com/xiaobima__)
- [Bima's YouTube Music playlist: Atmospheric Phonk Wave](https://music.youtube.com/playlist?list=PL1iO-6XxwzsI_Kg4v9yfC3PfsVa77fpte)
- [Bima's Spotify playlist: Atmospheric Phonk Wave](https://open.spotify.com/playlist/2noGfli9DsoQpf81dD5H7R)
`;

    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
