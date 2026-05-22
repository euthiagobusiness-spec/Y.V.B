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

  return (
    <div className="ambient-stage min-h-screen overflow-x-hidden bg-ivory text-cocoa">
      <Header brand={brand} cta={ctas.whatsapp} navItems={navItems} />
      <main className="pt-20">
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
