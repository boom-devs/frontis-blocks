(function () {
    var initializedPlayers = new Set();

    function initVideoPlayer(container) {
        var containerId = container.id;
        if (!containerId || initializedPlayers.has(containerId)) return;

        initializedPlayers.add(containerId);

        var blockID = containerId.replace('fb-player-option-', '').replace('fb-player-option', '');
        var playIconSpan = blockID ? document.querySelector('.fb-play-icon.' + blockID) : document.querySelector('.fb-play-icon');

        var rawUrl = container.getAttribute('data-url');
        if (!rawUrl) return;
        rawUrl = rawUrl.trim();

        // High-Quality Video URL Sanitizer
        function getSanitizedUrl(str) {
            // Check for iframe code
            var iframeMatch = str.match(/src=["']([^"']+)["']/);
            var url = iframeMatch ? iframeMatch[1] : str;

            if (url.includes('youtube.com') || url.includes('youtu.be')) {
                // Precise ID extraction
                var idMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
                var videoId = idMatch ? idMatch[1] : null;

                if (videoId) {
                    // Rebuild a high-compatibility watch URL
                    url = 'https://www.youtube.com/watch?v=' + videoId;

                    // Restore playlist if present
                    var listMatch = str.match(/[?&]list=([^#&?]+)/);
                    if (listMatch) url += '&list=' + listMatch[1];
                }
            }
            return url;
        }

        var url = getSanitizedUrl(rawUrl);
        var isAutoplay = container.getAttribute('data-autoplay') === 'true';
        var isMuted = container.getAttribute('data-muted') === 'true';
        var isLoop = container.getAttribute('data-loop') === 'true';
        var hasControls = container.getAttribute('data-controls') === 'true';
        var previewImage = container.getAttribute('data-preview-image');

        // State tracking
        var playerState = {
            playing: isAutoplay,
            hasStarted: isAutoplay || !previewImage,
            light: !isAutoplay && previewImage ? previewImage : false
        };

        function getBaseConfig() {
            var siteOrigin = window.location.origin ? window.location.origin.replace(/\/$/, '') : (window.location.protocol + '//' + window.location.hostname);

            return {
                url: url,
                playing: playerState.playing,
                muted: isMuted,
                loop: isLoop,
                controls: hasControls,
                light: playerState.light,
                width: '100%',
                height: '100%',
                className: 'fb-react-player',
                config: {
                    youtube: {
                        playerVars: {
                            origin: siteOrigin,
                            enablejsapi: 1,
                            rel: 0,
                            modestbranding: 0, // Set to 0 to avoid configuration conflicts
                        }
                    },
                    vimeo: {
                        playerOptions: {
                            origin: siteOrigin,
                            transparent: 0,
                        }
                    }
                }
            };
        }

        function render(forceUpdate) {
            var config = getBaseConfig();

            config.onClickPreview = function () {
                playerState.hasStarted = true;
                playerState.playing = true;
                playerState.light = false;
                if (playIconSpan) playIconSpan.style.display = 'none';
                render(true);
            };

            config.onPlay = function () {
                playerState.playing = true;
                playerState.hasStarted = true;
                if (playIconSpan) playIconSpan.style.display = 'none';
            };

            config.onPause = function () {
                playerState.playing = false;
                if (playIconSpan) playIconSpan.style.display = 'flex';
            };

            config.onEnded = function () {
                if (!isLoop) {
                    playerState.playing = false;
                    if (playIconSpan) playIconSpan.style.display = 'flex';
                }
            };

            renderReactPlayer(container, config);
        }

        // Initial render
        render();

        const iframe = container.querySelector('iframe');
        if (iframe) {
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        }

        if (playIconSpan) {
            // Initial state for play icon - show if not playing OR if it's youtube and we need to show preview
            var shouldShow = !playerState.playing;
            playIconSpan.style.display = shouldShow ? 'flex' : 'none';

            playIconSpan.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (!playerState.hasStarted && playerState.light) {
                    var previewTrigger = container.querySelector('.react-player__preview');
                    if (previewTrigger) {
                        previewTrigger.click();
                    } else {
                        playerState.hasStarted = true;
                        playerState.playing = true;
                        playerState.light = false;
                        render();
                    }
                } else {
                    playerState.playing = !playerState.playing;
                    render();
                }
            });
        }
    }

    function initAllVideoPlayers() {
        var containers = document.querySelectorAll('.fb-player-option:not(.initialized)');
        containers.forEach(function (el) {
            if (!initializedPlayers.has(el.id)) {
                initVideoPlayer(el);
                el.classList.add('initialized');
            }
        });
    }

    var initToken;
    function requestInit() {
        if (initToken) cancelAnimationFrame(initToken);
        initToken = requestAnimationFrame(function () {
            initAllVideoPlayers();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', requestInit);
    } else {
        requestInit();
    }

    if (typeof window !== 'undefined') {
        var currentUrl = window.location.href;
        var mutationObserver = new MutationObserver(function (mutations) {
            var hasNewVideo = false;
            if (currentUrl !== window.location.href) {
                currentUrl = window.location.href;
                initializedPlayers.clear();
                hasNewVideo = true;
            } else {
                for (var i = 0; i < mutations.length; i++) {
                    if (mutations[i].addedNodes.length) {
                        hasNewVideo = true;
                        break;
                    }
                }
            }
            if (hasNewVideo) requestInit();
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    window.reinitVideoPlayer = initAllVideoPlayers;
})();