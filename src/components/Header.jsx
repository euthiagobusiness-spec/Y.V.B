import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from './ui/Button'

export default function Header({ brand, cta, navItems }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-nude/55 bg-ivory/88 shadow-[0_10px_36px_rgba(90,60,58,0.04)] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5 lg:gap-8">
        <a
          href="#inicio"
          className="group flex min-w-fit flex-col leading-none"
          aria-label={`${brand.name} - início`}
        >
          <span className="font-display text-[1.75rem] font-semibold lowercase tracking-[0.01em] text-cocoa transition hover:group-hover:text-blush sm:text-[1.9rem]">
            yasmin vitória
          </span>
          <span className="mt-1 text-[0.6rem] font-bold tracking-[0.46em] text-gold">BEAUTY</span>
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-1 py-2 text-sm font-semibold text-cocoa/68 transition duration-300 hover:text-blush focus:outline-none focus:ring-2 focus:ring-blush/45 focus:ring-offset-4 focus:ring-offset-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          href={cta.href}
          variant="primary"
          icon="none"
          external={cta.external}
          ariaLabel={cta.ariaLabel}
          className="hidden px-7 lg:inline-flex"
        >
          Agendar
        </Button>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blush/20 bg-white/60 text-cocoa transition duration-300 hover:border-blush/45 hover:text-blush focus:outline-none focus:ring-2 focus:ring-blush/45 focus:ring-offset-2 focus:ring-offset-ivory lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-nude/50 bg-ivory/97 shadow-[0_24px_40px_rgba(90,60,58,0.07)] lg:hidden">
          <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-cocoa/72 transition hover:bg-nude/35 hover:text-blush focus:outline-none focus:ring-2 focus:ring-blush/40"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              href={cta.href}
              variant="primary"
              icon="none"
              external={cta.external}
              ariaLabel={cta.ariaLabel}
              className="mt-3 w-full"
            >
              Agendar
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
