(function () {
    /**
     * Attempt to repair broken JSON from data-swiper-settings.
     * During WordPress import, wp_unslash() strips backslashes from the content,
     * which breaks the JSON because CSS selectors like:
     *   .fb-slider-container[data-block-id="fb-slider-xxx"]
     * end up having unescaped double quotes inside a JSON string value.
     *
     * Fix strategy: remove the inner quotes from attribute selectors,
     * e.g. [data-block-id="xxx"] → [data-block-id=xxx]
     */
    function repairSwiperJSON(raw) {
        // Fix unescaped quotes inside CSS attribute selectors
        // Pattern: [attr="value"] inside a JSON string → [attr=value]
        var repaired = raw.replace(/\[([a-z-]+)="([^"\]]+)"\]/g, '[$1=$2]');
        return JSON.parse(repaired);
    }

    function initSliders() {
        // Select all slider containers
        document.querySelectorAll('.fb-slider-container').forEach(function (sliderContainer) {
            var blockId = sliderContainer.dataset.blockId;
            if (!blockId) return;

            var swiperSettings = sliderContainer.dataset.swiperSettings;
            if (!swiperSettings) return;

            var sliderOptions = {};
            try {
                sliderOptions = JSON.parse(swiperSettings);
            } catch (e) {
                // JSON is likely broken by wp_unslash() stripping backslashes
                // from CSS attribute selectors — try repairing
                try {
                    sliderOptions = repairSwiperJSON(swiperSettings);
                } catch (e2) {
                    console.error("Failed to parse Swiper settings even after repair", e2);
                    return;
                }
            }

            var swiperEl = sliderContainer.querySelector('.fb-swiper');
            if (!swiperEl) return;

            // Skip if already initialized
            if (swiperEl.swiper) return;

            // Swiper 11.x requires the 'swiper' class on the container element.
            // Old saved content (e.g. imported from templates.json) may not have it,
            // so we add it dynamically before initialization.
            if (!swiperEl.classList.contains('swiper')) {
                swiperEl.classList.add('swiper');
            }

            // Initialize Swiper for the current slider
            new Swiper(swiperEl, sliderOptions);
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
