import React, { useState, useEffect, useRef } from 'react';

const STATS = [
  {
    id: 1,
    value: 1000000100,
    display: '1,000,000,100+',
    label: 'Citizens availing public services through eGov\'s Digital Public Goods',
    icon: 'bi-people-fill',
    size: 'large',
  },
  {
    id: 2,
    value: 1.1,
    display: '1.1 Billion+',
    label: 'Public services delivered',
    icon: 'bi-check-circle-fill',
    size: 'normal',
  },
  {
    id: 3,
    value: 50,
    display: '50+',
    label: 'Partners from technology, governments and NGOs',
    icon: 'bi-handshake-fill',
    size: 'normal',
  },
  {
    id: 4,
    value: 20,
    display: '20 Years',
    label: 'Of sustained digital transformation',
    icon: 'bi-calendar-check-fill',
    size: 'normal',
  },
];

function useCountUp(target, duration, inView) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatCard({ stat, inView }) {
  const count = useCountUp(
    typeof stat.value === 'number' ? Math.min(stat.value, 9999) : 0,
    1800,
    inView
  );

  return (
    <div className={`stat-card${stat.size === 'large' ? ' stat-card--large' : ''}`}>
      <div className="stat-icon-wrap">
        <i className={`bi ${stat.icon} stat-icon`} aria-hidden="true" />
      </div>
      <p className="stat-display">
        {inView ? stat.display : '0'}
      </p>
      <p className="stat-label">{stat.label}</p>
    </div>
  );
}

function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" id="stats" ref={sectionRef} aria-label="Key statistics">
      <div className="stats-overlay" aria-hidden="true" />
      <img
        src="https://placehold.co/1440x500/0D3B66/0D3B66?text=+"
        alt=""
        className="stats-bg-img"
        aria-hidden="true"
      />
      <div className="container-wide stats-grid">
        {STATS.map((stat) => (
          <StatCard key={stat.id} stat={stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
