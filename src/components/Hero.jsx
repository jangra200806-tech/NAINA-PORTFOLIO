import { useEffect, useState } from "react"
import { HERO, SITE } from "../data"
import Icon from "./Icon"
import Particles from "./Particles"

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return undefined
    const id = window.setInterval(() => {
      setWordIndex((index) => (index + 1) % HERO.highlights.length)
    }, 2400)
    return () => window.clearInterval(id)
  }, [])

  const currentWord = HERO.highlights[wordIndex]

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="glow glow-one" />
        <span className="glow glow-two" />
        <span className="hero-grid" />
        <Particles count={18} />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <Icon name="sparkles" size={14} />
            <span>{HERO.eyebrow}</span>
          </span>

          <h1 className="hero-name">
            Hi, I&apos;m <span className="grad-text">{HERO.name}</span>.
          </h1>

          <p className="hero-role">{HERO.title}</p>

          <p className="hero-rotator">
            <span className="rot-static">I&apos;m exploring</span>{" "}
            <span className="rot-word" key={currentWord}>
              {currentWord}
            </span>
            <span className="rot-cursor" aria-hidden="true" />
          </p>

          <p className="hero-intro">{HERO.intro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={HERO.primaryCta.href}>
              <span>{HERO.primaryCta.label}</span>
              <Icon name="arrowRight" size={16} />
            </a>
            <a className="btn btn-ghost" href={HERO.secondaryCta.href}>
              <span>{HERO.secondaryCta.label}</span>
              <Icon name="message" size={16} />
            </a>
          </div>

          <ul className="hero-highlights">
            {HERO.highlights.slice(0, 4).map((item) => (
              <li key={item}>
                <Icon name="check" size={14} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="hero-stats">
            {HERO.stats.map((stat) => (
              <div key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <span className="portrait-glow" aria-hidden="true" />
            <span className="portrait-orbit" aria-hidden="true" />
            <img
              src={SITE.photo}
              alt={`Portrait placeholder of ${SITE.fullName}`}
              width="720"
              height="900"
              fetchpriority="high"
              decoding="async"
            />
            <span className="portrait-badge">
              <span className="portrait-dot" aria-hidden="true" />
              {SITE.tagline}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
