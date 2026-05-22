import { Instagram, Mail } from 'lucide-react'

export default function DeveloperCredit({ developer }) {
  if (!developer) return null

  return (
    <aside className="developer-card" aria-label={`${developer.label} ${developer.name}`}>
      <div className="relative z-10">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-gold">
          {developer.label}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <img
            src={developer.image}
            alt={`Foto de ${developer.name}`}
            loading="lazy"
            decoding="async"
            className="h-16 w-16 shrink-0 rounded-full border border-gold/25 object-cover shadow-[0_12px_28px_rgba(22,12,12,0.24)]"
          />
          <div className="min-w-0">
            <p className="font-display text-3xl font-semibold leading-none text-white">
              {developer.name}
            </p>
            <p className="mt-2 text-xs font-medium text-white/58">UI Engineer</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          <a
            href={developer.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
            aria-label={`Abrir Instagram de ${developer.name}`}
          >
            <Instagram size={18} strokeWidth={1.7} aria-hidden="true" />
            <span className="min-w-0 truncate">{developer.instagramHandle}</span>
          </a>
          <a href={`mailto:${developer.email}`} className="developer-link" aria-label={`Enviar e-mail para ${developer.name}`}>
            <Mail size={18} strokeWidth={1.7} aria-hidden="true" />
            <span className="min-w-0 truncate">{developer.email}</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
