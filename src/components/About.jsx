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
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="relative">
            <div className="absolute -left-8 top-3 hidden h-24 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 lg:block" />
            <SectionHeader
              eyebrow="Sobre"
              title="Cuidado, confiança e beleza natural em cada atendimento."
            />
            <GlassCard className="mt-9 rounded-[1.5rem] p-6">
              <p className="font-display text-3xl font-semibold leading-tight text-blush">
                O resultado ideal começa com escuta, cuidado e transparência.
              </p>
              <p className="mt-4 text-sm leading-7 text-cocoa/66">
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

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {cards.map(({ title, text, icon }) => {
                const Icon = iconMap[icon] || Heart

                return (
                  <article key={title} className="soft-card hover-lift p-5 sm:p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blush/15 bg-nude/45 text-blush">
                      <Icon size={21} strokeWidth={1.55} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-base font-bold leading-snug text-cocoa">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-cocoa/62">{text}</p>
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
