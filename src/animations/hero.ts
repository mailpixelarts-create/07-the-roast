import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateHero = (container: HTMLElement) => {
  const tl = gsap.timeline()

  // Hero text stagger animation
  tl.fromTo('.hero__title .split-char', {
    opacity: 0,
    y: 80,
    rotateX: -40,
  }, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration: 1,
    stagger: 0.03,
    ease: 'power3.out',
  })

  // Subtitle slide up
  .fromTo('.hero__subtitle', {
    opacity: 0,
    y: 40,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.6')

  // CTA reveal
  .fromTo('.hero__cta', {
    opacity: 0,
    y: 30,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.4')

  // Roasting drum parallax on scroll
  gsap.to('.hero__drum', {
    rotation: 45,
    scale: 1.1,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })

  // Fire glow intensity on scroll
  gsap.to('.hero__fire', {
    opacity: 0.3,
    scrollTrigger: {
      trigger: '.hero',
      start: 'center center',
      end: 'bottom top',
      scrub: 1,
    },
  })

  // Smoke parallax
  gsap.to('.hero__smoke-particle', {
    y: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
      stagger: 0.2,
    },
  })

  // Bean rotation on scroll
  gsap.to('.hero__bean', {
    rotation: '+=360',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    },
  })

  return tl
}

export const animateHeroScroll = () => {
  // Parallax depth layers
  gsap.to('.hero__bg-layer--deep', {
    y: 100,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    },
  })

  gsap.to('.hero__bg-layer--mid', {
    y: 50,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })
}
