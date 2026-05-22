import { CheckCircle2, Sparkles } from 'lucide-react'
import Button from './ui/Button'
import GlassCard from './ui/GlassCard'

export default function Differentials({ items, cta }) {
  return (
    <section id="diferenciais" className="section-spacing bg-nude/28">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="relative">
            <Sparkles className="mb-6 text-gold" size={30} strokeWidth={1.35} aria-hidden="true" />
            <p className="eyebrow">Diferenciais</p>
            <h2 className="section-title mt-5">Por que escolher a Yasmin Vitória Beauty?</h2>
            <p className="section-copy mt-6">
              Você é ouvida antes de qualquer procedimento. O resultado ideal começa com escuta,
              cuidado e transparência.
            </p>

            <GlassCard className="mt-10 rounded-[1.5rem] p-6 sm:p-7">
              <p className="font-display text-3xl font-semibold leading-tight text-blush">
                Você é ouvida antes de qualquer procedimento.
              </p>
              <p className="mt-4 text-sm leading-7 text-cocoa/66">
                A indicação do serviço vem depois de entender sua rotina, seu rosto e o resultado
                que você deseja sentir no espelho.
              </p>
              <Button href={cta.href} variant="link" external={cta.external} ariaLabel={cta.ariaLabel} className="mt-5">
                {cta.label}
              </Button>
            </GlassCard>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`soft-card hover-lift p-6 sm:p-7 ${index === items.length - 1 ? 'sm:col-span-2' : ''}`}
              >
                <CheckCircle2 className="text-blush" size={24} strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold leading-snug text-cocoa">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/66">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
