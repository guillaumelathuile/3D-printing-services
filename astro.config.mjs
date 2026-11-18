import { defineConfig } from 'astro/config';

// Sur GitHub Actions, le nom du dépôt sert de base (guillaumelathuile.github.io/<repo>).
// En local, la base reste "/". Avec un domaine personnalisé : supprimer `base` et changer `site`.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig({
  site: 'https://guillaumelathuile.github.io',
  base: repo ? `/${repo}` : '/',
});
