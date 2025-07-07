

// document.addEventListener('DOMContentLoaded', () => {
//   const items = document.querySelectorAll('.fb-progressbar-item');

//   items.forEach(item => {
//     const target = parseInt(item.dataset.progress);
//     const type   = (item.dataset.progressbarType).toLowerCase();
//     const speed  = 15;

//     const lineEl   = item.querySelector('.fb-progressbar-line');
//     const numberEls = item.querySelectorAll('.fb-progressbar-number');

//     // initial reset so bar starts empty
//     if (type === 'vertical') {
//       lineEl.style.height = '0%';
//       lineEl.style.bottom = '0';
//       lineEl.style.top = 'auto';
//     } else {
//       lineEl.style.width  = '0%';
//     }

//     let animated = false;

//     function animate () {
//       if (animated) return;
//       animated = true;

//       let value = 0;
//       const timer = setInterval(() => {
//         if (value >= target) {
//           clearInterval(timer);
//           return;
//         }
//         value++;

//         // update bar
//         if (type === 'vertical') {
//           lineEl.style.height = value + '%';
//           lineEl.style.width  = '100%';
//         } else {
//           lineEl.style.width  = value + '%';
//           lineEl.style.height = '100%';
//         }

//         numberEls.forEach(n => n.textContent = value + '%');
//       }, speed);
//     }

//     const io = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           animate();
//           io.unobserve(item);
//         }
//       });
//     }, { threshold: 0.5 });

//     io.observe(item);
//   });
// });



(function () {
  function initProgressBars() {
    const items = document.querySelectorAll('.fb-progressbar-item');

    items.forEach(item => {
      if (item.hasAttribute('data-progressbar-init')) return;
      item.setAttribute('data-progressbar-init', 'true');

      const target = parseInt(item.dataset.progress);
      const type   = (item.dataset.progressbarType).toLowerCase();
      const speed  = 15;

      const lineEl    = item.querySelector('.fb-progressbar-line');
      const numberEls = item.querySelectorAll('.fb-progressbar-number');

      // start empty
      if (type === 'vertical') {
        lineEl.style.height = '0%';
        lineEl.style.bottom = '0';
        lineEl.style.top    = 'auto';
      } else {
        lineEl.style.width  = '0%';
      }

      let animated = false;

      function animate() {
        if (animated) return;
        animated = true;

        let value = 0;
        const timer = setInterval(() => {
          if (value >= target) {
            clearInterval(timer);
            return;
          }
          value++;

          if (type === 'vertical') {
            lineEl.style.height = value + '%';
            lineEl.style.width  = '100%';
          } else {
            lineEl.style.width  = value + '%';
            lineEl.style.height = '100%';
          }

          numberEls.forEach(n => (n.textContent = value + '%'));
        }, speed);
      }

      /* scroll trigger */
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animate();
              io.unobserve(item);
            }
          });
        },
        { threshold: 0.5 }
      );

      io.observe(item);
    });
  }

  function setupProgressBars() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProgressBars);
    } else {
      initProgressBars();
    }

    const observer = new MutationObserver(muts => {
      for (const m of muts) {
        if (m.addedNodes.length || m.removedNodes.length) {
          initProgressBars();
          break;
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.reinitProgressBars = initProgressBars;

  setupProgressBars();
})();

