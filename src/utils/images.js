export function getOptimizedResultImage(image) {
  if (!image) return null

  const basePath = image.replace('/assets/results/', '/assets/results/optimized/').replace(/\.jpg$/i, '')

  return {
    src: `${basePath}-800.jpg`,
    srcSet: `${basePath}-480.jpg 480w, ${basePath}-800.jpg 800w, ${basePath}-1200.jpg 1200w`,
  }
}

export function getResultThumbImage(image) {
  return image?.replace('/assets/results/', '/assets/results/optimized/').replace(/\.jpg$/i, '-480.jpg')
}
