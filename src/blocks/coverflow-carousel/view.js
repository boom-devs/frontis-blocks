(function () {
    function initCoverflowCarousel() {
        // Find all instances of the coverflow carousel block on the page
        const carousels = document.querySelectorAll('.fb-coverflowCarousel-main-wrapper');

        carousels.forEach((carousel) => {
            // Skip if already initialized to avoid duplicate bindings
            if (carousel.dataset.initialized) return;
            carousel.dataset.initialized = 'true';

            // Find all cards inside THIS specific carousel
            const cards = carousel.querySelectorAll('.fb-coverflow-carousel-slide');

            // If no cards are found, skip to the next one
            if (!cards.length) return;

            // Retrieve configuration attributes
            const loop = carousel.getAttribute('data-loop') === 'true';
            const autoplay = carousel.getAttribute('data-autoplay') === 'true';
            const autoplaySpeed = parseInt(carousel.getAttribute('data-autoplay-speed') || '2000', 10);
            const transitionSpeed = parseInt(carousel.getAttribute('data-transition-speed') || '500', 10);
            const allowTouchMove = carousel.getAttribute('data-allow-touchmove') === 'true';
            const pauseOnHover = carousel.getAttribute('data-pause-on-hover') === 'true';
            const stopOnLastSlide = carousel.getAttribute('data-stop-on-last-slide') === 'true';
            const reverseDirection = carousel.getAttribute('data-reverse-direction') === 'true';
            const enableMouseWheel = carousel.getAttribute('data-enable-mousewheel') === 'true';
            const enableKeyboard = carousel.getAttribute('data-enable-keyboard') === 'true';
            const carouselTransitionEasing = carousel.getAttribute('data-transition-easing') || 'cubic-bezier(0.16, 1, 0.3, 1)';

            // Retrieve 3D space configuration attributes
            let txObj, tyObj, tzObj, rotObj, rotXObj, rotZObj, persObj, scaleObj;
            try {
                txObj = JSON.parse(carousel.getAttribute('data-translate-x') || '{}');
            } catch (e) { txObj = {}; }
            try {
                tyObj = JSON.parse(carousel.getAttribute('data-translate-y') || '{}');
            } catch (e) { tyObj = {}; }
            try {
                tzObj = JSON.parse(carousel.getAttribute('data-translate-z') || '{}');
            } catch (e) { tzObj = {}; }
            try {
                rotObj = JSON.parse(carousel.getAttribute('data-rotate-y') || '{}');
            } catch (e) { rotObj = {}; }
            try {
                rotXObj = JSON.parse(carousel.getAttribute('data-rotate-x') || '{}');
            } catch (e) { rotXObj = {}; }
            try {
                rotZObj = JSON.parse(carousel.getAttribute('data-rotate-z') || '{}');
            } catch (e) { rotZObj = {}; }
            try {
                persObj = JSON.parse(carousel.getAttribute('data-perspective') || '{}');
            } catch (e) { persObj = {}; }
            try {
                scaleObj = JSON.parse(carousel.getAttribute('data-scale') || '{}');
            } catch (e) { scaleObj = {}; }

            function getDeviceType() {
                const width = window.innerWidth;
                if (width <= 767) return 'Mobile';
                if (width <= 1024) return 'Tablet';
                return 'Desktop';
            }

            function getResponsiveVal(obj, defaultVal) {
                const device = getDeviceType();
                const val = obj[device] || obj['Desktop'] || defaultVal;
                return parseFloat(val);
            }

            // Default to the middle item
            let currentIndex = Math.floor(cards.length / 2);
            let isHovered = false;

            // Find Pagination Container
            const paginationContainer = carousel.querySelector('.fb-coverflow-carousel-pagination');

            // Initialize Pagination Structure
            if (paginationContainer) {
                if (paginationContainer.classList.contains('pagination-bullets')) {
                    paginationContainer.innerHTML = '';
                    cards.forEach((_, index) => {
                        const bullet = document.createElement('span');
                        bullet.classList.add('fb-coverflow-carousel-bullet');
                        if (index === currentIndex) bullet.classList.add('active');
                        bullet.addEventListener('click', (e) => {
                            e.stopPropagation();
                            currentIndex = index;
                            updateCarousel();
                            resetAutoplay();
                        });
                        paginationContainer.appendChild(bullet);
                    });
                } else if (paginationContainer.classList.contains('pagination-progressbar')) {
                    paginationContainer.innerHTML = '<span class="fb-coverflow-carousel-pagination-progressbar-fill"></span>';
                } else if (paginationContainer.classList.contains('pagination-fraction')) {
                    paginationContainer.innerHTML = `
                        <span class="fb-coverflow-carousel-pagination-fraction-current"></span>
                        <span class="fb-coverflow-carousel-pagination-fraction-separator"> / </span>
                        <span class="fb-coverflow-carousel-pagination-fraction-total"></span>
                    `;
                }
            }

            function updateCarousel() {
                const customX = getResponsiveVal(txObj, 260);
                const customY = getResponsiveVal(tyObj, 0);
                const customZ = getResponsiveVal(tzObj, -100);
                const customAngleY = getResponsiveVal(rotObj, 55);
                const customAngleX = getResponsiveVal(rotXObj, 0);
                const customAngleZ = getResponsiveVal(rotZObj, 0);
                const customPerspective = getResponsiveVal(persObj, 2000);
                const customScale = getResponsiveVal(scaleObj, 0.85);

                const wrapperEl = carousel.querySelector('.fb-coverflowCarousel-wrapper');
                if (wrapperEl) {
                    wrapperEl.style.perspective = `${customPerspective}px`;
                }

                cards.forEach((card, i) => {
                    let offset = i - currentIndex;
                    if (loop) {
                        const half = Math.floor(cards.length / 2);
                        offset = ((i - currentIndex + half + cards.length * 2) % cards.length) - half;
                    }
                    const absOffset = Math.abs(offset);

                    if (offset === 0) {
                        // --- Active Center Item ---
                        card.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)`;
                        card.style.opacity = 1;
                        card.style.zIndex = 20;
                        card.classList.add('active');
                    } else {
                        // --- 1. TranslateX Formula ---
                        let txValue = customX;
                        const stepGap = customX * 0.88;
                        for (let step = 2; step <= absOffset; step++) {
                            txValue += stepGap + (10 * (step - 1));
                        }
                        const translateX = offset > 0 ? txValue : -txValue;

                        // --- 2. TranslateY Formula ---
                        const translateY = customY * absOffset;

                        // --- 3. TranslateZ Formula ---
                        const translateZ = customZ + (absOffset - 1) * -30;

                        // --- 4. Dynamic RotateY (Angle) ---
                        const angleFactor = customAngleY >= 0 ? 5 : -5;
                        const rotateY = (customAngleY + (absOffset - 1) * angleFactor) * (offset > 0 ? -1 : 1);

                        // --- 5. RotateX and RotateZ ---
                        const rotateX = customAngleX;
                        const rotateZ = customAngleZ * (offset > 0 ? -1 : 1);

                        // --- 6. Inactive Items Scale ---
                        const scaleVal = Math.max(1 - (absOffset * (1 - customScale)), 0.1);

                        // --- 7. Opacity (gradual decrease) ---
                        const opacity = Math.max(1 - (absOffset * 0.2), 0.3);

                        // Apply Final Transform
                        card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scaleVal})`;
                        card.style.opacity = opacity;
                        card.style.zIndex = 20 - absOffset;
                        card.classList.remove('active');
                    }

                    // Apply Dynamic Transition Speed
                    card.style.transition = `transform ${transitionSpeed / 1000}s ${carouselTransitionEasing}, opacity ${transitionSpeed / 1000}s ${carouselTransitionEasing}, z-index ${transitionSpeed / 1000}s ${carouselTransitionEasing}`;
                });

                // Apply disabled styles to arrows if loop is off and limits are reached
                const pBtn = carousel.querySelector('.fb-coverflow-carousel-prev-btn');
                const nBtn = carousel.querySelector('.fb-coverflow-carousel-next-btn');

                if (pBtn) {
                    if (!loop && currentIndex === 0) {
                        pBtn.classList.add('disabled');
                        pBtn.style.opacity = '0.5';
                        pBtn.style.pointerEvents = 'none';
                    } else {
                        pBtn.classList.remove('disabled');
                        pBtn.style.opacity = '';
                        pBtn.style.pointerEvents = '';
                    }
                }
                if (nBtn) {
                    if (!loop && currentIndex === cards.length - 1) {
                        nBtn.classList.add('disabled');
                        nBtn.style.opacity = '0.5';
                        nBtn.style.pointerEvents = 'none';
                    } else {
                        nBtn.classList.remove('disabled');
                        nBtn.style.opacity = '';
                        nBtn.style.pointerEvents = '';
                    }
                }

                // Update Pagination DOM if it exists
                if (paginationContainer) {
                    if (paginationContainer.classList.contains('pagination-bullets')) {
                        const bullets = paginationContainer.querySelectorAll('.fb-coverflow-carousel-bullet');
                        bullets.forEach((bullet, idx) => {
                            if (idx === currentIndex) {
                                bullet.classList.add('active');
                            } else {
                                bullet.classList.remove('active');
                            }
                        });
                    } else if (paginationContainer.classList.contains('pagination-progressbar')) {
                        const fill = paginationContainer.querySelector('.fb-coverflow-carousel-pagination-progressbar-fill');
                        if (fill) {
                            const progress = ((currentIndex + 1) / cards.length) * 100;
                            fill.style.width = `${progress}%`;
                        }
                    } else if (paginationContainer.classList.contains('pagination-fraction')) {
                        const currentEl = paginationContainer.querySelector('.fb-coverflow-carousel-pagination-fraction-current');
                        const totalEl = paginationContainer.querySelector('.fb-coverflow-carousel-pagination-fraction-total');
                        if (currentEl) currentEl.textContent = currentIndex + 1;
                        if (totalEl) totalEl.textContent = cards.length;
                    }
                }
            }

            // Navigation functions
            function moveNext() {
                if (currentIndex >= cards.length - 1) {
                    if (stopOnLastSlide && autoplayTimer) {
                        stopAutoplay();
                        return;
                    }
                    if (!loop) return;
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
                updateCarousel();
            }

            function movePrev() {
                if (currentIndex <= 0) {
                    if (stopOnLastSlide && autoplayTimer) {
                        stopAutoplay();
                        return;
                    }
                    if (!loop) return;
                    currentIndex = cards.length - 1;
                } else {
                    currentIndex--;
                }
                updateCarousel();
            }

            // Bind click events on navigation buttons
            const prevBtn = carousel.querySelector('.fb-coverflow-carousel-prev-btn');
            const nextBtn = carousel.querySelector('.fb-coverflow-carousel-next-btn');

            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    movePrev();
                    resetAutoplay();
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    moveNext();
                    resetAutoplay();
                });
            }

            // Click on a card to bring it to center
            cards.forEach((card, i) => {
                card.style.cursor = 'pointer'; // Make it look clickable
                card.onclick = (e) => {
                    e.stopPropagation();
                    currentIndex = i;
                    updateCarousel();
                    resetAutoplay();
                };
            });

            // Autoplay Functionality
            let autoplayTimer = null;

            function isHovering() {
                if (!pauseOnHover) return false;
                try {
                    return isHovered || carousel.matches(':hover') || carousel.querySelector(':hover') !== null;
                } catch (e) {
                    return isHovered;
                }
            }

            function startAutoplay() {
                if (!autoplay) return;
                if (isHovering()) return; // Keep paused if hovered
                stopAutoplay();
                autoplayTimer = setInterval(() => {
                    if (reverseDirection) {
                        movePrev();
                    } else {
                        moveNext();
                    }
                }, autoplaySpeed);
            }

            function stopAutoplay() {
                if (autoplayTimer) {
                    clearInterval(autoplayTimer);
                    autoplayTimer = null;
                }
            }

            function resetAutoplay() {
                stopAutoplay();
                startAutoplay();
            }

            // Pause on Hover
            if (autoplay && pauseOnHover) {
                carousel.addEventListener('mouseenter', () => {
                    isHovered = true;
                    stopAutoplay();
                });
                carousel.addEventListener('mouseleave', () => {
                    isHovered = false;
                    startAutoplay();
                });
            }

            // Touch Move (Swipe / Drag) Support
            if (allowTouchMove) {
                const wrapper = carousel.querySelector('.fb-coverflowCarousel-wrapper');
                if (wrapper) {
                    let startX = 0;
                    let currentX = 0;
                    let isDragging = false;

                    wrapper.addEventListener('touchstart', (e) => {
                        // Skip if clicking pagination dots/bullets
                        if (e.target.closest('.fb-coverflow-carousel-pagination')) {
                            return;
                        }
                        startX = e.touches[0].clientX;
                        currentX = e.touches[0].clientX; // Set to same value to avoid fake swipe on click
                        isDragging = true;
                        stopAutoplay();
                    }, { passive: true });

                    wrapper.addEventListener('touchmove', (e) => {
                        if (!isDragging) return;
                        currentX = e.touches[0].clientX;
                    }, { passive: true });

                    wrapper.addEventListener('touchend', () => {
                        if (!isDragging) return;
                        isDragging = false;
                        const diff = startX - currentX;
                        if (Math.abs(diff) > 50) {
                            if (diff > 0) {
                                moveNext();
                            } else {
                                movePrev();
                            }
                        }
                        startAutoplay();
                    });

                    // Mouse Drag Support
                    wrapper.addEventListener('mousedown', (e) => {
                        // Skip if clicking navigation arrows or pagination container
                        if (e.target.closest('.fb-coverflow-carousel-navigation') || e.target.closest('.fb-coverflow-carousel-pagination')) {
                            return;
                        }
                        startX = e.clientX;
                        currentX = e.clientX; // Set to same value to avoid fake swipe on click
                        isDragging = true;
                        stopAutoplay();
                    });

                    wrapper.addEventListener('mousemove', (e) => {
                        if (!isDragging) return;
                        currentX = e.clientX;
                    });

                    window.addEventListener('mouseup', () => {
                        if (!isDragging) return;
                        isDragging = false;
                        const diff = startX - currentX;
                        if (Math.abs(diff) > 50) {
                            if (diff > 0) {
                                moveNext();
                            } else {
                                movePrev();
                            }
                        }
                        startAutoplay();
                    });
                }
            }

            // Mouse Wheel Support
            if (enableMouseWheel) {
                const wrapper = carousel.querySelector('.fb-coverflowCarousel-wrapper');
                if (wrapper) {
                    let lastWheelTime = 0;
                    wrapper.addEventListener('wheel', (e) => {
                        e.preventDefault();
                        const now = Date.now();
                        if (now - lastWheelTime < 500) return; // Throttle scroll
                        lastWheelTime = now;

                        if (e.deltaY > 0) {
                            moveNext();
                        } else {
                            movePrev();
                        }
                        resetAutoplay();
                    }, { passive: false });
                }
            }

            // Keyboard Navigation Support
            if (enableKeyboard) {
                window.addEventListener('keydown', (e) => {
                    // Check if block is visible or in viewport (optional but good practice)
                    const rect = carousel.getBoundingClientRect();
                    const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

                    if (inViewport) {
                        if (e.key === 'ArrowRight') {
                            moveNext();
                            resetAutoplay();
                        } else if (e.key === 'ArrowLeft') {
                            movePrev();
                            resetAutoplay();
                        }
                    }
                });
            }

            // Initial setup
            updateCarousel();
            startAutoplay();
        });
    }

    var setupDone = false;

    function setupInitialization() {
        if (setupDone) return;
        setupDone = true;

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(initCoverflowCarousel, 100);
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                setTimeout(initCoverflowCarousel, 100);
            });
        }

        if (typeof window !== 'undefined') {
            var lastUrl = window.location.href;
            var urlObserver = new MutationObserver(function () {
                if (lastUrl !== window.location.href) {
                    lastUrl = window.location.href;
                    setTimeout(initCoverflowCarousel, 300);
                }
            });

            urlObserver.observe(document.body, { childList: true, subtree: true });
        }
    }

    setupInitialization();

    // If needed, expose re-initialization function
    window.reinitCoverflowCarousel = initCoverflowCarousel;
})();
