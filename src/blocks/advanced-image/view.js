(function() {
    // Core lazy-load initializer
    function initLazyLoad() {

        // grab the first wrapper (or narrow down with a more specific selector)
        const wrapper = document.querySelector('.fb-advanced-image-wrapper');
        const switcherValue = wrapper.dataset.smartLazyLoadSwitcher; 

        if (!switcherValue) {
            return;
        }

        // Modern browsers with IntersectionObserver
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.removeAttribute('data-srcset');
                        }
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                observer.observe(img);
            });
        } else {
            // Fallback for older browsers
            window.addEventListener('load', function() {
                document.querySelectorAll('img[data-src]').forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                        img.removeAttribute('data-srcset');
                    }
                });
            });
        }
    }

    // Set up lazy-load on initial page load and observe dynamic content
    function setupLazyLoad() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initLazyLoad);
        } else {
            initLazyLoad();
        }

        // Watch for new images added to the DOM
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) {
                    initLazyLoad();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Expose a global re-initializer
    window.reinitLazyLoad = initLazyLoad;

    // Kick things off
    setupLazyLoad();
})();
