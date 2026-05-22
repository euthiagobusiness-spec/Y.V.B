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
    <article className={`soft-card hover-lift glass-shimmer group flex min-h-[21rem] flex-col p-6 sm:p-7 ${index === 1 ? 'xl:translate-y-8' : ''}`}>
      <div className="relative z-10 flex items-start justify-between gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.15rem] border border-white/60 bg-white/30 text-blush shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_24px_rgba(168,111,111,0.1)] backdrop-blur-md transition duration-300 group-hover:border-gold/40 group-hover:bg-ivory/80 group-hover:text-gold">
          <Icon size={22} strokeWidth={1.55} aria-hidden="true" />
        </div>
        <span className="mt-5 h-px w-14 bg-gold/35 transition-all duration-300 group-hover:w-20 group-hover:bg-blush/35" />
      </div>

      <h3 className="relative z-10 mt-7 font-display text-[2rem] font-semibold leading-none text-cocoa">
        {service.title}
      </h3>
      <p className="relative z-10 mt-4 text-sm leading-7 text-cocoa/68">{service.description}</p>
      <p className="relative z-10 mt-auto border-t border-nude/55 pt-5 text-sm font-bold leading-6 text-blush">
        {service.benefit}
      </p>
    </article>
  )
}
