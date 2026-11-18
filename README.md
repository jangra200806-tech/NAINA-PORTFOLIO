# Naina Jangra — Portfolio

Personal portfolio of **Naina Jangra** — Web Developer & AI-powered Digital Creator.
Static site: plain HTML, CSS and JavaScript. No build step, no frameworks.

Live: <https://naina-jangra-portfolio.vercel.app>

---

## Structure

```
index.html                  Single page — Hero, Projects, Skills, About, Contact
css/style.css               All styles (tokens → components → responsive)
js/skills.js                ONE skills array (Frontend / AI Tools / Digital Marketing tabs)
js/main.js                  Config (socials, form, blog flag), nav, scroll spy, form
js/animations.js            Word stagger + scroll reveals
assets/icons/favicon.svg    Favicon
assets/icons/skills/*.svg   Skill logos used by js/skills.js
assets/images/og-cover.png  1200×630 social share image
assets/images/projects/     Project screenshots (see its README)
assets/resume.pdf           ← add your resume here (currently missing)
assets/images/naina.jpg     ← add your photo here (currently missing)
```

### Sections (in order)

1. **Hero** — photo, `Web Developer` headline, one supporting line,
   `View Projects` + `Contact Me`
2. **Projects** — 6 cards: screenshot slot, title, one-line description, tech
   tags, and Live / GitHub buttons (only shown when a real URL is added)
3. **Skills** — one data array, three tabs: Frontend · AI Tools · Digital Marketing
4. **About** — bio + school → BCA → Digital Marketing with AI → AI tools → goal
   timeline in one place
5. **Contact** — email, resume button, social links, working message form
6. **Blog** — commented out (all posts are drafts). See “Turning the Blog on”.

Navbar: `NJ` monogram on the left, numbered links on the right — Projects · Skills ·
About · Contact. Numbers are generated from the page order, so they stay in sync
with the section labels. Glass blur appears on scroll; below 901px the links
collapse into a hamburger panel.

---

## Design tokens

All colours, fonts and spacing live at the top of `css/style.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0B1A` | Page background |
| `--card` | `#151530` | Card surface |
| `--text` | `#F5F3FF` | Primary text |
| `--muted` | `#A5A3C7` | Body / secondary text |
| `--violet` | `#7C3AED` | Gradient start |
| `--pink` | `#EC4899` | Gradient end |
| `--cyan` | `#22D3EE` | Small highlights only |
| `--grad` | `#7C3AED → #EC4899` | Name and gradient words |
| `--grad-fill` | `#6D28D9 → #DB2777` | Filled buttons/tabs (keeps white text readable) |
| `--line` | `rgba(245, 243, 255, 0.08)` | Card borders |

Fonts (two only, Google Fonts):

- **Poppins** — headings
- **Inter** — body

Effects: blurred gradient glow behind the hero, glass cards with thin borders,
hover lift + glow, fade-in on scroll, subtle gradient buttons.

### Text animations (`js/animations.js`)

| Effect | Behaviour |
|---|---|
| Name shimmer | Purple → pink gradient sweeps across `Naina Jangra` on a 7s loop |
| Word reveal | `Hello! I'm` fades up word by word on load |
| Scroll reveal | Headings and cards slide up once per page, then the observer disconnects |

Everything is plain CSS plus a small vanilla JS file — no libraries. Motion and
animations are disabled under `prefers-reduced-motion: reduce`; all content is
shown immediately.

---

## What you still need to add

Search the project for `TODO` — every spot is marked. Nothing below is invented
or filled with fake data.

### 1. Photo (Hero + About)

Add **one** portrait at `assets/images/naina.jpg` (roughly 720×900, face centred
near the top). Then replace the `NJ` monogram in both places:

| Where | TODO comment | Replace with |
|---|---|---|
| Hero | `TODO (PHOTO)` | `<img src="/assets/images/naina.jpg" alt="Naina Jangra" width="720" height="960" fetchpriority="high">` |
| About | `TODO (PHOTO)` | `<img src="/assets/images/naina.jpg" alt="Naina Jangra" width="720" height="900" loading="lazy">` |

The CSS already crops with `object-fit: cover`, keeps the rounded frame and the
hero’s bottom fade/glow.

### 2. Project screenshots

Put images in `assets/images/projects/` using the filenames listed in that
folder’s README, then un-comment the `TODO (SCREENSHOT)` `<img>` inside each
card. Cards show a numbered gradient panel until then.

### 3. Project links (Live / GitHub)

Each card has a `TODO (LINKS)` comment with both buttons commented out. Add the
real URL(s), uncomment only the buttons you have, and delete the rest. **Do not
add a disabled button** — a missing link should simply not appear.

