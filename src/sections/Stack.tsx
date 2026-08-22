import { Server, BrainCircuit, Container, MonitorSmartphone } from 'lucide-react'
import { useLang } from '../i18n'
import SectionHead from './SectionHead'

const icons = [Server, BrainCircuit, Container, MonitorSmartphone]

export default function Stack() {
  const { t } = useLang()

  return (
    <section id="stack" className="border-t border-white/10 px-6 py-20 md:px-12 lg:py-28">
      <SectionHead label={t.stack.label} heading={t.stack.heading} />

      <div className="grid gap-5 sm:grid-cols-2">
        {t.stack.groups.map((g, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={g.title}
              className="reveal group rounded-3xl border border-white/10 bg-[#151519]/70 p-7 transition-colors hover:border-[#ff5a1f]/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 text-[#ff5a1f]">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] text-white/70 transition-colors group-hover:border-white/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
