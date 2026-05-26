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
import usePointerInteraction from './hooks/usePointerInteraction'
import useScrollReveal from './hooks/useScrollReveal'
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
  useScrollReveal()
  usePointerInteraction()

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
