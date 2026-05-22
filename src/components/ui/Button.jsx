import { ArrowRight, MessageCircle } from 'lucide-react'

const variantClasses = {
  primary:
    'bg-blush text-white shadow-[0_14px_32px_rgba(168,111,111,0.18)] hover:bg-cocoa hover:-translate-y-0.5 focus:ring-blush/70',
  secondary:
    'border border-blush/20 bg-white/60 text-cocoa hover:border-blush/40 hover:bg-white hover:-translate-y-0.5 focus:ring-gold/50',
  ghost:
    'border border-white/50 bg-white/20 text-cocoa backdrop-blur-md hover:bg-white/40 hover:-translate-y-0.5 focus:ring-blush/45',
  editorial:
    'border border-gold/35 bg-ivory/70 text-cocoa backdrop-blur-md hover:border-blush/35 hover:bg-white hover:-translate-y-0.5 focus:ring-gold/50',
  whatsapp:
    'bg-cocoa text-white shadow-[0_14px_34px_rgba(90,60,58,0.16)] hover:bg-blush hover:-translate-y-0.5 focus:ring-cocoa/60',
  link:
    'min-h-0 rounded-none px-0 py-0 text-blush underline decoration-gold/45 underline-offset-8 hover:text-cocoa focus:ring-blush/45',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  icon = 'arrow',
  className = '',
  ariaLabel,
  external = false,
}) {
  const isExternal = external || href?.startsWith('http')
  const Icon = icon === 'whatsapp' ? MessageCircle : icon === 'none' ? null : ArrowRight
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ivory active:translate-y-0 ${variantClasses[variant]} ${className}`

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {Icon && icon === 'whatsapp' ? <Icon className="mr-2" size={18} strokeWidth={1.65} /> : null}
      {children}
      {Icon && icon !== 'whatsapp' ? <Icon className="ml-2" size={17} strokeWidth={1.65} /> : null}
    </a>
  )
}
