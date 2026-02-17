import { defineConfig } from 'vite';

export default defineConfig({
    base: '/org/',
    build: {
        outDir: 'dist',
        minify: 'esbuild', // Faster and built-in (no extra install needed)
        rollupOptions: {
            input: {
                main: 'index.html',
                products: 'products.html',
                foundry: 'foundry.html',
                monitor: 'monitor.html',
                blog: 'blog.html'
            }
        }
    },
});
