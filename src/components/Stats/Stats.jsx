import { useEffect, useRef, useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Stats.css";

const TARGET = 1000000100;
const DURATION = 1800;

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

export default function Stats() {
  const ref = useReveal();
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * TARGET));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(TARGET);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-wrap">
        <div className="stats-lead reveal">
          <h2 className="stats-number">{formatNumber(count)}+</h2>
          <p className="stats-subcopy">
            Citizens availing public services through eGov&apos;s Digital Public Goods (DPG).
          </p>
        </div>
        <div className="stats-grid">
          <article className="insight-card reveal">
            <h3 className="insight-value">1.1 Billion+</h3>
            <p className="insight-text">Public services delivered</p>
          </article>
          <article className="insight-card reveal">
            <h3 className="insight-value">50+ partners</h3>
            <p className="insight-text">From technology, governments and NGOs</p>
          </article>
        </div>
      </div>
    </section>
  );
}
