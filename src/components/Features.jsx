import React, { useState } from 'react';

const CATEGORIES = [
  {
    id: 'health',
    label: 'Public Health',
    icon: 'bi-heart-pulse-fill',
    stat: '210+',
    statLabel: 'Cities with health data platforms',
    desc: 'Integrated health management systems serving over 210 urban local bodies.',
    image: 'https://placehold.co/420x240/E3F2FD/1565C0?text=Public+Health',
    color: '#1565C0',
    bg: '#E3F2FD',
  },
  {
    id: 'finance',
    label: 'Public Finance',
    icon: 'bi-bank2',
    stat: '₹2B+',
    statLabel: 'Revenue digitally collected',
    desc: 'Transparent public finance management with real-time tracking and reporting.',
    image: 'https://placehold.co/420x240/FCE4EC/AD1457?text=Public+Finance',
    color: '#AD1457',
    bg: '#FCE4EC',
  },
  {
    id: 'governance',
    label: 'Local Governance',
    icon: 'bi-building-fill',
    stat: '50+',
    statLabel: 'Government bodies onboarded',
    desc: 'Empowering local bodies to deliver citizen services seamlessly at scale.',
    image: 'https://placehold.co/420x240/E8EAF6/283593?text=Local+Governance',
    color: '#283593',
    bg: '#E8EAF6',
  },
  {
    id: 'water',
    label: 'Water & Sanitation',
    icon: 'bi-droplet-fill',
    stat: '15M+',
    statLabel: 'Citizens with improved access',
    desc: 'Data-driven platforms for efficient water distribution and sanitation management.',
    image: 'https://placehold.co/420x240/E0F2F1/004D40?text=Water+%26+Sanitation',
    color: '#004D40',
    bg: '#E0F2F1',
  },
];

function Features() {
  const [active, setActive] = useState('health');
  const activeData = CATEGORIES.find((c) => c.id === active);

  return (
    <section className="features-section" id="features" aria-label="Areas of work">
      <div className="container-wide">
        <div className="features-header">
          <p className="section-eyebrow">Big problems need</p>
          <h2 className="section-title">
            <strong>bold approaches</strong>
          </h2>
        </div>

        <div className="features-layout">
          {/* Left: Category Selector */}
          <aside className="features-sidebar" aria-label="Select a category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`cat-btn${active === cat.id ? ' cat-btn--active' : ''}`}
                onClick={() => setActive(cat.id)}
                aria-pressed={active === cat.id}
              >
                <i className={`bi ${cat.icon} cat-btn-icon`} aria-hidden="true" />
                <span>{cat.label}</span>
                {active === cat.id && (
                  <i className="bi bi-chevron-right cat-btn-arrow" aria-hidden="true" />
                )}
              </button>
            ))}
          </aside>

          {/* Right: Feature Detail */}
          <div className="features-detail" key={active}>
            <div className="feature-detail-card">
              <div className="feature-detail-img-wrap">
                <img
                  src={activeData.image}
                  alt={activeData.label}
                  className="feature-detail-img"
                />
                <span
                  className="feature-detail-badge"
                  style={{ background: activeData.color }}
                >
                  <i className={`bi ${activeData.icon}`} aria-hidden="true" /> {activeData.label}
                </span>
              </div>
              <div className="feature-detail-body">
                <div
                  className="feature-stat-block"
                  style={{ borderLeftColor: activeData.color }}
                >
                  <span
                    className="feature-stat-num"
                    style={{ color: activeData.color }}
                  >
                    {activeData.stat}
                  </span>
                  <span className="feature-stat-label">{activeData.statLabel}</span>
                </div>
                <p className="feature-detail-desc">{activeData.desc}</p>
                <a href="#products" className="btn-primary feature-detail-cta">
                  Explore Resources <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
