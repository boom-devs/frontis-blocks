// (function() {
//   function initAccordion() {
//       const accordionItems = document.querySelectorAll(".fb-accordion-item-wrapper");
      
//       accordionItems.forEach(itemWrapper => {
//           const titleWrapper = itemWrapper.querySelector(".fb-accordion-item-title-wrapper");
//           const contentWrapper = itemWrapper.querySelector(".fb-accordion-content-wrapper");

//           // Check current state
//           const isActive = titleWrapper.classList.contains("active");

//           // Set max height
//           if (isActive) {
//             contentWrapper.style.maxHeight = `${contentWrapper.scrollHeight}px`;
//         } else {
//             contentWrapper.style.maxHeight = "0px";
//         }

//           // Prevent multiple initializations
//           if (titleWrapper.hasAttribute('data-accordion-initialized')) return;
//           titleWrapper.setAttribute('data-accordion-initialized', 'true');

//           titleWrapper.addEventListener("click", function(event) {
//               event.stopPropagation();

//               // Reset all accordions at the same level
//               const parentAccordion = itemWrapper.closest(".fb-accordion-content-wrapper") || document.body;
//               const siblingItems = parentAccordion.querySelectorAll(".fb-accordion-item-wrapper");
              
//               siblingItems.forEach(sibling => {
//                   if (sibling !== itemWrapper) {
//                       const siblingTitle = sibling.querySelector(".fb-accordion-item-title-wrapper");
//                       const siblingContent = sibling.querySelector(".fb-accordion-content-wrapper");
                      
//                       if (siblingTitle) siblingTitle.classList.remove("active");
//                       if (siblingContent) {
//                           siblingContent.classList.remove("active");
//                           siblingContent.style.maxHeight = "0px";
//                       }
//                   }
//               });

//               // Toggle current accordion
//               titleWrapper.classList.toggle("active", !isActive);
//               contentWrapper.classList.toggle("active", !isActive);

//               // Set max height
//               if (!isActive) {
//                   contentWrapper.style.maxHeight = `${contentWrapper.scrollHeight}px`;
//               } else {
//                   contentWrapper.style.maxHeight = "0px";
//               }
//           });
//       });
//   }

//   // Initialize on different loading states
//   function setupAccordion() {
//       if (document.readyState === 'loading') {
//           document.addEventListener('DOMContentLoaded', initAccordion);
//       } else {
//           initAccordion();
//       }

//       // Handle dynamic content changes
//       const observer = new MutationObserver((mutations) => {
//           mutations.forEach((mutation) => {
//               if (mutation.addedNodes.length || mutation.removedNodes.length) {
//                   initAccordion();
//               }
//           });
//       });

//       observer.observe(document.body, {
//           childList: true,
//           subtree: true
//       });
//   }

//   // Expose initialization method globally
//   window.reinitAccordion = initAccordion;

//   // Start setup
//   setupAccordion();
// })();

(function() {
    function initAccordion() {
        const accordionItems = document.querySelectorAll(".fb-accordion-item-wrapper");
        
        accordionItems.forEach(itemWrapper => {
            const titleWrapper = itemWrapper.querySelector(".fb-accordion-item-title-wrapper");
            const contentWrapper = itemWrapper.querySelector(".fb-accordion-content-wrapper");
  
            // Check current state for initial setup
            const isActive = titleWrapper.classList.contains("active");
  
            // Set initial max height
            if (isActive) {
              contentWrapper.style.maxHeight = `${contentWrapper.scrollHeight}px`;
            } else {
              contentWrapper.style.maxHeight = "0px";
            }
  
            // Prevent multiple initializations
            if (titleWrapper.hasAttribute('data-accordion-initialized')) return;
            titleWrapper.setAttribute('data-accordion-initialized', 'true');
  
            titleWrapper.addEventListener("click", function(event) {
                event.stopPropagation();
  
                // Check CURRENT state at click time
                const currentlyActive = titleWrapper.classList.contains("active");
  
                // Reset all accordions at the same level
                const parentAccordion = itemWrapper.closest(".fb-accordion-content-wrapper") || document.body;
                const siblingItems = parentAccordion.querySelectorAll(".fb-accordion-item-wrapper");
                
                siblingItems.forEach(sibling => {
                    if (sibling !== itemWrapper) {
                        const siblingTitle = sibling.querySelector(".fb-accordion-item-title-wrapper");
                        const siblingContent = sibling.querySelector(".fb-accordion-content-wrapper");
                        
                        if (siblingTitle) siblingTitle.classList.remove("active");
                        if (siblingContent) {
                            siblingContent.classList.remove("active");
                            siblingContent.style.maxHeight = "0px";
                        }
                    }
                });
  
                // Toggle current accordion based on current state
                if (currentlyActive) {
                    // Currently open, so close it
                    titleWrapper.classList.remove("active");
                    contentWrapper.classList.remove("active");
                    contentWrapper.style.maxHeight = "0px";
                } else {
                    // Currently closed, so open it
                    titleWrapper.classList.add("active");
                    contentWrapper.classList.add("active");
                    contentWrapper.style.maxHeight = `${contentWrapper.scrollHeight}px`;
                }
            });
        });
    }
  
    // Initialize on different loading states
    function setupAccordion() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAccordion);
        } else {
            initAccordion();
        }
  
        // Handle dynamic content changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initAccordion();
                }
            });
        });
  
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
  
    // Expose initialization method globally
    window.reinitAccordion = initAccordion;
  
    // Start setup
    setupAccordion();
  })();

