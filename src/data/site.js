/* ============================================================
   Naina — Portfolio content & configuration
   ------------------------------------------
   EDIT THIS ONE FILE to change text, skills, projects,
   blog posts, FAQs and links across the whole website.
   Anything marked TODO is a placeholder for you to fill in later.
   Never write experience, dates or results that are not real.
   ============================================================ */

export const SITE = {
  name: "Naina",
  fullName: "Naina Jangra",
  brand: "Naina Portfolio",
  tagline: "Creative Mind. Digital Skills. Endless Possibilities.",
  role: "Digital Marketing with AI · Web Development",
  location: "Kaithal, Haryana, India",
  email: "hello@nainajangra.com", // TODO (EMAIL): replace with your real inbox
  photo: "/assets/images/naina.jpg", // TODO (PHOTO): replace with your own portrait
  ogImage: "https://naina-jangra-portfolio.vercel.app/assets/images/og-cover.png",
  url: "https://naina-jangra-portfolio.vercel.app",
  resume: "", // TODO (RESUME): add /assets/resume.pdf and paste the path here
}

/* Only these six links appear in the navbar, in this order. */
export const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

/* Leave href empty ("") and a "link not added yet" state is shown instead of a broken link. */
export const SOCIALS = [
  { name: "Instagram", href: "", icon: "instagram" }, // TODO (SOCIAL): paste your Instagram profile link
  { name: "LinkedIn", href: "", icon: "linkedin" }, // TODO (SOCIAL): paste your LinkedIn profile link
  { name: "GitHub", href: "", icon: "github" }, // TODO (SOCIAL)
  { name: "YouTube", href: "", icon: "youtube" }, // TODO (SOCIAL)
  { name: "Email", href: "mailto:hello@nainajangra.com", icon: "mail" }, // TODO (EMAIL)
]

