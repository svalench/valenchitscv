import { useLang, type Lang } from '../i18n'
import { languagePaths, localeLinkText, localeOrder } from '../locales'

export default function Footer() {
  const { t, lang } = useLang()
  const others = localeOrder.filter((item): item is Lang => item !== lang)
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-12">
      <nav aria-label={t.footer.also} className="mb-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
        {others.map((item) => (
          <a
            key={item}
            href={languagePaths[item]}
            hrefLang={item}
            lang={item}
            className="text-link text-[13px]"
          >
            {localeLinkText[item]}
          </a>
        ))}
      </nav>
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="accent-gradient flex h-7 w-7 items-center justify-center rounded-md font-display text-xs font-bold text-black">
            AV
          </span>
          <span className="text-[13px] text-white/75">{t.footer.rights}</span>
        </div>
        <span className="font-mono2 text-[11px] text-white/30">{t.footer.built}</span>
      </div>
    </footer>
  )
}
