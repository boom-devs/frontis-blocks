(function() {
    function init() {
        document.querySelectorAll('.fb-hotspot-marker').forEach((marker) => {
            if (marker.hasAttribute('data-init')) return;
            marker.setAttribute('data-init', 'true');

            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                const isLocked = marker.classList.contains('locked');
                document.querySelectorAll('.fb-hotspot-marker').forEach((m) => m.classList.remove('locked'));
                if (!isLocked) marker.classList.add('locked');
            });
        });

        document.addEventListener('click', () => {
            document.querySelectorAll('.fb-hotspot-marker').forEach((m) => m.classList.remove('locked'));
        });
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();
})(); 