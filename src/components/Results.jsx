import Button from './ui/Button'
import ResultCard from './ResultCard'

function getThumbImage(image) {
  return image?.replace('/assets/results/', '/assets/results/optimized/').replace(/\.jpg$/i, '-480.jpg')
}

export default function Results({ results, cta }) {
  return (
    <section id="resultados" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">Resultados</p>
            <h2 className="section-title mt-5">Resultados que valorizam sua beleza natural</h2>
          </div>
          <div className="lg:pl-12">
            <p className="section-copy">
              Cada resultado é pensado para respeitar a individualidade da cliente, realçando seus
              traços com naturalidade, equilíbrio e cuidado.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-4">
              <p className="text-sm font-semibold text-cocoa/56">Fotos reais dos atendimentos.</p>
              <Button href={cta.href} variant="link" external={cta.external} ariaLabel={cta.ariaLabel}>
                {cta.label}
              </Button>
            </div>
          </div>
        </div>

        <div className="glass-card mt-9 flex gap-2 overflow-hidden rounded-[1.25rem] p-2 sm:mt-14 sm:gap-3 sm:rounded-[1.5rem] sm:p-3">
          {results.slice(0, 5).map((result, index) => (
            <div
              key={`mini-${result.category}`}
              className="image-effect-card result-interactive h-20 min-w-0 flex-1 bg-nude sm:h-28 sm:min-w-[8.5rem]"
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
              <div className="absolute inset-2 rounded-[0.9rem] border border-white/60 bg-white/5 sm:inset-3 sm:rounded-[1.15rem]" />
              <div className="absolute bottom-3 left-3 h-px w-8 bg-gold/45 sm:bottom-4 sm:left-4 sm:w-10" />
              <span className="absolute right-3 top-3 rounded-full bg-white/70 px-2 py-1 text-[0.56rem] font-bold text-blush/80 sm:right-4 sm:top-4 sm:text-[0.62rem]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          {results.map((result, index) => (
            <ResultCard key={result.category} result={result} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
