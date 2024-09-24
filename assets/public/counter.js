document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.fb-counter-number');

    counters.forEach(counter => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter);
                    observer.disconnect(); // Stop observing after animation starts
                }
            });
        });
        observer.observe(counter);
    });

    function animateCounter(counterElement) {
        let start = 0;
        const end = parseInt(counterElement.getAttribute('aria-label'), 10) || 0;
        const duration = 2000;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);

            counterElement.textContent = current.toLocaleString();

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }
});