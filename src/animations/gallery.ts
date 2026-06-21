import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateGallery = (container: HTMLElement) => {
  // Editorial grid reveal
  gsap.fromTo('.gallery__item', {
    clipPath: 'inset(0 0 100% 0)',
    opacity: 0,
  }, {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    duration: 1,
    stagger: {
      each: 0.15,
      from: 'random',
    },
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  // Hover effects on gallery items
  const items = container.querySelectorAll('.gallery__item')
  items.forEach((item) => {
    const overlay = item.querySelector('.gallery__overlay')
    const image = item.querySelector('.gallery__image')

    item.addEventListener('mouseenter', () => {
      gsap.to(overlay, { opacity: 1, duration: 0.3 })
      gsap.to(image, { scale: 1.05, duration: 0.6, ease: 'power2.out' })
    })

    item.addEventListener('mouseleave', () => {
      gsap.to(overlay, { opacity: 0, duration: 0.3 })
      gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' })
    })
  })

  // Full screen transition on click
  items.forEach((item) => {
    item.addEventListener('click', () => {
      gsap.to('.gallery__fullscreen', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      })
    })
  })

  // Industrial overlay text
  gsap.fromTo('.gallery__label', {
    opacity: 0,
    x: -30,
  }, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 60%',
      toggleActions: 'play none none none',
    },
  })
}
