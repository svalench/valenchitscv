import { ArrowUpRight, Github, MapPin } from 'lucide-react'
import { useLang } from '../i18n'
import { personNames } from '../locales'
import { links } from '../data'

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* glow */}
      <div className="glow-orb bg-orb-1 pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full" />
      <div className="glow-orb bg-orb-2 pointer-events-none absolute top-[60%] left-[-15%] h-[420px] w-[420px] rounded-full opacity-60" />

      <div className="relative grid items-end gap-10 px-6 pb-0 pt-32 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:pt-40">
        <div className="pb-10">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-white/75">{t.hero.badge}</span>
          </div>

          <p className="reveal mb-3 font-mono2 text-sm tracking-wide text-[#ff5a1f]">{t.hero.role}</p>

          <h1 className="reveal font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[72px]">
            {personNames[lang].split(' ')[0]}
            <br />
            <span className="accent-text">{personNames[lang].split(' ')[1]}</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-[15px] leading-relaxed text-white/75">{t.hero.tagline}</p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="accent-gradient group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaContact}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition-colors hover:border-[#ff5a1f]/60 hover:text-white"
            >
              <Github size={16} />
              {t.hero.ctaGithub}
            </a>
          </div>

          <div className="reveal mt-8 flex items-center gap-2 text-[13px] text-white/75">
            <MapPin size={14} className="text-[#ff5a1f]" />
            {t.hero.location}
          </div>
        </div>

        {/* photo */}
        <div className="reveal relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-t-[28px] border border-b-0 border-white/10">
            <img
              src="/img/hero.jpg" fetchPriority="high"
              alt="Alexander Valenchits"
              className="hero-img-mask h-[460px] w-full object-cover object-top lg:h-[560px]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(to top, #0f0f12 0%, rgba(15,15,18,0.5) 8%, transparent 22%)' }}
            />
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative border-t border-white/10 px-6 md:px-12">
        <div className="grid grid-cols-2 divide-x divide-white/5 lg:grid-cols-4">
          {t.stats.map((s, i) => (
            <div key={i} className="reveal px-5 py-7 first:pl-0">
              <div className="font-display text-4xl font-bold text-[#ff5a1f] lg:text-5xl">{s.value}</div>
              <div className="mt-1.5 text-[13px] text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
