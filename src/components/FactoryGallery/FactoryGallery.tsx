import { useEffect, useRef } from 'react'
import { animateGallery } from '../../animations/gallery'
import './FactoryGallery.scss'

const galleryItems = [
  { id: 1, title: 'The Drum Room', category: 'Interior', size: 'large' },
  { id: 2, title: 'Green Beans', category: 'Process', size: 'small' },
  { id: 3, title: 'Copper Pipes', category: 'Detail', size: 'small' },
  { id: 4, title: 'Roasting Line', category: 'Equipment', size: 'medium' },
  { id: 5, title: 'Cupping Session', category: 'Quality', size: 'medium' },
  { id: 6, title: 'The Cooling Tray', category: 'Process', size: 'small' },
  { id: 7, title: 'Smoke & Light', category: 'Atmosphere', size: 'large' },
  { id: 8, title: 'Packaging', category: 'Detail', size: 'small' },
]

const FactoryGallery = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (galleryRef.current) {
      animateGallery(galleryRef.current)
    }
  }, [])

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery__header">
          <span className="section-label">05 / The Gallery</span>
          <h2 className="gallery__title font-display">
            Industrial <span className="gallery__title-accent">Beauty</span>
          </h2>
          <hr className="copper-rule" />
          <p className="gallery__desc">
            Every surface, every angle, every moment of the roast
            is a composition worth framing.
          </p>
        </div>
      </div>

      <div className="gallery__grid" ref={galleryRef}>
        <div className="container">
          <div className="gallery__items">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`gallery__item gallery__item--${item.size}`}
                data-cursor
              >
                <div className="gallery__image">
                  <div className="gallery__image-placeholder">
                    <span className="gallery__image-index font-mono">
                      {String(item.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="gallery__overlay">
                  <span className="gallery__label font-mono">{item.category}</span>
                  <h3 className="gallery__item-title font-display">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      <div className="gallery__fullscreen">
        <button className="gallery__close" data-cursor>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div className="gallery__fullscreen-content" />
      </div>
    </section>
  )
}

export default FactoryGallery
