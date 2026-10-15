/** Fixed animated background: drifting glow orbs + panning grid + slow aurora */
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* panning grid */}
      <div className="bg-grid absolute inset-0" />

      {/* aurora wash at top */}
      <div className="bg-aurora absolute -top-[30%] left-1/2 h-[70vh] w-[120vw] -translate-x-1/2" />

      {/* drifting orbs */}
      <div className="bg-orb orb-tint-1 bg-orb-1 left-[8%] top-[12%] h-[420px] w-[420px]" />
      <div className="bg-orb orb-tint-2 bg-orb-2 right-[4%] top-[42%] h-[520px] w-[520px]" />
      <div className="bg-orb orb-tint-3 bg-orb-3 bottom-[6%] left-[30%] h-[380px] w-[380px]" />
    </div>
  )
}
