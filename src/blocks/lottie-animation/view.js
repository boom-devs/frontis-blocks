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

        if (!jsonUrl && !jsonData) return;

        lottie.destroy(container); // Clear previous

        const animationData = jsonData ? JSON.parse(atob(jsonData)) : null;

        lottie.loadAnimation({
            container,
            renderer,
            loop,
            autoplay,
            animationData: animationData || null,
            path: jsonUrl || null,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet',
                progressiveLoad: true,
            },
        });
    });
});