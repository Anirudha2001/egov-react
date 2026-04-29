import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Areas of Work', href: '#features' },
  { label: 'Products & Solutions', href: '#products' },
  { label: 'Our Platform', href: '#platform' },
  { label: 'Resources', href: '#products' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar-header${scrolled ? ' navbar-header--scrolled' : ''}`}>
      <nav className="navbar-inner container-wide">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" aria-label="eGov Foundation Home">
          <div className="brand-logomark" aria-hidden="true">
            <span className="brand-logomark-inner">eG</span>
          </div>
          <div className="brand-wordmark">
            <span>
              <span className="brand-e">e</span>
              <span className="brand-gov">GOV</span>
            </span>
            <span className="brand-sub">FOUNDATION</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="btn-nav-primary hidden-mobile">
          Contact Us
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="mobile-menu-link" onClick={handleNavLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-nav-primary mobile-cta" onClick={handleNavLinkClick}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
