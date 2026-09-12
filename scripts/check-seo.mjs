import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
const base = 'https://valenchits.dev'
for (const [lang, path, name] of [['en','/','Alexander'],['ru','/ru/','Александр'],['be','/be/','Аляксандр']]) {
  const html = await readFile(`dist${path}index.html`, 'utf8')
  assert(html.includes(`<html lang="${lang}">`))
  assert(html.includes(`<link rel="canonical" href="${base}${path}"`))
  assert.equal((html.match(/<h1\b/g) || []).length, 1)
  assert(html.includes(name) && html.includes('EchoLang') && html.includes('AIScanAuto'))
  assert(!html.includes('<div id="root"></div>'))
  assert.equal((html.match(/hreflang=/g) || []).length, 4)
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])
  assert.equal(schema.mainEntity['@type'], 'Person')
  for (const match of html.matchAll(/(?:src|href)="(\/(?:assets|img)\/[^"#]+)"/g)) await access('dist' + match[1])
}
assert((await readFile('dist/robots.txt','utf8')).includes(`Sitemap: ${base}/sitemap.xml`))
assert.equal(((await readFile('dist/sitemap.xml','utf8')).match(/<loc>/g) || []).length, 3)
assert((await readFile('dist/404.html','utf8')).includes('noindex'))
console.log('PASS: three prerendered locales, headings, projects, canonical, hreflang, JSON-LD, assets, robots, sitemap and 404 metadata')
