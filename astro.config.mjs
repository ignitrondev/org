import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this project from /org, while Cloudflare Pages/custom
// domains serve it from the domain root. CF_PAGES is provided during builds.
// Cloudflare Pages should build the astro-clean branch with `npm run build`
// and publish the generated `dist` directory.
const isCloudflarePages = process.env.CF_PAGES === '1' || process.env.CF_PAGES === 'true';

export default defineConfig({
    site: process.env.PUBLIC_SITE_URL ?? (isCloudflarePages ? 'https://ignitrondev.space' : 'https://ignitrondev.github.io'),
    base: isCloudflarePages ? '/' : '/org',
    output: 'static',
    trailingSlash: 'always',
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
});
