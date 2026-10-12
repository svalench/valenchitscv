import { renderToString } from 'react-dom/server'
import Home from './pages/Home'
import { type Lang } from './i18n'
import { alternateNames, metaDescriptions, personNames } from './locales'
import { links, profile } from './data'

export function render(lang: Lang) {
  return {
    html: renderToString(<Home lang={lang} />),
    name: personNames[lang],
    description: metaDescriptions[lang],
    alternateName: alternateNames,
    email: profile.email,
    jobTitle: profile.jobTitle,
    knowsAbout: profile.knowsAbout,
    worksFor: profile.worksFor,
    addressLocality: profile.addressLocality,
    addressCountry: profile.addressCountry,
    sameAs: [...Object.values(links), ...profile.projects],
  }
}