```html
<div class="project-actions">
  <a class="project-link" href="https://your-live-url" target="_blank" rel="noopener noreferrer">Live …</a>
  <a class="project-link project-link--ghost" href="https://github.com/you/repo" target="_blank" rel="noopener noreferrer">GitHub …</a>
</div>
```

### 4. Resume

Save your resume as `assets/resume.pdf`, then remove `data-todo` from the
`Download Resume` button in the Contact section. (`data-todo` currently stops
the link from opening a 404 page.)

### 5. Social links — one place

Open `js/main.js` and fill `SITE_LINKS`:

```js
var SITE_LINKS = {
  github: "",      // https://github.com/your-username
  linkedin: "",    // https://www.linkedin.com/in/your-profile
  instagram: "",   // https://www.instagram.com/your-handle
  youtube: "",     // https://www.youtube.com/@your-channel
  whatsapp: ""     // https://wa.me/91XXXXXXXXXX
};
```

Links left empty are **hidden automatically** in the hero rail, Contact section
and footer — no dead `href="#"` anywhere. Add a URL and the icon appears on the
next page load.

### 6. Contact form (Formspree)

The form is already wired. You only need a free Formspree endpoint:

1. Create an account at <https://formspree.io>.
2. Create a new form and point it at the inbox you want messages delivered to.
3. Copy the endpoint — it looks like `https://formspree.io/f/abcdwxyz`.
4. In `js/main.js`, paste it into `FORM_ENDPOINT`:
   ```js
   var FORM_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   ```
5. Submit a test message on the site, confirm it arrives by email, and check
   that the green success message appears. Stop the endpoint (or use a bad one)
   to see the red error message.
6. Spam protection: Formspree handles filtering, and the form also includes a
   hidden `_gotcha` honeypot field.

Until an endpoint is set, submitting opens the visitor’s email app with the
message pre-filled, so the form is never a dead end.

### 7. Email address

Verify that **hello@nainajangra.com** is a real, working inbox (send yourself a
test). It is used in the header menu, contact rows, footer, form fallback and
`CONTACT_EMAIL` in `js/main.js`. Search `TODO (EMAIL)`.

### 8. Blog (hidden)

The Blog section and its nav links are commented out on purpose. To turn it on:

1. Write your real posts inside the commented section in `index.html`
   (duplicate the `TODO (BLOG)` card).
2. Uncomment the section and the two Blog nav links (desktop + mobile).
3. In `js/main.js`, set `SHOW_BLOG = true`.

Section numbers update automatically for the new order. Leave it off until you
have at least one real post.

### 9. SEO image / domain

`og:url`, `og:image`, `twitter:image` and `canonical` point at the Vercel domain
and use `assets/images/og-cover.png` (1200×630). Update these if you move to a
custom domain or replace the share image. `TODO (SEO)` also marks where to add
`sameAs` profile links to the Person schema.

---

## Editing guide

- **Skills** — edit only `SKILLS` in `js/skills.js`. Each item is
  `{ name, icon }`, `{ name, pair: [iconA, iconB] }` or `{ name, inline: "<svg…>" }`.
  Tabs, icons and the panel are generated from that array.
- **Section numbers** — set by `data-section-label` + page order in `js/main.js`.
  No manual renumbering when a section is added or the Blog is enabled.
- **Text** — all copy is in `index.html`.
- **Colours / spacing** — change the variables in `:root`, not individual rules.
- **New project** — copy one `<article class="card project-card">` block and
  update the number, title, description, tags and TODO comments.
- **New journey step** — copy a `<li class="timeline-item">` in About. Add
  `timeline-item--right` to alternate sides on desktop.

Responsive breakpoints: `1024px`, `900px` (nav collapse), `760px`, `480px`.
Tested at 1440 / 1280 / 1024 / 768 / 430 / 390 / 360 / 320 px.

### Accessibility notes

- Visible cyan focus outlines on every link, button, input and tab.
- Skills use the WAI-ARIA tabs pattern: arrow keys, Home/End, `aria-selected`,
  `aria-controls`, one tab stop.
- Form fields have real labels; success/error text is announced via
  `role="status"` + `aria-live="polite"`.
- Contrast: body text 8.0:1, muted text 7.3:1 on cards, white on filled
  gradient 4.6–7.1:1.
- Reduced motion removes the shimmer, float, reveals and smooth scrolling.

---

## Local preview

```bash
python -m http.server 4173
# open http://127.0.0.1:4173
```

## Deploy

- **Vercel** — connected to `main`; every push deploys automatically.
- **Render** — `render.yaml` describes a static site; use *Manual Deploy →
  Deploy latest commit* if it falls behind.
