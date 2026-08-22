import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n'
import { articles } from '../data'
import SectionHead from './SectionHead'

export default function Writing() {
  const { t } = useLang()

  return (
    <section id="writing" className="border-t border-white/10 px-6 py-20 md:px-12 lg:py-28">
      <SectionHead label={t.writing.label} heading={t.writing.heading} sub={t.writing.sub} />

      <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#151519]/75">
        {articles.map((a) => (
          <a
            key={a.url}
            href={a.url}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex items-center justify-between gap-4 px-6 py-5 transition-colors first:rounded-t-3xl last:rounded-b-3xl hover:bg-white/[0.03] md:px-8"
          >
            <div className="min-w-0">
              <h3 className="truncate text-[15px] font-medium text-white/85 transition-colors group-hover:text-[#ff8c42] md:text-base">
                {a.title}
              </h3>
              <p className="mt-1 font-mono2 text-[11px] text-white/35">
                {a.source} · {a.date}
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-[#ff5a1f] opacity-70 transition-opacity group-hover:opacity-100">
              <span className="hidden sm:inline">{t.writing.readMore}</span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
