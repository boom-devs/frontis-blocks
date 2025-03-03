

// document.addEventListener('DOMContentLoaded', function() {
//     const accordions = document.querySelectorAll('.fb-accordion-item-wrapper');

//     accordions.forEach((accordion) => {
//         const titleWrapper = accordion.querySelector('.fb-accordion-item-title-wrapper');
//         const contentWrapper = accordion.querySelector('.fb-accordion-content-wrapper');

//         titleWrapper.addEventListener('click', (event) => {
//             event.stopPropagation(); // Prevent event from bubbling up to parent accordions

//             // Toggle the 'active' class
//             const isActive = titleWrapper.classList.contains('active');
//             titleWrapper.classList.toggle('active', !isActive);
//             contentWrapper.classList.toggle('active', !isActive);

//             // Close only sibling accordions (accordions at the same level)
//             let parentAccordion = accordion.parentNode.closest('.fb-accordion-item-wrapper');
//             const siblingAccordions = parentAccordion 
//                 ? parentAccordion.querySelectorAll(':scope > .fb-accordion-item-wrapper')
//                 : document.querySelectorAll('.fb-accordion-item-wrapper');

//             siblingAccordions.forEach((sibling) => {
//                 if (sibling !== accordion) {
//                     const siblingTitle = sibling.querySelector('.fb-accordion-item-title-wrapper');
//                     const siblingContent = sibling.querySelector('.fb-accordion-content-wrapper');
//                     siblingTitle.classList.remove('active');
//                     siblingContent.classList.remove('active');
//                 }
//             });
//         });
//     });
// });



(function() {
    function initAccordion() {
      document.querySelectorAll(".fb-accordion-item-wrapper").forEach(function(e) {
        var t = e.querySelector(".fb-accordion-item-title-wrapper"),
          r = e.querySelector(".fb-accordion-content-wrapper");
        
        if (t && !t.hasAttribute('data-accordion-initialized')) {
          t.setAttribute('data-accordion-initialized', 'true');
          
          t.addEventListener("click", function(c) {
            c.stopPropagation();
            var o = t.classList.contains("active");
            t.classList.toggle("active", !o);
            r.classList.toggle("active", !o);
            
            var a = e.parentNode.closest(".fb-accordion-item-wrapper");
            (a ? a.querySelectorAll(":scope > .fb-accordion-item-wrapper") : document.querySelectorAll(".fb-accordion-item-wrapper")).forEach(function(t) {
              if (t !== e) {
                var r = t.querySelector(".fb-accordion-item-title-wrapper"),
                  c = t.querySelector(".fb-accordion-content-wrapper");
                r && r.classList.remove("active");
                c && c.classList.remove("active");
              }
            });
          });
        }
      });
    }
  
    var setupDone = false;
    
    function setupInitialization() {
      if (setupDone) return;
      setupDone = true;
      
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(initAccordion, 100);
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          setTimeout(initAccordion, 100);
        });
      }
      
      if (typeof window !== 'undefined') {
        var lastUrl = window.location.href;
        var urlObserver = new MutationObserver(function() {
          if (lastUrl !== window.location.href) {
            lastUrl = window.location.href;
            setTimeout(initAccordion, 300);
          }
        });
        
        urlObserver.observe(document.body, { childList: true, subtree: true });
      }
    }
    
    setupInitialization();
    
    window.reinitAccordion = initAccordion;
  })();