export const HERO = {
  eyebrow: "Digital Marketing with AI",
  name: "Naina",
  title: "Web Developer & Creative Digital Learner",
  intro:
    "I'm a Digital Marketing with AI learner who loves web development, creative design and AI tools. I enjoy turning ideas into clean websites, useful content and thoughtful digital experiences.",
  primaryCta: { label: "Explore My Work", href: "#projects" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
  /* The words that rotate in the animated headline. */
  highlights: ["Web Development", "Digital Marketing", "Graphic Design", "AI Tools", "Content Creation"],
  stats: [
    { value: "09+", label: "Skills being learned" },
    { value: "06", label: "Project categories" },
    { value: "∞", label: "Curiosity to build" },
  ],
}

export const ABOUT = {
  eyebrow: "About Me",
  title: "Curious by nature. Creative by passion.",
  lede: "A short look at who I am, what I'm learning and where I'm heading.",
  paragraphs: [
    "Hi, I'm Naina — a Digital Marketing with AI learner from Kaithal, Haryana. I'm curious about how technology and creativity work together, and I enjoy learning by building small websites, useful content and thoughtful digital experiences.",
    "My learning journey sits at the intersection of digital marketing, web development, creative design and AI tools. I like understanding the basics deeply — from clean layout and typography to SEO, social media and content that actually helps people.",
    "I learn by doing: taking things apart, testing small ideas, solving design and coding problems, and picking up new tools as they appear. I'm still early in this journey, and that's exactly what makes it exciting.",
    "My goal is simple — keep learning, build real projects, and turn these skills into work that is useful for real people and businesses.",
  ],
  facts: [
    { label: "Based in", value: "Kaithal, Haryana · India" },
    { label: "Currently learning", value: "Digital Marketing with AI" },
    { label: "Interests", value: "Web development · Creative design · AI tools" },
    { label: "Goal", value: "Build useful digital experiences" },
  ],
  focus: [
    { icon: "search", title: "Digital Marketing & SEO", text: "Learning how content, keywords and structure help people get discovered online." },
    { icon: "code", title: "Web Development", text: "Building responsive pages with HTML, CSS and JavaScript, and modern tooling." },
    { icon: "sparkles", title: "AI & Prompting", text: "Using AI tools and clear prompts to research, draft and speed up creative work." },
    { icon: "palette", title: "Creative Design", text: "Graphic design, video editing and content that communicates clearly." },
  ],
}

/* Skill levels are intentionally unset — replace "Level not set" with your own
   rating only when you are sure about it (e.g. "Beginner", "Learning", "Confident"). */
export const SKILLS = [
  {
    icon: "megaphone",
    category: "Marketing",
    title: "Digital Marketing",
    description: "Learning how online marketing works — strategy, campaigns, content and measurable growth.",
    level: "Level not set",
  },
  {
    icon: "search",
    category: "Marketing",
    title: "Search Engine Optimization (SEO)",
    description: "Understanding search, keywords, on-page basics and how content gets discovered on Google.",
    level: "Level not set",
  },
  {
    icon: "share",
    category: "Marketing",
    title: "Social Media Marketing",
    description: "Planning content, understanding audiences and creating posts that feel real and useful.",
    level: "Level not set",
  },
  {
    icon: "globe",
    category: "Development",
    title: "Web Development",
    description: "Putting full pages together — structure, style, scripts and a layout that works everywhere.",
    level: "Level not set",
  },
  {
    icon: "code",
    category: "Development",
    title: "HTML",
    description: "Writing clean, semantic markup that gives a page the right structure.",
    level: "Level not set",
  },
  {
    icon: "palette",
    category: "Development",
    title: "CSS",
    description: "Styling layouts, colour, type and responsive behaviour across screen sizes.",
    level: "Level not set",
  },
  {
    icon: "zap",
    category: "Development",
    title: "JavaScript",
    description: "Adding interaction and logic to pages — the part that makes a website feel alive.",
    level: "Level not set",
  },
  {
    icon: "palette",
    category: "Creative",
    title: "Graphic Design",
    description: "Creating visual ideas with colour, type and layout to make messages easy to understand.",
    level: "Level not set",
  },
  {
    icon: "video",
    category: "Creative",
    title: "Video Editing",
    description: "Cutting, arranging and polishing short videos with a clean, modern feel.",
    level: "Level not set",
  },
  {
    icon: "penTool",
    category: "Creative",
    title: "Content Creation",
    description: "Writing, designing and shaping simple content that communicates clearly.",
    level: "Level not set",
  },
  {
    icon: "sparkles",
    category: "AI",
    title: "AI Tools",
    description: "Using AI for ideas, research, content drafts and faster creative workflows.",
    level: "Level not set",
  },
  {
    icon: "terminal",
    category: "AI",
    title: "Prompt Engineering",
    description: "Learning how to write clear prompts that help AI produce useful, focused results.",
    level: "Level not set",
  },
]

export const SKILL_CATEGORIES = ["All", "Marketing", "Development", "Creative", "AI"]

export const JOURNEY = [
  {
    icon: "bookOpen",
    label: "Education",
    title: "Foundation",
    description:
      "Schooling and the early curiosity that made me want to learn how websites, design and digital marketing actually work. Edit this step in src/data.js with your real education details — no marks or qualifications are invented here.",
  },
  {
    icon: "graduationCap",
    label: "Present",
    title: "Digital Marketing Learning",
    description:
      "Currently learning digital marketing with AI — SEO, content, social media and how AI tools support real marketing work.",
  },
  {
    icon: "briefcase",
    label: "Practice",
    title: "Practical Assignments",
    description:
      "Practicing with real tasks: content ideas, social posts, design drafts, website practice and AI-assisted workflows.",
  },
  {
    icon: "sparkles",
    label: "Learning",
    title: "AI Learning",
    description:
      "Exploring AI tools and prompt engineering — how to brief them well and turn their output into something genuinely useful.",
  },
  {
    icon: "layers",
    label: "Building",
    title: "Website Development",
    description:
      "Building small websites and digital projects to apply what I learn and create a portfolio of real work.",
  },
  {
    icon: "palette",
    label: "Creative",
    title: "Creative Projects",
    description:
      "Graphic design, video edits and content pieces that let me practise visual storytelling and layout.",
  },
  {
    icon: "rocket",
    label: "Goal",
    title: "Future Goals",
    description:
      "Keep growing in web development, creative design and AI tools, and turn these skills into useful work for real people and businesses.",
  },
]

/* Project categories drive the filter buttons in the Projects section. */
export const PROJECT_CATEGORIES = [
  "All",
  "Website Development",
  "Digital Marketing",
  "Graphic Design",
  "Social Media Marketing",
  "Video Editing",
  "AI Projects",
]

/* Project cards are placeholders until real projects are added.
   - `image`: paste a path such as "/assets/images/projects/my-site.png" (leave "" for a designed placeholder).
   - `live`, `code`: real URLs. Leave "" and the button is hidden.
   - `link`: an optional detail/case-study URL. */
export const PROJECTS = [
  {
    id: "website-placeholder",
    icon: "globe",
    category: "Website Development",
    title: "Responsive Website — Placeholder",
    description:
      "A sample project card. Replace this text in src/data.js with the real goal, what you built and what you learned.",
    image: "",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "",
    live: "",
    code: "",
  },
  {
    id: "landing-placeholder",
    icon: "layers",
    category: "Website Development",
    title: "Landing Page — Placeholder",
    description:
      "Add your landing page description in src/data.js — section by section, and how it behaves on mobile.",
    image: "",
    tools: ["HTML", "CSS", "Responsive"],
    link: "",
    live: "",
    code: "",
  },
  {
    id: "marketing-placeholder",
    icon: "trendingUp",
    category: "Digital Marketing",
    title: "Marketing Campaign — Placeholder",
    description:
      "Add your digital marketing project description in src/data.js — only include results you can actually verify.",
    image: "",
    tools: ["Strategy", "SEO", "Content"],
    link: "",
    live: "",
    code: "",
  },
  {
    id: "design-placeholder",
    icon: "palette",
    category: "Graphic Design",
    title: "Brand Graphic — Placeholder",
    description:
      "Add your graphic design description in src/data.js, plus the idea behind the colours, type and layout.",
    image: "",
    tools: ["Layout", "Colour", "Typography"],
    link: "",
    live: "",
    code: "",
  },
  {
    id: "social-placeholder",
    icon: "share",
    category: "Social Media Marketing",
    title: "Social Creative — Placeholder",
    description:
      "Add your social media creative description in src/data.js — the message, the format and who it was for.",
    image: "",
    tools: ["Social", "Copy", "Visual"],
    link: "",
    live: "",
    code: "",
  },
  {
    id: "video-placeholder",
    icon: "video",
    category: "Video Editing",
    title: "Short Video Edit — Placeholder",
    description:
      "Add your video editing description in src/data.js — length, style, pacing and the tool you edited in.",
    image: "",
    tools: ["Editing", "Pacing", "Sound"],
    link: "",
    live: "",
    code: "",
  },
  {
    id: "ai-placeholder",
    icon: "sparkles",
    category: "AI Projects",
    title: "AI-Assisted Workflow — Placeholder",
    description:
      "Add your AI project description in src/data.js — the task, your prompts and how you checked the output.",
    image: "",
    tools: ["AI Tools", "Prompting"],
    link: "",
    live: "",
    code: "",
  },
]

/* Blog posts.
   `date` stays null until you publish — the card then shows "Date not set"
   instead of a fake publication date. */
export const BLOG_POSTS = [
  {
    slug: "digital-marketing-learning-journey",
    category: "Digital Marketing",
    date: null, // TODO (BLOG DATE): e.g. "2026-03-14"
    readTime: "4 min read",
    image: "",
    title: "My Digital Marketing Learning Journey",
    excerpt:
      "How I started learning digital marketing with AI, what felt confusing at first, and the small steps that made it click.",
    body: [
      "When I started learning digital marketing, everything felt like a new language. Words like SEO, keywords, reach and engagement were everywhere, and I wanted to understand what they actually meant — not just memorize them.",
      "The way that worked for me was simple: learn one idea, then try it in a small task. I would read about a topic, write a short explanation in my own words, and then apply it to a practice post or a simple website idea. That loop made the concepts feel real.",
      "I'm still early in the journey, and that's the exciting part. Digital marketing is not about knowing everything at once — it's about staying curious, testing small ideas, and learning from what happens.",
    ],
  },
  {
    slug: "what-is-seo-and-why-it-matters",
    category: "SEO",
    date: null,
    readTime: "5 min read",
    image: "",
    title: "What Is SEO and Why Is It Important?",
    excerpt:
      "SEO is not magic — it's about clear content, good structure and helping people find answers quickly.",
    body: [
      "At first, SEO sounded like a trick to game search engines. The more I learned, the more it felt like the opposite: SEO is about making content clear and useful for real people.",
      "The basics matter most. A clear title, a simple heading structure, useful answers and a page that loads well all help both readers and search engines. When the content is helpful, the technical pieces have something to support.",
      "What I'm taking forward is this: write for the reader first, then make it easy to find. SEO is a way to organize helpful work — not a shortcut around it.",
    ],
  },
  {
    slug: "how-ai-tools-help-in-digital-marketing",
    category: "AI Tools",
    date: null,
    readTime: "4 min read",
    image: "",
    title: "How AI Tools Help in Digital Marketing",
    excerpt:
      "AI is not here to replace ideas — it's a fast thinking partner that helps me explore, draft and refine.",
    body: [
      "I used to think creativity meant waiting for a perfect idea. AI tools changed that for me. They are useful for brainstorming, drafting and getting past the blank page — but the final choice is still mine.",
      "The best results come when I give clear context. A vague prompt gives a vague answer. When I explain the audience, the tone and the goal, the output becomes something I can actually shape.",
      "For me, AI is a creative assistant. It speeds up the messy middle of the process, so I can spend more time on the part that matters: deciding what the idea should say and who it should help.",
    ],
  },
  {
    slug: "my-first-website-development-experience",
    category: "Web Development",
    date: null,
    readTime: "5 min read",
    image: "",
    title: "My First Website Development Experience",
    excerpt:
      "My first website was simple, a little messy, and the best way to learn how layout, CSS and responsiveness actually work.",
    body: [
      "My first website was not beautiful. It had spacing that didn't line up, colors that fought each other and a layout that broke on mobile. But building it taught me more than any tutorial could.",
      "The biggest lesson was that websites are made of small decisions. A margin here, a font size there, a flex container in the right place — each one changes how the page feels. Once I started seeing those decisions, the code made more sense.",
      "Now I care about the details: readable type, clear hierarchy, fast loading and a layout that works on a phone as well as a laptop. The first messy site was the start of that habit.",
    ],
  },
  {
    slug: "social-media-marketing-tips",
    category: "Social Media",
    date: null,
    readTime: "4 min read",
    image: "",
    title: "Social Media Marketing Tips",
    excerpt:
      "Simple social habits that help: know your audience, be consistent, and make content people actually want to read.",
    body: [
      "Social media can feel noisy. Everyone is posting, so the question is not just what to post — it's who the post is for. When I plan a post, I start with one person and one idea, not with a trend.",
      "Consistency matters more than perfection. A simple post that helps someone is better than a polished post that says nothing. I try to keep a steady rhythm and improve one thing at a time.",
      "Finally, I pay attention to what people respond to. Comments, saves and questions are signals. They tell me what is useful, so I can make the next post clearer and more helpful.",
    ],
  },
  {
    slug: "how-to-create-better-content",
    category: "Content",
    date: null,
    readTime: "4 min read",
    image: "",
    title: "How to Create Better Content",
    excerpt:
      "Better content starts before writing: one clear idea, one clear reader, and one reason to keep reading.",
    body: [
      "The content I'm happiest with usually started with a very small question: what should the reader understand after this? If I can answer that in one sentence, the piece has a spine.",
      "Structure does half the work. A short introduction, clear headings and paragraphs that each carry one idea make writing easier to follow — and much easier to edit later.",
      "I also leave room for examples. Abstract advice is easy to forget; a specific moment, a small comparison or a real sentence makes the point land.",
    ],
  },
  {
    slug: "my-experience-with-ai-tools",
    category: "AI Tools",
    date: null,
    readTime: "4 min read",
    image: "",
    title: "My Experience with AI Tools",
    excerpt:
      "What actually changed in my workflow after using AI tools daily — and what still needs a human eye.",
    body: [
      "AI tools became part of my daily routine quietly: first for ideas, then for drafts, then for checking my own work from another angle. The biggest change was speed — I reach a first draft much faster.",
      "The learning curve was about prompting. Clear context, a defined audience and an explicit format get far better results than a one-line request. Prompt engineering is really just careful brief-writing.",
      "What hasn't changed: judgement. AI output still needs a human to check facts, tone and whether it's actually true. I treat every output as a draft, never as a finished answer.",
    ],
  },
]

export const FAQS = [
  {
    question: "Who is Naina?",
    answer:
      "Naina is a Digital Marketing with AI learner from Kaithal, Haryana, who loves web development, creative design and AI tools. She is building her skills by learning and creating small projects.",
  },
  {
    question: "What skills does she have?",
    answer:
      "She is learning digital marketing, SEO, social media marketing, content creation, video editing, graphic design, web development (HTML, CSS, JavaScript), AI tools and prompt engineering. Skill levels are shown as “Level not set” until she adds her own ratings.",
  },
  {
    question: "What projects does she showcase?",
    answer:
      "The Projects section covers website development, digital marketing, graphic design, social media marketing, video editing and AI projects. The current cards are editable placeholders until real work is added.",
  },
  {
    question: "What digital tools does she use?",
    answer:
      "Her toolkit spans design and editing apps, browsers and website-building tools, plus AI assistants for research, drafting and prompting. Edit this answer in src/data.js to list your exact tools by name.",
  },
  {
    question: "Does she take freelance or collaboration work?",
    answer:
      "She is open to learning opportunities and collaborations. Edit this answer in src/data.js with your real availability.",
  },
  {
    question: "How can someone contact her?",
    answer:
      "Through the contact form in the Contact section, or by email. Social links can be added in src/data.js and will appear in the contact section and footer.",
  },
]

export const CONTACT = {
  eyebrow: "Contact",
  title: "Let's build something worth remembering.",
  lede:
    "Have a project, a question or an idea in mind? Send a message — I read every one and I'd be glad to hear from you.",
  /* TODO (FORM): paste a Formspree or EmailJS endpoint here to send real emails.
     While it is empty, the form validates and shows a clear "not connected yet" notice. */
  formEndpoint: "",
}

/* Set a Formspree endpoint here to make the contact form send real emails.
   Leave it empty and the form will explain that it is not connected yet. */
export const FORM_ENDPOINT = "" // TODO (FORM)
