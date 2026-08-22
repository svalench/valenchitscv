/** Fixed animated background: drifting glow orbs + panning grid + slow aurora */
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* panning grid */}
      <div className="bg-grid absolute inset-0" />

      {/* aurora wash at top */}
      <div className="bg-aurora absolute -top-[30%] left-1/2 h-[70vh] w-[120vw] -translate-x-1/2" />

      {/* drifting orbs */}
      <div
        className="bg-orb bg-orb-1 left-[8%] top-[12%] h-[420px] w-[420px]"
        style={{ background: 'radial-gradient(circle, rgba(255,90,31,0.16) 0%, rgba(255,90,31,0) 65%)', filter: 'blur(30px)' }}
      />
      <div
        className="bg-orb bg-orb-2 right-[4%] top-[42%] h-[520px] w-[520px]"
        style={{ background: 'radial-gradient(circle, rgba(255,140,66,0.11) 0%, rgba(255,140,66,0) 65%)', filter: 'blur(40px)' }}
      />
      <div
        className="bg-orb bg-orb-3 bottom-[6%] left-[30%] h-[380px] w-[380px]"
        style={{ background: 'radial-gradient(circle, rgba(255,90,31,0.09) 0%, rgba(255,90,31,0) 65%)', filter: 'blur(36px)' }}
      />
    </div>
  )
}
