import type { Lang } from './i18n'
export const languagePaths: Record<Lang, string> = { en: '/', ru: '/ru/', be: '/be/' }
export const personNames: Record<Lang, string> = { en: 'Alexander Valenchits', ru: 'Александр Валенчиц', be: 'Аляксандр Валенчыц' }
export const localeOrder: Lang[] = ['en', 'ru', 'be']
/** Порядок совпадает с JSON-LD contactPoint.availableLanguage. */
export const availableLanguages = ['English', 'Russian', 'Belarusian']
/** Суффикс <title>, который prerender подставляет к имени. */
export const documentTitleSuffix = 'Python Backend Tech Lead & AI Engineer'
export function documentTitle(name: string): string {
  return `${name} — ${documentTitleSuffix}`
}
/** Подписи на фото в About — одинаковые на всех языках. */
export const aboutBadges = {
  role: 'Tech Lead · AI Engineer',
  reach: 'Minsk → Worldwide',
}
export const alternateNames = [
  'Александр Валенчиц',
  'Аляксандр Валенчыц',
  'Aliaksandr Valenchits',
  'Alexander Valenchits (svalench)',
  'svalench',
]
export const metaDescriptions: Record<Lang, string> = {
  en: 'Python Django / FastAPI developer. Backend developer, Minsk, Belarus, remote. Tech Lead for LLM and RAG.',
  ru: 'Python-разработчик Django/FastAPI, Минск. Backend на FastAPI и Django, удалённо. LLM и RAG.',
  be: 'Python-распрацоўшчык Django/FastAPI, Мінск. Backend на FastAPI і Django, аддалена. LLM і RAG.',
}

/** Alt фото и карточки шаринга. Текст не совпадает с H1 (имя без описания). */
export const imageAlts: Record<Lang, { hero: string; about: string; share: string }> = {
  en: {
    hero: 'Selfie of Alexander Valenchits in sunglasses above the clouds',
    about: 'Portrait of Alexander Valenchits wearing a headset indoors',
    share: 'Share card: Alexander Valenchits, Python backend tech lead and AI engineer',
  },
  ru: {
    hero: 'Селфи Александра Валенчица в солнцезащитных очках над облаками',
    about: 'Портрет Александра Валенчица в гарнитуре в помещении',
    share: 'Карточка для соцсетей: Александр Валенчиц, Python backend tech lead и AI-инженер',
  },
  be: {
    hero: 'Сэлфі Аляксандра Валенчыца ў сонцаахоўных акулярах над аблокамі',
    about: 'Партрэт Аляксандра Валенчыца ў гарнітуры ў памяшканні',
    share: 'Картка для сацсетак: Аляксандр Валенчыц, Python backend tech lead і AI-інжынер',
  },
}

/** Фразы, которые Emphasize оборачивает в <strong>. Это подстроки уже существующих абзацев. */
export const emphasisPhrases: Record<Lang, string[]> = {
  en: ['Python Django / FastAPI developer', 'Tech Lead', 'applied AI products', 'domain-driven design'],
  ru: ['Python-разработчик Django/FastAPI', 'Tech Lead', 'прикладные AI-продукты', 'domain-driven design'],
  be: ['Python-распрацоўшчык Django/FastAPI', 'Tech Lead', 'прыкладныя AI-прадукты', 'domain-driven design'],
}

/** Анкоры переключателя языка: многословные, и не те же, что ссылки в подвале. */
export const langCodes: Record<Lang, string> = { en: 'EN', ru: 'RU', be: 'BE' }
export const langSwitchLabel: Record<Lang, string> = {
  en: 'Open the English page',
  ru: 'Открыть русскую страницу',
  be: 'Адкрыць беларускую старонку',
}

/** Ссылки на другие локали — на языке целевой страницы. */
export const localeLinkText: Record<Lang, string> = {
  en: 'English version of this page',
  ru: 'Русская версия этой страницы',
  be: 'Беларуская версія гэтай старонкі',
}
