(function () {
  "use strict";

  var posts = {
    "my-journey-into-web-development": {
      title: "My Journey into Web Development",
      category: "Web Development",
      description:
        "My experience learning HTML, CSS, JavaScript and building my first websites.",
      image: "assets/images/blog/web-development.svg",
      imageAlt: "Abstract browser window with glowing code lines",
      body: [
        "<p>Learning web development is less about memorising every tag and more about understanding how structure, style and behaviour work together. This draft maps out the foundations I want to document as I continue building websites.</p>",
        "<h2>Starting with structure</h2>",
        "<p>HTML is the skeleton of a page. Headings, paragraphs, links, images, forms and semantic elements give content a clear order before any styling is added. A useful first question is not “how should this look?” but “what is this content, and what should it do?”</p>",
        "<h2>Making it feel like a place</h2>",
        "<p>CSS turns a document into an experience. Spacing, type, colour and layout all affect how easily someone can read and move through a page. Responsive design adds another layer: the same content has to stay clear on a wide desktop screen and on a narrow phone. This draft will collect the layout decisions that made the biggest difference in my own learning.</p>",
        "<h2>Adding behaviour</h2>",
        "<p>JavaScript brings interaction into the page — menus, filters, form feedback, animation and all the small responses that make a site feel alive. The aim is not to add effects for their own sake, but to make an interface easier to understand and use.</p>",
        "<h2>Learning through first websites</h2>",
        "<p>The website projects in this portfolio — including a school website and small-business sites — are the practical side of that learning. This article will eventually document the brief, the decisions, what changed during the build and what I would approach differently next time. The project cards are the best place to see the current work.</p>",
        "<blockquote>Reflection to add before publishing: the first moment a layout finally behaved the way I expected, and the lesson that came with it.</blockquote>",
        "<h2>What comes next</h2>",
        "<p>Future notes will focus on accessibility, performance, cleaner CSS architecture and building with reusable components. For now, this draft is a map of the path: learn the fundamentals, build something small, test it honestly and keep improving.</p>"
      ].join("")
    },

    "exploring-artificial-intelligence": {
      title: "Exploring Artificial Intelligence",
      category: "Artificial Intelligence",
      description:
        "My learning experience with AI tools, prompt engineering and generative AI.",
      image: "assets/images/blog/artificial-intelligence.svg",
      imageAlt: "Glowing AI network with connected nodes",
      body: [
        "<p>Artificial intelligence is becoming part of everyday creative and development work. This draft is a place to record what I am learning about AI tools, prompt engineering and generative AI without pretending that the field can be reduced to a few shortcuts.</p>",
        "<h2>Prompts are instructions, not magic</h2>",
        "<p>A prompt is most useful when it gives a model context, a clear task, constraints and a definition of a good result. Specific examples often help. So does asking for alternatives, checking assumptions and revising the request instead of accepting the first answer.</p>",
        "<h2>Generative AI beyond chat</h2>",
        "<p>Generative tools can support writing, research, design exploration, image ideas and code experiments. The interesting part is not only what they produce, but how they change the way an idea is developed: quickly trying several directions, comparing options and noticing which details need a human decision.</p>",
        "<h2>Verification and responsibility</h2>",
        "<p>AI output can be confident and still be wrong. Facts need checking, code needs testing, and generated content needs editing for accuracy, tone and originality. Clear disclosure also matters when a tool has contributed to published work. This draft will keep those guardrails visible rather than treating AI as an authority.</p>",
        "<h2>Experiments in the portfolio</h2>",
        "<p>The AI chatbot and AI game projects in the Projects section are small ways of exploring these ideas. Their purpose is experimentation: understanding interfaces, prompt structure, interaction and the limits of a tool. They are not presented as finished products or achievements.</p>",
        "<blockquote>Reflection to add before publishing: one prompt that failed, what the failure revealed, and how the next attempt changed.</blockquote>",
        "<h2>Next questions</h2>",
        "<p>I want to explore responsible use, evaluation, multimodal tools and the difference between a clever demo and a genuinely useful feature. The goal is to stay curious while keeping human judgement at the centre.</p>"
      ].join("")
    },

    "learning-digital-marketing-with-ai": {
      title: "Learning Digital Marketing with AI",
      category: "Digital Marketing",
      description:
        "Exploring SEO basics, social media marketing and AI-powered content creation.",
      image: "assets/images/blog/digital-marketing.svg",
      imageAlt: "Marketing analytics dashboard with a rising chart",
      body: [
        "<p>Digital marketing connects a useful idea with the people who need it. This draft follows the fundamentals I am studying — search, social media and content — and the role AI can play without replacing strategy or judgement.</p>",
        "<h2>SEO starts with clarity</h2>",
        "<p>Search engine optimisation is often described as a technical checklist, but it begins with understanding intent. What is someone trying to find? What words would they use? Does the page answer the question clearly? Structure, page speed, internal links and metadata support that work, but they cannot rescue content that does not help the reader.</p>",
        "<h2>Social media is a conversation</h2>",
        "<p>Each platform has its own rhythm. A useful post needs a clear idea, a reason to stop scrolling and a next step that feels natural. Consistency matters more than posting everything at once, and a simple content plan is usually more sustainable than chasing every trend.</p>",
        "<h2>AI-assisted content creation</h2>",
        "<p>AI can help with brainstorming, outlines, variations, research summaries and repetitive production tasks. It should not become a machine for publishing generic content. The value comes from a strong brief, a distinct point of view and a careful editing pass.</p>",
        "<h2>Measuring what matters</h2>",
        "<p>Numbers need context. Reach, clicks and engagement can show whether a message is travelling, while enquiries, sign-ups or repeat visits can show whether it is useful. This draft will eventually include a simple measurement plan and examples of decisions based on real signals.</p>",
        "<blockquote>Reflection to add before publishing: which marketing metric was most misunderstood at first, and what changed after looking closer.</blockquote>",
        "<h2>Where this is heading</h2>",
        "<p>The next step is to connect these principles to the website projects in the portfolio: clearer page titles, useful descriptions, honest content and a measurable path from first visit to contact.</p>"
      ].join("")
    },

    "my-first-website-projects": {
      title: "My First Website Projects",
      category: "Projects",
      description:
        "Lessons learned while creating websites for schools and small businesses.",
      image: "assets/images/blog/projects.svg",
      imageAlt: "Layered website project frames in purple and blue",
      body: [
        "<p>The first website projects are where abstract lessons become specific. A layout has to hold real content, a navigation has to make sense to someone else, and a design has to survive a smaller screen. This draft records the lessons behind the school and small-business websites in the portfolio.</p>",
        "<h2>Start with the brief</h2>",
        "<p>Before choosing colours or fonts, it helps to know who the site is for and what they need to do. A school site may need to communicate admissions information and a sense of community. A business site may need to present products, explain services and make contact easy. The design should follow those priorities.</p>",
        "<h2>Design for the smallest screen early</h2>",
        "<p>Responsive design is easier when it is part of the first layout rather than a repair job at the end. Long headings, image crops, navigation and button sizes all need checking at narrow widths. A site is not finished if it only works on the screen it was designed on.</p>",
        "<h2>Content clarity beats decoration</h2>",
        "<p>Animations and gradients can create atmosphere, but the visitor still needs to understand where they are and what to do next. Clear headings, short descriptions and a visible next step often do more for a page than another effect.</p>",
        "<h2>Test the actual experience</h2>",
        "<p>Testing means clicking every link, completing every form, resizing the browser and checking whether the page still makes sense without hover effects. It also means being honest about placeholders. The project cards currently mark unavailable links clearly instead of pretending a finished product exists.</p>",
        "<blockquote>Reflection to add before publishing: the biggest change made after seeing a project on a real phone for the first time.</blockquote>",
        "<h2>What these projects taught me</h2>",
        "<p>Good work is usually a sequence of small corrections. The first version creates something to react to; the second version makes it clearer; the third makes it more resilient. The project cards show the current state, and future notes will document that process in more detail.</p>"
      ].join("")
    },

    "learning-github-and-version-control": {
      title: "Learning GitHub and Version Control",
      category: "Programming",
      description:
        "My experience exploring repositories, commits, branches and GitHub.",
      image: "assets/images/blog/programming.svg",
      imageAlt: "Git branch diagram beside a terminal window",
      body: [
        "<p>Version control is a quiet but essential part of building software. It creates a history of changes, makes experiments safer and gives collaborators a shared language. This draft is a learning log for repositories, commits, branches and GitHub.</p>",
        "<h2>A repository is a project with memory</h2>",
        "<p>A Git repository tracks files and the changes made to them. The working directory is what is being edited, the staging area is what is ready to be saved, and a commit is a labelled point in the project's history. Understanding those three spaces makes the commands much less mysterious.</p>",
        "<h2>Commits should tell a story</h2>",
        "<p>A useful commit is small enough to understand and clear enough to explain itself later. Messages such as “fix mobile navigation” or “add project filter” are easier to return to than a vague “updates”. A good history is a form of documentation.</p>",
        "<h2>Branches make experiments safer</h2>",
        "<p>A branch lets work happen without disturbing the main line. It can be used for a new feature, a redesign or a risky experiment. When the work is ready, it can be reviewed and merged. When it is not, the main branch remains intact.</p>",
        "<h2>A basic workflow</h2>",
        "<pre><code>git status\ngit add .\ngit commit -m \"Describe the change\"\ngit switch -c new-idea\ngit push -u origin new-idea</code></pre>",
        "<p>These commands are only the beginning. The more important habit is to run <code>git status</code> often and read what Git is saying before acting.</p>",
        "<h2>Working with remotes</h2>",
        "<p>GitHub adds a shared home for a repository. Remotes, pushes and pull requests make collaboration visible, and issues can hold questions and tasks. For a personal project, the same tools still help: the work is backed up, changes are documented, and experiments can be reviewed without fear.</p>",
        "<blockquote>Reflection to add before publishing: the first merge conflict, what it looked like, and how it was resolved.</blockquote>",
        "<h2>Next steps</h2>",
        "<p>I want to practise clearer commit habits, small pull requests and a repeatable release checklist. The goal is not to memorise every command, but to build a workflow that makes steady progress easier.</p>"
      ].join("")
    },

    "my-creative-learning-journey": {
      title: "My Creative Learning Journey",
      category: "Learning",
      description:
        "How I explore new technologies, experiment with tools and improve my digital skills.",
      image: "assets/images/blog/learning.svg",
      imageAlt: "Abstract orbit of ideas and creative learning",
      body: [
        "<p>Creative learning is not a straight line from beginner to expert. It is a loop: notice something interesting, try a small experiment, review the result and decide what to learn next. This draft is a place to capture that process across technology, design and communication.</p>",
        "<h2>Make room for experiments</h2>",
        "<p>Small experiments lower the pressure to be perfect. A quick layout study, a prompt test or a new interaction can teach more than a long tutorial because it creates a decision to react to. The useful question is not “is this good?” but “what did this reveal?”</p>",
        "<h2>Learn across disciplines</h2>",
        "<p>Web development, AI and digital marketing overlap more than they first appear. A page needs clear writing, a visual hierarchy and a technical structure. An AI tool needs a thoughtful prompt and a way to judge the result. Marketing needs an understanding of what the product actually does. Moving between these areas makes each one stronger.</p>",
        "<h2>Document the process</h2>",
        "<p>Keeping notes makes progress visible. Screenshots, short written reflections and a list of what changed turn scattered practice into a body of work. This blog is part of that habit: not a claim that everything is finished, but a record of what is being explored.</p>",
        "<h2>Use feedback, not comparison</h2>",
        "<p>Feedback helps when it points to a specific experience: a confusing label, a slow page, an unclear next step. Comparing a first attempt with someone else's final work rarely helps. The more useful comparison is with the previous version of the same project.</p>",
        "<h2>Keep a steady rhythm</h2>",
        "<p>A small amount of regular practice is easier to sustain than an occasional burst of ambition. One component, one paragraph or one experiment can be enough. Over time, those small pieces become a portfolio and a way of thinking.</p>",
        "<blockquote>Reflection to add before publishing: a tool or idea that changed the direction of a project, and what it made possible.</blockquote>",
        "<h2>What I want to keep learning</h2>",
        "<p>Accessibility, motion, AI-assisted workflows, storytelling and the craft of explaining an idea clearly. The next step is to keep building in public — carefully, honestly and one draft at a time.</p>"
      ].join("")
    }
  };

  var params = new URLSearchParams(window.location.search);
  var slug = params.get("post");
  var post = Object.prototype.hasOwnProperty.call(posts, slug) ? posts[slug] : null;
  var article = document.getElementById("blog-article");
  var body = document.getElementById("article-body");
  var media = document.getElementById("article-media");
  var end = document.getElementById("article-end");
  var relatedSection = document.getElementById("related-section");
  var relatedPosts = document.getElementById("related-posts");

  function setMetaDescription(text) {
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", text);
  }

  function renderNotFound() {
    document.title = "Draft not found — Blog | Naina Jangra";
    setMetaDescription(
      "This draft blog link does not match an article. Return to Naina Jangra's blog index to explore the available draft topics."
    );

    if (article) {
      article.innerHTML =
        '<div class="blog-not-found">' +
        '<span class="blog-eyebrow">MY BLOG</span>' +
        "<h1>Draft not found.</h1>" +
        "<p>This link does not match one of the draft articles yet. Head back to the blog index to choose from the available topics.</p>" +
        '<a class="btn btn-primary" href="index.html#blog">Back to all posts</a>' +
        "</div>";
    }
    if (relatedSection) relatedSection.hidden = true;
  }

  if (!post) {
    renderNotFound();
    return;
  }

  document.title = post.title + " — Blog | Naina Jangra";
  setMetaDescription(post.description);

  document.getElementById("article-kicker").textContent = "MY BLOG · DRAFT PREVIEW";
  document.getElementById("article-title").textContent = post.title;
  document.getElementById("article-desc").textContent = post.description;
  document.getElementById("article-category").textContent = post.category;

  var image = document.getElementById("article-image");
  image.src = post.image;
  image.alt = post.imageAlt;
  if (media) media.hidden = false;

  body.innerHTML =
    '<div class="blog-draft-callout"><strong>Draft preview.</strong> ' +
    "This is an editable article framework, not a published post. Personal reflections, " +
    "project specifics and a final publication date will be added when the draft is ready." +
    "</div>" +
    post.body;

  var order = Object.keys(posts);
  var currentIndex = order.indexOf(slug);
  var related = [];
  for (var offset = 1; offset < order.length && related.length < 3; offset += 1) {
    related.push(posts[order[(currentIndex + offset) % order.length]]);
  }

  if (relatedPosts) {
    relatedPosts.innerHTML = related
      .map(function (item) {
        var itemSlug = Object.keys(posts).find(function (key) {
          return posts[key] === item;
        });
        return (
          '<a class="blog-related-card" href="blog.html?post=' +
          encodeURIComponent(itemSlug) +
          '">' +
          "<span>" +
          item.category +
          "</span>" +
          "<strong>" +
          item.title +
          "</strong>" +
          "</a>"
        );
      })
      .join("");
  }
  if (relatedSection) relatedSection.hidden = false;
  if (end) end.hidden = false;
})();
