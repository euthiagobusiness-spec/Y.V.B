import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Button from './ui/Button'

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
              const contentId = `faq-content-${index}`

              return (
                <div key={item.question} className="glass-card rounded-[1.35rem] transition duration-300 hover:border-blush/25">
                  <button
                    type="button"
                    className="relative z-10 flex w-full items-center justify-between gap-3 rounded-[1.35rem] px-4 py-4 text-left transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-blush/45 focus:ring-offset-2 focus:ring-offset-ivory sm:gap-4 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenItem(isOpen ? null : index)}
                  >
                    <span className="text-sm font-bold leading-snug text-cocoa sm:text-base">{item.question}</span>
                    <ChevronDown
                      className={`shrink-0 text-blush transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={contentId}
                    role="region"
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="relative z-10 overflow-hidden">
                      <p className="px-4 pb-5 text-sm leading-6 text-cocoa/70 sm:px-6 sm:pb-6 sm:leading-7">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
