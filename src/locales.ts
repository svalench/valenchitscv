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
