import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollTriggerOptions {
  trigger: string | Element | RefObject<Element>
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}

const useScrollTrigger = (options: ScrollTriggerOptions, animation: gsap.core.Timeline | gsap.core.Tween | null) => {
  useEffect(() => {
    if (!animation) return

    const trigger = typeof options.trigger === 'string'
      ? options.trigger
      : options.trigger instanceof Element
        ? options.trigger
        : options.trigger?.current

    if (!trigger) return

    ScrollTrigger.create({
      trigger,
      start: options.start ?? 'top 80%',
      end: options.end ?? 'bottom 20%',
      scrub: options.scrub ?? false,
      pin: options.pin ?? false,
      markers: options.markers ?? false,
      animation,
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [animation, options.trigger, options.start, options.end, options.scrub, options.pin])

  return ScrollTrigger
}

export default useScrollTrigger
