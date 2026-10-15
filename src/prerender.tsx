import { renderToString } from 'react-dom/server'
import Home from './pages/Home'
import { type Lang } from './i18n'
import { alternateNames, availableLanguages, documentTitle, imageAlts, metaDescriptions, personNames } from './locales'
import { links, profile } from './data'

export function render(lang: Lang) {
  return {
    html: renderToString(<Home lang={lang} />),
    name: personNames[lang],
    title: documentTitle(personNames[lang]),
    description: metaDescriptions[lang],
    ogImageAlt: imageAlts[lang].share,
    alternateName: alternateNames,
    availableLanguages,
    email: profile.email,
    jobTitle: profile.jobTitle,
    knowsAbout: profile.knowsAbout,
    worksFor: profile.worksFor,
    addressLocality: profile.addressLocality,
    addressCountry: profile.addressCountry,
    sameAs: [...Object.values(links), ...profile.projects],
  }
}
