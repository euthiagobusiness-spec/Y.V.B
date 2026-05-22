import { Instagram, MapPin, MessageCircle } from 'lucide-react'
import Button from './ui/Button'
import DeveloperCredit from './DeveloperCredit'

export default function Footer({ brand, links, developer }) {
  return (
    <footer className="border-t border-nude/70 bg-ivory py-14">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.8fr_0.65fr_1.05fr] lg:items-start">
        <div>
          <p className="font-display text-4xl font-semibold text-cocoa">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-cocoa/66">
            Catálogo digital de serviços de beleza natural, estética facial e cuidado personalizado.
          </p>
          <div className="mt-6 h-px w-24 bg-gold/45" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blush">Atendimento</p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-cocoa/72">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" aria-hidden="true" />
              {brand.location}
            </p>
            <p>Atendimento com horário marcado</p>
            <p>Procedimentos personalizados e orientados antes do início.</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blush">Links</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button href={links.instagram} variant="secondary" icon="none" external ariaLabel="Abrir Instagram" className="w-fit">
              <Instagram className="mr-2" size={17} strokeWidth={1.6} aria-hidden="true" />
              Instagram
            </Button>
            <Button href={links.whatsapp} variant="secondary" icon="none" external ariaLabel="Abrir WhatsApp" className="w-fit">
              <MessageCircle className="mr-2" size={17} strokeWidth={1.6} aria-hidden="true" />
              WhatsApp
            </Button>
          </div>
        </div>

        <DeveloperCredit developer={developer} />
      </div>
      <div className="section-shell mt-12 border-t border-nude/55 pt-6">
        <p className="text-xs leading-6 text-cocoa/50">
          {brand.name}. Beleza natural com cuidado, escuta e delicadeza.
        </p>
      </div>
    </footer>
  )
}
