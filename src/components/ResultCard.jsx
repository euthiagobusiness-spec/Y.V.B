function getOptimizedImage(image) {
  if (!image) return null

  const basePath = image.replace('/assets/results/', '/assets/results/optimized/').replace(/\.jpg$/i, '')

  return {
    src: `${basePath}-800.jpg`,
    srcSet: `${basePath}-480.jpg 480w, ${basePath}-800.jpg 800w, ${basePath}-1200.jpg 1200w`,
  }
}

export default function ResultCard({ result, index }) {
  const optimizedImage = getOptimizedImage(result.image)

  return (
    <figure
      className={`image-effect-card result-interactive group min-h-72 ${result.shape}`}
      aria-label={result.alt}
    >
      {optimizedImage ? (
        <img
          src={optimizedImage.src}
          srcSet={optimizedImage.srcSet}
          sizes={result.shape?.includes('lg:col-span-12') ? '(min-width: 1024px) 1180px, 100vw' : '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'}
          alt={result.alt}
          loading="lazy"
          decoding="async"
          className="result-image absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: result.objectPosition || 'center 38%' }}
        />
      ) : (
        <div className="image-effect-surface" />
      )}
      <div className="absolute inset-4 rounded-[1.15rem] border border-white/55 bg-white/5" />
      <div className="absolute left-6 top-6 h-px w-16 bg-gold/45" />
      <div className="absolute right-6 top-6 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-blush shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_18px_rgba(90,60,58,0.08)]">
        {String(index + 1).padStart(2, '0')}
      </div>
      <figcaption className="glass-caption absolute inset-x-0 bottom-0 z-10 px-5 py-4 text-white sm:px-6 sm:py-5">
        <p className="text-xs font-bold uppercase tracking-[0.26em]">{result.label}</p>
        <p className="mt-2 text-sm text-white/78">{result.category}</p>
      </figcaption>
    </figure>
  )
}
