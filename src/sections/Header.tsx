import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang, langNames, type Lang } from '../i18n'

const langs: Lang[] = ['be', 'en', 'ru']

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const items = [
    ['#about', t.nav.about],
    ['#experience', t.nav.experience],
    ['#stack', t.nav.stack],
    ['#projects', t.nav.projects],
    ['#writing', t.nav.writing],
    ['#contact', t.nav.contact],
  ] as const

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d0d10]/85 px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="accent-gradient flex h-8 w-8 items-center justify-center rounded-lg font-display text-sm font-bold text-black">
              AV
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-white/90">valenchits</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {items.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] font-medium text-white/55 transition-colors hover:text-[#ff5a1f]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 font-mono2 text-[11px] font-medium transition-all ${
                    lang === l ? 'accent-gradient text-black' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {langNames[l]}
                </button>
              ))}
            </div>
            <button
              className="ml-1 text-white/70 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0d0d10]/95 p-4 backdrop-blur-xl lg:hidden">
            {items.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-[#ff5a1f]"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
