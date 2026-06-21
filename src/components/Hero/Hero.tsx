import { useEffect, useRef } from 'react'
import { animateHero, animateHeroScroll } from '../../animations/hero'
import SplitType from 'split-type'
import './Hero.scss'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      new SplitType(titleRef.current, { types: 'chars' })
    }

    if (heroRef.current) {
      animateHero(heroRef.current)
      animateHeroScroll()
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Background Layers */}
      <div className="hero__bg">
        <div className="hero__bg-layer hero__bg-layer--deep" />
        <div className="hero__bg-layer hero__bg-layer--mid" />
        <div className="hero__bg-gradient" />
      </div>

      {/* Roasting Drum */}
      <div className="hero__drum">
        <div className="hero__drum-body">
          <div className="hero__drum-ring hero__drum-ring--1" />
          <div className="hero__drum-ring hero__drum-ring--2" />
          <div className="hero__drum-ring hero__drum-ring--3" />
          <div className="hero__drum-center" />
        </div>
      </div>

      {/* Fire */}
      <div className="hero__fire">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="hero__flame" />
        ))}
      </div>

      {/* Floating Beans */}
      <div className="hero__beans">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="hero__bean">
            <svg viewBox="0 0 30 42">
              <ellipse cx="15" cy="21" rx="11" ry="17" fill="#50372D" />
              <path d="M15 3 Q10 21 15 39 Q20 21 15 3" fill="none" stroke="#3a271f" strokeWidth="1" />
            </svg>
          </div>
        ))}
      </div>

      {/* Smoke */}
      <div className="hero__smoke">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="hero__smoke-particle" />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__label section-label">
          <span>Cinematic Coffee Roastery</span>
        </div>

        <h1 className="hero__title font-display" ref={titleRef}>
          THE ROAST
        </h1>

        <p className="hero__subtitle">
          Where Fire Meets Craft
        </p>

        <div className="hero__cta">
          <a href="#roastery" className="hero__btn" data-cursor>
            <span>Explore the Roastery</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3v14M3 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>

        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line" />
          <span className="font-mono">Scroll</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
