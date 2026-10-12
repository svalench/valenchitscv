import { createServer } from 'vite'
import { readFile, writeFile, mkdir } from 'node:fs/promises'

const base = 'https://valenchits.dev'
const langs = ['en', 'ru', 'be']
const ogLocales = { en: 'en_US', ru: 'ru_RU', be: 'be_BY' }
const lastmod = new Date().toISOString().slice(0, 10)

const hreflangHref = (lang) => `${base}${lang === 'en' || lang === 'x-default' ? '/' : `/${lang}/`}`
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
const jsonLd = (value) => JSON.stringify(value).replaceAll('<', '\\u003c')

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { render } = await server.ssrLoadModule('/src/prerender.tsx')
  const { buildLlmsTxt, buildLlmsFullTxt } = await server.ssrLoadModule('/src/llms.ts')
  const template = await readFile('dist/index.html', 'utf8')
  const pages = []
  for (const lang of langs) {
    const path = lang === 'en' ? '/' : `/${lang}/`
    pages.push({ lang, path, url: base + path, ...render(lang) })
  }

  for (const page of pages) {
    const title = page.title
    const person = {
      '@type': 'Person',
      '@id': `${base}/#person`,
      name: 'Alexander Valenchits',
      alternateName: page.alternateName,
      url: `${base}/`,
      image: `${base}/img/hero.jpg`,
      description: page.description,
      jobTitle: page.jobTitle,
      email: page.email,
      knowsAbout: page.knowsAbout,
      worksFor: { '@type': 'Organization', name: page.worksFor },
      address: {
        '@type': 'PostalAddress',
        addressLocality: page.addressLocality,
        addressCountry: page.addressCountry,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'professional',
        email: page.email,
        availableLanguage: page.availableLanguages,
        url: 'https://www.linkedin.com/in/valenchits/',
      },
      sameAs: page.sameAs,
    }
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url: page.url,
      inLanguage: page.lang,
      mainEntity: person,
    }
    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: `${base}/`,
      name: 'Alexander Valenchits',
      inLanguage: ['en', 'ru', 'be'],
      publisher: { '@id': `${base}/#person` },
    }
    const alternates = langs.filter((lang) => lang !== page.lang)
    const tags = `<link rel="canonical" href="${page.url}" />
      ${['en', 'ru', 'be', 'x-default'].map((lang) => `<link rel="alternate" hreflang="${lang}" href="${hreflangHref(lang)}" />`).join('\n')}
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content="Alexander Valenchits" />
      <meta property="og:locale" content="${ogLocales[page.lang]}" />
      ${alternates.map((lang) => `<meta property="og:locale:alternate" content="${ogLocales[lang]}" />`).join('\n')}
      <meta property="og:title" content="${escape(title)}" />
      <meta property="og:description" content="${escape(page.description)}" />
      <meta property="og:url" content="${page.url}" />
      <meta property="og:image" content="${base}/og.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Alexander Valenchits" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${escape(title)}" />
      <meta name="twitter:description" content="${escape(page.description)}" />
      <meta name="twitter:image" content="${base}/og.jpg" />
      <script type="application/ld+json">${jsonLd(schema)}</script>
      <script type="application/ld+json">${jsonLd(website)}</script>`
    const output = template
      .replace('<html lang="en">', `<html lang="${page.lang}">`)
      .replace(/<title>.*?<\/title>/s, `<title>${escape(title)}</title>`)
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(page.description)}" />`)
      .replace('</head>', `${tags}</head>`)
      .replace('<div id="root"></div>', () => `<div id="root">${page.html}</div>`)
    await mkdir(`dist${page.path}`, { recursive: true })
    await writeFile(`dist${page.path}index.html`, output)
  }

  const alternates = ['en', 'ru', 'be', 'x-default']
    .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${hreflangHref(lang)}" />`)
    .join('\n')
  const urls = pages
    .map((page) => `  <url>\n    <loc>${page.url}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`)
    .join('\n')
  await writeFile(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
  )
  // Комментарии в robots.txt не директивы: указывают агентам на llms.txt рядом с Allow.
  const llmsTxt = buildLlmsTxt()
  const llmsFullTxt = buildLlmsFullTxt()
  await writeFile('public/llms.txt', llmsTxt)
  await writeFile('public/llms-full.txt', llmsFullTxt)
  await writeFile('dist/llms.txt', llmsTxt)
  await writeFile('dist/llms-full.txt', llmsFullTxt)
  await writeFile(
    'dist/robots.txt',
    `# llms.txt: ${base}/llms.txt\n# llms-full.txt: ${base}/llms-full.txt\nUser-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`,
  )
  await writeFile(
    'dist/404.html',
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>404 — Page not found</title></head><body><main><h1>404 — Page not found</h1><a href="/">Alexander Valenchits — Home</a></main></body></html>',
  )
} finally {
  await server.close()
}
