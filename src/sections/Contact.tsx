import { ArrowUpRight, Github, Linkedin, Globe, FileText, PenLine, Rocket } from 'lucide-react'
import { useLang } from '../i18n'
import { links } from '../data'
import SectionHead from './SectionHead'

const profiles = [
  { name: 'LinkedIn', handle: 'in/valenchits', url: links.linkedin, icon: Linkedin },
  { name: 'GitHub', handle: 'svalench', url: links.github, icon: Github },
  { name: 'Medium', handle: '@chitsalex', url: links.medium, icon: PenLine },
  { name: 'dev.to', handle: 'valenchits', url: links.devto, icon: FileText },
  { name: 'Wellfound', handle: 'valenchits', url: links.wellfound, icon: Rocket },
  { name: 'Hirify', handle: 'valenchits', url: links.hirify, icon: Globe },
]

export default function Contact() {
  const { t, lang } = useLang()

  return (
    <section id="contact" className="border-t border-white/10 px-6 py-20 md:px-12 lg:py-28">
      <div className="reveal relative overflow-hidden rounded-[32px] border border-[#ff5a1f]/20 bg-gradient-to-b from-[#ff5a1f]/[0.08] to-[#151519]/75 p-8 md:p-14">
        <div className="glow-orb pointer-events-none absolute -top-32 right-0 h-[400px] w-[400px] rounded-full" />

        <div className="relative">
          <SectionHead label={t.contact.label} heading={t.contact.heading} />
          <p className="max-w-xl text-[15px] leading-relaxed text-white/75">{t.contact.text}</p>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="accent-gradient mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            {t.contact.cta}
            <ArrowUpRight size={16} />
          </a>

          <button type="button" onClick={() => window.print()} className="ml-4 mt-4 rounded-full border border-white/30 px-6 py-3 text-sm text-white">
            {lang === 'ru' ? 'Сохранить CV в PDF' : lang === 'be' ? 'Захаваць CV у PDF' : 'Save CV as PDF'}
          </button>

          <p className="mb-4 mt-12 font-mono2 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">
            {t.contact.profilesLabel}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 transition-colors hover:border-[#ff5a1f]/50"
              >
                <p.icon size={18} className="shrink-0 text-[#ff5a1f]" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white/90">{p.name}</p>
                  <p className="truncate font-mono2 text-[11px] text-white/75">{p.handle}</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto shrink-0 text-white/30 transition-colors group-hover:text-[#ff5a1f]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
