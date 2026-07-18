# Academic website

A fast, accessible academic website built with [Astro](https://astro.build/).

## Current sections

- Research
- Publications
- Teaching
- Talks

## Edit the content

The main academic content is stored in:

```text
src/data/site.ts
```

Update the profile, research themes, publications, teaching, talks, email address, and external profile links in that file.

The interface is in `src/pages/index.astro`, and the visual design is in `src/styles/global.css`.

## Run locally

```bash
npm install
npm run dev
```

Then open the local address printed by Astro.

## Validate and build

```bash
npm run build
```

The generated static site is written to `dist/`.

## Search-engine protection

This development version deliberately blocks indexing in two places:

- `<meta name="robots" content="noindex, nofollow">` in `src/pages/index.astro`
- `Disallow: /` in `public/robots.txt`

Remove both protections only when the final custom domain is connected and the site is ready to launch.

## Before launch

1. Replace all placeholder content in `src/data/site.ts`.
2. Change `site` in `astro.config.mjs` to the final custom domain.
3. Add the final canonical URL and social sharing image.
4. Remove the two indexing blocks described above.
5. Configure GitHub Pages and the custom domain.
