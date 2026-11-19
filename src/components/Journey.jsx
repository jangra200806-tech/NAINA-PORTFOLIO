import { JOURNEY } from "../data"
import Icon from "./Icon"
import SectionHeading from "./SectionHeading"

export default function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container">
        <SectionHeading
          eyebrow="My Journey"
          title={
            <>
              How I got <span className="grad-text">here</span>
            </>
          }
          lede="Every step taught me something new — from learning the basics to building small projects. Dates and details stay as placeholders until I add the real ones."
        />

        <ol className="journey-timeline">
          {JOURNEY.map((item, index) => (
            <li
              className={`journey-item reveal ${index % 2 === 0 ? "" : "journey-item--right"}`}
              key={item.title}
            >
              <div className="journey-card">
                <span className="journey-icon">
                  <Icon name={item.icon} size={19} />
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
  )
}
