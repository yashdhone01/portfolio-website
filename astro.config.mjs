import { defineConfig } from 'astro/config';
    import sitemap from '@astrojs/sitemap'; 

    export default defineConfig({
      site: 'https://yashdhone.vercel.app', // You will update this later
      integrations: [sitemap()],
    });