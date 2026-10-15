# Sitechecker SEO и скорость

- Twitter Card полный: card, title, description, image `https://valenchits.dev/og.jpg` (1200×630), image:alt на языке страницы
- H1 — только имя, без вложенных тегов; alt фото другие
- У картинок width/height; hero eager + fetchpriority=high; about lazy + decoding=async
- WebP/AVIF собирает `scripts/optimize-images.mjs` внутри `npm run build`, в разметке `<picture>`
- GA4 `G-YJDQT6G7KG` и Метрика стартуют через 6 с после load; GTM-контейнера нет; CSP не менялся
- CSS инлайн (нет render-blocking stylesheet), font-display: swap, preconnect на gtag и Метрику, preload героя
- Inline style убраны в классы
- x-default и en оба ведут на `https://valenchits.dev/`
- `http://www.w3.org` остался только в xmlns SVG и namespace sitemap
- Lighthouse локально (vite preview): mobile 94→96 (TBT 190→0 мс, TTI 5.3→2.9 с), desktop 100→100
- `npm run lint`, `npm run build`, `node scripts/check-seo.mjs` проходят
- aiscanauto не возвращался

DONE
