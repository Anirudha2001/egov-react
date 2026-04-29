import useReveal from "../../hooks/useReveal";
import "./Hero.css";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero-section" id="hero" ref={ref}>
      <div className="hero-stage">
        <div className="hero-row">
          <div>
            <div className="hero-copy reveal">
              <h1 className="display-title">
                20 years of digital
                <br />
                transformation in
                <br />
                public service delivery
                <br />
                <strong>It&apos;s possible.</strong>
              </h1>
              <p className="copy">
                Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we&apos;re driven by the
                power of open digital infrastructure and ecosystems to enable governments deliver
                accessible, inclusive and transparent services to every citizen.
              </p>
              <div className="hero-actions">
                <a className="btn-egov primary" href="#impact">
                  Our Approach
                </a>
                <a className="btn-egov ghost" href="#stories">
                  Our Impact
                </a>
              </div>
            </div>
          </div>
          <div className="hero-media-col">
            <div className="hero-media reveal">
              <img
                src="/images/New-Home-Page-Banner-Image.png"
                alt="eGov Foundation hero banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
