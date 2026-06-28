import { useEffect, useRef, useState } from 'react'
import { animateContact } from '../../animations/sections'
import './Contact.scss'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    if (sectionRef.current) {
      animateContact(sectionRef.current)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="contact__bg-image" />
      <div className="container">
        <div className="contact__header">
          <span className="section-label">09 / Contact</span>
          <h2 className="contact__title font-display">
            Get in <span className="contact__title-accent">Touch</span>
          </h2>
          <hr className="copper-rule" />
          <p className="contact__desc">
            Whether you're a cafe owner, a barista, or simply someone who
            believes coffee deserves better — we'd love to hear from you.
          </p>
        </div>

        <div className="contact__content">
          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label className="contact__label font-mono" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__label font-mono" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__label font-mono" htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                className="contact__input contact__select"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="wholesale">Wholesale Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="tour">Roastery Tour</option>
                <option value="press">Press & Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="contact__form-group">
              <label className="contact__label font-mono" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="contact__submit" data-cursor>
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10h14M11 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </form>

          {/* Info */}
          <div className="contact__info">
            <div className="contact__info-block">
              <h4 className="contact__info-title font-display">Visit Us</h4>
              <p className="contact__info-text">
                1247 Industrial Way<br />
                Portland, OR 97209<br />
                United States
              </p>
            </div>

            <div className="contact__info-block">
              <h4 className="contact__info-title font-display">Hours</h4>
              <p className="contact__info-text">
                Mon - Fri: 7:00 AM - 6:00 PM<br />
                Sat - Sun: 8:00 AM - 4:00 PM<br />
                Roastery Tours: By appointment
              </p>
            </div>

            <div className="contact__info-block">
              <h4 className="contact__info-title font-display">Connect</h4>
              <div className="contact__socials">
                <a href="#" className="contact__social" data-cursor>Instagram</a>
                <a href="#" className="contact__social" data-cursor>Twitter</a>
                <a href="#" className="contact__social" data-cursor>LinkedIn</a>
              </div>
            </div>

            <div className="contact__info-block">
              <h4 className="contact__info-title font-display">Direct</h4>
              <p className="contact__info-text">
                <a href="mailto:hello@theroast.co" data-cursor>hello@theroast.co</a><br />
                <a href="tel:+15031234567" data-cursor>+1 (503) 123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
