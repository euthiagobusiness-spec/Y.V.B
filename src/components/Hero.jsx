import { Sparkles } from 'lucide-react'
import Button from './ui/Button'
import HeroBookingCard from './hero/HeroBookingCard'
import HeroFactList from './hero/HeroFactList'
import HeroVisualCard from './hero/HeroVisualCard'

const heroFacts = ['Escuta antes do procedimento', 'Resultado leve e natural', 'Horário marcado']

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

          <HeroFactList items={heroFacts} />

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

          <HeroVisualCard />
          <HeroBookingCard cta={ctas.whatsapp} />
        </div>
      </div>
    </section>
  )
}
