(function () {
    function initHotspots() {
        const markers = document.querySelectorAll('.fb-hotspot-marker');

        markers.forEach((marker) => {
            if (marker.hasAttribute('data-init')) return;
            marker.setAttribute('data-init', 'true');

            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                const isLocked = marker.classList.contains('locked');
                document.querySelectorAll('.fb-hotspot-marker').forEach((m) => m.classList.remove('locked'));
                if (!isLocked) marker.classList.add('locked');
            });
        });
    }

    if (!window.fbHotspotGlobalClickSet) {
        document.addEventListener('click', () => {
            document.querySelectorAll('.fb-hotspot-marker').forEach((m) => m.classList.remove('locked'));
        });
        window.fbHotspotGlobalClickSet = true;
    }

    function setupHotspots() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initHotspots);
        } else {
            initHotspots();
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    initHotspots();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    window.reinitHotspots = initHotspots;
    setupHotspots();
})();