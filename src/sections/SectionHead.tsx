interface Props {
  label: string
  heading: string
  sub?: string
}

export default function SectionHead({ label, heading, sub }: Props) {
  return (
    <div className="reveal mb-10">
      <p className="mb-3 font-mono2 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">{label}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{heading}</h2>
      {sub && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">{sub}</p>}
    </div>
  )
}
