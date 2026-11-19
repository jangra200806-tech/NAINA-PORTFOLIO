import { useState } from "react"
import { PROJECTS, PROJECT_CATEGORIES } from "../data"
import Icon from "./Icon"
import SectionHeading from "./SectionHeading"

function ProjectCard({ project, index }) {
  const hasAnyLink = project.link || project.live || project.code

  return (
    <article
      className="project-card reveal"
      style={{ "--index": index }}
    >
      <div className="project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            width="640"
            height="400"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-placeholder">
            <span>
              <Icon name={project.icon} size={26} />
            </span>
            <small>Add your screenshot</small>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-topline">
          <span className="chip chip--accent">{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-row">
          {project.tools.map((tool) => (
            <span className="tag" key={tool}>
              {tool}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.link ? (
            <a className="btn btn-primary btn-sm" href={project.link} target="_blank" rel="noreferrer">
              <span>View Project</span>
              <Icon name="arrowUpRight" size={15} />
            </a>
          ) : null}
          {project.live ? (
            <a className="btn btn-ghost btn-sm" href={project.live} target="_blank" rel="noreferrer">
              <span>Live Preview</span>
              <Icon name="external" size={15} />
            </a>
          ) : null}
          {project.code ? (
            <a className="btn btn-ghost btn-sm" href={project.code} target="_blank" rel="noreferrer">
              <span>View Code</span>
              <Icon name="github" size={15} />
            </a>
          ) : null}
          {!hasAnyLink ? (
            <span className="link-note">
              <Icon name="alert" size={14} />
              Links not added yet — set them in src/data.js
            </span>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [active, setActive] = useState("All")

  const visible =
    active === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === active)

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects I&apos;m <span className="grad-text">building</span>
            </>
          }
          lede="A showcase across website development, digital marketing, design, social media, video and AI. The cards below are editable placeholders until real work is added."
        />

        <div className="filters" role="tablist" aria-label="Filter projects by category">
          {PROJECT_CATEGORIES.map((category) => (
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

        <div className="projects-grid">
          {visible.length === 0 ? (
            <p className="empty-state">No projects in this category yet — add one in src/data.js.</p>
          ) : (
            visible.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
