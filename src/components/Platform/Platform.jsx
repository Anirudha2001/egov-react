import useReveal from "../../hooks/useReveal";
import "./Platform.css";

export default function Platform() {
  const ref = useReveal();

  return (
    <section className="platform-section section-shell" id="platform" ref={ref}>
      <div className="platform-wrap">
        <div className="platform-row">
          <div>
            <div className="platform-copy reveal">
              <img
                className="digit-mark"
                src="/images/digit-n.png"
                alt="DIGIT by eGov Foundation"
                loading="lazy"
                decoding="async"
              />
              <span className="eyebrow text-white">Our open source platform</span>
              <h2 className="section-title">
                technology-for-good <strong>platform</strong>
              </h2>
              <p className="copy">
                DIGIT, short for Digital Infrastructure for Governance, Inclusion and
                Transformation, is eGov&apos;s open-source platform with reusable building blocks
                and shared data registries that can be used to build solutions in multiple sectors.
              </p>
              <div className="mt-4">
                <a className="btn-egov secondary" href="#latest">
                  Explore the platform
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="platform-art reveal">
              <img
                src="/images/DIGIT-Image-Only.png"
                alt="DIGIT platform illustration"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
