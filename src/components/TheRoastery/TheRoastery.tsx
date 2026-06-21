import { useEffect, useRef } from 'react'
import { animateTheRoastery } from '../../animations/sections'
import './TheRoastery.scss'

const TheRoastery = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      animateTheRoastery(sectionRef.current)
    }
  }, [])

  return (
    <section className="roastery section" id="roastery" ref={sectionRef}>
      <div className="container">
        <div className="roastery__header">
          <span className="section-label">01 / The Roastery</span>
          <h2 className="roastery__title font-display">
            A Cathedral <br />
            <span className="roastery__title-accent">of Fire & Steel</span>
          </h2>
          <hr className="copper-rule" />
          <p className="roastery__desc">
            Born from the belief that coffee roasting is an industrial art form.
            Every beam, every flame, every surface tells the story of transformation.
          </p>
        </div>

        <div className="roastery__content">
          {/* Steel Panels */}
          <div className="roastery__panels">
            <div className="roastery__panel">
              <div className="roastery__panel-inner">
                <span className="roastery__panel-number font-mono">01</span>
                <h3 className="roastery__panel-title">The Drum</h3>
                <p className="roastery__panel-text">
                  Custom-built Loring S35 Kestrel. 35kg capacity.
                  Precision roasting with zero emissions.
                </p>
              </div>
            </div>
            <div className="roastery__panel">
              <div className="roastery__panel-inner">
                <span className="roastery__panel-number font-mono">02</span>
                <h3 className="roastery__panel-title">The Cooling</h3>
                <p className="roastery__panel-text">
                  Rapid cooling tray stops development in seconds.
                  Locking in flavors at their peak.
                </p>
              </div>
            </div>
            <div className="roastery__panel">
              <div className="roastery__panel-inner">
                <span className="roastery__panel-number font-mono">03</span>
                <h3 className="roastery__panel-title">The Cupping</h3>
                <p className="roastery__panel-text">
                  Dedicated cupping lab. 300+ samples weekly.
                  Every batch earns its place.
                </p>
              </div>
            </div>
          </div>

          {/* Copper Line */}
          <div className="roastery__copper-line" />

          {/* Images */}
          <div className="roastery__images">
            <div className="roastery__image roastery__image--1">
              <div className="roastery__image-overlay" />
              <div className="roastery__image-label font-mono">Interior — Main Floor</div>
            </div>
            <div className="roastery__image roastery__image--2">
              <div className="roastery__image-overlay" />
              <div className="roastery__image-label font-mono">Equipment — Roasting Line</div>
            </div>
            <div className="roastery__image roastery__image--3">
              <div className="roastery__image-overlay" />
              <div className="roastery__image-label font-mono">Detail — Copper Fittings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheRoastery
