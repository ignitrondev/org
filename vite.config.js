import { defineConfig } from 'vite';

export default defineConfig({
    base: '/org/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: './index.html',
                products: './products.html',
                foundry: './foundry.html',
                monitor: './monitor.html',
                blog: './blog.html'
            }
        }
    },
});
