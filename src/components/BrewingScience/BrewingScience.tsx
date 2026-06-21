import { useEffect, useRef } from 'react'
import { animateSectionReveal } from '../../animations/sections'
import './BrewingScience.scss'

const BrewingScience = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      animateSectionReveal('.science', '.science__card')
    }
  }, [])

  return (
    <section className="science section" id="science" ref={sectionRef}>
      <div className="container">
        <div className="science__header">
          <span className="section-label">06 / The Science</span>
          <h2 className="science__title font-display">
            Brewing <span className="science__title-accent">Precision</span>
          </h2>
          <hr className="copper-rule" />
          <p className="science__desc">
            Where chemistry meets intuition. Every variable is measured.
            Every extraction is a controlled experiment.
          </p>
        </div>

        <div className="science__content">
          {/* Extraction Curve */}
          <div className="science__extraction">
            <h3 className="science__section-title font-display">Extraction Curve</h3>
            <div className="science__chart">
              <svg viewBox="0 0 600 300" className="science__chart-svg">
                {/* Grid */}
                <g className="science__grid" opacity="0.1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <line key={`h${i}`} x1="50" y1={i * 50} x2="580" y2={i * 50} stroke="currentColor" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line key={`v${i}`} x1={50 + i * 48} y1="0" x2={50 + i * 48} y2="300" stroke="currentColor" strokeWidth="0.5" />
                  ))}
                </g>

                {/* Optimal Zone */}
                <rect x="246" y="50" width="192" height="200" fill="rgba(183, 109, 66, 0.08)" rx="4" />
                <text x="342" y="40" textAnchor="middle" fill="#B76D42" fontSize="8" fontFamily="'IBM Plex Mono', monospace">
                  OPTIMAL EXTRACTION
                </text>

                {/* Extraction Curve */}
                <path
                  d="M50 250 Q150 240 200 180 Q250 120 300 100 Q350 80 400 90 Q450 100 500 140 Q550 180 580 220"
                  fill="none"
                  stroke="url(#extraction-gradient)"
                  strokeWidth="2.5"
                  strokeDasharray="800"
                  strokeDashoffset="800"
                  className="science__curve-path"
                />

                {/* TDS Label */}
                <text x="25" y="150" fill="#8A8D90" fontSize="8" fontFamily="'IBM Plex Mono', monospace" transform="rotate(-90, 25, 150)">
                  TDS %
                </text>

                {/* Extraction % */}
                <text x="315" y="290" fill="#8A8D90" fontSize="8" fontFamily="'IBM Plex Mono', monospace">
                  EXTRACTION %
                </text>

                {/* Data Points */}
                <circle cx="200" cy="180" r="4" fill="#50372D" className="science__point" />
                <circle cx="300" cy="100" r="4" fill="#B76D42" className="science__point" />
                <circle cx="400" cy="90" r="4" fill="#FF8C42" className="science__point" />
                <circle cx="500" cy="140" r="4" fill="#8A8D90" className="science__point" />

                <defs>
                  <linearGradient id="extraction-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#50372D" />
                    <stop offset="40%" stopColor="#B76D42" />
                    <stop offset="70%" stopColor="#FF8C42" />
                    <stop offset="100%" stopColor="#8A8D90" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Science Cards */}
          <div className="science__cards">
            <div className="science__card">
              <div className="science__card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="16" stroke="#B76D42" strokeWidth="1" />
                  <path d="M14 20 L20 14 L26 20 L20 26Z" stroke="#FF8C42" strokeWidth="1" />
                </svg>
              </div>
              <h4 className="science__card-title font-display">Water Chemistry</h4>
              <p className="science__card-text">
                Mineral content, pH, temperature. We calibrate water to
                extract maximum flavor from each origin.
              </p>
              <span className="science__card-value font-mono">TDS: 150 ppm</span>
            </div>

            <div className="science__card">
              <div className="science__card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="8" width="24" height="24" rx="2" stroke="#B76D42" strokeWidth="1" />
                  <line x1="8" y1="20" x2="32" y2="20" stroke="#FF8C42" strokeWidth="1" />
                </svg>
              </div>
              <h4 className="science__card-title font-display">Grind Precision</h4>
              <p className="science__card-text">
                Particle size distribution affects extraction rate.
                We measure in microns, not guesses.
              </p>
              <span className="science__card-value font-mono">400-600 microns</span>
            </div>

            <div className="science__card">
              <div className="science__card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="16" stroke="#B76D42" strokeWidth="1" />
                  <line x1="20" y1="8" x2="20" y2="32" stroke="#FF8C42" strokeWidth="1" />
                  <line x1="8" y1="20" x2="32" y2="20" stroke="#FF8C42" strokeWidth="1" />
                </svg>
              </div>
              <h4 className="science__card-title font-display">Temperature Control</h4>
              <p className="science__card-text">
                PID-controlled brewing temperature. Stability within
                0.5 degrees across the entire extraction.
              </p>
              <span className="science__card-value font-mono">93.5°C ± 0.5</span>
            </div>

            <div className="science__card">
              <div className="science__card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M10 30 L10 10 L30 10" stroke="#B76D42" strokeWidth="1" />
                  <path d="M10 25 L18 15 L22 20 L30 12" stroke="#FF8C42" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="science__card-title font-display">Extraction Time</h4>
              <p className="science__card-text">
                Total contact time between water and coffee.
                Optimized for each method and grind size.
              </p>
              <span className="science__card-value font-mono">2:30 - 4:00 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrewingScience
