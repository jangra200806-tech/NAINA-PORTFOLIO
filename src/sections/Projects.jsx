import { useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/site";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import Modal from "../components/Modal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = PROJECT_CATEGORIES;
  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Selected <span className="grad-text">work</span>
            </>
          }
          lede="A few places where learning meets building — website projects, digital marketing practice, design work and AI experiments. Each card is an editable placeholder until real work is added."
        />

        <div className="filters" role="group" aria-label="Project filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${filter === category ? "is-active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <article className="project-card glass reveal" key={project.id}>
              <div className="project-media">
                <span className="project-category">{project.category}</span>
                <Icon name={project.icon} size={44} />
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span className="tool" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button type="button" className="btn btn-primary" onClick={() => setSelected(project)}>
                    View Project
                  </button>
                  {project.live ? (
                    <a className="btn btn-ghost" href={project.live} target="_blank" rel="noreferrer">
                      Live Preview
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-ghost"
                      disabled
                      title="Add your live URL in src/data/site.js"
                    >
                      Live Preview
                    </button>
                  )}
                  {project.code ? (
                    <a className="btn btn-ghost" href={project.code} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-ghost"
                      disabled
                      title="Add your repo URL in src/data/site.js"
                    >
                      View Code
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)} title={selected?.title ?? "Project"}>
        {selected ? (
          <>
            <div className="modal-media">
              <Icon name={selected.icon} size={44} />
            </div>
            <h4>{selected.category}</h4>
            <p>{selected.description}</p>
            <h4>Tools & skills used</h4>
            <div className="project-tools">
              {selected.tools.map((tool) => (
                <span className="tool" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
            <div className="modal-actions">
              {selected.live ? (
                <a className="btn btn-primary" href={selected.live} target="_blank" rel="noreferrer">
                  Live Preview
                </a>
              ) : null}
              {selected.code ? (
                <a className="btn btn-ghost" href={selected.code} target="_blank" rel="noreferrer">
                  View Code
                </a>
              ) : null}
              <button type="button" className="btn btn-ghost" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </>
        ) : null}
      </Modal>
    </section>
  );
}
