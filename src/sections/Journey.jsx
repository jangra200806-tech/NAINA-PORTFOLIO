import { JOURNEY } from "../data/site";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <SectionHeading
          eyebrow="My Journey"
          title={
            <>
              How I got <span className="grad-text">here</span>
            </>
          }
          lede="Every step taught me something new — from learning the basics to building small projects."
        />

        <ol className="timeline">
          {JOURNEY.map((item) => (
            <li className="journey-item reveal" key={item.title}>
              <div className="journey-card glass">
                <span className="journey-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div className="journey-content">
                  <span className="journey-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
