# Naina Jangra — Portfolio

Personal portfolio of **Naina Jangra** — Web Developer & AI-powered Digital Creator.
Static site: plain HTML, CSS and JavaScript. No build step, no frameworks.

Live: <https://naina-jangra-portfolio.vercel.app>

---

## Structure

```
index.html                  Single page — Hero, Projects, Skills, About, Contact
404.html                    Themed "page not found" page (served by Vercel)
robots.txt                  Search-engine crawl rules + sitemap location
sitemap.xml                 One-page sitemap
css/style.css               All styles (fonts → tokens → components → responsive)
js/skills.js                ONE skills array (Frontend / AI Tools / Digital Marketing tabs)
js/main.js                  Config (socials, form, blog flag), nav, scroll spy, form
js/animations.js            Word stagger + scroll reveals
assets/fonts/               Self-hosted Inter + Poppins (latin subsets)
assets/icons/favicon.svg    Favicon
assets/icons/apple-touch-icon.png
assets/icons/skills/*.svg   Skill logos used by js/skills.js
assets/images/og-cover.png  1200×630 social share image
assets/images/naina.jpg      Portrait used in Hero + About
assets/images/projects/     Project screenshots (see its README)
assets/resume.pdf           ← add your resume here (currently missing)
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

### Page extras

- `404.html` — themed not-found page with **Back to home** and **Contact me**
  buttons. Vercel serves it automatically for unknown URLs.
- **Back to top** — floating button appears after ~560px of scrolling.
- **Skip to content** — first tab stop; jumps straight to `<main>`.
- `robots.txt` + `sitemap.xml` — basic search-engine setup for the live domain.

---

## Design tokens

All colours, fonts and spacing live at the top of `css/style.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F6F3FB` | Page background (light lavender paper) |
| `--card` | `#FFFFFF` | Card surface |
| `--text` | `#191331` | Primary text (deep ink) |
| `--muted` | `#5C5575` | Body / secondary text |
| `--violet` | `#6D28D9` | Gradient start / links |
| `--pink` | `#BE185D` | Gradient end |
| `--cyan` | `#0E7490` | Small highlights and focus |
| `--grad` | `#6D28D9 → #BE185D` | Name and gradient words |
| `--grad-fill` | `#6D28D9 → #BE185D` | Filled buttons/tabs (keeps white text readable) |
| `--line` | `rgba(25, 19, 49, 0.10)` | Card borders |

Fonts (two only, self-hosted in `assets/fonts/` so there is no third-party
request on page load):

- **Poppins** — headings (500 / 600 / 700)
- **Inter** — body (400 / 500 / 600)

Both are licensed under the SIL Open Font License 1.1; see
`assets/fonts/README.md` for the source files.

Effects: soft lavender gradient glow behind the hero, white glass cards with thin
borders, gentle hover lift, fade-in on scroll, and violet → pink gradient buttons.
The palette is intentionally light (lavender paper + deep ink); all text/background
pairs meet WCAG AA contrast.

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

### 1. Project screenshots

Put images in `assets/images/projects/` using the filenames listed in that
folder’s README, then un-comment the `TODO (SCREENSHOT)` `<img>` inside each
card. Cards show a numbered gradient panel until then.

### 2. Project links (Live / GitHub)

Each card has a `TODO (LINKS)` comment with both buttons commented out. Add the
real URL(s), uncomment only the buttons you have, and delete the rest. **Do not
add a disabled button** — a missing link should simply not appear.

```html
<div class="project-actions">
  <a class="project-link" href="https://your-live-url" target="_blank" rel="noopener noreferrer">Live …</a>
  <a class="project-link project-link--ghost" href="https://github.com/you/repo" target="_blank" rel="noopener noreferrer">GitHub …</a>
</div>
```

### 3. Resume

Save your resume as `assets/resume.pdf`, then remove `data-todo` from the
`Download Resume` button in the Contact section. (`data-todo` currently stops
the link from opening a 404 page.)

### 4. Social links — one place

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

### 5. Contact form (Formspree)

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

### 6. Email address

Verify that **hello@nainajangra.com** is a real, working inbox (send yourself a
test). It is used in the header menu, contact rows, footer, form fallback and
`CONTACT_EMAIL` in `js/main.js`. Search `TODO (EMAIL)`.

### 7. Blog (hidden)

The Blog section and its nav links are commented out on purpose. To turn it on:

1. Write your real posts inside the commented section in `index.html`
   (duplicate the sample `<article class="card post-card">` card).
2. Uncomment the section and the two Blog nav links (desktop + mobile).
3. In `js/main.js`, set `SHOW_BLOG = true`.

Section numbers update automatically for the new order. Leave it off until you
have at least one real post.

### 8. SEO image / domain

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

### Performance

- Fonts are self-hosted (latin subsets) and preloaded — no Google Fonts request.
- All scripts use `defer`; there is no framework or build step.
- Photo `assets/images/naina.jpg` is a 720×800 JPEG (~86 KB) used in the Hero and
  About; it has `width`/`height`, `fetchpriority="high"` in the hero and
  `loading="lazy"` in About. Project screenshots still have `width`/`height`
  placeholders and lazy loading.
- Scroll reveals use one `IntersectionObserver`; motion is removed for
  `prefers-reduced-motion`.
- CSS and JS are **not minified on purpose** because the project has no build
  step and should stay easy to edit. Vercel compresses files automatically.
- Local Lighthouse (mobile emulation, compressed server): **Performance 96,
  Accessibility 100, Best Practices 100, SEO 100**. Exact scores vary by
  connection and device.

### Accessibility notes

- Visible 2px teal focus outline on links, buttons and tabs; form inputs use a
  violet border + 3px focus ring.
- Skills use the WAI-ARIA tabs pattern: arrow keys, Home/End, `aria-selected`,
  `aria-controls`, one tab stop.
- Form fields have real labels; success/error text is announced via
  `role="status"` + `aria-live="polite"`.
- Contrast: body text 16.2:1 on the page background, muted text 6.4:1, white on
  the violet → pink gradient 6.0–7.1:1, tags 8.1:1, form success/error 5.0/6.5:1.
- Reduced motion removes the shimmer, float, reveals and smooth scrolling.

---

## Local preview

```bash
python -m http.server 4173
# open http://127.0.0.1:4173
```

## Deploy on Vercel

The repository root already contains `index.html`, so **no `vercel.json` is
needed**. `render.yaml` is only for Render and is ignored by Vercel.

1. Check what changed:
   ```bash
   git status
   ```
2. Stage the files:
   ```bash
   git add -A
   ```
3. Commit with a clear message:
   ```bash
   git commit -m "Add 404 page, self-host fonts and polish accessibility"
   ```
4. Push to GitHub:
   ```bash
   git push origin main
   ```
5. Open the Vercel dashboard → your project → **Deployments**. A new deployment
   starts automatically for `main`; wait for the **Ready** badge.
6. Hard-refresh the live site (`Ctrl` + `F5`, or `Cmd` + `Shift` + `R` on Mac)
   or open it in a private window to bypass the old browser cache.
7. Optional checks after deploy:
   - `https://naina-jangra-portfolio.vercel.app/does-not-exist` should show the
     themed 404 page.
   - View source and confirm the new files are linked.

If the deployment fails, open the failed deployment in Vercel and read the build
log. For this project the "build" is just static file hosting; a failure usually
means a file was not committed or the project root setting was changed.
