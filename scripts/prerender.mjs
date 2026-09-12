import { createServer } from 'vite'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
const base = 'https://valenchits.dev'
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { render } = await server.ssrLoadModule('/src/prerender.tsx')
  const template = await readFile('dist/index.html', 'utf8')
  const urls = []
  for (const lang of ['en', 'ru', 'be']) {
    const path = lang === 'en' ? '/' : `/${lang}/`
    const { html, name, description, profiles } = render(lang)
    const url = base + path
    urls.push(url)
    const title = `${name} — Python Backend Tech Lead & AI Engineer`
    const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
    const schema = { '@context': 'https://schema.org', '@type': 'ProfilePage', url, inLanguage: lang, mainEntity: { '@type': 'Person', '@id': base + '/#person', name: 'Alexander Valenchits', alternateName: ['Александр Валенчиц', 'Аляксандр Валенчыц'], url: base + '/', jobTitle: 'Backend Tech Lead & AI Engineer', sameAs: profiles } }
    const tags = `<link rel="canonical" href="${url}" />
      ${['en','ru','be','x-default'].map(l => `<link rel="alternate" hreflang="${l}" href="${base}${l === 'en' || l === 'x-default' ? '/' : '/' + l + '/'}" />`).join('\n')}
      <meta property="og:type" content="profile" /><meta property="og:title" content="${escape(title)}" />
      <meta property="og:description" content="${escape(description)}" /><meta property="og:url" content="${url}" />
      <meta property="og:image" content="${base}/img/hero.jpg" /><meta property="og:image:alt" content="Alexander Valenchits" />
      <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${escape(title)}" />
      <meta name="twitter:description" content="${escape(description)}" /><meta name="twitter:image" content="${base}/img/hero.jpg" />
      <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`
    const output = template.replace('<html lang="en">', `<html lang="${lang}">`).replace(/<title>.*?<\/title>/s, `<title>${escape(title)}</title>`).replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(description)}" />`).replace('</head>', tags + '</head>').replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
    await mkdir('dist' + path, { recursive: true })
    await writeFile('dist' + path + 'index.html', output)
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>`)
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`)
  await writeFile('dist/404.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>404 — Page not found</title></head><body><main><h1>404 — Page not found</h1><a href="/">Alexander Valenchits — Home</a></main></body></html>')
} finally { await server.close() }
