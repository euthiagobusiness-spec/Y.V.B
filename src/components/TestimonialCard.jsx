import { Quote, Star } from 'lucide-react'

export default function TestimonialCard({ testimonial, index }) {
  return (
    <article className={`soft-card hover-lift relative p-5 sm:p-8 ${index === 1 ? 'md:translate-y-8' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <Quote className="text-blush/45" size={30} strokeWidth={1.25} aria-hidden="true" />
        <div className="flex gap-1 text-gold/80" aria-label="Avaliação ilustrativa com cinco estrelas">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} size={14} fill="currentColor" strokeWidth={1.2} aria-hidden="true" />
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-cocoa/76 sm:mt-6 sm:text-base sm:leading-8">"{testimonial.text}"</p>
      <div className="mt-5 border-t border-nude/55 pt-4 sm:mt-7 sm:pt-5">
        <p className="text-sm font-bold text-cocoa">{testimonial.name}</p>
        <p className="mt-1 text-[0.67rem] font-bold uppercase tracking-[0.24em] text-blush">
          Exemplo temporário
        </p>
      </div>
    </article>
  )
}
