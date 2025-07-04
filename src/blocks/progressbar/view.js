
// (function() {
//   function setupObserver(item) {
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           animateItem(item);
//           io.unobserve(item);               // fire once – remove if you want repeat
//         }
//       },
//       { threshold: 0.35 }                   // 35 % visible
//     );
//     io.observe(item);
//   }
  
//   /* ----- animate both bar & number ----- */
//   function animateItem(item) {
//     const progress = parseFloat(item.dataset.progress) || 0;
//     const progressNumberPosition = item.dataset.progressNumberPosition || 'default';
//     const type     = (item.dataset.progressbarType || 'horizontal').toLowerCase();
//     const line     = item.querySelector('.fb-progressbar-line');
//     const numbers  = item.querySelectorAll('.fb-progressbar-number');
  
//     /* ---- reset line ---- */
//     if (line) {
//       if (type === 'vertical') {
//         line.style.height = '0%';
//         line.style.bottom = '0';
//         line.style.top    = 'auto';
//       } else {
//         line.style.width  = '0%';
//       }
  
//       /* next paint → let CSS transition handle it */
//       requestAnimationFrame(() => {
//         if (type === 'vertical') {
//           line.style.height = progress + '%';
//           line.style.width  = '100%';
//         } else {
//           line.style.width  = progress + '%';
//           line.style.height = '100%';
//         }
//       });
//     }
  
//     /* ---- counter(s) ---- */
//     numbers.forEach(el => progressNumberPosition === 'default' && countUp(el, progress));
//   }
  
//   /* ----- lightweight counter helper ----- */
//   function countUp(el, target) {
//     const DURATION = 1500;                   // ms
//     const start    = performance.now();
  
//     (function step(now) {
//       const p = Math.min((now - start) / DURATION, 1);
//       el.textContent = Math.round(p * target) + '%';
//       if (p < 1) requestAnimationFrame(step);
//     })(start);
//   }

//   setupObserver();
// })();



(function () {
  /* ────────────────────────────────────────────────────────────
     0.  Reusable helpers
  ──────────────────────────────────────────────────────────── */

  function isVisible(el) {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  }

  function animateItem(/* ... আগের কোড অপরিবর্তিত ... */) { /* same as before */ }

  function countUp(/* ... আগের কোড ... */) { /* same as before */ }

  /* ───────── init / re‑init ───────── */

  function initProgressbars() {
    document.querySelectorAll('.fb-progressbar-item').forEach(item => {
      if (item.hasAttribute('data-progressbar-initialized')) return;
      item.setAttribute('data-progressbar-initialized', 'true');

      /* ① পেজ লোডেই ভিজিবল? → direct animate (100 ms delay) */
      if (isVisible(item)) {
        setTimeout(() => animateItem(item), 100);
        return;                              // observer দরকার নেই
      }

      /* ② নয়, তাহলে observer সেট করুন */
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                animateItem(item);
                io.unobserve(item);          // একবারই দরকার
              }
            });
          },
          { threshold: 0 }                   // ⬅️ 0 রাখায় যেকোন অংশ দেখালেই ফায়ার
        );
        io.observe(item);
      } else {
        /* IE‑fallback — সঙ্গে‑সঙ্গে animate */
        setTimeout(() => animateItem(item), 100);
      }
    });
  }

  /* ───────── boot + DOM watch ───────── */

  function setup() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProgressbars);
    } else {
      initProgressbars();
    }

    /* ajax/dynamic block detect */
    new MutationObserver(muts => {
      if (muts.some(m => m.addedNodes.length || m.removedNodes.length)) {
        initProgressbars();
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  window.reinitProgressbars = initProgressbars;
  setup();
})();

