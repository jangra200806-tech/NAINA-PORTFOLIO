/* ============================================================
   Naina Jangra — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Config ---------- */
  var CONTACT_EMAIL = "hello@nainajangra.com"; // ← replace with the real address

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Typewriter ---------- */
  var typedEl = document.getElementById("typed-role");
  var caretEl = document.querySelector(".caret");

  if (typedEl) {
    var roles = [
      "Creative Developer",
      "AI Enthusiast",
      "Web Developer",
      "Digital Creator",
      "Digital Marketing Learner"
    ];

    if (reduceMotion) {
      typedEl.textContent = roles[0];
      if (caretEl) caretEl.style.animation = "none";
    } else {
      var roleIndex = 0;
      var charIndex = roles[0].length;
      var deleting = true;

      // Start by holding the first word, then delete it before typing the next.
      var typeTick = function () {
        var word = roles[roleIndex];
        var delay;

        if (!deleting) {
          charIndex += 1;
          typedEl.textContent = word.slice(0, charIndex);

          if (charIndex >= word.length) {
            deleting = true;
            delay = 1550;
          } else {
            delay = 58 + Math.random() * 42;
          }
        } else {
          charIndex -= 1;
          typedEl.textContent = word.slice(0, Math.max(charIndex, 0));

          if (charIndex <= 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 340;
          } else {
            delay = 32;
          }
        }

        window.setTimeout(typeTick, delay);
      };

      // Initial pause on "Creative Developer", then cycle.
      window.setTimeout(function () {
        deleting = true;
        typeTick();
      }, 1600);
    }
  }

  /* ---------- Navigation: scrolled state, progress, to-top ---------- */
  var nav = document.getElementById("site-nav");
  var progress = document.getElementById("scroll-progress");
  var toTop = document.getElementById("to-top");
  var ticking = false;

  function onScrollFrame() {
    var y = window.scrollY || window.pageYOffset;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;

    if (nav) nav.classList.toggle("scrolled", y > 24);
    if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    if (toTop) toTop.classList.toggle("show", y > 620);

    ticking = false;
  }

  function requestScrollFrame() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScrollFrame);
    }
  }

  window.addEventListener("scroll", requestScrollFrame, { passive: true });
  window.addEventListener("resize", requestScrollFrame);
  onScrollFrame();

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
      }, 120);
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

    var menuQuery = window.matchMedia("(min-width: 981px)");
    var handleMenuBreakpoint = function (event) {
      if (event.matches) setMenu(false, false);
    };
    if (menuQuery.addEventListener) {
      menuQuery.addEventListener("change", handleMenuBreakpoint);
    } else if (menuQuery.addListener) {
      menuQuery.addListener(handleMenuBreakpoint);
    }
  }

  /* ---------- Scroll spy ---------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-links a")
  );
  var spySections = Array.prototype.slice.call(
    document.querySelectorAll("main section[id]")
  );

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && navLinks.length && spySections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    spySections.forEach(function (section) {
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
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- Timeline draw-in ---------- */
  var timeline = document.getElementById("timeline");
  if (timeline) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      timeline.classList.add("is-visible");
    } else {
      var timelineObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              timeline.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      timelineObserver.observe(timeline);
    }
  }

  /* ---------- 3D tilt ---------- */
  if (finePointer && !reduceMotion) {
    var tiltEls = document.querySelectorAll("[data-tilt]");

    tiltEls.forEach(function (el) {
      var strength = el.classList.contains("portrait") ? 7 : 4;

      el.addEventListener("pointermove", function (event) {
        var rect = el.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width - 0.5;
        var py = (event.clientY - rect.top) / rect.height - 0.5;

        el.style.setProperty("--rx", (-py * strength).toFixed(2) + "deg");
        el.style.setProperty("--ry", (px * strength).toFixed(2) + "deg");
      });

      el.addEventListener("pointerleave", function () {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ---------- Project spotlight ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".project-media").forEach(function (media) {
      var preview = media.querySelector(".preview");
      if (!preview) return;

      media.addEventListener("pointermove", function (event) {
        var rect = preview.getBoundingClientRect();
        var mx = ((event.clientX - rect.left) / rect.width) * 100;
        var my = ((event.clientY - rect.top) / rect.height) * 100;
        preview.style.setProperty("--mx", mx.toFixed(1) + "%");
        preview.style.setProperty("--my", my.toFixed(1) + "%");
      });
    });
  }

  /* ---------- Hero particle field ---------- */
  var particleCanvas = document.getElementById("hero-particles");

  if (particleCanvas && particleCanvas.getContext && !reduceMotion) {
    var pctx = particleCanvas.getContext("2d");
    var pDpr = Math.min(window.devicePixelRatio || 1, 2);
    var pParticles = [];
    var pWidth = 1;
    var pHeight = 1;
    var pFrame = null;
    var pVisible = true;

    function pResize() {
      var rect = particleCanvas.getBoundingClientRect();
      pWidth = Math.max(1, rect.width);
      pHeight = Math.max(1, rect.height);
      particleCanvas.width = Math.round(pWidth * pDpr);
      particleCanvas.height = Math.round(pHeight * pDpr);
      pctx.setTransform(pDpr, 0, 0, pDpr, 0, 0);

      var count = Math.round(Math.min(30, Math.max(10, pWidth / 48)));
      pParticles = [];

      for (var i = 0; i < count; i += 1) {
        pParticles.push({
          x: Math.random() * pWidth,
          y: Math.random() * pHeight,
          vx: (Math.random() - 0.5) * 0.12,
          vy: -(0.04 + Math.random() * 0.14),
          r: 0.5 + Math.random() * 0.9,
          a: 0.08 + Math.random() * 0.2,
          tone: Math.random() > 0.5
        });
      }
    }

    function pDraw() {
      pctx.clearRect(0, 0, pWidth, pHeight);

      for (var i = 0; i < pParticles.length; i += 1) {
        var p = pParticles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = pHeight + 10;
          p.x = Math.random() * pWidth;
        }
        if (p.x < -10) p.x = pWidth + 10;
        if (p.x > pWidth + 10) p.x = -10;

        pctx.beginPath();
        pctx.fillStyle = p.tone
          ? "rgba(217, 201, 235, " + p.a + ")"
          : "rgba(167, 139, 206, " + p.a + ")";
        pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        pctx.fill();
      }

      pFrame = window.requestAnimationFrame(pDraw);
    }

    function pStart() {
      if (!pFrame) pFrame = window.requestAnimationFrame(pDraw);
    }

    function pStop() {
      if (pFrame) {
        window.cancelAnimationFrame(pFrame);
        pFrame = null;
      }
    }

    pResize();
    pStart();

    window.addEventListener("resize", pResize, { passive: true });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        pStop();
      } else if (pVisible) {
        pStart();
      }
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        function (entries) {
          pVisible = entries[0].isIntersecting;
          if (pVisible) pStart();
          else pStop();
        },
        { rootMargin: "120px" }
      ).observe(particleCanvas);
    }
  }

  /* ---------- Blog filters ---------- */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var blogCards = Array.prototype.slice.call(
    document.querySelectorAll(".blog-card")
  );
  var blogCount = document.getElementById("blog-count");

  function updateBlogCount(count) {
    if (!blogCount) return;
    blogCount.textContent = count + (count === 1 ? " draft post" : " draft posts");
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      var visibleCount = 0;

      filterButtons.forEach(function (btn) {
        var active = btn === button;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", String(active));
      });

      blogCards.forEach(function (card) {
        var show = filter === "all" || card.getAttribute("data-category") === filter;
        card.classList.toggle("is-hidden", !show);

        if (show) {
          visibleCount += 1;
          card.classList.remove("blog-in");
          void card.offsetWidth; // restart animation
          card.classList.add("blog-in");
        }
      });

      updateBlogCount(visibleCount);
    });
  });

  /* ---------- Contact form ---------- */
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
      var body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\n" + message
      );

      window.location.href =
        "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

      status.textContent =
        "Opening your email app… If nothing happens, write to " +
        CONTACT_EMAIL +
        " directly.";
      status.className = "form-status ok";
      form.reset();
    });
  }
})();
