import supporters from "../../data/supporters";
import useReveal from "../../hooks/useReveal";
import "./Supporters.css";

export default function Supporters() {
  const ref = useReveal();

  return (
    <section className="section-shell compact" id="supporters" ref={ref}>
      <div className="supporters-wrap">
        <div className="section-heading centered reveal">
          <h2 className="section-title">
            Our <strong>Supporters</strong>
          </h2>
        </div>
        <div className="supporters-grid reveal">
          {supporters.map((name) => (
            <div className="supporter-item" key={name}>
              <span className="supporter-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
