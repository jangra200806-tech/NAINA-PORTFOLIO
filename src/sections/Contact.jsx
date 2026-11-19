import { useState } from "react";
import { CONTACT, FORM_ENDPOINT, SITE, SOCIALS } from "../data/site";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate() {
    const nextErrors = {};
    if (values.name.trim().length < 2) nextErrors.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = "Please write a message of at least 10 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) {
      setStatus(null);
      return;
    }

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus({ type: "success", text: "Thanks! Your message has been sent — I’ll get back to you soon." });
        setValues({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setStatus({ type: "error", text: "Sorry, something went wrong while sending. Please try again later." });
      }
      return;
    }

    // No backend yet — keep it honest and clear.
    setStatus({
      type: "info",
      text: "This form is ready, but no email service is connected yet. Add your Formspree or EmailJS endpoint in src/data/site.js and it will start sending real messages.",
    });
  }

  const handleChange = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: null }));
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          align="left"
          eyebrow={CONTACT.eyebrow}
          title={CONTACT.title}
          lede={CONTACT.lede}
        />

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass">
              <span className="info-icon">
                <Icon name="mail" size={20} />
              </span>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>
            </div>

            <div className="info-card glass">
              <span className="info-icon">
                <Icon name="mapPin" size={20} />
              </span>
              <div>
                <h3>Location</h3>
                <p>{SITE.location}</p>
              </div>
            </div>

            <div className="info-card glass">
              <span className="info-icon">
                <Icon name="send" size={20} />
              </span>
              <div>
                <h3>Elsewhere</h3>
                <p>Social links will appear here once added in src/data/site.js.</p>
              </div>
            </div>

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

          <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label className="label" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  className={`input ${errors.name ? "input-error" : ""}`}
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name ? <span className="error-text">{errors.name}</span> : null}
              </div>

              <div className="field">
                <label className="label" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  className={`input ${errors.email ? "input-error" : ""}`}
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email ? <span className="error-text">{errors.email}</span> : null}
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-subject">
                Subject
              </label>
              <input
                id="contact-subject"
                className="input"
                type="text"
                value={values.subject}
                onChange={handleChange("subject")}
                placeholder="What's this about?"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className={`textarea ${errors.message ? "input-error" : ""}`}
                value={values.message}
                onChange={handleChange("message")}
                placeholder="Tell me a little about your project or question…"
              />
              {errors.message ? <span className="error-text">{errors.message}</span> : null}
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              <span>Send Message</span>
              <Icon name="send" size={16} />
            </button>

            {status ? (
              <div className={`status status-${status.type}`} role="status">
                <span>{status.text}</span>
              </div>
            ) : null}

            <p className="form-note">
              This form validates your details in the browser. To actually deliver messages, connect it
              to Formspree or EmailJS using the endpoint in <code>src/data/site.js</code>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
