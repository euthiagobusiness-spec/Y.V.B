import { useState } from 'react'
import Button from './ui/Button'
import FAQItem from './FAQItem'

export default function FAQ({ items, cta }) {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section id="duvidas" className="section-spacing border-y border-white/60 bg-white/40">
      <div className="section-shell">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">Dúvidas</p>
            <h2 className="section-title mt-5">Perguntas comuns antes do atendimento</h2>
            <p className="section-copy mt-4 sm:mt-6">
              Respostas diretas para você chegar ao atendimento com mais segurança e clareza.
            </p>
            <Button href={cta.href} variant="editorial" external={cta.external} ariaLabel={cta.ariaLabel} className="mt-6 sm:mt-8">
              {cta.label}
            </Button>
          </div>

          <div className="space-y-3">
            {items.map((item, index) => {
              const isOpen = openItem === index

              return (
                <FAQItem
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={isOpen}
                  onToggle={() => setOpenItem(isOpen ? null : index)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
