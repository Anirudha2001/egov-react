import React, { useEffect, useRef } from 'react';

function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('hero-headline--animated'), 50);
  }, []);

  return (
    <section className="hero-section" id="hero" aria-label="Hero">
      <div className="container-wide hero-grid">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="hero-badge-dot" aria-hidden="true" />
            20 Years of Digital Transformation
          </div>

          <h1 className="hero-headline animate-fade-up animate-delay-1" ref={headlineRef}>
            Public service,<br />
            reimagined.<br />
            <span className="hero-highlight">It's possible.</span>
          </h1>

          <p className="hero-body animate-fade-up animate-delay-2">
            Catalysts. Ecosystem enablers. Problem solvers. At eGov, we're driven
            by the power of open digital infrastructure to enable governments deliver
            accessible, inclusive, and transparent services to every citizen.
          </p>

          <div className="hero-cta-row animate-fade-up animate-delay-3">
            <a href="#features" className="btn-primary">
              Our Approach
            </a>
            <a href="#stats" className="btn-outline">
              Our Impact
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero-trust animate-fade-up animate-delay-4">
            <div className="trust-item">
              <span className="trust-num">1.1B+</span>
              <span className="trust-label">Services Delivered</span>
            </div>
            <div className="trust-divider" aria-hidden="true" />
            <div className="trust-item">
              <span className="trust-num">50+</span>
              <span className="trust-label">Partners</span>
            </div>
            <div className="trust-divider" aria-hidden="true" />
            <div className="trust-item">
              <span className="trust-num">20 Yrs</span>
              <span className="trust-label">Experience</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-col animate-fade-left animate-delay-2">
          <div className="hero-img-wrapper">
            <img
              src="https://placehold.co/560x420/DDEEFF/1d6aff?text=Digital+Citizens"
              alt="Citizens using digital government services"
              className="hero-img"
            />
            <div className="hero-float-card hero-float-card--top" aria-hidden="true">
              <span className="float-icon">✦</span>
              <div>
                <p className="float-num">210+</p>
                <p className="float-label">Cities on DIGIT</p>
              </div>
            </div>
            <div className="hero-float-card hero-float-card--bottom" aria-hidden="true">
              <span className="float-icon">◆</span>
              <div>
                <p className="float-num">2 Bn</p>
                <p className="float-label">Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
