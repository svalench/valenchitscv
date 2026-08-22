import { useEffect, useRef } from 'react'
import { useLang } from '../i18n'

/** Adds .is-visible to all .reveal children when they enter the viewport.
 *  Re-scans when language changes (React replaces text nodes). */
export function useRevealRoot<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const { lang } = useLang()

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const scan = () => {
      root.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    }

    // initial scan + a follow-up after React finishes language re-render
    scan()
    const t1 = window.setTimeout(scan, 50)
    const t2 = window.setTimeout(scan, 300)

    return () => {
      io.disconnect()
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [lang])

  return ref
}
