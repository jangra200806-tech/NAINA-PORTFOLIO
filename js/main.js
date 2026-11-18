/* ============================================================
   Naina Jangra — Portfolio interactions
   Nav state, mobile menu, scroll spy, section numbering,
   social links, blog switch, back-to-top, contact form.
   No libraries — plain browser APIs only.
   ============================================================ */
(function () {
  "use strict";

  /* ----------------------------------------------------------
     EDIT HERE — one place for the details only you can provide
     ---------------------------------------------------------- */

  /* TODO (SOCIAL): paste your real profile URLs, then save.
     Any link left empty ("") is hidden everywhere automatically. */
  var SITE_LINKS = {
    github: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    whatsapp: ""
  };

  /* TODO (FORMSPREE): create a free form at https://formspree.io,
     copy the endpoint (looks like https://formspree.io/f/abcdwxyz)
     and paste it between the quotes. Until then the form falls back
     to the visitor's email app. */
  var FORM_ENDPOINT = "";

  /* Blog is turned off while every post is still a draft.
     To enable: uncomment the Blog section + nav links in index.html,
     add real posts, then set this to true. */
  var SHOW_BLOG = false;

  /* TODO (EMAIL): must match the address used in index.html.
     Confirm this inbox is real and working before launch. */
  var CONTACT_EMAIL = "hello@nainajangra.com";

  /* ---------------------------------------------------------- */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  /* ---------- Blog switch ---------- */
  (function applyBlogFlag() {
    var blog = document.getElementById("blog");
    if (blog) blog.hidden = !SHOW_BLOG;

    document.querySelectorAll('a[href="#blog"]').forEach(function (link) {
      link.hidden = !SHOW_BLOG;
    });
  })();

  /* ---------- Section numbers (nav + headings) ---------- */
  (function syncSectionNumbers() {
    var order = [];

    document.querySelectorAll("[data-section-label]").forEach(function (tag) {
      var section = tag.closest("section[id]");
      if (!section || section.hidden) return;

      var index = order.indexOf(section.id);
      if (index === -1) {
        order.push(section.id);
        index = order.length - 1;
      }

      tag.textContent = pad(index + 1) + " — " + tag.getAttribute("data-section-label");
    });

    document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(function (link) {
      var id = (link.getAttribute("href") || "").replace("#", "");
      var index = order.indexOf(id);
      var num = link.querySelector(".nav-num, [data-nav-num]");
      if (num && index !== -1) num.textContent = pad(index + 1);
    });
  })();

  /* ---------- Social links ---------- */
  (function applySocialLinks() {
    document.querySelectorAll("[data-social]").forEach(function (el) {
      var url = SITE_LINKS[el.getAttribute("data-social")];

      if (!url) {
        el.remove();
        return;
      }

      el.setAttribute("href", url);
      if (el.tagName === "A") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
      el.removeAttribute("data-todo");
    });

    document.querySelectorAll(".hero-socials, .socials, .footer-socials").forEach(function (box) {
      if (!box.querySelector("a[data-social]")) box.hidden = true;
    });
  })();

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Header state + back to top ---------- */
  var header = document.getElementById("site-header");
  var toTop = document.getElementById("to-top");
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (header) header.classList.toggle("scrolled", y > 16);
    if (toTop) toTop.classList.toggle("show", y > 560);

    ticking = false;
  }

  function queueScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }

  window.addEventListener("scroll", queueScroll, { passive: true });
  window.addEventListener("resize", queueScroll);
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var panel = document.getElementById("mobile-menu");

  function setMenu(open, restoreFocus) {
    if (!burger || !panel) return;

    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);

    if (open) {
      window.setTimeout(function () {
        var first = panel.querySelector("a");
        if (first) first.focus({ preventScroll: true });
      }, 140);
    } else if (restoreFocus) {
      burger.focus({ preventScroll: true });
    }
  }

  if (burger && panel) {
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true", false);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false, false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && panel.classList.contains("open")) {
        setMenu(false, true);
      }
    });

    var wide = window.matchMedia("(min-width: 901px)");
    var handleWide = function (event) {
      if (event.matches) setMenu(false, false);
    };

    if (wide.addEventListener) wide.addEventListener("change", handleWide);
    else if (wide.addListener) wide.addListener(handleWide);
  }

  /* ---------- Scroll spy ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var active = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window && navLinks.length && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ---------- Placeholder links (data-todo) ----------
     Links that still need a real URL carry data-todo so they do not
     jump to the top of the page. Remove the attribute once filled. */
  document.querySelectorAll("[data-todo]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  var submitBtn = document.getElementById("form-submit");
  var submitLabel = document.getElementById("form-submit-label");

  function setStatus(text, kind) {
    if (!status) return;
    status.textContent = text;
    status.className = "form-status " + (kind || "");
  }

  function setSending(sending) {
    if (!submitBtn) return;
    submitBtn.disabled = sending;
    submitBtn.setAttribute("aria-busy", String(sending));
    if (submitLabel) submitLabel.textContent = sending ? "Sending…" : "Send message";
  }

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        setStatus("Please complete the highlighted fields.", "err");
        return;
      }

      var data = new FormData(form);

      /* Honeypot — real visitors never fill this hidden field. */
      if (String(data.get("_gotcha") || "").trim()) {
        form.reset();
        setStatus("Thanks — your message has been sent.", "ok");
        return;
      }

      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        setStatus("Please fill in every field before sending.", "err");
        return;
      }

      if (!FORM_ENDPOINT) {
        /* No Formspree endpoint yet: open the visitor's email app instead. */
        var subject = encodeURIComponent("Portfolio enquiry from " + name);
        var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);

        window.location.href =
          "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

        setStatus("Opening your email app… If nothing happens, write to " + CONTACT_EMAIL + " directly.", "ok");
        form.reset();
        return;
      }

      setSending(true);
      setStatus("Sending your message…", "pending");

      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            setStatus("Thanks for reaching out — your message has been sent.", "ok");
            return;
          }

          return response
            .json()
            .catch(function () {
              return null;
            })
            .then(function (payload) {
              var detail =
                payload && payload.errors && payload.errors.length
                  ? payload.errors
                      .map(function (err) {
                        return err.message;
                      })
                      .join(" ")
                  : "";
              setStatus(
                detail || "Something went wrong. Please try again or email " + CONTACT_EMAIL + ".",
                "err"
              );
            });
        })
        .catch(function () {
          setStatus(
            "Could not send your message. Check your connection or email " + CONTACT_EMAIL + ".",
            "err"
          );
        })
        .finally(function () {
          setSending(false);
        });
    });
  }
})();
