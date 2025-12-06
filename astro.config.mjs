import { defineConfig } from 'astro/config';
    import sitemap from '@astrojs/sitemap'; 

    export default defineConfig({
      site: 'https://yash-dhone.vercel.app', // You will update this later
      integrations: [sitemap()],
    });