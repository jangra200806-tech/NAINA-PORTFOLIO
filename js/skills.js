/* ============================================================
   Naina Jangra — Skills
   One data array, three tabs. Edit SKILLS below to change what
   appears on the page — markup, tabs and icons are generated
   from it automatically.

   icon  → path inside /assets/icons/skills/
   pair  → two icons shown together (Git + GitHub)
   inline→ small built-in SVG for skills that have no brand logo yet
   ============================================================ */
(function () {
  "use strict";

  var SKILLS = [
    {
      label: "Frontend",
      items: [
        { name: "HTML5", icon: "assets/icons/skills/html5.svg" },
        { name: "CSS3", icon: "assets/icons/skills/css3.svg" },
        { name: "JavaScript", icon: "assets/icons/skills/javascript.svg" },
        { name: "React", icon: "assets/icons/skills/react.svg" },
        { name: "Node.js", icon: "assets/icons/skills/nodejs.svg" },
        {
          name: "Git & GitHub",
          pair: ["assets/icons/skills/git.svg", "assets/icons/skills/github.svg"]
        },
        { name: "VS Code", icon: "assets/icons/skills/vscode.svg" },
        { name: "Vercel", icon: "assets/icons/skills/vercel.svg" }
      ]
    },
    {
      label: "AI Tools",
      items: [
        { name: "ChatGPT", icon: "assets/icons/skills/chatgpt.svg" },
        { name: "Claude", icon: "assets/icons/skills/claude.svg" },
        /* TODO (ICON): add /assets/icons/skills/gemini.svg and swap "inline" for
           icon: "assets/icons/skills/gemini.svg" */
        {
          name: "Gemini",
          inline:
            '<svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 3l1.5 4.5L17 9l-4.5 1.5L11 15l-1.5-4.5L5 9l4.5-1.5L11 3Z"/><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z"/></svg>'
        },
        { name: "OpenCode", icon: "assets/icons/skills/opencode.svg" },
        { name: "Replit", icon: "assets/icons/skills/replit.svg" },
        { name: "Generative AI", icon: "assets/icons/skills/generative-ai.svg" },
        { name: "Prompt Engineering", icon: "assets/icons/skills/prompt-engineering.svg" }
      ]
    },
    {
      label: "Digital Marketing",
      items: [
        { name: "Digital Marketing", icon: "assets/icons/skills/digital-marketing.svg" },
        {
          name: "SEO Basics",
          inline:
            '<svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>'
        },
        {
          name: "Content Creation",
          inline:
            '<svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>'
        },
        {
          name: "AI Content Creation",
          inline:
            '<svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 3l1.5 4.5L17 9l-4.5 1.5L11 15l-1.5-4.5L5 9l4.5-1.5L11 3Z"/><path d="M18 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z"/></svg>'
        },
        {
          name: "Social Media Strategy",
          inline:
            '<svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-4-.9L3 21l1.9-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z"/></svg>'
        }
      ]
    }
  ];

  var root = document.querySelector("[data-skills]");
  if (!root) return;

  var tabList = root.querySelector(".skills-tabs");
  var panel = root.querySelector(".skills-panel");
  if (!tabList || !panel) return;

  var active = 0;

  function iconMarkup(item) {
    if (item.pair) {
      return (
        '<span class="pair">' +
        item.pair
          .map(function (src) {
            return '<img src="' + src + '" alt="" width="16" height="16" loading="lazy">';
          })
          .join("") +
        "</span>"
      );
    }
    if (item.icon) {
      return '<img src="' + item.icon + '" alt="" width="20" height="20" loading="lazy">';
    }
    return item.inline || "";
  }

  function renderPanel(index) {
    var group = SKILLS[index];

    panel.innerHTML =
      '<ul class="skill-grid" aria-label="' +
      group.label +
      ' skills">' +
      group.items
        .map(function (item) {
          return '<li class="skill-item">' + iconMarkup(item) + "<span>" + item.name + "</span></li>";
        })
        .join("") +
      "</ul>";

    panel.setAttribute("aria-labelledby", "skill-tab-" + index);

    tabList.querySelectorAll(".skill-tab").forEach(function (tab, i) {
      tab.setAttribute("aria-selected", String(i === index));
      tab.setAttribute("tabindex", i === index ? "0" : "-1");
    });
  }

  function select(index, focusTab) {
    if (index < 0) index = SKILLS.length - 1;
    if (index >= SKILLS.length) index = 0;

    active = index;
    renderPanel(active);

    if (focusTab) {
      var tab = tabList.querySelectorAll(".skill-tab")[active];
      if (tab) tab.focus();
    }
  }

  SKILLS.forEach(function (group, index) {
    var tab = document.createElement("button");
    tab.type = "button";
    tab.className = "skill-tab";
    tab.id = "skill-tab-" + index;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", "skills-panel");
    tab.setAttribute("aria-selected", String(index === 0));
    tab.setAttribute("tabindex", index === 0 ? "0" : "-1");
    tab.textContent = group.label;

    tab.addEventListener("click", function () {
      select(index, false);
    });

    tab.addEventListener("keydown", function (event) {
      var key = event.key;
      if (key === "ArrowRight" || key === "ArrowDown") {
        event.preventDefault();
        select(active + 1, true);
      } else if (key === "ArrowLeft" || key === "ArrowUp") {
        event.preventDefault();
        select(active - 1, true);
      } else if (key === "Home") {
        event.preventDefault();
        select(0, true);
      } else if (key === "End") {
        event.preventDefault();
        select(SKILLS.length - 1, true);
      }
    });

    tabList.appendChild(tab);
  });

  renderPanel(active);
})();
