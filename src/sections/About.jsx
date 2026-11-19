import { ABOUT, SITE } from "../data/site";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow={ABOUT.eyebrow}
          title={ABOUT.title}
          lede={ABOUT.lede}
        />

        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-photo">
              <img
                src={SITE.photo}
                alt={`Portrait of ${SITE.fullName}`}
                width="720"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="about-location">
              <Icon name="mapPin" size={15} />
              <span>{SITE.location}</span>
            </span>
          </div>

          <div className="about-copy reveal">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}

            <div className="about-focus">
              {ABOUT.focus.map((item) => (
                <div className="focus-card glass" key={item.title}>
                  <span className="focus-icon">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
