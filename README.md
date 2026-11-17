# Naina Jangra — Portfolio

Live: **https://naina-jangra-portfolio.vercel.app**

A premium, futuristic portfolio built with plain HTML5, CSS3 and JavaScript.
No frameworks, no build step — open `index.html` and it runs.

---

## What's included

- Floating dark-glass navigation with scroll-spy and a full-screen mobile menu
- Hero with an editable typewriter, glowing circular portrait, floating
  credential chips, rotating seal, 3D pointer tilt and an animated particle field
- About, Skills, Projects, Blog, Education and Contact sections
- About section with a personal introduction, six focus cards, a vertical
  journey timeline and a learning-tools grid
- Six dark project cards in a responsive two-column grid, with large CSS
  previews, technology tags, disabled View Project buttons and honest
  coming-soon badges (no fake screenshots or links)
- Filterable blog grid with six editable draft topics, custom SVG thumbnails,
  category filters and a working draft-article page
- Timeline, scroll reveals, cursor spotlight, marquee, scroll progress,
  back-to-top button and an email-contact form
- Fully responsive: tested at 360px, 390px, 640px, 768px, 980px, 1024px,
  1440px and 1520px with no horizontal scroll
- Respects `prefers-reduced-motion`, includes a skip link and keyboard focus styles

---

## Files

```
index.html                  Page structure and content
blog.html                   Working blog draft/article preview page
css/style.css               Design system, layout, components, responsiveness
js/main.js                  Typewriter, navigation, reveals, tilt, filters, form
js/blog.js                  Blog article content and detail-page rendering
assets/images/              Placeholder portrait and blog thumbnail artwork (SVG)
assets/icons/favicon.svg    Browser icon
render.yaml                 Render static-site Blueprint (requires a Git repo)
```

---

## Run it locally

**Simplest:** double-click `index.html`.

**Optional local server** (recommended if you later add fetch requests):

```bash
npx serve .
# or
python -m http.server 5500
```

Then visit `http://localhost:5500`.

---

## Personalise it

### 1. Add your real photo

The current portrait is a neon monogram placeholder.

1. Export a **square** photo, at least `1200 × 1200`, as JPG or WebP.
2. Save it as `assets/images/naina-portrait.jpg`.
3. In `index.html`, update the hero image source:

```html
<img src="assets/images/naina-portrait.jpg" alt="Naina Jangra" width="800" height="800">
```

4. For the About section, use a **portrait crop** (4:5), save it as
   `assets/images/naina-about.jpg`, and update that `<img>` too.

Keep the `width`/`height` attributes (or update them) so the page does not jump
while loading. The circular crop is automatic.

### 2. Set your email address

The site currently uses the placeholder `hello@nainajangra.com`.

Search and replace it in **four places**:

- `js/main.js` → `CONTACT_EMAIL` (line 8)
- `index.html` → mobile menu link
- `index.html` → contact section row
- `index.html` → footer "Connect" column

The form uses a `mailto:` link, so it works without a backend. To collect
messages through a service instead, replace the submit handler in `js/main.js`
with your Formspree/Getform endpoint.

### 3. Add live project links

Each project card has a disabled **View Project** button and a specific
"coming soon" badge until the project is public. At that point, replace both
with one real link:

```html
<!-- before -->
<button class="project-link project-link--disabled" type="button" disabled>View Project</button>
<span class="project-soon">Live link coming soon</span>

<!-- after -->
<a class="project-link" href="https://your-project-url.com"
   target="_blank" rel="noopener">View Project →</a>
```

`.project-link` is already styled in `css/style.css`; the disabled state becomes
a glowing interactive button automatically once the real link is added.

### 4. Edit the blog drafts

The six blog cards live in the `#blog` section of `index.html`. Each card links
to a working article preview using a slug:

```html
<a href="blog.html?post=my-journey-into-web-development">Read More</a>
```

The matching article content lives in the `posts` object in `js/blog.js`. Edit
the title, description, category, thumbnail and body copy there. The six
thumbnail artwork files are in `assets/images/blog/`.

There are **no publication dates** because no real dates were provided. When a
draft is ready to publish:

1. Add a `<time datetime="YYYY-MM-DD">Month DD, YYYY</time>` inside the card's
   `.blog-meta` and the article's `.blog-article-meta`.
2. Remove that card's `Draft` badge and the article's `Draft preview` label.
3. Replace the draft callout in the article with final copy in Naina's voice.

Keep the slugs in sync between the cards and `js/blog.js`.

### 5. Social profiles

In the footer, replace `<span class="footer-soon">Social profiles coming soon</span>`
with links to your Instagram, LinkedIn, GitHub, YouTube or Behance.

No project links, social URLs, blog publication dates, achievements or
qualifications were invented.

---

## Design tokens

All colours and type settings live at the top of `css/style.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#080812` | Page background |
| `--bg-2` | `#10152B` | Glass surfaces and alternate bands |
| `--purple` | `#8B5CF6` | Primary violet glow |
| `--blue` | `#38BDF8` | Electric-blue accent |
| `--text` | `#F8FAFC` | Headings and primary text |
| `--muted` | `#A1A1AA` | Body and secondary text |
| `--grad` | violet → indigo → blue | Buttons, borders and highlights |

Typography: **Space Grotesk** (display), **Manrope** (body) and **JetBrains Mono**
(micro-labels), loaded from Google Fonts with local fallbacks.

---

## Notes

- The typewriter cycles through: Creative Developer, AI Enthusiast, Web
  Developer, Digital Creator, Digital Marketing Learner.
- Motion is disabled automatically for visitors who prefer reduced motion,
  including the hero particle field.
- All sections share the obsidian / violet / electric-blue theme, with
  glassmorphism cards, gradient borders and soft neon glows.
- The site is static, so it deploys as-is to Vercel, Netlify or GitHub Pages.
- Copy in the About and project sections is intentionally neutral and should be
  reviewed in your own voice before publishing.
