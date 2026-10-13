import assert from 'node:assert/strict'
import { readFile, access, stat } from 'node:fs/promises'

const base = 'https://valenchits.dev'
// Имя снятого продукта собирается так, чтобы исходник не содержал саму строку.
const removedProduct = 'ai' + 'scan'
const fullNames = {
  en: 'Alexander Valenchits',
  ru: 'Александр Валенчиц',
  be: 'Аляксандр Валенчыц',
}
const locales = { en: 'en_US', ru: 'ru_RU', be: 'be_BY' }

for (const [lang, path, name] of [['en', '/', 'Alexander'], ['ru', '/ru/', 'Александр'], ['be', '/be/', 'Аляксандр']]) {
  const html = await readFile(`dist${path}index.html`, 'utf8')
  assert(html.includes(`<html lang="${lang}">`))
  assert(html.includes(`<link rel="canonical" href="${base}${path}"`))
  assert.equal((html.match(/<h1\b/g) || []).length, 1)
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]
  const h1Text = h1.replace(/<br\s*\/?>/gi, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  assert.equal(h1Text, fullNames[lang])
  assert(html.includes(name) && html.includes('EchoLang') && html.includes('fastapi-viewsets'))
  assert(!html.toLowerCase().includes(removedProduct))
  assert(!html.includes('<div id="root"></div>'))
  assert.equal((html.match(/<link rel="alternate" hreflang=/g) || []).length, 4)
  const description = html.match(/<meta name="description" content="([^"]*)"/)[1]
  assert(description.length <= 160, description)
  assert(html.includes(`property="og:locale" content="${locales[lang]}"`))
  assert(html.includes('property="og:site_name" content="Alexander Valenchits"'))
  assert(html.includes('property="og:image:width" content="1200"'))
  assert(html.includes('property="og:image:height" content="630"'))
  assert(html.includes(`${base}/og.jpg`))
  assert(html.includes('rel="manifest"'))
  assert(!html.includes('fonts.googleapis.com'))
  assert(html.includes('/img/hero-500.avif'))
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])
  assert.equal(schema.mainEntity['@type'], 'Person')
  assert.equal(schema.mainEntity.address.addressLocality, 'Minsk')
  assert.equal(schema.mainEntity.worksFor.name, 'Alusoft')
  assert(schema.mainEntity.knowsAbout.includes('Django'))
  assert(schema.mainEntity.sameAs.includes('https://echolang.io'))
  assert(!schema.mainEntity.sameAs.some((url) => url.toLowerCase().includes(removedProduct)))
  assert(schema.mainEntity.alternateName.includes('Aliaksandr Valenchits'))
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]))
  const website = blocks.find((block) => block['@type'] === 'WebSite')
  assert.equal(website['@id'], `${base}/#website`)
  assert.equal(website.publisher['@id'], `${base}/#person`)
  for (const match of html.matchAll(/(?:src|href|srcset|imagesrcset)="([^"]+)"/g)) {
    for (const part of match[1].split(',')) {
      const url = part.trim().split(/\s+/)[0]
      if (url.startsWith('/assets/') || url.startsWith('/img/')) await access(`dist${url}`)
    }
  }
}

const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const robots = await readFile('dist/robots.txt', 'utf8')
assert(robots.includes(`Sitemap: ${base}/sitemap.xml`))
assert(robots.includes(`# llms.txt: ${base}/llms.txt`))
assert(robots.includes(`# llms-full.txt: ${base}/llms-full.txt`))
const llms = await readFile('dist/llms.txt', 'utf8')
const llmsFull = await readFile('dist/llms-full.txt', 'utf8')
assert.equal(llms, await readFile('public/llms.txt', 'utf8'))
assert.equal(llmsFull, await readFile('public/llms-full.txt', 'utf8'))
assert.equal(llms.split('\n')[0], '# Alexander Valenchits')
assert(llms.includes('> Python Django / FastAPI developer. Backend developer, Minsk, Belarus, remote. Tech Lead for LLM and RAG.'))
assert(llms.includes('## English\n\n- [Alexander Valenchits](https://valenchits.dev/):'))
assert(llms.includes('## Russian\n\n- [Александр Валенчиц](https://valenchits.dev/ru/):'))
assert(llms.includes('## Belarusian\n\n- [Аляксандр Валенчыц](https://valenchits.dev/be/):'))
assert(llms.includes('## Find me on\n'))
assert(llms.includes('## Projects & Open Source\n'))
assert(llms.includes('## Writing\n'))
assert(llms.includes('## Optional\n'))
for (const url of [
  'https://github.com/svalench',
  'https://www.linkedin.com/in/valenchits/',
  'https://dev.to/valenchits',
  'https://medium.com/@chitsalex',
  'https://wellfound.com/u/valenchits',
  'https://hirify.me/valenchits',
  'https://echolang.io',
  'https://github.com/svalench/fastapi_viewsets',
  'https://github.com/svalench/django_graph_search',
  'https://github.com/svalench/llm-cache-router',
  `${base}/llms-full.txt`,
]) {
  assert(llms.includes(`](${url})`), url)
}
assert(llmsFull.startsWith('# Alexander Valenchits\n'))
assert(llmsFull.includes('> Python Django / FastAPI developer. Backend developer, Minsk, Belarus, remote. Tech Lead for LLM and RAG.'))
assert(llmsFull.includes('Python Django / FastAPI developer and backend developer, Minsk, Belarus, remote.'))
assert(!llmsFull.includes(`${base}/llms-full.txt`))
assert(!`${llms}\n${llmsFull}\n${sitemap}`.toLowerCase().includes(removedProduct))
assert.equal((sitemap.match(/<loc>/g) || []).length, 3)
assert(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'))
assert(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sitemap))
assert.equal((sitemap.match(/hreflang="x-default"/g) || []).length, 3)
assert((await readFile('dist/404.html', 'utf8')).includes('noindex'))
for (const file of ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'site.webmanifest', 'og.jpg']) {
  await access(`dist/${file}`)
}
assert((await stat('dist/og.jpg')).size < 150 * 1024)
console.log('PASS: three prerendered locales, headings, projects, canonical, hreflang, JSON-LD, assets, robots, sitemap, llms.txt and 404 metadata')
