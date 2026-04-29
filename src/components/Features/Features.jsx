import { memo, useMemo, useState } from "react";
import features, { featureTabs } from "../../data/features";
import useReveal from "../../hooks/useReveal";
import "./Features.css";

const FeatureCard = memo(function FeatureCard({ stat, desc, image, alt }) {
  return (
    <article
      className={`feature-card${alt ? " alt" : ""}`}
      style={{ "--card-image": `url(${image})` }}
    >
      <h3 className="feature-stat">{stat}</h3>
      <p className="feature-desc">{desc}</p>
      <a className="feature-link" href="#latest">
        Read More <i className="bi bi-arrow-right"></i>
      </a>
    </article>
  );
});

export default function Features() {
  const [activeTab, setActiveTab] = useState("health");
  const ref = useReveal();
  const activeCards = useMemo(() => features[activeTab] ?? [], [activeTab]);

  return (
    <section className="section-shell" id="impact" ref={ref}>
      <div className="features-panel">
        <div className="features-row">
          <div className="reveal">
            <span className="eyebrow">Big problems need</span>
            <h2 className="section-title">
              <strong>bold approaches</strong>
            </h2>
            <div className="feature-tabs">
              {featureTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`feature-tab${activeTab === tab.id ? " active" : ""}`}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="feature-panel reveal active">
            <div className="feature-cards">
              {activeCards.map((card, i) => (
                <FeatureCard key={`${activeTab}-${i}`} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
