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

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.querySelector('iframe[name="editor-canvas"]');

    console.log(iframe);

    // Ensure iframe content is fully loaded
    iframe.onload = function () {
        applyResponsiveStyles();

        // Listen for window resize
        window.addEventListener("resize", applyResponsiveStyles);
    };

    function applyResponsiveStyles() {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        if (!iframeDoc) return; // Prevent errors if iframe isn't loaded

        const desktopResponsive = iframeDoc.querySelectorAll('fb-desktop-responsive');
        const tabletResponsive = iframeDoc.querySelectorAll('fb-tablet-responsive');
        const mobileResponsive = iframeDoc.querySelectorAll('fb-mobile-responsive');

        // Reset styles before applying new ones
        [desktopResponsive, tabletResponsive, mobileResponsive].forEach(elements => {
            elements.forEach(element => {
                element.style.background = "";
                element.style.opacity = "";
            });
        });

        if (iframe.offsetWidth > 1025) {
            desktopResponsive.forEach(element => {
                element.style.background = "repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px)";
                element.style.opacity = "0.4";
            });
        } else if (iframe.offsetWidth < 1024 && iframe.offsetWidth >= 768) {
            tabletResponsive.forEach(element => {
                element.style.background = "repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px)";
                element.style.opacity = "0.4";
            });
        } else if (iframe.offsetWidth < 767) {
            mobileResponsive.forEach(element => {
                element.style.background = "repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px)";
                element.style.opacity = "0.4";
            });
        }
    }
});



