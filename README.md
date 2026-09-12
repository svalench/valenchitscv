# Alexander Valenchits — CV

Personal portfolio: [valenchits.dev](https://valenchits.dev/).
Python Backend Tech Lead and AI Engineer; projects include AIScanAuto,
EchoLang, FastAPI ViewSets and Django Graph Search.

React, TypeScript and Vite. English, Russian and Belarusian pages are
rendered to static HTML at build time, then hydrated in the browser.

```sh
npm ci
npm run dev
npm run build
node scripts/check-seo.mjs
```

`dist/` is the deployable output. See [DEPLOY.md](DEPLOY.md) for the existing
Docker/nginx deployment, proxy redirects, indexing and facts to confirm.
Translations and career text: `src/i18n.tsx`; links: `src/data.ts`.
The build generates metadata, structured data, robots.txt and sitemap.xml.

Canonical URLs: `/`, `/ru/`, `/be/`. Languages use regular links and do not
depend on cookies or localStorage. CV content remains readable without JS.
