/* ============================================================
   Naina Jangra — Text animations
   Small, dependency-free: hero typing, word stagger and
   scroll reveals. Everything respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
     1. Hero typewriter — Web Developer / AI-powered Creator /
        Digital Marketer. Types, holds 1.5s, deletes, repeats.
     ---------------------------------------------------------- */
  var typedEl = document.getElementById("typed-role");

  if (typedEl && !reduceMotion) {
    var ROLES = ["AI-powered Digital Creator", "Digital Marketer", "Web Developer"];
    var HOLD = 1500;   // pause after a fully typed role
    var ERASE = 32;    // per character while deleting
    var TYPE_MIN = 58; // per character while typing
    var TYPE_JITTER = 38;

    var roleIndex = 0;
    var charCount = ROLES[0].length;
    var deleting = true;

    var step = function () {
      var word = ROLES[roleIndex];
      var delay;

      if (deleting) {
        charCount -= 1;
        typedEl.textContent = word.slice(0, Math.max(charCount, 0));

        if (charCount <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          delay = 260;
        } else {
          delay = ERASE;
        }
      } else {
        charCount += 1;
        typedEl.textContent = word.slice(0, charCount);

        if (charCount >= word.length) {
          deleting = true;
          delay = HOLD;
        } else {
          delay = TYPE_MIN + Math.random() * TYPE_JITTER;
        }
      }

      window.setTimeout(step, delay);
    };

    // Let the hero settle, then start cycling from the static first role.
    window.setTimeout(step, HOLD);
  }

  /* ----------------------------------------------------------
     2. Word-by-word reveal for [data-words] elements.
        Each word becomes an inline span with a staggered delay.
     ---------------------------------------------------------- */
  var wordBlocks = Array.prototype.slice.call(
    document.querySelectorAll("[data-words]")
  );

  if (!reduceMotion && wordBlocks.length) {
    wordBlocks.forEach(function (block) {
      var text = block.textContent.replace(/\s+/g, " ").trim();
      var words = text.split(" ");
      var baseDelay = parseInt(block.getAttribute("data-delay"), 10) || 0;
      var fragment = document.createDocumentFragment();

      words.forEach(function (word, index) {
        var span = document.createElement("span");
        span.className = "word";
        span.style.setProperty("--w", index);
        span.textContent = word;
        fragment.appendChild(span);

        if (index < words.length - 1) {
          fragment.appendChild(document.createTextNode(" "));
        }
      });

      block.textContent = "";
      block.appendChild(fragment);
      block.style.setProperty("--d", baseDelay + "ms");
      block.classList.add("words-ready");

      // Two frames so the hidden state paints before the transition starts.
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          block.classList.add("words-visible");
        });
      });
    });
  }

  /* ----------------------------------------------------------
     3. Scroll reveal — headings and cards slide up once,
        then the observer lets go.
     ---------------------------------------------------------- */
  var revealEls = Array.prototype.slice.call(
    document.querySelectorAll(".reveal")
  );

  if (!revealEls.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
