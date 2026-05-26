import { useEffect } from 'react'

const REVEAL_SELECTOR = 'main section, .soft-card, .glass-card, .liquid-glass, #resultados .image-effect-card'

export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const fadeTargets = document.querySelectorAll(REVEAL_SELECTOR)

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
      observer.disconnect()
      fadeTargets.forEach((element) => {
        element.classList.remove('fade-stage', 'is-visible')
        element.style.removeProperty('--fade-delay')
      })
      root.classList.remove('motion-ready')
    }
  }, [])
}
