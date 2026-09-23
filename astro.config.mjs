import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Actions supplies GITHUB_REPOSITORY (owner/repo). Local development stays at '/'.
const [owner = 'guillermoblancovera', repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const base = repository ? `/${repository}` : undefined;

// Removed or merged courses: keep old links working. Astro does not prefix `base` to destinations.
const retiredCourses = {
  'ia-profesionales': 'ia-en-el-trabajo',
  'ia-generativa-profesionales': 'ia-en-el-trabajo',
  'prompting-trabajo-diario': 'ia-en-el-trabajo',
  'fundamentos-programacion': null,
  'python-desde-cero': null,
  'python-automatizar-tareas': null,
};
const redirects = Object.fromEntries(
  Object.entries(retiredCourses).flatMap(([from, to]) =>
    ['', '/en'].map((lang) => [`${lang}/courses/${from}/`, `${base ?? ''}${lang}/courses/${to ? `${to}/` : ''}`]),
  ),
);

export default defineConfig({
  site: `https://${owner.toLowerCase()}.github.io`,
  base,
  trailingSlash: 'always',
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
    }),
  ],
});
