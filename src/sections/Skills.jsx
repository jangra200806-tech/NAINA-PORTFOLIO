import { SKILLS } from "../data/site";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Skills &amp; <span className="grad-text">Tools</span>
            </>
          }
          lede="A mix of marketing, design, development and AI skills that I’m learning and practising."
        />

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <article className="skill-card glass reveal" key={skill.title}>
              <span className="skill-icon">
                <Icon name={skill.icon} size={22} />
              </span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip">{skill.category}</span>
                <span className="chip">{skill.level}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
