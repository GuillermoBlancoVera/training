import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];

export default defineConfig({
  integrations: [mdx()],
  // GitHub Actions supplies these variables. Local development stays at '/'.
  base: repository ? `/${repository}` : undefined,
  site: owner ? `https://${owner}.github.io` : undefined,
});
