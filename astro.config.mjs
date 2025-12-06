import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 👇 YOUR LIVE URL
  site: 'https://yashdhone.vercel.app', 
  integrations: [sitemap()],
});