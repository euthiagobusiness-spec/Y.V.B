import { Sparkles } from 'lucide-react'
import Button from './ui/Button'

export default function FinalCTA({ cta }) {
  return (
    <section id="agendar" className="section-spacing">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[1.55rem] border border-white/35 bg-cocoa px-3 py-3 text-white shadow-[0_30px_90px_rgba(90,60,58,0.18)] sm:rounded-[2rem] sm:px-6 sm:py-6">
          <div className="absolute left-8 top-8 h-px w-20 bg-gold/50" />
          <div className="absolute bottom-8 right-8 h-px w-20 bg-gold/50" />
          <div className="absolute -right-12 -top-10 h-44 w-28 rotate-12 rounded-[55%_45%_44%_56%/42%_55%_45%_58%] border border-white/16" />
          <div className="liquid-glass liquid-glass-on-dark glass-shimmer rounded-[1.35rem] px-5 py-9 sm:rounded-[1.75rem] sm:px-10 sm:py-[4.75rem] lg:px-12 lg:py-24">
          <div className="relative z-10 grid gap-6 sm:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <Sparkles className="text-gold" size={26} strokeWidth={1.35} aria-hidden="true" />
              <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/72 sm:mt-5 sm:text-xs">
                Agendamento
              </p>
            </div>
            <div>
              <h2 className="max-w-2xl font-display text-[2.2rem] font-semibold leading-[1.02] sm:text-6xl">
                Pronta para cuidar de você?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-8">
                Agende seu atendimento e descubra o procedimento ideal para realçar sua beleza
                natural com delicadeza, confiança e cuidado.
              </p>
              <p className="mt-4 text-sm font-semibold text-white/78 sm:mt-5">
                Seu momento de cuidado começa com uma conversa.
              </p>

              <Button
                href={cta.href}
                variant="editorial"
                icon="whatsapp"
                external={cta.external}
                ariaLabel={cta.ariaLabel}
                className="mt-6 bg-ivory text-cocoa focus:ring-white/80 focus:ring-offset-cocoa sm:mt-9"
              >
                {cta.label}
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
