(function() {
    function initMarqueeCarousels() {
        const sliders = document.querySelectorAll('.fb-marquee-carousel-container');
        
        sliders.forEach((sliderContainer) => {
            // Prevent multiple initializations
            if (sliderContainer.hasAttribute('data-carousel-initialized')) return;
            sliderContainer.setAttribute('data-carousel-initialized', 'true');

            try {
                const swiperSettings = sliderContainer.dataset.swiperSettings;
                const slideWidth = sliderContainer.dataset.slideWidth;
                if (swiperSettings) {
                    const settings = JSON.parse(swiperSettings);
                    
                    settings.on = {
                        init: function () {
                            const slides = sliderContainer.querySelectorAll('.swiper-slide');
                            slides.forEach(slide => {
                                slide.style.width = slideWidth;
                            });
                        }
                    };

                    new Swiper(sliderContainer.querySelector('.swiper'), settings);
                }
            } catch (error) {
                console.error('Error initializing slider:', error);
            }
        });
    }

    // Initialize on different loading states
    function setupMarqueeCarousels() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initMarqueeCarousels);
        } else {
            initMarqueeCarousels();
        }

        // Handle dynamic content changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initMarqueeCarousels();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Support WordPress hooks if available
        if (window.wp && window.wp.hooks) {
            window.wp.hooks.addAction('blocks.blockRendered', 'frontis-marquee-carousel', initMarqueeCarousels);
        }
    }

    // Expose initialization method globally
    window.reinitMarqueeCarousels = initMarqueeCarousels;

    // Start setup
    setupMarqueeCarousels();
})();