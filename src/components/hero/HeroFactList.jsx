import GlassCard from '../ui/GlassCard'

export default function HeroFactList({ items }) {
  return (
    <GlassCard
      className="mt-4 max-w-3xl rounded-[1.35rem] p-3 text-[0.72rem] font-semibold text-cocoa/88 sm:mt-5 sm:p-5 sm:text-sm"
      contentClassName="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-3"
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex min-h-[3.7rem] items-center justify-center rounded-[1rem] bg-white/42 px-1.5 py-2 text-center leading-snug sm:min-h-[4.75rem] sm:rounded-2xl sm:px-4 sm:py-3"
        >
          {item}
        </span>
      ))}
    </GlassCard>
  )
}
