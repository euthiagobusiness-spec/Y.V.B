import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroBookingCard({ cta }) {
  return (
    <a
      href={cta.href}
      target={cta.external ? '_blank' : undefined}
      rel={cta.external ? 'noopener noreferrer' : undefined}
      aria-label="Agendar atendimento pelo WhatsApp"
      className="group relative z-10 mx-auto -mt-6 grid w-full max-w-[22rem] grid-cols-[1.5rem_minmax(0,1fr)_2.4rem] items-center gap-2.5 rounded-[1.2rem] border border-white/28 bg-cocoa px-4 py-3.5 text-white shadow-[0_18px_42px_rgba(90,60,58,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#4d302e] focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-ivory sm:-mt-8 sm:max-w-[32rem] sm:grid-cols-[2.35rem_minmax(0,1fr)_3rem] sm:gap-4 sm:rounded-[1.35rem] sm:px-6 sm:py-5"
    >
      <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_8%_18%,rgba(255,255,255,0.22),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_38%)]" />
      <Sparkles className="relative self-center justify-self-center text-gold" size={22} strokeWidth={1.35} aria-hidden="true" />
      <div className="relative min-w-0 self-center">
        <p className="text-[0.56rem] font-bold uppercase leading-none tracking-[0.24em] text-white/76 sm:text-[0.62rem] sm:tracking-[0.26em]">
          Agendamento
        </p>
        <p className="mt-1.5 whitespace-nowrap font-display text-[1.05rem] font-semibold leading-none text-white min-[380px]:text-[1.16rem] min-[480px]:text-[1.28rem] sm:mt-2 sm:text-[1.62rem]">
          pronta para cuidar de você?
        </p>
      </div>
      <span className="relative flex h-9 w-9 items-center justify-center self-center justify-self-center rounded-full border border-white/30 bg-white/14 transition duration-300 group-hover:bg-white/24 sm:h-10 sm:w-10">
        <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
      </span>
    </a>
  )
}
