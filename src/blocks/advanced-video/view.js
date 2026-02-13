(function() {
    var initializedPlayers = new Set();

    function initVideoPlayer(container) {
        // Skip if already initialized
        var containerId = container.id;
        if (!containerId || initializedPlayers.has(containerId)) {
            return;
        }

        // Mark as initialized
        initializedPlayers.add(containerId);

        // Find the play icon for this specific container
        var blockID = containerId === 'fb-player-option' ? '' : containerId.replace('fb-player-option-', '');
        var playIconSpan = blockID ? document.querySelector('.fb-play-icon.' + blockID) : document.querySelector('.fb-play-icon');

        var url = container.getAttribute('data-url');
        if (!url) {
            return;
        }

        var autoPlay = container.getAttribute('data-autoplay') === 'true';
        var muted = container.getAttribute('data-muted') === 'true';
        var loop = container.getAttribute('data-loop') === 'true';
        var controls = container.getAttribute('data-controls') === 'true';
        var previewImage = container.getAttribute('data-preview-image');
        var playIcon = container.getAttribute('data-play-icon');

        renderReactPlayer(container, {
            url: url,
            playing: autoPlay,
            muted: muted,
            loop: loop,
            controls: controls,
            light: previewImage,
            onClickPreview: function() {
                container.setAttribute('data-autoplay', 'true');
                if (playIconSpan) {
                    playIconSpan.style.display = 'none';
                }
                renderReactPlayer(container, {
                    url: url,
                    playing: true,
                    muted: muted,
                    loop: loop,
                    controls: controls,
                    light: previewImage,
                    width: '100%',
                    height: '100%',
                    className: 'fb-react-player'
                });
            },
            width: '100%',
            height: '100%',
            className: 'fb-react-player'
        });

        if (playIconSpan) {
            playIconSpan.addEventListener('click', function() {
                var previewElement = container.querySelector('.react-player__preview');
                if (previewElement) {
                    previewElement.click();
                }
            });
        }
    }

    function initAllVideoPlayers() {
        // Find all video player containers (both old and new format)
        var newFormatContainers = document.querySelectorAll('[id^="fb-player-option-"]');
        var oldFormatContainer = document.getElementById('fb-player-option');
        
        // Initialize new format containers
        newFormatContainers.forEach(function(container) {
            initVideoPlayer(container);
        });
        
        // Initialize old format container (if exists and not already initialized)
        if (oldFormatContainer && !initializedPlayers.has('fb-player-option')) {
            initVideoPlayer(oldFormatContainer);
        }
    }

    function setupInitialization() {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(initAllVideoPlayers, 100);
        } else {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(initAllVideoPlayers, 100);
            });
        }

        if (typeof window !== 'undefined') {
            var lastUrl = window.location.href;
            var urlObserver = new MutationObserver(function() {
                if (lastUrl !== window.location.href) {
                    lastUrl = window.location.href;
                    // Reset initialized players on URL change
                    initializedPlayers.clear();
                    setTimeout(initAllVideoPlayers, 300);
                } else {
                    // Check for new players that might have been added
                    setTimeout(initAllVideoPlayers, 100);
                }
            });

            urlObserver.observe(document.body, { childList: true, subtree: true });
        }
    }

    setupInitialization();

    window.reinitVideoPlayer = initAllVideoPlayers;
})();