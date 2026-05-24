import { CheckCircle2, Sparkles } from 'lucide-react'
import Button from './ui/Button'
import GlassCard from './ui/GlassCard'

export default function Differentials({ items, cta }) {
  return (
    <section id="diferenciais" className="section-spacing bg-nude/28">
      <div className="section-shell">
        <div className="grid gap-9 sm:gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="relative">
            <Sparkles className="mb-4 text-gold sm:mb-6" size={28} strokeWidth={1.35} aria-hidden="true" />
            <p className="eyebrow">Diferenciais</p>
            <h2 className="section-title mt-5">Por que escolher a Yasmin Vitória Beauty?</h2>
            <p className="section-copy mt-4 sm:mt-6">
              Você é ouvida antes de qualquer procedimento. O resultado ideal começa com escuta,
              cuidado e transparência.
            </p>

            <GlassCard className="mt-7 rounded-[1.35rem] p-5 sm:mt-10 sm:rounded-[1.5rem] sm:p-7">
              <p className="font-display text-[1.72rem] font-semibold leading-tight text-blush sm:text-3xl">
                Você é ouvida antes de qualquer procedimento.
              </p>
              <p className="mt-3 text-sm leading-6 text-cocoa/66 sm:mt-4 sm:leading-7">
                A indicação do serviço vem depois de entender sua rotina, seu rosto e o resultado
                que você deseja sentir no espelho.
              </p>
              <Button href={cta.href} variant="link" external={cta.external} ariaLabel={cta.ariaLabel} className="mt-5">
                {cta.label}
              </Button>
            </GlassCard>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`soft-card hover-lift p-4 sm:p-7 ${index === items.length - 1 ? 'col-span-2 sm:col-span-2' : ''}`}
              >
                <CheckCircle2 className="text-blush" size={20} strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-3 text-[0.95rem] font-bold leading-snug text-cocoa sm:mt-4 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-[0.78rem] leading-5 text-cocoa/66 sm:mt-3 sm:text-sm sm:leading-7">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
