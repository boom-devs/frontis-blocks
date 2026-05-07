(function() {
    function initBackToTop() {
        const backToTopButtons = document.querySelectorAll(".fb-back-to-top-main-wrapper");
        
        backToTopButtons.forEach(button => {
            const innerWrapper = button.querySelector(".fb-back-to-top-inner-wrapper");
            
            // Initial state
            if (window.scrollY > 100) {
                button.classList.add("fb-show");
            } else {
                button.classList.remove("fb-show");
            }

            // Scroll event
            window.addEventListener("scroll", function() {
                if (window.scrollY > 100) {
                    button.classList.add("fb-show");
                } else {
                    button.classList.remove("fb-show");
                }
            }, { passive: true });

            // Click event
            button.addEventListener("click", function(e) {
                e.preventDefault();
                
                if (innerWrapper) {
                    innerWrapper.classList.add("active");
                }

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                // Remove active class after animation
                // Smooth scroll duration is not fixed, but we can approximate or use a timeout
                setTimeout(() => {
                    if (innerWrapper) {
                        innerWrapper.classList.remove("active");
                    }
                }, 800);
            });
        });
    }

    // Initialize on different loading states
    function setupBackToTop() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initBackToTop);
        } else {
            initBackToTop();
        }

        // Handle dynamic content changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initBackToTop();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Expose initialization method globally
    window.reinitBackToTop = initBackToTop;

    // Start setup
    setupBackToTop();
})();
