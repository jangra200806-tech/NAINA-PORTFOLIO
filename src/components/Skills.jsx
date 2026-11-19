import { useState } from "react"
import { SKILLS, SKILL_CATEGORIES } from "../data"
import Icon from "./Icon"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  const [active, setActive] = useState("All")

  const visible =
    active === "All" ? SKILLS : SKILLS.filter((skill) => skill.category === active)

  return (
    <section className="section section--tint" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Skills &amp; <span className="grad-text">Tools</span> I&apos;m growing
            </>
          }
          lede="Marketing, development, creative and AI skills I'm learning and practising. Levels stay unset until I add my own honest rating."
        />

        <div className="filters" role="tablist" aria-label="Filter skills by category">
          {SKILL_CATEGORIES.map((category) => (
            <button
              type="button"
              key={category}
              role="tab"
              aria-selected={active === category}
              className={`filter-pill ${active === category ? "is-active" : ""}`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visible.map((skill, index) => (
            <article
              className="skill-card reveal"
              key={skill.title}
              style={{ "--index": index }}
            >
              <div className="skill-icon">
                <Icon name={skill.icon} size={22} />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-meta">
                <span className="chip chip--muted">{skill.category}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
