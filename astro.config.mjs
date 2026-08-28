import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import astroToc from 'astro-toc-smol';

export default defineConfig({
  site: 'https://astroarabia.dev',
  trailingSlash: 'never',
  integrations: [sitemap(), astroToc({ articleSelector: '#article-content' })],
  vite: {
    plugins: [tailwindcss()]
  }
});
