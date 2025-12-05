// view.js
import lottie from 'lottie-web';

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.fb-lottie-animation-container');

    containers.forEach(container => {
        const jsonUrl = container.getAttribute('data-json-url');
        const jsonData = container.getAttribute('data-json-data');
        const renderer = container.getAttribute('data-renderer') || 'svg';
        const loop = container.getAttribute('data-loop') === 'true';
        const autoplay = container.getAttribute('data-autoplay') === 'true';
        const speed = parseFloat(container.getAttribute('data-speed')) || 1;
        const hoverEffect = container.getAttribute('data-hover-effect') || 'none';
        const reverse = container.getAttribute('data-reverse') === 'true';

        if (!jsonUrl && !jsonData) return;

        lottie.destroy(container);

        const animationData = jsonData ? JSON.parse(atob(jsonData)) : null;

        // Adjust autoplay based on hover settings
        const shouldAutoplay = (hoverEffect === 'play-pause' || hoverEffect === 'play') ? false : autoplay;

        const animation = lottie.loadAnimation({
            container,
            renderer,
            loop,
            autoplay: shouldAutoplay,
            animationData: animationData || null,
            path: jsonUrl || null,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet',
                progressiveLoad: true,
            },

        });

        // Apply reverse if enabled
        if (reverse) {
            animation.setDirection(-1);
        } else {
            animation.setDirection(1);
        }

        // Set the animation speed
        if (animation && speed) {
            animation.setSpeed(speed);
        }

        // Handle hover effects
        if (hoverEffect !== 'none') {
            container.style.cursor = 'pointer';

            container.addEventListener('mouseenter', () => {
                switch (hoverEffect) {
                    case 'play':
                        animation.setDirection(reverse ? -1 : 1);
                        animation.play();
                        break;

                    case 'pause':
                        animation.pause();
                        break;

                    case 'stop':
                        animation.stop();
                        break;

                    case 'play-pause':
                        animation.setDirection(reverse ? -1 : 1);
                        animation.play();
                        break;

                    case 'reverse':
                        animation.setDirection(reverse ? -1 : 1);
                        animation.play();
                        break;

                    case 'toggle':
                        if (animation.isPaused) {
                            animation.setDirection(reverse ? -1 : 1);
                            animation.play();
                        } else {
                            animation.pause();
                        }
                        break;
                }
            });

            container.addEventListener('mouseleave', () => {
                switch (hoverEffect) {
                    case 'play':
                        animation.pause();
                        break;

                    case 'pause':
                        animation.setDirection(reverse ? -1 : 1);
                        animation.play();
                        break;

                    case 'play-pause':
                        animation.pause();
                        break;

                    case 'reverse':
                        animation.setDirection(reverse ? -1 : 1);
                        break;
                }
            });
        }
    });
});