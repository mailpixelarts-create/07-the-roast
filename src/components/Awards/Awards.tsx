import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AWARDS_DATA } from '../../utils/constants'
import './Awards.scss'

gsap.registerPlugin(ScrollTrigger)

const Awards = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [counters, setCounters] = useState(AWARDS_DATA.map(() => 0))

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    AWARDS_DATA.forEach((award, index) => {
      gsap.to({ val: 0 }, {
        val: award.count,
        duration: 2,
        delay: index * 0.2,
        ease: 'power2.out',
        onUpdate: function () {
          setCounters((prev) => {
            const next = [...prev]
            next[index] = Math.round(this.targets()[0].val)
            return next
          })
        },
      })
    })

    // Trophy reveal
    gsap.fromTo('.awards__trophy', {
      opacity: 0,
      scale: 0.5,
      rotation: -20,
    }, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1,
      delay: 0.5,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.awards__trophy',
        start: 'top 80%',
      },
    })
  }

  return (
    <section className="awards section" id="awards" ref={sectionRef}>
      <div className="awards__bg-image" />
      <div className="container">
        <div className="awards__header">
          <span className="section-label">08 / Recognition</span>
          <h2 className="awards__title font-display">
            Award <span className="awards__title-accent">Winning</span>
          </h2>
          <hr className="copper-rule" />
        </div>

        <div className="awards__content">
          {/* Counter Grid */}
          <div className="awards__counters">
            {AWARDS_DATA.map((award, i) => (
              <div key={award.label} className="awards__counter">
                <span className="awards__counter-value font-display">
                  {counters[i]}
                </span>
                <span className="awards__counter-label font-mono">
                  {award.label}
                </span>
              </div>
            ))}
          </div>

          {/* Trophy */}
          <div className="awards__trophy">
            <svg viewBox="0 0 200 260" className="awards__trophy-svg">
              {/* Cup */}
              <path
                d="M60 40 L60 100 Q60 160 100 180 Q140 160 140 100 L140 40Z"
                fill="none"
                stroke="#B76D42"
                strokeWidth="2"
              />
              {/* Handles */}
              <path
                d="M60 60 Q30 60 30 90 Q30 120 60 120"
                fill="none"
                stroke="#B76D42"
                strokeWidth="1.5"
              />
              <path
                d="M140 60 Q170 60 170 90 Q170 120 140 120"
                fill="none"
                stroke="#B76D42"
                strokeWidth="1.5"
              />
              {/* Stem */}
              <line x1="100" y1="180" x2="100" y2="220" stroke="#B76D42" strokeWidth="2" />
              {/* Base */}
              <ellipse cx="100" cy="230" rx="40" ry="10" fill="none" stroke="#B76D42" strokeWidth="1.5" />
              {/* Star */}
              <polygon
                points="100,70 105,85 120,85 108,95 112,110 100,100 88,110 92,95 80,85 95,85"
                fill="#FF8C42"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* Magazine Covers Marquee */}
        <div className="awards__marquee">
          <div className="awards__marquee-track">
            <span className="awards__marquee-item font-display">Barista Magazine</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Sprudge</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Fresh Cup</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Roast Magazine</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Perfect Daily Grind</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Barista Magazine</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Sprudge</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Fresh Cup</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Roast Magazine</span>
            <span className="awards__marquee-divider">◆</span>
            <span className="awards__marquee-item font-display">Perfect Daily Grind</span>
            <span className="awards__marquee-divider">◆</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
