import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://ignitrondev.space',
    base: '/',
    output: 'static',
    trailingSlash: 'ignore',
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
});
