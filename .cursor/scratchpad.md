# llms.txt

- `public/llms.txt` и `public/llms-full.txt` собираются в prerender из словарей, data.ts и полей JSON-LD
- H1: Alexander Valenchits. Blockquote: meta description
- Секции: English / Russian / Belarusian, Find me on, Projects & Open Source, Writing, Optional
- Ссылки: /, /ru/, /be/, профили sameAs, проекты JSON-LD и остальные карточки, статьи, PyPI
- nginx отдаёт оба файла как `text/plain; charset=utf-8`, security headers на месте
- robots.txt: комментарии `# llms.txt` и `# llms-full.txt`
- `npm run build`, lint и check-seo проходят; файлы есть в `dist` и совпадают с `public`

DONE
