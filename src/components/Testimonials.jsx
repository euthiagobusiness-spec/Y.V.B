import SectionHeader from './ui/SectionHeader'
import TestimonialCard from './TestimonialCard'

export default function Testimonials({ testimonials }) {
  return (
    <section id="depoimentos" className="section-spacing">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeader eyebrow="Depoimentos" title="O que as clientes dizem" className="max-w-3xl">
            <p className="section-copy">
              Depoimentos temporários para indicar o tom da seção até a entrada de avaliações reais.
            </p>
          </SectionHeader>
          <p className="max-w-sm border-l border-gold/45 pl-5 text-sm font-semibold leading-7 text-cocoa/62">
            Exemplos de linguagem. Substitua por avaliações reais quando estiverem disponíveis.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5 md:items-start">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.text}-${index}`} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
