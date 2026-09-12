import { useLang } from '../i18n'
import SectionHead from './SectionHead'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="border-t border-white/10 px-6 py-20 md:px-12 lg:py-28">
      <SectionHead label={t.experience.label} heading={t.experience.heading} />

      <div className="relative space-y-6">
        {/* vertical line */}
        <div className="absolute bottom-6 left-[7px] top-2 hidden w-px bg-gradient-to-b from-[#ff5a1f]/60 via-white/10 to-transparent md:block" />

        {t.experience.items.map((job, idx) => (
          <div key={idx} className="reveal relative md:pl-10">
            {/* dot */}
            <div
              className={`absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-2 md:block ${
                job.current ? 'border-[#ff5a1f] bg-[#ff5a1f]/30' : 'border-white/25 bg-[#0f0f12]'
              }`}
            />

            <div className="group rounded-3xl border border-white/10 bg-[#151519]/75 p-7 transition-colors hover:border-[#ff5a1f]/40 md:p-9">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">{job.company}</h3>
                  <p className="mt-1 text-sm font-medium text-[#ff5a1f]">{job.role}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono2 text-xs text-white/75">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-white/75">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#ff5a1f]" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1 font-mono2 text-[11px] text-white/75">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
