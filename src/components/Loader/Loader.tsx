import { useEffect, useRef } from 'react'
import { animateLoader } from '../../animations/loader'
import './Loader.scss'

interface LoaderProps {
  onComplete: () => void
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (loaderRef.current) {
      animateLoader(loaderRef.current, onComplete)
    }
  }, [onComplete])

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__bg-image" />
      <div className="loader__inner">
        {/* Ember */}
        <div className="loader__ember">
          <div className="loader__ember-core" />
          <div className="loader__ember-ring" />
        </div>

        {/* Fire Particles */}
        <div className="loader__fire">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="loader__fire-particle" />
          ))}
        </div>

        {/* Bean */}
        <div className="loader__bean">
          <svg viewBox="0 0 60 80" className="loader__bean-svg">
            <ellipse cx="30" cy="40" rx="22" ry="35" fill="#50372D" />
            <path d="M30 5 Q20 40 30 75 Q40 40 30 5" fill="none" stroke="#3a271f" strokeWidth="2" />
          </svg>
        </div>

        {/* Roasting Drum */}
        <div className="loader__drum">
          <div className="loader__drum-ring loader__drum-ring--outer" />
          <div className="loader__drum-ring loader__drum-ring--inner" />
          <div className="loader__drum-center" />
        </div>

        {/* Smoke */}
        <div className="loader__smoke">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="loader__smoke-puff" />
          ))}
        </div>

        {/* Logo */}
        <div className="loader__logo">
          <span className="loader__logo-text">THE ROAST</span>
        </div>

        {/* Tagline */}
        <div className="loader__tagline">
          <span>Cinematic Coffee Roastery</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
