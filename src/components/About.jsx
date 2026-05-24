import { Heart, ShieldCheck, Smile } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import SectionHeader from './ui/SectionHeader'

const iconMap = {
  heart: Heart,
  shield: ShieldCheck,
  smile: Smile,
}

export default function About({ cards }) {
  return (
    <section id="sobre" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="relative">
            <div className="absolute -left-8 top-3 hidden h-24 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 lg:block" />
            <SectionHeader
              eyebrow="Sobre"
              title="Cuidado, confiança e beleza natural em cada atendimento."
            />
            <GlassCard className="mt-6 rounded-[1.35rem] p-5 sm:mt-9 sm:rounded-[1.5rem] sm:p-6">
              <p className="font-display text-[1.72rem] font-semibold leading-tight text-blush sm:text-3xl">
                O resultado ideal começa com escuta, cuidado e transparência.
              </p>
              <p className="mt-3 text-sm leading-6 text-cocoa/66 sm:mt-4 sm:leading-7">
                Antes de qualquer técnica, existe uma conversa para entender sua rotina, seu rosto
                e o efeito que você deseja.
              </p>
            </GlassCard>
          </div>

          <div className="lg:pt-16">
            <p className="section-copy">
              A Yasmin Vitória Beauty nasceu do desejo de ajudar outras mulheres a se sentirem
              mais bonitas, confiantes e bem cuidadas. Cada atendimento é pensado de forma
              personalizada, respeitando a beleza única de cada cliente. Antes de qualquer
              procedimento, há escuta, orientação e transparência para que você se sinta segura do
              início ao fim.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
              {cards.map(({ title, text, icon }) => {
                const Icon = iconMap[icon] || Heart

                return (
                  <article key={title} className="soft-card hover-lift p-3 sm:p-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blush/15 bg-nude/45 text-blush sm:h-11 sm:w-11 sm:rounded-2xl">
                      <Icon size={18} strokeWidth={1.55} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-[0.78rem] font-bold leading-snug text-cocoa sm:mt-5 sm:text-base">{title}</h3>
                    <p className="mt-2 text-[0.68rem] leading-5 text-cocoa/62 sm:mt-3 sm:text-sm sm:leading-6">{text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
