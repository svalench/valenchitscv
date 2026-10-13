# Снятие AIScanAuto

- Карточка проекта, ссылка sameAs и блок опыта (en/ru/be) удалены из `src/data.ts` и `src/i18n.tsx`
- Две статьи про автодиагностику / OBD AI Scanner убраны из списка публикаций: это тот же продукт
- `public/llms.txt` и `public/llms-full.txt` пересобраны prerender-ом
- Сетка проектов и таймлайн опыта рендерятся из массивов: пустых карточек нет (7 проектов, 5 мест работы, 5 статей)
- `index.html` (GA4) и `nginx.conf` (CSP) не менялись
- `npm run lint`, `npm run build`, `node scripts/check-seo.mjs` проходят
- `rg -i aiscan` по репозиторию и `dist` — пусто

DONE
