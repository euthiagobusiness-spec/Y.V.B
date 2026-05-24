import { ArrowRight, Sparkles } from 'lucide-react'
import Button from './ui/Button'
import GlassCard from './ui/GlassCard'

export default function Hero({ brand, ctas }) {
  return (
    <section id="inicio" className="relative overflow-hidden pb-10 pt-5 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 hidden h-28 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 lg:block" />

      <div className="section-shell grid items-center gap-7 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
        <div className="relative reveal-soft">
          <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
            <span className="fine-line" />
            <p className="eyebrow">{brand.name}</p>
          </div>

          <h1 className="max-w-3xl font-display text-[2.48rem] font-semibold leading-[0.94] text-cocoa min-[380px]:text-[2.72rem] sm:text-[3.9rem] lg:text-[5rem]">
            Sua
            <span className="block text-blush">beleza natural</span>
            <span className="relative block">
              cuidada com delicadeza.
              <span className="absolute -bottom-2 left-1 hidden h-px w-[68%] bg-gold/50 sm:block" />
              <Sparkles className="absolute -right-3 -top-4 hidden text-gold sm:block lg:-right-8" size={25} strokeWidth={1.3} aria-hidden="true" />
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-cocoa/80 sm:mt-5 sm:text-lg sm:leading-8">
            Atendimentos personalizados em design de sobrancelhas, brow lamination, limpeza de pele
            e estética facial para realçar sua autoestima com cuidado, confiança e naturalidade.
          </p>

          <GlassCard
            className="mt-4 max-w-3xl rounded-[1.35rem] p-3 text-[0.72rem] font-semibold text-cocoa/88 sm:mt-5 sm:p-5 sm:text-sm"
            contentClassName="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-3"
          >
            {['Escuta antes do procedimento', 'Resultado leve e natural', 'Horário marcado'].map((item) => (
              <span key={item} className="flex min-h-[3.7rem] items-center justify-center rounded-[1rem] bg-white/42 px-1.5 py-2 text-center leading-snug sm:min-h-[4.75rem] sm:rounded-2xl sm:px-4 sm:py-3">
                {item}
              </span>
            ))}
          </GlassCard>

          <div className="mt-5 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:mt-7 sm:flex sm:flex-row">
            <Button href={ctas.whatsapp.href} variant="whatsapp" icon="whatsapp" external={ctas.whatsapp.external} ariaLabel={ctas.whatsapp.ariaLabel}>
              {ctas.whatsapp.label}
            </Button>
            <Button href={ctas.services.href} variant="secondary">
              {ctas.services.label}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] reveal-soft [animation-delay:120ms] sm:max-w-[27rem]">
          <div className="absolute -right-4 top-8 h-40 w-28 rounded-[56%_44%_45%_55%/42%_50%_50%_58%] border border-gold/24" />
          <div className="absolute -left-4 bottom-10 h-28 w-24 rounded-[42%_58%_51%_49%/58%_44%_56%_42%] bg-nude/36" />
          <div className="absolute left-7 top-7 h-[88%] w-[88%] rounded-[46%_54%_52%_48%/54%_46%_54%_46%] bg-white/45" />
          <div className="editorial-watermark absolute -right-4 bottom-8 z-0 opacity-45">YVB</div>

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

          <a
            href={ctas.whatsapp.href}
            target={ctas.whatsapp.external ? '_blank' : undefined}
            rel={ctas.whatsapp.external ? 'noopener noreferrer' : undefined}
            aria-label="Agendar atendimento pelo WhatsApp"
            className="group relative z-10 mx-auto -mt-6 grid w-full max-w-[22rem] grid-cols-[1.5rem_minmax(0,1fr)_2.4rem] items-center gap-2.5 rounded-[1.2rem] border border-white/28 bg-cocoa px-4 py-3.5 text-white shadow-[0_18px_42px_rgba(90,60,58,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#4d302e] focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-ivory sm:-mt-8 sm:max-w-[32rem] sm:grid-cols-[2.35rem_minmax(0,1fr)_3rem] sm:gap-4 sm:rounded-[1.35rem] sm:px-6 sm:py-5"
          >
            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_8%_18%,rgba(255,255,255,0.22),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_38%)]" />
            <Sparkles className="relative self-center justify-self-center text-gold" size={22} strokeWidth={1.35} aria-hidden="true" />
            <div className="relative min-w-0 self-center">
              <p className="text-[0.56rem] font-bold uppercase leading-none tracking-[0.24em] text-white/76 sm:text-[0.62rem] sm:tracking-[0.26em]">Agendamento</p>
              <p className="mt-1.5 whitespace-nowrap font-display text-[1.05rem] font-semibold leading-none text-white min-[380px]:text-[1.16rem] min-[480px]:text-[1.28rem] sm:mt-2 sm:text-[1.62rem]">pronta para cuidar de você?</p>
            </div>
            <span className="relative flex h-9 w-9 items-center justify-center self-center justify-self-center rounded-full border border-white/30 bg-white/14 transition duration-300 group-hover:bg-white/24 sm:h-10 sm:w-10">
              <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
