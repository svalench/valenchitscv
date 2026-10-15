import { useLang } from '../i18n'
import { aboutBadges, emphasisPhrases, imageAlts } from '../locales'
import Emphasize from '../emphasize'
import SectionHead from './SectionHead'

export default function About() {
  const { t, lang } = useLang()

  return (
    <section id="about" className="border-t border-white/10 px-6 py-20 md:px-12 lg:py-28">
      <SectionHead label={t.about.label} heading={t.about.heading} />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* photo */}
        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <picture>
              <source
                type="image/avif"
                srcSet="/img/about-450.avif 450w, /img/about-900.avif 900w"
                sizes="(min-width: 1024px) 460px, 100vw"
              />
              <source
                type="image/webp"
                srcSet="/img/about-450.webp 450w, /img/about-900.webp 900w"
                sizes="(min-width: 1024px) 460px, 100vw"
              />
              <img
                src="/img/about.jpg"
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
                alt={imageAlts[lang].about}
                className="aspect-square w-full object-cover object-top"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="absolute -bottom-4 left-6 rounded-2xl border border-white/10 bg-[#141418]/85 px-5 py-3 shadow-2xl backdrop-blur-md">
            <p className="font-mono2 text-[11px] uppercase tracking-widest text-[#ff5a1f]">{aboutBadges.role}</p>
            <p className="mt-0.5 text-sm font-medium text-white/80">{aboutBadges.reach}</p>
          </div>
        </div>

        <div>
          <p className="reveal text-[15px] leading-relaxed text-white/75">
            <Emphasize text={t.about.p1} marks={emphasisPhrases[lang]} />
          </p>
          <p className="reveal mt-5 text-[15px] leading-relaxed text-white/75">
            <Emphasize text={t.about.p2} marks={emphasisPhrases[lang]} />
          </p>
          <p className="reveal mt-5 text-[15px] leading-relaxed text-white/75">
            {t.explore.lead}
            <a href="#experience" className="text-link">{t.explore.experience}</a>
            {t.explore.afterExperience}
            <a href="#stack" className="text-link">{t.explore.stack}</a>
            {t.explore.afterStack}
            <a href="#projects" className="text-link">{t.explore.projects}</a>
            {t.explore.afterProjects}
            <a href="#writing" className="text-link">{t.explore.writing}</a>
            {t.explore.tail}
          </p>

          {/* interests */}
          <p className="reveal mt-9 mb-4 font-mono2 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">
            {t.about.interestsLabel}
          </p>
          <div className="reveal flex flex-wrap gap-2.5">
            {t.about.interests.map((i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-white/75 transition-colors hover:border-[#ff5a1f]/50 hover:text-white"
              >
                {i}
              </span>
            ))}
          </div>

          {/* languages */}
          <p className="reveal mt-9 mb-4 font-mono2 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">
            {t.about.languagesLabel}
          </p>
          <div className="reveal space-y-4">
            {t.about.languages.map((l) => (
              <div key={l.name}>
                <div className="mb-1.5 flex items-baseline justify-between">
                  <span className="text-sm font-medium text-white/85">{l.name}</span>
                  <span className="text-xs text-white/75">{l.level}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className={`accent-gradient h-full rounded-full ${l.pct >= 100 ? 'w-full' : 'w-3/4'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
