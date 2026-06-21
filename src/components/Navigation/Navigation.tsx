import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NAVIGATION } from '../../utils/constants'
import './Navigation.scss'

gsap.registerPlugin(ScrollTrigger)

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo('.nav__link', {
        opacity: 0,
        y: -20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 4.8,
      })
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      gsap.fromTo('.mobile-menu__link', {
        opacity: 0,
        x: -30,
      }, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.1,
      })
    }
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} ref={navRef}>
      <div className="nav__inner">
        <a href="#" className="nav__logo" data-cursor>
          <span className="nav__logo-mark">TR</span>
          <span className="nav__logo-text">THE ROAST</span>
        </a>

        <div className="nav__links">
          {NAVIGATION.map((item) => (
            <a key={item.href} href={item.href} className="nav__link" data-cursor>
              {item.label}
            </a>
          ))}
        </div>

        <button
          className={`nav__burger ${isOpen ? 'nav__burger--open' : ''}`}
          onClick={toggleMenu}
          data-cursor
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          {NAVIGATION.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              onClick={() => setIsOpen(false)}
              data-cursor
            >
              <span className="mobile-menu__index">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
        <div className="mobile-menu__footer">
          <span className="font-mono">Portland, Oregon</span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
