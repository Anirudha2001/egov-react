import React, { useState } from 'react';

const FOOTER_LINKS = {
  'Useful Links': ['Home', 'Our People', 'Our Impact', 'Financials', 'DIGIT Sandbox', 'Contact Us'],
  'Areas of Work': ['Public Health', 'Public Finance', 'Local Governance', 'Water & Sanitation'],
  'Resources': ['Articles', 'Whitepapers', 'Case Studies', 'Strategy Papers', 'News & Media'],
};

const SOCIALS = [
  { icon: 'bi-facebook', label: 'Facebook', href: '#' },
  { icon: 'bi-twitter-x', label: 'Twitter / X', href: '#' },
  { icon: 'bi-linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'bi-youtube', label: 'YouTube', href: '#' },
  { icon: 'bi-instagram', label: 'Instagram', href: '#' },
];

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="egov-footer" id="contact" aria-label="Site footer">
      {/* Top Band */}
      <div className="footer-top-band">
        <div className="container-wide footer-top-band-inner">
          <p className="footer-band-text">
            🚀 Join the mission — deliver better public services through open technology.
          </p>
          <a href="#products" className="btn-band-cta">
            Explore DIGIT Platform <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container-wide footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand" aria-label="eGov Foundation">
              <span className="brand-e">e</span>
              <span className="brand-gov">GOV</span>
            </a>
            <p className="footer-brand-desc">
              Catalyzing digital transformation in public service delivery at speed &amp; scale.
            </p>

            {/* Social Icons */}
            <div className="footer-socials" role="list" aria-label="Social media links">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-icon"
                  aria-label={s.label}
                  role="listitem"
                >
                  <i className={`bi ${s.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div className="footer-links-col" key={heading}>
              <h3 className="footer-heading">{heading}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Column */}
          <div className="footer-subscribe-col">
            <h3 className="footer-heading">Subscribe Now</h3>
            <p className="footer-subscribe-desc">
              Receive regular updates of our monthly newsletter DOT — in your inbox.
            </p>

            {subscribed ? (
              <div className="subscribe-success" role="status">
                <i className="bi bi-check-circle-fill" aria-hidden="true" /> Subscribed! Thank you.
              </div>
            ) : (
              <form className="subscribe-form" onSubmit={handleSubscribe} noValidate>
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  className="subscribe-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-btn" aria-label="Subscribe">
                  <i className="bi bi-send-fill" aria-hidden="true" />
                </button>
              </form>
            )}

            <div className="footer-badges">
              <span className="footer-badge">
                <i className="bi bi-shield-check" aria-hidden="true" /> Open Source
              </span>
              <span className="footer-badge">
                <i className="bi bi-award" aria-hidden="true" /> DPG Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container-wide footer-bottom-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} eGov Foundation. All Rights Reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer-legal-link">Terms and Conditions</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer-legal-link">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
