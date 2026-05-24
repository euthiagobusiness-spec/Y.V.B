import Button from './ui/Button'
import SectionHeader from './ui/SectionHeader'
import ServiceCard from './ServiceCard'

export default function Services({ services, cta }) {
  return (
    <section id="servicos" className="section-spacing border-y border-white/60 bg-white/40">
      <div className="section-shell">
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader eyebrow="Serviços" title="Escolha o cuidado ideal para você">
            <p className="section-copy">
              Conheça os procedimentos disponíveis e encontre o serviço que mais combina com o seu
              momento.
            </p>
          </SectionHeader>
          <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
            <p className="max-w-md text-sm font-semibold leading-7 text-cocoa/62">
              Cada serviço pode ser ajustado ao formato do rosto, tipo de pele e desejo de
              resultado, mantendo uma estética leve e natural.
            </p>
            <Button href={cta.href} variant="editorial" external={cta.external} ariaLabel={cta.ariaLabel}>
              {cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:items-start">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
