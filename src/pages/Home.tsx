import { LanguageProvider, type Lang } from '../i18n'
import { useRevealRoot } from '../hooks/useReveal'
import Header from '../sections/Header'
import BackgroundFX from '../sections/BackgroundFX'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Stack from '../sections/Stack'
import Projects from '../sections/Projects'
import Writing from '../sections/Writing'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

function Page() {
  const ref = useRevealRoot<HTMLDivElement>()
  return (
    <div ref={ref} className="min-h-screen bg-[#060607] font-body text-white antialiased">
      <Header />
      <main className="mx-auto max-w-6xl px-3 pb-8 sm:px-5">
        <div className="relative overflow-hidden rounded-b-[36px] border border-t-0 border-white/10 bg-[#0f0f12] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
          <BackgroundFX />
          <div className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Stack />
            <Projects />
            <Writing />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default function Home({ lang = 'en' }: { lang?: Lang }) {
  return (
    <LanguageProvider lang={lang}>
      <Page />
    </LanguageProvider>
  )
}
