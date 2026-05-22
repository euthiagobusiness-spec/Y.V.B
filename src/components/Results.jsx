import { useEffect, useRef } from 'react'
import Button from './ui/Button'
import ResultCard from './ResultCard'

function getThumbImage(image) {
  return image?.replace('/assets/results/', '/assets/results/optimized/').replace(/\.jpg$/i, '-480.jpg')
}

export default function Results({ results, cta }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!section || !canHover || reduceMotion) return undefined

    let activeCard = null
    let frame = 0
    let latestEvent = null

    const resetCard = (card) => {
      if (!card) return
      card.style.removeProperty('--mx')
      card.style.removeProperty('--my')
      card.style.removeProperty('--tilt-x')
      card.style.removeProperty('--tilt-y')
    }

    const updateCard = () => {
      frame = 0
      if (!latestEvent || !activeCard) return

      const rect = activeCard.getBoundingClientRect()
      const x = Math.min(Math.max((latestEvent.clientX - rect.left) / rect.width, 0), 1)
      const y = Math.min(Math.max((latestEvent.clientY - rect.top) / rect.height, 0), 1)

      activeCard.style.setProperty('--mx', `${x * 100}%`)
      activeCard.style.setProperty('--my', `${y * 100}%`)
      activeCard.style.setProperty('--tilt-y', `${(x - 0.5) * 5.5}deg`)
      activeCard.style.setProperty('--tilt-x', `${(0.5 - y) * 4.5}deg`)
    }

    const onPointerMove = (event) => {
      const card = event.target.closest('.result-interactive')
      if (!card || !section.contains(card)) {
        resetCard(activeCard)
        activeCard = null
        return
      }

      if (activeCard !== card) {
        resetCard(activeCard)
        activeCard = card
      }

      latestEvent = event
      if (!frame) frame = window.requestAnimationFrame(updateCard)
    }

    const onPointerLeave = () => {
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      latestEvent = null
      resetCard(activeCard)
      activeCard = null
    }

    section.addEventListener('pointermove', onPointerMove, { passive: true })
    section.addEventListener('pointerleave', onPointerLeave)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      section.removeEventListener('pointermove', onPointerMove)
      section.removeEventListener('pointerleave', onPointerLeave)
      resetCard(activeCard)
    }
  }, [])

  return (
    <section id="resultados" ref={sectionRef} className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">Resultados</p>
            <h2 className="section-title mt-5">Resultados que valorizam sua beleza natural</h2>
          </div>
          <div className="lg:pl-12">
            <p className="section-copy">
              Cada resultado é pensado para respeitar a individualidade da cliente, realçando seus
              traços com naturalidade, equilíbrio e cuidado.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm font-semibold text-cocoa/56">Fotos reais dos atendimentos.</p>
              <Button href={cta.href} variant="link" external={cta.external} ariaLabel={cta.ariaLabel}>
                {cta.label}
              </Button>
            </div>
          </div>
        </div>

        <div className="glass-card mt-14 flex gap-3 overflow-hidden rounded-[1.5rem] p-3">
          {results.slice(0, 5).map((result, index) => (
            <div
              key={`mini-${result.category}`}
              className="image-effect-card result-interactive h-24 min-w-[8.5rem] flex-1 bg-nude sm:h-28"
              aria-label={result.alt}
            >
              {result.image ? (
                <img
                  src={getThumbImage(result.image)}
                  alt={result.alt}
                  loading="lazy"
                  decoding="async"
                  className="result-image absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: result.objectPosition || 'center 38%' }}
                />
              ) : (
                <div className="image-effect-surface" />
              )}
              <div className="absolute inset-3 rounded-[1.15rem] border border-white/60 bg-white/5" />
              <div className="absolute bottom-4 left-4 h-px w-10 bg-gold/45" />
              <span className="absolute right-4 top-4 rounded-full bg-white/70 px-2 py-1 text-[0.62rem] font-bold text-blush/80">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {results.map((result, index) => (
            <ResultCard key={result.category} result={result} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
