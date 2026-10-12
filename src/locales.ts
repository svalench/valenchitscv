import type { Lang } from './i18n'
export const languagePaths: Record<Lang, string> = { en: '/', ru: '/ru/', be: '/be/' }
export const personNames: Record<Lang, string> = { en: 'Alexander Valenchits', ru: 'Александр Валенчиц', be: 'Аляксандр Валенчыц' }
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
