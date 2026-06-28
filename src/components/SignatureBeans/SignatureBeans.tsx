import { useEffect, useRef, useState } from 'react'
import { animateSignatureBeans } from '../../animations/sections'
import { SIGNATURE_BEANS } from '../../utils/constants'
import './SignatureBeans.scss'

const SignatureBeans = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredBean, setHoveredBean] = useState<number | null>(null)

  useEffect(() => {
    if (sectionRef.current) {
      animateSignatureBeans(sectionRef.current)
    }
  }, [])

  return (
    <section className="beans section" id="collection" ref={sectionRef}>
      <div className="container">
        <div className="beans__header">
          <span className="section-label">04 / The Collection</span>
          <h2 className="beans__title font-display">
            Signature <span className="beans__title-accent">Roasts</span>
          </h2>
          <hr className="copper-rule" />
          <p className="beans__desc">
            Four blends. Each born from obsession. Each telling a different story
            of origin, fire, and precision.
          </p>
        </div>

        <div className="beans__grid">
          {SIGNATURE_BEANS.map((bean, i) => (
            <div
              key={bean.name}
              className={`beans__card ${hoveredBean === i ? 'beans__card--hovered' : ''}`}
              onMouseEnter={() => setHoveredBean(i)}
              onMouseLeave={() => setHoveredBean(null)}
              data-cursor
            >
              {/* Coffee Bag */}
              <div className="beans__bag">
                <div className="beans__bag-body" style={{ backgroundImage: `url('${bean.image}')` }}>
                  <div className="beans__bag-fold" />
                  <div className="beans__bag-label">
                    <span className="beans__bag-brand font-mono">THE ROAST</span>
                    <h3 className="beans__bag-name font-display">{bean.name}</h3>
                    <span className="beans__bag-origin font-mono">{bean.origin}</span>
                  </div>
                </div>
                <div className="beans__bag-shadow" />
              </div>

              {/* Info */}
              <div className="beans__info">
                <div className="beans__info-header">
                  <span className="beans__roast-level font-mono">{bean.roast}</span>
                </div>
                <p className="beans__description">{bean.description}</p>

                {/* Notes */}
                <div className="beans__notes">
                  {bean.notes.map((note) => (
                    <span key={note} className="beans__note">{note}</span>
                  ))}
                </div>

                {/* Flavor Wheel */}
                <div className="beans__wheel">
                  <div className="beans__wheel-item">
                    <span className="beans__wheel-label font-mono">Body</span>
                    <div className="beans__wheel-bar">
                      <div
                        className="beans__wheel-fill"
                        style={{ width: `${bean.body * 10}%` }}
                      />
                    </div>
                    <span className="beans__wheel-value font-mono">{bean.body}/10</span>
                  </div>
                  <div className="beans__wheel-item">
                    <span className="beans__wheel-label font-mono">Acidity</span>
                    <div className="beans__wheel-bar">
                      <div
                        className="beans__wheel-fill beans__wheel-fill--acid"
                        style={{ width: `${bean.acidity * 10}%` }}
                      />
                    </div>
                    <span className="beans__wheel-value font-mono">{bean.acidity}/10</span>
                  </div>
                  <div className="beans__wheel-item">
                    <span className="beans__wheel-label font-mono">Sweet</span>
                    <div className="beans__wheel-bar">
                      <div
                        className="beans__wheel-fill beans__wheel-fill--sweet"
                        style={{ width: `${bean.sweetness * 10}%` }}
                      />
                    </div>
                    <span className="beans__wheel-value font-mono">{bean.sweetness}/10</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureBeans
