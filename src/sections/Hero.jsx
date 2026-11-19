import { HERO, SITE } from "../data/site";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="glow glow-one" />
        <span className="glow glow-two" />
        <span className="hero-grid" />
      </div>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-badge">
              <Icon name="sparkles" size={14} />
              <span>{HERO.eyebrow}</span>
            </span>

            <h1 className="hero-name">
              Hi, I&apos;m <span className="grad-text">{HERO.name}</span>.
            </h1>
            <p className="hero-title">{HERO.title}</p>
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
              {HERO.highlights.map((item) => (
                <li key={item}>
                  <span className="chip">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <span className="portrait-glow" aria-hidden="true" />
              <img
                src={SITE.photo}
                alt={`Portrait of ${SITE.fullName}`}
                width="720"
                height="800"
                fetchPriority="high"
                decoding="async"
              />
              <span className="portrait-badge">
                <span className="portrait-dot" aria-hidden="true" />
                {HERO.eyebrow}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          {HERO.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
