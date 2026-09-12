import { ArrowUpRight, Package, Smartphone } from 'lucide-react'
import { useLang } from '../i18n'
import { projectsMeta } from '../data'
import SectionHead from './SectionHead'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="border-t border-white/10 px-6 py-20 md:px-12 lg:py-28">
      <SectionHead label={t.projects.label} heading={t.projects.heading} sub={t.projects.sub} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projectsMeta.map((meta) => {
          const localized = t.projects.items.find((item) => item.name === meta.name)
          return (
            <a
              key={meta.name}
              href={meta.url}
              target="_blank"
              rel="noreferrer"
              className={`reveal group flex flex-col rounded-3xl border p-7 transition-all hover:-translate-y-1 ${
                meta.featured
                  ? 'border-[#ff5a1f]/25 bg-gradient-to-b from-[#ff5a1f]/[0.08] to-[#151519]/75'
                  : 'border-white/10 bg-[#151519]/75'
              } hover:border-[#ff5a1f]/50`}
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono2 text-sm text-[#ff5a1f]">
                  {'</>'}
                </span>
                <div className="flex items-center gap-2">
                  {meta.pypi && (
                    <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/75">
                      <Package size={11} /> PyPI
                    </span>
                  )}
                  {meta.product && (
                    <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/75">
                      <Smartphone size={11} /> {meta.product}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="font-mono2 text-[15px] font-semibold text-white group-hover:text-[#ff8c42]">
                {localized?.name ?? meta.name}
              </h3>
              <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-white/75">{localized?.desc}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[12px] text-white/75">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3572A5]" />
                  {meta.language}
                </span>
                <span className="flex items-center gap-1 text-[12px] font-medium text-[#ff5a1f] opacity-0 transition-opacity group-hover:opacity-100">
                  {meta.product ? t.projects.viewSite : t.projects.viewRepo} <ArrowUpRight size={13} />
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
