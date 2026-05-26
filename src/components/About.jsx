import AboutFeatureCard from './AboutFeatureCard'
import GlassCard from './ui/GlassCard'
import SectionHeader from './ui/SectionHeader'

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
              {cards.map((card) => (
                <AboutFeatureCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
