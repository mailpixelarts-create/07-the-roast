import { gsap } from 'gsap'

export const animateLoader = (container: HTMLElement, onComplete?: () => void) => {
  const tl = gsap.timeline({ onComplete })

  // Phase 1: Ember appears and pulses
  tl.fromTo('.loader__ember', {
    scale: 0,
    opacity: 0,
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  })

  // Phase 2: Ember pulses and fire ignites
  .to('.loader__ember', {
    scale: 1.3,
    duration: 0.3,
    ease: 'power1.inOut',
  })
  .to('.loader__ember', {
    scale: 1,
    duration: 0.2,
    ease: 'power1.out',
  })

  // Phase 3: Fire particles ignite
  .to('.loader__fire-particle', {
    opacity: 1,
    scale: 1,
    duration: 0.4,
    stagger: {
      each: 0.05,
      from: 'center',
    },
    ease: 'power2.out',
  }, '-=0.2')

  // Phase 4: Bean drops in
  .to('.loader__bean', {
    opacity: 1,
    y: 0,
    rotation: 210,
    duration: 0.6,
    ease: 'bounce.out',
  }, '-=0.1')

  // Phase 5: Roasting drum spins
  .to('.loader__drum', {
    opacity: 1,
    duration: 0.3,
  })
  .to('.loader__drum-ring', {
    rotation: 360,
    duration: 2,
    repeat: 1,
    ease: 'none',
  }, '-=0.3')

  // Phase 6: Smoke rises
  .to('.loader__smoke', {
    opacity: 0.5,
    y: -100,
    duration: 1.5,
    stagger: 0.15,
    ease: 'power1.out',
  }, '-=1.8')

  // Phase 7: Logo appears through smoke
  .fromTo('.loader__logo', {
    opacity: 0,
    y: 30,
    filter: 'blur(20px)',
  }, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 1,
    ease: 'power2.out',
  }, '-=1')

  // Phase 8: Tagline fades in
  .fromTo('.loader__tagline', {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.5')

  // Phase 9: Full screen wipe
  .to('.loader', {
    clipPath: 'inset(0 0 100% 0)',
    duration: 1,
    ease: 'power4.inOut',
    delay: 0.5,
  })

  return tl
}
