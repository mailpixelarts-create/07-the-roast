import { useEffect, useRef, useState } from 'react'
import { animateRoastingProcess } from '../../animations/sections'
import { ROASTING_STAGES } from '../../utils/constants'
import './RoastingProcess.scss'

const RoastingProcess = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStage, setActiveStage] = useState(0)
  const [heatLevel, setHeatLevel] = useState(0)

  useEffect(() => {
    if (sectionRef.current) {
      animateRoastingProcess(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeatLevel((prev) => {
        const next = prev + 0.5
        return next > 100 ? 0 : next
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handleStageClick = (index: number) => {
    setActiveStage(index)
    setHeatLevel((index / (ROASTING_STAGES.length - 1)) * 100)
  }

  return (
    <section className="process section" id="process" ref={sectionRef}>
      <div className="container">
        <div className="process__header">
          <span className="section-label">02 / The Process</span>
          <h2 className="process__title font-display">
            From Green to <span className="process__title-accent">Perfection</span>
          </h2>
          <hr className="copper-rule" />
          <p className="process__desc">
            Every roast is a controlled transformation. Temperature, time, and
            intuition converge to unlock what the bean has always been.
          </p>
        </div>

        {/* Heat Meter */}
        <div className="process__heat-meter">
          <div className="process__heat-label font-mono">
            <span>HEAT</span>
            <span>{Math.round(heatLevel)}%</span>
          </div>
          <div className="process__heat-track">
            <div
              className="process__heat-fill"
              style={{ transform: `scaleX(${heatLevel / 100})` }}
            />
          </div>
          <div className="process__temp font-mono">
            {ROASTING_STAGES[activeStage].temperature}
          </div>
        </div>

        {/* Timeline */}
        <div className="process__timeline">
          <div className="process__track">
            <div className="process__track-line" />
            <div
              className="process__track-progress"
              style={{ height: `${(activeStage / (ROASTING_STAGES.length - 1)) * 100}%` }}
            />
            {/* Bean traveling */}
            <div
              className="process__bean-travel"
              style={{ top: `${(activeStage / (ROASTING_STAGES.length - 1)) * 100}%` }}
            >
              <svg viewBox="0 0 24 32" className="process__bean-icon">
                <ellipse cx="12" cy="16" rx="9" ry="14" fill="#50372D" />
                <path d="M12 2 Q8 16 12 30 Q16 16 12 2" fill="none" stroke="#3a271f" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Stages */}
          <div className="process__stages">
            {ROASTING_STAGES.map((stage, index) => (
              <div
                key={stage.id}
                className={`process__stage ${index === activeStage ? 'process__stage--active' : ''}`}
                onClick={() => handleStageClick(index)}
                data-cursor
              >
                <div className="process__stage-dot" style={{ background: stage.color }} />
                <div className="process__stage-content">
                  <div className="process__stage-header">
                    <h3 className="process__stage-name font-display">{stage.name}</h3>
                    <span className="process__stage-time font-mono">{stage.duration}</span>
                  </div>
                  <p className="process__stage-desc">{stage.description}</p>
                  <span className="process__stage-temp font-mono">{stage.temperature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roast Curve */}
        <div className="process__curve">
          <svg viewBox="0 0 800 200" className="process__curve-svg">
            <path
              d="M0 180 Q100 170 200 140 Q300 110 400 80 Q500 50 600 30 Q700 20 800 15"
              fill="none"
              stroke="url(#curve-gradient)"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className="process__curve-path"
            />
            <defs>
              <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#50372D" />
                <stop offset="50%" stopColor="#B76D42" />
                <stop offset="100%" stopColor="#FF8C42" />
              </linearGradient>
            </defs>
          </svg>
          <div className="process__curve-labels font-mono">
            <span>Time</span>
            <span>Temperature</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoastingProcess
