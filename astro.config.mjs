import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://christofkoolen.github.io',
  base: '/academic-website',
  output: 'static',
  trailingSlash: 'never'
});
