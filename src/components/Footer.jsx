import { NAV_LINKS, SOCIALS, SITE } from "../data/site";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#hero">
              <span className="brand-mark" aria-hidden="true">
                N
              </span>
              <span className="brand-text">{SITE.name}</span>
            </a>
            <p>
              {SITE.tagline}. I’m a Digital Marketing with AI learner who loves web development,
              creative design and AI tools — learning by building small, useful things.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Connect</h3>
            <ul className="socials">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  {social.href ? (
                    <a
                      className="social-btn"
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} size={18} />
                    </a>
                  ) : (
                    <span className="social-btn is-disabled" title={`${social.name} — coming soon`}>
                      <Icon name={social.icon} size={18} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Say Hello</h3>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href="#contact">Send a message</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {SITE.name}. {SITE.tagline}
          </span>
          <span>Designed & built with care.</span>
        </div>
      </div>
    </footer>
  );
}
