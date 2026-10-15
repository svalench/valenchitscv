/* Тексты llms.txt собираются только из словарей, data.ts и полей JSON-LD. */
import { translations, type Lang } from './i18n'
import { articles, links, profile, projectsMeta } from './data'
import {
  aboutBadges,
  alternateNames,
  availableLanguages,
  documentTitle,
  languagePaths,
  localeOrder,
  metaDescriptions,
  personNames,
} from './locales'

const base = 'https://valenchits.dev'

/** Подписи и хэндлы — как в сетке профилей Contact. Порядок — sameAs (links). */
const profileLinks: { name: string; handle: string; url: string }[] = [
  { name: 'GitHub', handle: 'svalench', url: links.github },
  { name: 'LinkedIn', handle: 'in/valenchits', url: links.linkedin },
  { name: 'dev.to', handle: 'valenchits', url: links.devto },
  { name: 'Medium', handle: '@chitsalex', url: links.medium },
  { name: 'Wellfound', handle: 'valenchits', url: links.wellfound },
  { name: 'Hirify', handle: 'valenchits', url: links.hirify },
]

function linkLine(name: string, url: string, note?: string): string {
  if (/[\n\]]/.test(name) || /[\n)]/.test(url) || (note !== undefined && note.includes('\n'))) {
    throw new Error(`Некорректная ссылка для llms.txt: ${url}`)
  }
  if (note) return `- [${name}](${url}): ${note}`
  return `- [${name}](${url})`
}

function bulletList(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join('\n')
}

function section(heading: string, lines: string[]): string {
  return `## ${heading}\n\n${lines.join('\n')}`
}

/** URL из JSON-LD sameAs, если проект уже есть там; иначе href карточки. */
function projectUrl(url: string): string {
  const normalized = url.replace(/\/$/, '')
  const fromSchema = profile.projects.find((item) => item.replace(/\/$/, '') === normalized)
  return fromSchema ?? url
}

function languageName(lang: Lang): string {
  const index = localeOrder.indexOf(lang)
  const name = availableLanguages[index]
  if (!name) throw new Error(`Нет названия языка для ${lang}`)
  return name
}

function summaryBlocks(): string[] {
  const en = translations.en
  return [
    `# ${personNames.en}`,
    `> ${metaDescriptions.en}`,
    documentTitle(personNames.en),
    en.hero.role,
    en.hero.tagline,
    en.hero.location,
    en.hero.badge,
    profile.worksFor,
    profile.addressLocality,
    profile.addressCountry,
    profile.email,
    bulletList(profile.knowsAbout),
    bulletList(alternateNames),
    bulletList(availableLanguages),
  ]
}

function pageSections(): string[] {
  return localeOrder.map((lang) =>
    section(languageName(lang), [
      linkLine(personNames[lang], `${base}${languagePaths[lang]}`, metaDescriptions[lang]),
    ]),
  )
}

function projectLines(): string[] {
  return projectsMeta.map((meta) => {
    const localized = translations.en.projects.items.find((item) => item.name === meta.name)
    return linkLine(meta.name, projectUrl(meta.url), localized?.desc)
  })
}

function articleLines(): string[] {
  return articles.map((article) => linkLine(article.title, article.url, `${article.source} · ${article.date}`))
}

function pypiLines(): string[] {
  const lines: string[] = []
  for (const meta of projectsMeta) {
    if (meta.pypi) lines.push(linkLine(meta.name, meta.pypi, 'PyPI'))
  }
  return lines
}

/** Optional — секция спецификации llmstxt.org для вторичных ссылок. */
function linkSections(includeFull: boolean): string[] {
  const optional = [...pypiLines(), ...(includeFull ? [linkLine('llms-full.txt', `${base}/llms-full.txt`)] : [])]
  const sections = [
    ...pageSections(),
    section(
      translations.en.contact.profilesLabel,
      profileLinks.map((item) => linkLine(item.name, item.url, item.handle)),
    ),
    section(translations.en.nav.projects, projectLines()),
    // Заголовок секции фиксированный: подпись в навигации сайта может быть длиннее.
    section('Writing', articleLines()),
  ]
  if (optional.length > 0) sections.push(section('Optional', optional))
  return sections
}

function renderCv(lang: Lang): string {
  const t = translations[lang]
  const chunks: string[] = [
    languageName(lang),
    personNames[lang],
    metaDescriptions[lang],
    t.hero.badge,
    t.hero.role,
    t.hero.tagline,
    t.hero.location,
  ]
  for (const stat of t.stats) chunks.push(stat.value, stat.label)
  chunks.push(t.about.label, t.about.heading, t.about.p1, t.about.p2, t.about.interestsLabel, bulletList(t.about.interests), t.about.languagesLabel)
  for (const language of t.about.languages) chunks.push(language.name, language.level)
  chunks.push(aboutBadges.role, aboutBadges.reach, t.experience.label, t.experience.heading)
  for (const item of t.experience.items) {
    chunks.push(item.company, item.role, item.period, bulletList(item.bullets), bulletList(item.tags))
  }
  chunks.push(t.stack.label, t.stack.heading)
  for (const group of t.stack.groups) chunks.push(group.title, bulletList(group.items))
  chunks.push(t.projects.label, t.projects.heading, t.projects.sub)
  for (const item of t.projects.items) chunks.push(item.name, item.desc)
  chunks.push(t.writing.label, t.writing.heading, t.writing.sub)
  for (const article of articles) chunks.push(article.title, `${article.source} · ${article.date}`)
  chunks.push(t.contact.label, t.contact.heading, t.contact.text, t.contact.cta, t.contact.profilesLabel, t.footer.rights, t.footer.built)
  return chunks.join('\n\n')
}

function assemble(parts: string[]): string {
  return `${parts.join('\n\n')}\n`
}

export function buildLlmsTxt(): string {
  return assemble([...summaryBlocks(), ...linkSections(true)])
}

export function buildLlmsFullTxt(): string {
  return assemble([...summaryBlocks(), ...localeOrder.map((lang) => renderCv(lang)), ...linkSections(false)])
}
