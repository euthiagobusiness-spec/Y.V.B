import { Droplets, Feather, Leaf, Palette, Sparkle, WandSparkles } from 'lucide-react'

const iconMap = {
  sparkle: Sparkle,
  leaf: Leaf,
  wand: WandSparkles,
  palette: Palette,
  droplet: Droplets,
  feather: Feather,
}

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Sparkle

  return (
    <article className={`soft-card hover-lift glass-shimmer group flex min-h-[15.5rem] flex-col p-5 sm:min-h-[21rem] sm:p-7 ${index === 1 ? 'xl:translate-y-8' : ''}`}>
      <div className="relative z-10 flex items-start justify-between gap-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1rem] border border-white/60 bg-white/30 text-blush shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_24px_rgba(168,111,111,0.1)] backdrop-blur-md transition duration-300 group-hover:border-gold/40 group-hover:bg-ivory/80 group-hover:text-gold sm:h-12 sm:w-12 sm:rounded-[1.15rem]">
          <Icon size={20} strokeWidth={1.55} aria-hidden="true" />
        </div>
        <span className="mt-4 h-px w-12 bg-gold/35 transition-all duration-300 group-hover:w-20 group-hover:bg-blush/35 sm:mt-5 sm:w-14" />
      </div>

      <h3 className="relative z-10 mt-5 font-display text-[1.65rem] font-semibold leading-none text-cocoa sm:mt-7 sm:text-[2rem]">
        {service.title}
      </h3>
      <p className="relative z-10 mt-3 text-[0.86rem] leading-6 text-cocoa/68 sm:mt-4 sm:text-sm sm:leading-7">{service.description}</p>
      <p className="relative z-10 mt-5 border-t border-nude/55 pt-4 text-[0.86rem] font-bold leading-6 text-blush sm:mt-auto sm:pt-5 sm:text-sm">
        {service.benefit}
      </p>
    </article>
  )
}
