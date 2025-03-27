// (function() {
//     function initAccordion() {
//       document.querySelectorAll(".fb-accordion-item-wrapper").forEach(function(e) {
//         var t = e.querySelector(".fb-accordion-item-title-wrapper"),
//           r = e.querySelector(".fb-accordion-content-wrapper");
        
//         if (t && !t.hasAttribute('data-accordion-initialized')) {
//           t.setAttribute('data-accordion-initialized', 'true');
          
//           t.addEventListener("click", function(c) {
//             c.stopPropagation();
//             var o = t.classList.contains("active");
//             t.classList.toggle("active", !o);
//             r.classList.toggle("active", !o);
            
//             var a = e.parentNode.closest(".fb-accordion-item-wrapper");
//             (a ? a.querySelectorAll(":scope > .fb-accordion-item-wrapper") : document.querySelectorAll(".fb-accordion-item-wrapper")).forEach(function(t) {
//               if (t !== e) {
//                 var r = t.querySelector(".fb-accordion-item-title-wrapper"),
//                   c = t.querySelector(".fb-accordion-content-wrapper");
//                 r && r.classList.remove("active");
//                 c && c.classList.remove("active");
//               }
//             });
//           });
//         }
//       });
//     }
  
//     var setupDone = false;
    
//     function setupInitialization() {
//       if (setupDone) return;
//       setupDone = true;
      
//       if (document.readyState === 'complete' || document.readyState === 'interactive') {
//         setTimeout(initAccordion, 100);
//       } else {
//         document.addEventListener("DOMContentLoaded", function() {
//           setTimeout(initAccordion, 100);
//         });
//       }
      
//       if (typeof window !== 'undefined') {
//         var lastUrl = window.location.href;
//         var urlObserver = new MutationObserver(function() {
//           if (lastUrl !== window.location.href) {
//             lastUrl = window.location.href;
//             setTimeout(initAccordion, 300);
//           }
//         });
        
//         urlObserver.observe(document.body, { childList: true, subtree: true });
//       }
//     }
    
//     setupInitialization();
    
//     window.reinitAccordion = initAccordion;
//   })();



(function() {
  function slideUp(element) {
      element.style.maxHeight = element.scrollHeight + "px";
      requestAnimationFrame(() => {
          element.style.transition = "max-height 0.3s ease-out";
          element.style.maxHeight = "0";
      });
  }
  
  function slideDown(element) {
      element.style.maxHeight = "0";
      requestAnimationFrame(() => {
          element.style.transition = "max-height 0.3s ease-in";
          element.style.maxHeight = element.scrollHeight + "px";
      });
  }
  
  function initAccordion() {
      document.querySelectorAll(".fb-accordion-item-wrapper").forEach(function(e) {
          var t = e.querySelector(".fb-accordion-item-title-wrapper"),
              r = e.querySelector(".fb-accordion-content-wrapper");

          if (t && !t.hasAttribute('data-accordion-initialized')) {
              t.setAttribute('data-accordion-initialized', 'true');
              r.style.overflow = "hidden";
              r.style.maxHeight = "0";

              t.addEventListener("click", function(c) {
                  c.stopPropagation();
                  var isActive = t.classList.contains("active");
                  t.classList.toggle("active", !isActive);

                  if (!isActive) {
                      slideDown(r);
                  } else {
                      slideUp(r);
                  }

                  document.querySelectorAll(".fb-accordion-item-wrapper").forEach(function(other) {
                      if (other !== e) {
                          var otherTitle = other.querySelector(".fb-accordion-item-title-wrapper"),
                              otherContent = other.querySelector(".fb-accordion-content-wrapper");
                          otherTitle && otherTitle.classList.remove("active");
                          if (otherContent) {
                              slideUp(otherContent);
                          }
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
