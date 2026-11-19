import { ABOUT, SITE } from "../data"
import Icon from "./Icon"
import SectionHeading from "./SectionHeading"

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading
          eyebrow={ABOUT.eyebrow}
          title={
            <>
              Curious by nature. <span className="grad-text">Creative</span> by passion.
            </>
          }
          lede={ABOUT.lede}
        />

        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-photo">
              <img
                src={SITE.photo}
                alt={`Portrait placeholder of ${SITE.fullName}`}
                width="720"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-location">
              <Icon name="mapPin" size={15} />
              <span>{SITE.location}</span>
            </div>
          </div>

          <div className="about-copy reveal">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <ul className="about-facts">
              {ABOUT.facts.map((fact) => (
                <li key={fact.label}>
                  <span>{fact.label}</span>
                  <b>{fact.value}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="focus-grid">
          {ABOUT.focus.map((item, index) => (
            <article
              className="focus-card reveal"
              key={item.title}
              style={{ "--index": index }}
            >
              <span className="icon-tile">
                <Icon name={item.icon} size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
