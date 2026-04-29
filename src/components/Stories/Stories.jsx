import useReveal from "../../hooks/useReveal";
import "./Stories.css";

export default function Stories() {
  const ref = useReveal();

  return (
    <section className="stories-section section-shell" id="stories" ref={ref}>
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="eyebrow">20 years of reimagining for citizens and</span>
          <h2 className="section-title">
            sustaining <strong>change</strong>
          </h2>
          <p className="section-copy">
            Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing
            the quality of life for every citizen. To have sustainable impact at scale, the
            collective energy of local networks to solve local problems needs to be tapped into. Our
            partners and networks bring this collective energy to life. The ecosystem already exists;
            our task is to facilitate and amplify their efforts.
          </p>
        </div>
        <div className="story-grid">
          <article className="story-card reveal">
            <span className="play-chip">
              <i className="bi bi-play-fill fs-4"></i>
            </span>
            <img
              src="/images/thumb-1.jpg"
              alt="eGov impact story video thumbnail"
              loading="lazy"
              decoding="async"
            />
            <div className="story-card-body">
              <h3>Citizen-centered innovation in service delivery</h3>
              <p>
                How local digital infrastructure turns high-volume public systems into better daily
                experiences.
              </p>
            </div>
          </article>
          <article className="story-card reveal">
            <span className="play-chip">
              <i className="bi bi-play-fill fs-4"></i>
            </span>
            <img
              src="/images/thumb-2.png"
              alt="eGov ecosystem video thumbnail"
              loading="lazy"
              decoding="async"
            />
            <div className="story-card-body">
              <h3>Building ecosystems, not isolated products</h3>
              <p>
                A closer look at partner-led adoption, reusable registries and open architecture at
                scale.
              </p>
            </div>
          </article>
        </div>
        <div className="stories-cta reveal">
          <a className="btn-egov outline" href="#footer">
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
