import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Results from './components/Results'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import {
  aboutCards,
  brand,
  ctas,
  developerCredit,
  differentials,
  faqItems,
  links,
  navItems,
  resultItems,
  services,
  testimonials,
} from './data/siteData'

export default function App() {
  useEffect(() => {
    const root = document.documentElement
    const fadeTargets = document.querySelectorAll(
      'main section, .soft-card, .glass-card, .liquid-glass, #resultados .image-effect-card',
    )

    root.classList.add('motion-ready')
    fadeTargets.forEach((element, index) => {
      element.classList.add('fade-stage')
      element.style.setProperty('--fade-delay', `${Math.min(index % 6, 5) * 55}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      {
        rootMargin: '12% 0px 18% 0px',
        threshold: 0.04,
      },
    )

    fadeTargets.forEach((element) => observer.observe(element))

    return () => {
      observer?.disconnect()
      fadeTargets.forEach((element) => {
        element.classList.remove('fade-stage', 'is-visible')
        element.style.removeProperty('--fade-delay')
      })
      root.classList.remove('motion-ready')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canHover || reduceMotion) return undefined

    const interactiveSelector = '.glass-card, .soft-card, .liquid-glass, .image-effect-card, .developer-card'
    let frame = 0
    let activeCard = null
    let latestEvent = null

    const resetCard = (card) => {
      if (!card) return
      card.style.removeProperty('--mx')
      card.style.removeProperty('--my')
      card.style.removeProperty('--tilt-x')
      card.style.removeProperty('--tilt-y')
      card.style.removeProperty('--card-scale')
    }

    const updatePointer = () => {
      frame = 0
      if (!latestEvent) return

      const { clientX, clientY } = latestEvent
      root.style.setProperty('--pointer-x', `${clientX}px`)
      root.style.setProperty('--pointer-y', `${clientY}px`)

      const nextCard = latestEvent.target.closest(interactiveSelector)
      if (nextCard !== activeCard) {
        resetCard(activeCard)
        activeCard = nextCard
      }

      if (!activeCard) return

      const rect = activeCard.getBoundingClientRect()
      const x = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
      const y = Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1)

      activeCard.style.setProperty('--mx', `${x * 100}%`)
      activeCard.style.setProperty('--my', `${y * 100}%`)
      activeCard.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`)
      activeCard.style.setProperty('--tilt-x', `${(0.5 - y) * 6}deg`)
      activeCard.style.setProperty('--card-scale', '1.012')
    }

    const onPointerMove = (event) => {
      latestEvent = event
      if (!frame) frame = window.requestAnimationFrame(updatePointer)
    }

    const onPointerLeave = () => {
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      latestEvent = null
      resetCard(activeCard)
      activeCard = null
      root.style.removeProperty('--pointer-x')
      root.style.removeProperty('--pointer-y')
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      resetCard(activeCard)
      root.style.removeProperty('--pointer-x')
      root.style.removeProperty('--pointer-y')
    }
  }, [])

  return (
    <div className="ambient-stage min-h-screen overflow-x-hidden bg-ivory text-cocoa">
      <Header brand={brand} cta={ctas.whatsapp} navItems={navItems} />
      <main className="pt-16 sm:pt-20">
        <Hero brand={brand} ctas={ctas} />
        <About cards={aboutCards} />
        <Services cta={ctas.doubts} services={services} />
        <Results cta={ctas.results} results={resultItems} />
        <Differentials cta={ctas.booking} items={differentials} />
        <Testimonials testimonials={testimonials} />
        <FAQ cta={ctas.doubts} items={faqItems} />
        <FinalCTA cta={ctas.booking} />
      </main>
      <Footer brand={brand} developer={developerCredit} links={links} />
    </div>
  )
}
