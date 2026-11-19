import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#hero" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span className="brand-text">{SITE.name}</span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            <ul className="nav-links">
              {NAV_LINKS.map((link) => {
                const id = link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={active === id ? "active" : ""}
                      aria-current={active === id ? "true" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="mobile-links">
            {NAV_LINKS.map((link, index) => {
              const id = link.href.slice(1);
              return (
                <li key={link.href}>
                  <a href={link.href} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>
                    <span className="mobile-num">0{index + 1}</span>
                    <span className="mobile-label">{link.label}</span>
                    <Icon name="arrowRight" size={16} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobile-foot">
            <span>{SITE.location}</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
