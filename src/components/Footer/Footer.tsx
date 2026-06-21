import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Rule */}
        <div className="footer__rule">
          <hr className="copper-rule" style={{ width: '100%' }} />
        </div>

        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__logo font-display">THE ROAST</h3>
            <p className="footer__tagline">Cinematic Coffee Roastery</p>
            <p className="footer__philosophy">
              Every bean tells a story of origin, fire, and precision.
            </p>
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
          <div className="footer__credit">
            <span className="font-mono">
              A LOOKBOOK Studio Experience, &copy; Norman James
            </span>
            <span className="footer__love">
              made with <span className="footer__heart">&#10084;</span> by Empathy Studio
            </span>
          </div>
          <div className="footer__location font-mono">
            Portland, Oregon &mdash; 45.5152&deg;N, 122.6784&deg;W
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
