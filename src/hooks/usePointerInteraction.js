import { useEffect } from 'react'

const INTERACTIVE_SELECTOR = '.glass-card, .soft-card, .liquid-glass, .image-effect-card, .developer-card'
const POINTER_PROPERTIES = ['--mx', '--my', '--tilt-x', '--tilt-y', '--card-scale']

function resetCard(card) {
  if (!card) return
  POINTER_PROPERTIES.forEach((property) => card.style.removeProperty(property))
}

export default function usePointerInteraction() {
  useEffect(() => {
    const root = document.documentElement
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canHover || reduceMotion) return undefined

    let frame = 0
    let activeCard = null
    let latestEvent = null

    const updatePointer = () => {
      frame = 0
      if (!latestEvent) return

      const { clientX, clientY } = latestEvent
      root.style.setProperty('--pointer-x', `${clientX}px`)
      root.style.setProperty('--pointer-y', `${clientY}px`)

      const nextCard = latestEvent.target.closest(INTERACTIVE_SELECTOR)
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
}
