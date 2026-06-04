(function () {
    function initVerticalTimeline() {
        const timelines = document.querySelectorAll(".fb-vertical-timeline-main-wrapper");

        timelines.forEach(timeline => {
            if (timeline.dataset.initialized) {
                return;
            }
            timeline.dataset.initialized = "true";

            const inner = timeline.querySelector(".fb-vertical-timeline-inner");
            if (!inner) return;

            const updateTimeline = () => {
                const icons = inner.querySelectorAll('.fb-vertical-timeline-icon');
                if (icons.length === 0) return;

                const firstIcon = icons[0];
                const lastIcon = icons[icons.length - 1];
                const innerRect = inner.getBoundingClientRect();
                const firstIconRect = firstIcon.getBoundingClientRect();
                const lastIconRect = lastIcon.getBoundingClientRect();

                const iconLeft = firstIconRect.left - innerRect.left + firstIconRect.width / 2;
                const lineTop = firstIconRect.top - innerRect.top + firstIconRect.height / 2;
                const lineBottom = innerRect.bottom - lastIconRect.bottom + lastIconRect.height / 2;

                inner.style.setProperty('--timeline-line-left', `${iconLeft}px`);
                inner.style.setProperty('--timeline-line-top', `${lineTop}px`);
                inner.style.setProperty('--timeline-line-bottom', `${lineBottom}px`);

                // Scroll progress calculation centered on 50% viewport height focal point
                const triggerY = window.innerHeight * 0.5;
                const timelineStart = innerRect.top + lineTop;
                const timelineEnd = innerRect.bottom - lineBottom;
                const totalHeight = timelineEnd - timelineStart;

                let progress = 0;
                if (totalHeight > 0) {
                    progress = (triggerY - timelineStart) / totalHeight;
                    progress = Math.max(0, Math.min(progress, 1));
                } else if (innerRect.top < triggerY) {
                    progress = 1;
                }

                inner.style.setProperty('--timeline-progress-scale', progress);
            };

            // Setup resize observer for dynamic child elements size changes
            if (typeof ResizeObserver !== 'undefined') {
                const observer = new ResizeObserver(() => {
                    updateTimeline();
                });
                observer.observe(inner);
                const icons = inner.querySelectorAll('.fb-vertical-timeline-icon');
                icons.forEach(icon => observer.observe(icon));
            }

            // Perform initial load positioning
            updateTimeline();

            // Perform scrolling/resizing calculations
            let ticking = false;
            const onScrollOrResize = () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        updateTimeline();
                        ticking = false;
                    });
                    ticking = true;
                }
            };

            window.addEventListener('scroll', onScrollOrResize, { passive: true });
            window.addEventListener('resize', onScrollOrResize, { passive: true });
        });
    }

    function setupVerticalTimeline() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initVerticalTimeline);
        } else {
            initVerticalTimeline();
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initVerticalTimeline();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    window.reinitVerticalTimeline = initVerticalTimeline;

    setupVerticalTimeline();
})();
