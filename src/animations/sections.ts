import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateSectionReveal = (trigger: string, selector: string) => {
  gsap.fromTo(selector, {
    opacity: 0,
    y: 60,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const animateTheRoastery = (container: HTMLElement) => {
  // Steel panels reveal from darkness
  gsap.fromTo('.roastery__panel', {
    clipPath: 'inset(100% 0 0 0)',
    opacity: 0,
  }, {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.roastery',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  // Copper line draw
  gsap.fromTo('.roastery__copper-line', {
    scaleX: 0,
  }, {
    scaleX: 1,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.roastery__copper-line',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })

  // Images emerge from darkness
  gsap.fromTo('.roastery__image', {
    filter: 'brightness(0)',
    scale: 1.1,
  }, {
    filter: 'brightness(1)',
    scale: 1,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.roastery__images',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  })
}

export const animateRoastingProcess = (container: HTMLElement) => {
  // Timeline stages animate in
  gsap.fromTo('.process__stage', {
    opacity: 0,
    x: -50,
  }, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.process',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  // Heat meter animation
  gsap.fromTo('.process__heat-fill', {
    scaleX: 0,
  }, {
    scaleX: 1,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.process__heat-meter',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  // Bean travel animation
  gsap.to('.process__bean-travel', {
    x: '100%',
    scrollTrigger: {
      trigger: '.process__timeline',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
  })
}

export const animateCoffeeOrigins = (container: HTMLElement) => {
  // Map dots appear
  gsap.fromTo('.origins__dot', {
    scale: 0,
    opacity: 0,
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.origins__map',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  // Shipping routes animate
  gsap.fromTo('.origins__route', {
    strokeDashoffset: 1000,
  }, {
    strokeDashoffset: 0,
    duration: 2,
    stagger: 0.3,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.origins__map',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  // Country cards
  gsap.fromTo('.origins__card', {
    opacity: 0,
    y: 60,
    rotateY: -15,
  }, {
    opacity: 1,
    y: 0,
    rotateY: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.origins__cards',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const animateSignatureBeans = (container: HTMLElement) => {
  gsap.fromTo('.beans__card', {
    opacity: 0,
    y: 80,
    scale: 0.95,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.beans',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })
}

export const animateTeam = (container: HTMLElement) => {
  gsap.fromTo('.team__member', {
    opacity: 0,
    y: 60,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.team',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  })
}

export const animateContact = (container: HTMLElement) => {
  gsap.fromTo('.contact__form-group', {
    opacity: 0,
    y: 40,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })
}
