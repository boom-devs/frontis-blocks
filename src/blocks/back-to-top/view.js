(function () {
    function initBackToTop() {
        const backToTopButtons = document.querySelectorAll(".fb-back-to-top-main-wrapper");

        backToTopButtons.forEach(button => {
            if (button.dataset.initialized) {
                return;
            }
            button.dataset.initialized = "true";

            const innerWrapper = button.querySelector(".fb-back-to-top-inner-wrapper");

            const checkScroll = () => {
                if (window.scrollY > 100) {
                    button.classList.add("fb-show");
                } else {
                    button.classList.remove("fb-show");
                }
            };

            // Initial check
            checkScroll();

            window.addEventListener("scroll", checkScroll, { passive: true });

            button.addEventListener("click", function (e) {
                e.preventDefault();

                if (innerWrapper) {
                    innerWrapper.classList.add("active");
                }

                const duration = 600;
                const start = window.scrollY || window.pageYOffset;
                const startTime = performance.now();

                function scroll() {
                    const now = performance.now();
                    const time = Math.min(1, ((now - startTime) / duration));
                    const easeOutQuad = time * (2 - time);

                    window.scroll(0, Math.ceil((easeOutQuad * (0 - start)) + start));

                    if (window.scrollY > 0 && time < 1) {
                        requestAnimationFrame(scroll);
                    } else {
                        window.scroll(0, 0);
                        if (innerWrapper) {
                            innerWrapper.classList.remove("active");
                        }
                    }
                }
                requestAnimationFrame(scroll);
            });
        });
    }

    function setupBackToTop() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initBackToTop);
        } else {
            initBackToTop();
        }

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

    window.reinitBackToTop = initBackToTop;

    setupBackToTop();
})();
