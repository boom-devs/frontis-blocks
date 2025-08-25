(function () {
    function initSliders() {
        // Select all slider containers
        document.querySelectorAll('.fb-marquee-slider-container').forEach(function (sliderContainer) {
            const blockId = sliderContainer.dataset.blockId;
            if (!blockId) return;

            const swiperSettings = sliderContainer.dataset.swiperSettings;
            if (!swiperSettings) return;

            const sliderOptions = JSON.parse(swiperSettings);

            // Initialize Swiper for the current slider
            new Swiper(sliderContainer.querySelector('.fb-marquee-swiper'), sliderOptions);
        });
    }

    var setupDone = false;

    function setupInitialization() {
        if (setupDone) return;
        setupDone = true;

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(initSliders, 100);
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                setTimeout(initSliders, 100);
            });
        }

        if (typeof window !== 'undefined') {
            var lastUrl = window.location.href;
            var urlObserver = new MutationObserver(function () {
                if (lastUrl !== window.location.href) {
                    lastUrl = window.location.href;
                    setTimeout(initSliders, 300);
                }
            });

            urlObserver.observe(document.body, { childList: true, subtree: true });
        }
    }

    setupInitialization();

    // If needed, expose re-initialization function
    window.reinitSliders = initSliders;
})();