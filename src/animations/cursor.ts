import { gsap } from 'gsap'

export const animateCursor = (
  cursor: HTMLElement,
  cursorDot: HTMLElement,
  cursorRing: HTMLElement
) => {
  // Follow mouse
  const onMouseMove = (e: MouseEvent) => {
    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    })

    gsap.to(cursorRing, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  document.addEventListener('mousemove', onMouseMove)

  // Hover effects
  const interactiveElements = document.querySelectorAll('a, button, [data-cursor]')

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursorRing, {
        scale: 2,
        borderColor: 'rgba(183, 109, 66, 0.6)',
        duration: 0.3,
      })
      gsap.to(cursorDot, {
        scale: 0.5,
        backgroundColor: '#FF8C42',
        duration: 0.3,
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(cursorRing, {
        scale: 1,
        borderColor: 'rgba(138, 141, 144, 0.3)',
        duration: 0.3,
      })
      gsap.to(cursorDot, {
        scale: 1,
        backgroundColor: '#B76D42',
        duration: 0.3,
      })
    })
  })

  // Spark emission
  const emitSpark = (x: number, y: number) => {
    const spark = document.createElement('div')
    spark.className = 'cursor-spark'
    spark.style.left = `${x}px`
    spark.style.top = `${y}px`
    spark.style.setProperty('--spark-x', `${(Math.random() - 0.5) * 40}px`)
    spark.style.setProperty('--spark-y', `${-Math.random() * 30 - 10}px`)
    cursor.appendChild(spark)

    gsap.fromTo(spark, {
      opacity: 1,
      scale: 1,
    }, {
      opacity: 0,
      scale: 0,
      x: parseFloat(spark.style.getPropertyValue('--spark-x')),
      y: parseFloat(spark.style.getPropertyValue('--spark-y')),
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => spark.remove(),
    })
  }

  // Emit sparks on click
  document.addEventListener('click', (e: MouseEvent) => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => emitSpark(e.clientX, e.clientY), i * 30)
    }
  })

  return () => {
    document.removeEventListener('mousemove', onMouseMove)
  }
}
