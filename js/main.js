/* ============================================================
   Naina Jangra — Portfolio interactions
   Lightweight: nav state, mobile menu, scroll spy, reveals,
   back-to-top, todo-link guard, contact form.
   ============================================================ */
(function () {
  "use strict";

  /* TODO (EMAIL): must match the address used in index.html */
  var CONTACT_EMAIL = "hello@nainajangra.com";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
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

  /* ---------- Contact form (opens the visitor's mail app) ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "Please complete the highlighted fields.";
        status.className = "form-status err";
        return;
      }

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill in every field before sending.";
        status.className = "form-status err";
        return;
      }

      var subject = encodeURIComponent("Portfolio enquiry from " + name);
      var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);

      window.location.href =
        "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

      status.textContent =
        "Opening your email app… If nothing happens, write to " + CONTACT_EMAIL + " directly.";
      status.className = "form-status ok";
      form.reset();
    });
  }
})();
