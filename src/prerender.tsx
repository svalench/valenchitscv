import { renderToString } from 'react-dom/server'
import Home from './pages/Home'
import { type Lang, translations } from './i18n'
import { personNames } from './locales'
import { links } from './data'
export function render(lang: Lang) {
  return { html: renderToString(<Home lang={lang} />), name: personNames[lang], description: translations[lang].hero.tagline, profiles: Object.values(links) }
}
