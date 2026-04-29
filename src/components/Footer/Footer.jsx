import { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/eGov-Foundation.png" alt="eGov Foundation" loading="lazy" />
            <p>Catalyzing digital transformation in public service delivery at speed and scale.</p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Useful Links</h3>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#stories">Our People</a>
              <a href="#impact">Our Impact</a>
              <a href="#platform">DIGIT Sandbox</a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Areas of Work</h3>
            <div className="footer-links">
              <a href="#impact">Public Health</a>
              <a href="#impact">Public Finance</a>
              <a href="#impact">Local Governance</a>
              <a href="#impact">Water &amp; Sanitation</a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Subscribe Now</h3>
            <p className="footer-subscribe-desc">
              Receive regular updates of our monthly newsletter DOT in your inbox.
            </p>
            {subscribed ? (
              <p style={{ color: "#42cbd6", fontWeight: 700 }}>Thanks for subscribing!</p>
            ) : (
              <form className="footer-subscribe" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn-egov primary" type="submit">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright 2026 eGov Foundation. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
