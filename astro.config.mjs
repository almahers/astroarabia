import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import astroToc from 'astro-toc-smol';
import purgecss from 'astro-purgecss';

export default defineConfig({
  site: 'https://astroarabia.dev',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
    astroToc({ articleSelector: '#article-content' }),
    purgecss({
      content: [process.cwd() + '/src/**/*.{astro,md,ts}'],
      safelist: {
        greedy: [
          /^group-/,
          /^dark:/,
          /^hover:/,
          /^focus:/,
          /^sm:/,
          /^md:/,
          /^lg:/,
          /bg-/,
          /border-/,
          /text-/,
          /shadow-/,
          /data-theme/,
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
