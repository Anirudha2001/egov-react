import { memo, useMemo, useState } from "react";
import resources from "../../data/resources";
import useReveal from "../../hooks/useReveal";
import "./Latest.css";

const tabs = [
  { id: "whatsnew", label: "What's New", panel: "whatsnew" },
  { id: "articles", label: "Articles", panel: "articles" },
  { id: "newsletters", label: "Newsletter", panel: "newsletters" },
  { id: "whitepapers", label: "Whitepapers", panel: "whatsnew" },
  { id: "casestudies", label: "Case Studies", panel: "articles" },
  { id: "newsmedia", label: "News & Media", panel: "newsletters" },
];

const ResourceCard = memo(function ResourceCard({ type, title, image, meta, tags }) {
  return (
    <article className="resource-card">
      <div className="resource-media">
        <img src={image} alt={title} loading="lazy" decoding="async" />
      </div>
      <div className="resource-body">
        <span className="resource-type">{type}</span>
        <h3 className="resource-title">{title}</h3>
        <div className="resource-meta">{meta}</div>
        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a className="resource-link" href="#footer">
          Read More <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </article>
  );
});

export default function Latest() {
  const [activeTab, setActiveTab] = useState("whatsnew");
  const [activePanel, setActivePanel] = useState("whatsnew");
  const ref = useReveal();
  const visibleResources = useMemo(() => resources[activePanel] ?? [], [activePanel]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    setActivePanel(tab.panel);
  };

  return (
    <section className="latest-section section-shell" id="latest" ref={ref}>
      <div className="container">
        <div className="latest-head reveal">
          <div>
            <span className="eyebrow">Knowledge resources</span>
            <h2 className="section-title">
              Latest at <strong>eGov</strong>
            </h2>
          </div>
          <a className="btn-egov outline" href="#footer">
            See All
          </a>
        </div>
        <div className="filter-track">
          <div className="filter-row reveal" role="tablist" aria-label="Resource categories">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-chip${activeTab === tab.id ? " active" : ""}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                type="button"
                onClick={() => handleTabClick(tab)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="resource-panel reveal active" role="tabpanel">
          <div className="resource-grid">
            {visibleResources.map((item, i) => (
              <ResourceCard key={`${activePanel}-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
