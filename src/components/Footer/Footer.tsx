import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg-image" />
      <div className="container">
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__logo font-display">THE ROAST</h3>
            <p className="footer__tagline">Cinematic Coffee Roastery</p>
          </div>

          {/* Links */}
          <div className="footer__links">
            <div className="footer__link-group">
              <h4 className="footer__link-title font-mono">Experience</h4>
              <a href="#roastery" className="footer__link" data-cursor>The Roastery</a>
              <a href="#process" className="footer__link" data-cursor>The Process</a>
              <a href="#origins" className="footer__link" data-cursor>Origins</a>
              <a href="#collection" className="footer__link" data-cursor>Collection</a>
            </div>
            <div className="footer__link-group">
              <h4 className="footer__link-title font-mono">Connect</h4>
              <a href="#contact" className="footer__link" data-cursor>Contact</a>
              <a href="#" className="footer__link" data-cursor>Instagram</a>
              <a href="#" className="footer__link" data-cursor>Twitter</a>
              <a href="#" className="footer__link" data-cursor>LinkedIn</a>
            </div>
            <div className="footer__link-group">
              <h4 className="footer__link-title font-mono">Info</h4>
              <a href="#" className="footer__link" data-cursor>Wholesale</a>
              <a href="#" className="footer__link" data-cursor>Careers</a>
              <a href="#" className="footer__link" data-cursor>Press</a>
              <a href="#" className="footer__link" data-cursor>Privacy</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <span className="footer__credit font-mono">
            © 2026 Norman James. All rights reserved. Made with <span className="footer__heart" style={{ color: 'red' }}>♥</span> by Empathy Studio
          </span>
          <span className="footer__location font-mono">
            Portland, Oregon
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
