import { Heart, ShieldCheck, Smile } from 'lucide-react'

const iconMap = {
  heart: Heart,
  shield: ShieldCheck,
  smile: Smile,
}

export default function AboutFeatureCard({ card }) {
  const Icon = iconMap[card.icon] || Heart

  return (
    <article className="soft-card hover-lift p-3 sm:p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blush/15 bg-nude/45 text-blush sm:h-11 sm:w-11 sm:rounded-2xl">
        <Icon size={18} strokeWidth={1.55} aria-hidden="true" />
      </div>
      <h3 className="mt-3 text-[0.78rem] font-bold leading-snug text-cocoa sm:mt-5 sm:text-base">
        {card.title}
      </h3>
      <p className="mt-2 text-[0.68rem] leading-5 text-cocoa/62 sm:mt-3 sm:text-sm sm:leading-6">
        {card.text}
      </p>
    </article>
  )
}
