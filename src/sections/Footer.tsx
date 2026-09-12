import { useLang } from '../i18n'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-12">
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
