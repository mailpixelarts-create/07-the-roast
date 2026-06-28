import { useEffect, useRef, useState } from 'react'
import { animateCoffeeOrigins } from '../../animations/sections'
import { COFFEE_ORIGINS } from '../../utils/constants'
import './CoffeeOrigins.scss'

const CoffeeOrigins = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeOrigin, setActiveOrigin] = useState(0)

  useEffect(() => {
    if (sectionRef.current) {
      animateCoffeeOrigins(sectionRef.current)
    }
  }, [])

  return (
    <section className="origins section" id="origins" ref={sectionRef}>
      <div className="container">
        <div className="origins__header">
          <span className="section-label">03 / Origins</span>
          <h2 className="origins__title font-display">
            Sourced from <span className="origins__title-accent">the World</span>
          </h2>
          <hr className="copper-rule" />
          <p className="origins__desc">
            We travel to the source. Every origin relationship is built on trust,
            transparency, and a shared obsession with quality.
          </p>
        </div>

        <div className="origins__content">
          {/* World Map */}
          <div className="origins__map" style={{ backgroundImage: "url('/images/image_18.png')" }}>
            <svg viewBox="0 0 1000 500" className="origins__map-svg">
              {/* Simplified world map paths */}
              <g className="origins__continents" opacity="0.15">
                {/* North America */}
                <path d="M100 120 L200 100 L250 140 L280 130 L300 160 L260 200 L220 220 L180 200 L140 180 L100 160Z" fill="currentColor" />
                {/* South America */}
                <path d="M200 250 L240 240 L260 270 L270 320 L250 370 L220 390 L200 360 L190 310 L180 280Z" fill="currentColor" />
                {/* Europe */}
                <path d="M420 100 L460 90 L500 100 L520 120 L510 150 L480 160 L450 150 L430 130Z" fill="currentColor" />
                {/* Africa */}
                <path d="M440 180 L480 170 L520 200 L530 260 L510 320 L480 340 L450 320 L430 260 L420 220Z" fill="currentColor" />
                {/* Asia */}
                <path d="M540 80 L620 70 L700 90 L750 120 L760 160 L720 180 L660 170 L600 150 L560 130 L540 110Z" fill="currentColor" />
                {/* Australia */}
                <path d="M720 300 L780 290 L810 310 L800 340 L760 350 L730 340 L720 320Z" fill="currentColor" />
              </g>

              {/* Shipping Routes */}
              {COFFEE_ORIGINS.map((origin, i) => {
                const x = ((origin.lng + 180) / 360) * 1000
                const y = ((90 - origin.lat) / 180) * 500
                return (
                  <g key={origin.country}>
                    <line
                      x1={x}
                      y1={y}
                      x2={500}
                      y2={250}
                      stroke="#B76D42"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                      opacity="0.3"
                      className="origins__route"
                    />
                  </g>
                )
              })}

              {/* Origin Dots */}
              {COFFEE_ORIGINS.map((origin, i) => {
                const x = ((origin.lng + 180) / 360) * 1000
                const y = ((90 - origin.lat) / 180) * 500
                return (
                  <g
                    key={origin.country}
                    className="origins__dot"
                    onClick={() => setActiveOrigin(i)}
                    data-cursor
                    style={{ cursor: 'pointer' }}
                  >
                    <circle cx={x} cy={y} r="6" fill="#B76D42" opacity="0.3" />
                    <circle cx={x} cy={y} r="3" fill="#FF8C42" />
                    <circle cx={x} cy={y} r="12" fill="none" stroke="#B76D42" opacity="0.2" />
                    <text
                      x={x}
                      y={y - 14}
                      textAnchor="middle"
                      fill="#F5F0EA"
                      fontSize="10"
                      fontFamily="'IBM Plex Mono', monospace"
                      opacity="0.7"
                    >
                      {origin.country}
                    </text>
                  </g>
                )
              })}

              {/* Portland marker */}
              <g>
                <circle cx="180" cy="150" r="4" fill="#FF8C42" />
                <circle cx="180" cy="150" r="10" fill="none" stroke="#FF8C42" opacity="0.3">
                  <animate attributeName="r" from="10" to="20" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="180" y="170" textAnchor="middle" fill="#FF8C42" fontSize="8" fontFamily="'IBM Plex Mono', monospace">
                  HQ
                </text>
              </g>
            </svg>
          </div>

          {/* Origin Cards */}
          <div className="origins__cards">
            {COFFEE_ORIGINS.map((origin, i) => (
              <div
                key={origin.country}
                className={`origins__card ${i === activeOrigin ? 'origins__card--active' : ''}`}
                onClick={() => setActiveOrigin(i)}
                data-cursor
              >
                <div className="origins__card-header">
                  <h3 className="origins__card-country font-display">{origin.country}</h3>
                  <span className="origins__card-region font-mono">{origin.region}</span>
                </div>
                <div className="origins__card-details">
                  <div className="origins__card-detail">
                    <span className="origins__card-label font-mono">Altitude</span>
                    <span className="origins__card-value">{origin.altitude}</span>
                  </div>
                  <div className="origins__card-detail">
                    <span className="origins__card-label font-mono">Process</span>
                    <span className="origins__card-value">{origin.process}</span>
                  </div>
                </div>
                <p className="origins__card-notes">{origin.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoffeeOrigins
