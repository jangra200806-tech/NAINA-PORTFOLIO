# Naina Portfolio

Personal portfolio of **Naina** — Digital Marketing with AI learner who loves web development, creative design and AI tools.

**Live:** <https://naina-jangra-portfolio.vercel.app>

Tagline: **“Creative Mind. Digital Skills. Endless Possibilities.”**

---

## Tech stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite`) with CSS-first design tokens in `src/styles/index.css`
- **Lucide React** icons via the custom registry in `src/icons.js`
- Plain CSS layer on top of Tailwind for shared components, gradients, glass cards, timeline and animations

No Tailwind config file — everything lives in `src/styles/index.css` (`@import "tailwindcss";` + `@theme` tokens).

---

## Local setup

```bash
npm install
npm run dev       # http://127.0.0.1:5173
npm run build     # production bundle into dist/
npm run preview   # serve the production bundle
```

---

## Project structure

```
index.html                 Vite entry + SEO / Open Graph / JSON-LD
public/                    Copied verbatim into dist/: 404.html, robots.txt, sitemap.xml, assets/
src/
  main.jsx                 React root
  App.jsx                  Composition of all sections
  styles/index.css        Tailwind entry + design tokens + shared styles
  icons.js                 Lucide icon name -> component registry
  data/site.js             ALL editable content (SITE, NAV, HERO, ABOUT, SKILLS, JOURNEY, PROJECTS, BLOG, FAQ, CONTACT, FORM)
  components/              Navbar, Footer, ScrollTop, SectionHeading, Modal, Icon
  sections/                Hero, About, Skills, Journey, Projects, Blog, FAQ, Contact
legacy/                    Previous static HTML/CSS/JS version (kept for reference)
```

---

## Sections

1. **Hero** — `id="hero"` · animated gradient headline, intro, CTA buttons
   (`Explore My Work` → `#projects`, `Contact Me` → `#contact`), profile photo, highlights, stats.
2. **About Me** — `id="about"` · intro paragraphs, focus cards, profile photo.
3. **Skills** — `id="skills"` · card grid from the single `SKILLS` array (13 skills with category + level).
4. **My Journey** — `id="journey"` · vertical timeline from `JOURNEY`.
5. **Projects** — `id="projects"` · filterable gallery from `PROJECTS` (7 editable placeholders).
6. **Blog** — `id="blog"` · article cards from `BLOG_POSTS` (7 posts, "Read More" opens a modal).
7. **FAQ** — `id="faq"` · interactive accordion from `FAQS`.
8. **Contact** — `id="contact"` · validated form (name / email / subject / message), email + socials.

Plus a **Footer** with branding, quick links, socials and copyright.

### Navbar

Exactly six links, in order: **Hero, About Me, Skills, Project, Blog, Contact**.

- Smooth scrolling (`scroll-behavior: smooth` + `scroll-padding-top`).
- Scroll-spy active link via `IntersectionObserver`.
- Mobile hamburger drawer below 1024px; closes on link click and on `Escape`.

### Interactions

- Scroll reveal via `IntersectionObserver` (`.reveal` / `.is-visible`).
- Animated gradient text (`.grad-text`).
- Glass cards, hover lifts, gradient buttons.
- FAQ accordion (`aria-expanded`), project filters, blog modal, contact validation.
- Back-to-top button.
- `prefers-reduced-motion` respected everywhere.

---

## Design tokens (`src/styles/index.css` `@theme`)

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0a0614` | Page background (deep purple-black) |
| `--color-ink-soft` | `#120b24` | Alt section background |
| `--color-purple` | `#a855f7` | Accent |
| `--color-purple-deep` | `#7c3aed` | Gradient start |
| `--color-pink` | `#f472b6` | Accent light |
| `--color-pink-deep` | `#ec4899` | Gradient end |
| `--color-snow` | `#f4f1ff` | Primary text |
| `--color-mist` | `#aba2c7` | Muted text |
| `--font-display` | Poppins | Headings |
| `--font-body` | Inter | Body |

Fonts are self-hosted in `public/assets/fonts/` (Inter + Poppins latin subsets) and preloaded in `index.html`.

---

## Editing content

All copy, data and links live in **`src/data/site.js`** — edit that one file to change the whole site.

| Export | Purpose |
|---|---|
| `SITE` | Name, role, location, email, photo, resume, URLs |
| `NAV_LINKS` | The six navbar links |
| `SOCIALS` | Social entries — leave `href` empty to render a “coming soon” state (no broken links) |
| `HERO` | Headline, CTAs, highlights, stats |
| `ABOUT` | Intro paragraphs, focus cards |
| `SKILLS` | Skill cards (icon, title, description, category, level) |
| `JOURNEY` | Timeline entries |
| `PROJECTS` | Project cards (category, tools, live/code URLs, placeholder details) |
| `BLOG_POSTS` | Blog posts (slug, category, date, readTime, excerpt, body) |
| `FAQS` | FAQ accordion entries |
| `CONTACT` / `FORM_ENDPOINT` | Form copy + backend endpoint |

Anything marked `TODO` is a placeholder for the owner to fill later — no invented facts, certificates, marks or results.

---

## TODOs (fill before going live)

1. **Email** — `hello@nainajangra.com` in `SITE` / `CONTACT` / `SOCIALS`.
2. **Photo** — `SITE.photo` points to `/assets/images/naina.jpg` (added); replace anytime.
3. **Resume** — `SITE.resume` (empty) — add `/assets/resume.pdf`.
4. **Socials** — four entries in `SOCIALS` (Instagram, LinkedIn, GitHub, YouTube) currently have empty `href`s → “coming soon” placeholders.
5. **Projects** — set real `live` / `code` URLs on cards; replace descriptions with real work.
6. **Blog dates** — `date: null` → shows “Date not set” until you publish real posts.
7. **Form** — set `FORM_ENDPOINT` (Formspree / EmailJS) to send real messages.

---

## Deploy on Vercel

The project uses the **Vite** preset — no `vercel.json` needed.

1. `git add -A`
2. `git commit -m "Build Naina portfolio with React + Vite + Tailwind"`
3. `git push origin main`
4. Vercel picks it up automatically; wait for the **Ready** status.
5. Hard-refresh the live URL and test `/does-not-exist` (the themed 404 lives in `public/404.html`).

---

## Quality checks performed locally

- `npm run build` passes cleanly.
- No console errors in the browser; no horizontal overflow at 320–1440px.
- axe-core: **0 violations** (desktop + mobile).
- FAQ accordion, project filters, blog modal, contact validation, mobile menu, scroll-spy all verified with Playwright.
