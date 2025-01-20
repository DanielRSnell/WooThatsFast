import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import netlify from '@astrojs/netlify';

import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://woothatsfast.com',
  integrations: [sitemap(), mdx({
  
  })],
  adapter: netlify(),
});