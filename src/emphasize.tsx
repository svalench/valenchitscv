import type { ReactNode } from 'react'

/** Оборачивает точные подстроки в <strong>, не меняя остальной текст абзаца. */
export default function Emphasize({ text, marks }: { text: string; marks: readonly string[] }) {
  const ranges = marks
    .map((mark) => {
      const start = text.indexOf(mark)
      return start < 0 ? null : { start, end: start + mark.length }
    })
    .filter((range): range is { start: number; end: number } => range !== null)
    .sort((a, b) => a.start - b.start)

  const nodes: ReactNode[] = []
  let cursor = 0
  ranges.forEach((range, index) => {
    if (range.start < cursor) return
    if (range.start > cursor) nodes.push(text.slice(cursor, range.start))
    nodes.push(<strong key={index}>{text.slice(range.start, range.end)}</strong>)
    cursor = range.end
  })
  if (cursor < text.length) nodes.push(text.slice(cursor))
  return <>{nodes}</>
}
