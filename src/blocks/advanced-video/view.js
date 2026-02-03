(function () {
    var initializedPlayers = new Set();

    /**
     * Smart Video URL Parser
     */
    function getEmbedUrl(url) {
        if (!url) return null;
        var str = url.trim();

        // 1. Check if it's already an iframe
        var iframeMatch = str.match(/src=["']([^"']+)["']/);
        if (iframeMatch) return { type: 'iframe', url: iframeMatch[1] };

        // 2. YouTube
        var youtubeMatch = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
        if (youtubeMatch) return { type: 'youtube', id: youtubeMatch[1], url: 'https://www.youtube.com/embed/' + youtubeMatch[1] };

        // 3. Vimeo
        var vimeoMatch = str.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-z0-9]+))?/i);
        if (vimeoMatch) {
            var vUrl = 'https://player.vimeo.com/video/' + vimeoMatch[1];
            if (vimeoMatch[2]) vUrl += '?h=' + vimeoMatch[2];
            return { type: 'vimeo', id: vimeoMatch[1], hash: vimeoMatch[2], url: vUrl };
        }

        // 4. Facebook
        if (str.includes('facebook.com') || str.includes('fb.watch')) {
            return {
                type: 'facebook',
                url: 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(str)
            };
        }

        // 5. Direct Video File
        var videoExtensions = /\.(mp4|webm|ogg|mov|m4v|ogv)(\?|$)/i;
        if (videoExtensions.test(str)) return { type: 'video', url: str };

        return { type: 'iframe', url: str };
    }

    function initVideoPlayer(container) {
        var containerId = container.id;
        if (!containerId || initializedPlayers.has(containerId)) return;
        initializedPlayers.add(containerId);

        var blockID = containerId.replace('fb-player-option-', '').replace('fb-player-option', '');
        var playIconSpan = blockID ? document.querySelector('.fb-play-icon.' + blockID) : document.querySelector('.fb-play-icon');

        var rawUrl = container.getAttribute('data-url');
        var videoRes = getEmbedUrl(rawUrl);
        if (!videoRes) return;

        var options = {
            autoplay: container.getAttribute('data-autoplay') === 'true',
            muted: container.getAttribute('data-muted') === 'true',
            loop: container.getAttribute('data-loop') === 'true',
            controls: container.getAttribute('data-controls') === 'true',
            previewImage: container.getAttribute('data-preview-image')
        };

        var playerWrapper = document.createElement('div');
        playerWrapper.className = 'fb-videojs-wrapper';
        playerWrapper.style.cssText = 'position:relative;width:100%;padding-top:56.25%;overflow:hidden;background:#000;';

        function buildUrl(isForcedPlay) {
            var baseUrl = videoRes.url;
            var params = [];
            var forAutoplay = isForcedPlay || options.autoplay;

            if (videoRes.type === 'facebook') {
                params.push('show_text=false');
                params.push('show_captions=false');
                params.push('appId'); // Facebook requirement sometimes
                if (forAutoplay) {
                    params.push('autoplay=true');
                    params.push('mute=true');
                } else {
                    params.push('autoplay=false');
                    if (options.muted) params.push('mute=true');
                }
            } else if (videoRes.type === 'youtube') {
                params.push('enablejsapi=1');
                params.push('origin=' + encodeURIComponent(window.location.origin));
                params.push('rel=0');
                if (forAutoplay) {
                    params.push('autoplay=1');
                    params.push('mute=1');
                } else if (options.muted) {
                    params.push('mute=1');
                }
                if (options.loop) {
                    params.push('loop=1');
                    params.push('playlist=' + videoRes.id);
                }
                if (!options.controls) params.push('controls=0');
            } else if (videoRes.type === 'vimeo') {
                if (forAutoplay) {
                    params.push('autoplay=1');
                    params.push('muted=1');
                } else if (options.muted) {
                    params.push('muted=1');
                }
                if (options.loop) params.push('loop=1');
                if (!options.controls) params.push('controls=0');
            }

            var finalUrl = baseUrl + (baseUrl.includes('?') ? '&' : '?') + params.join('&');
            return finalUrl;
        }

        function renderIframe(isForced) {
            var oldIframe = playerWrapper.querySelector('iframe');
            if (oldIframe) oldIframe.remove();

            var iframe = document.createElement('iframe');
            iframe.src = buildUrl(isForced);
            iframe.className = 'fb-video-iframe';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen');
            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
            iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
            playerWrapper.appendChild(iframe);
        }

        if (!options.previewImage || options.autoplay) {
            renderIframe(false);
            container.appendChild(playerWrapper);
        }

        if (options.previewImage && !options.autoplay) {
            container.style.position = 'relative';
            var overlay = document.createElement('div');
            overlay.className = 'fb-video-overlay';
            overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(' + options.previewImage + ');background-size:cover;background-position:center;cursor:pointer;z-index:5;';

            var onPlayClick = function (e) {
                if (e) e.preventDefault();
                overlay.style.display = 'none';
                if (playIconSpan) playIconSpan.style.display = 'none';
                if (!container.contains(playerWrapper)) container.appendChild(playerWrapper);
                renderIframe(true);
            };

            overlay.addEventListener('click', onPlayClick);
            if (playIconSpan) {
                playIconSpan.style.display = 'flex';
                playIconSpan.addEventListener('click', onPlayClick);
            }
            container.appendChild(overlay);
        }
    }

    function initAll() {
        document.querySelectorAll('.fb-player-option:not(.fb-initialized)').forEach(function (el) {
            initVideoPlayer(el);
            el.classList.add('fb-initialized');
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll);
    else initAll();

    if (typeof window !== 'undefined') {
        new MutationObserver(initAll).observe(document.body, { childList: true, subtree: true });
    }
})();