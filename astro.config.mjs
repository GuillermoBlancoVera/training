import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Actions supplies GITHUB_REPOSITORY (owner/repo). Local development stays at '/'.
const [owner = 'guillermoblancovera', repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];

export default defineConfig({
  site: `https://${owner.toLowerCase()}.github.io`,
  base: repository ? `/${repository}` : undefined,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
    }),
  ],
});
