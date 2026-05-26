import { Sparkles } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

export default function HeroVisualCard() {
  return (
    <GlassCard className="glass-shimmer relative overflow-hidden rounded-[1.55rem] p-2.5 sm:rounded-[1.75rem] sm:p-4">
      <div className="absolute right-6 top-6 text-gold/85">
        <Sparkles size={28} strokeWidth={1.25} aria-hidden="true" />
      </div>
      <div className="glass-card rounded-[1.35rem] p-3 sm:rounded-[1.5rem] sm:p-5">
        <div className="glass-card relative flex min-h-[14.25rem] flex-col justify-between overflow-hidden rounded-[1.2rem] p-4 sm:min-h-[19rem] sm:rounded-[1.35rem] sm:p-6">
          <div className="absolute -right-12 bottom-8 h-36 w-24 rotate-12 rounded-[55%_45%_45%_55%/45%_55%_45%_55%] border border-blush/20" />
          <div className="absolute left-7 top-20 h-px w-24 bg-gold/35" />
          <div className="float-soft absolute right-7 top-16 hidden h-24 w-24 overflow-hidden rounded-full border border-white/80 bg-gradient-to-br from-blush/28 via-nude to-ivory shadow-[0_14px_32px_rgba(90,60,58,0.08)] sm:block">
            <div className="absolute inset-3 rounded-full border border-gold/25" />
            <div className="absolute inset-x-5 bottom-7 h-px bg-blush/35" />
            <div className="absolute left-1/2 top-8 h-12 w-px -translate-x-1/2 bg-gold/35" />
          </div>

          <div className="flex items-center justify-between gap-5">
            <span className="h-px w-20 bg-gold/48" />
            <span className="rounded-full border border-gold/20 bg-ivory/70 px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[0.25em] text-blush">
              facial care
            </span>
          </div>

          <div>
            <p className="font-display text-[2.35rem] font-semibold leading-none text-cocoa sm:text-6xl">
              Beleza natural
            </p>
            <p className="mt-3 max-w-xs text-[0.62rem] font-bold uppercase tracking-[0.24em] text-blush sm:mt-4 sm:text-xs sm:tracking-[0.28em]">
              Cuidado • Confiança • Leveza
            </p>
          </div>

          <div className="flex items-end justify-between gap-5">
            <p className="max-w-[11rem] text-[0.8rem] leading-5 text-cocoa/62 sm:max-w-[12rem] sm:text-sm sm:leading-6">
              Uma experiência calma, personalizada e pensada para valorizar seus traços.
            </p>
            <span className="h-16 w-px bg-gold/40" />
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
