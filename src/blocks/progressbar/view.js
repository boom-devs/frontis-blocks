(function() {
    function initProgressBar() {
        const progressBars = document.querySelectorAll(".fb-progressbar-wrapper");
        
        progressBars.forEach(progressBarWrapper => {
            const progressLine = progressBarWrapper.querySelector(".fb-progressbar-line");
            const progressNumber = progressBarWrapper.getAttribute('data-progress') || 
                                 progressBarWrapper.querySelector('[data-progress]')?.getAttribute('data-progress') || 
                                 50; // Default fallback

            // Prevent multiple initializations
            if (progressBarWrapper.hasAttribute('data-progressbar-initialized')) return;
            progressBarWrapper.setAttribute('data-progressbar-initialized', 'true');

            if (progressLine) {
                animateProgressBar(progressLine, progressNumber);
            }
        });
    }

    function animateProgressBar(progressLine, finalCount) {
        const percentageSpan = progressLine.querySelector('.fb-progressbar-number');
        const progressBarWrapper = progressLine.closest('.fb-progressbar-wrapper');
        let count = 0;
        const animationDuration = 500;
        const intervalTime = 10;
        const step = finalCount / (animationDuration / intervalTime);
        
        // Check if it's vertical progress bar
        const isVertical = progressBarWrapper.classList.contains('fb-progressbar-vertical') ||
                          progressBarWrapper.closest('.fb-progressbar-vertical');
        
        // Reset the progress for animation replay
        if (isVertical) {
            // Set CSS properties for bottom-to-top animation
            progressLine.style.position = 'absolute';
            progressLine.style.bottom = '0';
            progressLine.style.left = '0';
            progressLine.style.right = '0';
            progressLine.style.height = '0%';
            progressLine.style.transformOrigin = 'bottom';
            
            // Ensure the wrapper has relative positioning
            if (getComputedStyle(progressBarWrapper).position === 'static') {
                progressBarWrapper.style.position = 'relative';
            }
        } else {
            progressLine.style.width = '0%';
        }
        
        if (percentageSpan) {
            percentageSpan.textContent = '0%';
        }
        
        // Delay to allow the initial render
        setTimeout(() => {
            const interval = setInterval(() => {
                count += step;
                if (count >= finalCount) {
                    count = finalCount;
                    clearInterval(interval);
                }
                
                // Set width for horizontal, height for vertical
                if (isVertical) {
                    progressLine.style.height = count + '%';
                } else {
                    progressLine.style.width = count + '%';
                }
                
                // Update percentage display if it exists
                if (percentageSpan) {
                    percentageSpan.textContent = Math.round(count) + '%';
                    
                    // Only position horizontally for horizontal progress bars
                    if (!isVertical) {
                        percentageSpan.style.left = count + '%';
                        
                        // Adjust positioning to prevent overflow
                        if (count > 90) {
                            percentageSpan.style.transform = 'translateX(-100%)';
                        } else if (count < 10) {
                            percentageSpan.style.transform = 'translateX(0%)';
                        } else {
                            percentageSpan.style.transform = 'translateX(-50%)';
                        }
                    } else {
                        // For vertical progress bars, position the percentage text appropriately
                        percentageSpan.style.position = 'absolute';
                        percentageSpan.style.bottom = count + '%';
                        percentageSpan.style.left = '50%';
                        percentageSpan.style.transform = 'translate(-50%, 50%)';
                    }
                }
            }, intervalTime);
        }, 100);
    }

    function handleIntersectionObserver() {
        // Create intersection observer for performance optimization
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBarWrapper = entry.target;
                    const progressLine = progressBarWrapper.querySelector(".fb-progressbar-line");
                    const progressNumber = progressBarWrapper.getAttribute('data-progress') || 
                                         progressBarWrapper.querySelector('[data-progress]')?.getAttribute('data-progress') || 
                                         50;

                    // Check if already animated
                    if (!progressBarWrapper.hasAttribute('data-progressbar-animated')) {
                        progressBarWrapper.setAttribute('data-progressbar-animated', 'true');
                        
                        if (progressLine) {
                            animateProgressBar(progressLine, progressNumber);
                        }
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all progress bars
        document.querySelectorAll('.fb-progressbar-wrapper').forEach(progressBar => {
            observer.observe(progressBar);
        });
    }

    // Initialize on different loading states
    function setupProgressBar() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initProgressBar();
                handleIntersectionObserver();
            });
        } else {
            initProgressBar();
            handleIntersectionObserver();
        }

        // Handle dynamic content changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    // Check if new progress bars were added
                    const hasNewProgressBars = Array.from(mutation.addedNodes).some(node => {
                        return node.nodeType === 1 && (
                            node.classList?.contains('fb-progressbar-wrapper') ||
                            node.querySelector?.('.fb-progressbar-wrapper')
                        );
                    });
                    
                    if (hasNewProgressBars) {
                        setTimeout(() => {
                            initProgressBar();
                            handleIntersectionObserver();
                        }, 100);
                    }
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Expose initialization method globally
    window.reinitProgressBar = initProgressBar;

    // Start setup
    setupProgressBar();
})();