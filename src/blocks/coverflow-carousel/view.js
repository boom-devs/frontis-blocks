(function () {
    document.addEventListener('DOMContentLoaded', () => {
        // Find all instances of the coverflow carousel block on the page
        const carousels = document.querySelectorAll('.fb-coverflowCarousel-main-wrapper');

        carousels.forEach((carousel) => {
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

            // Default to the middle item
            let currentIndex = Math.floor(cards.length / 2);

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
                cards.forEach((card, i) => {
                    let offset = i - currentIndex;
                    if (loop) {
                        const half = Math.floor(cards.length / 2);
                        offset = ((i - currentIndex + half + cards.length * 2) % cards.length) - half;
                    }
                    const absOffset = Math.abs(offset);

                    if (offset === 0) {
                        // --- Active Center Item ---
                        card.style.transform = `translateX(0px) translateZ(0px) rotateY(0deg)`;
                        card.style.opacity = 1;
                        card.style.zIndex = 20;
                        card.classList.add('active');
                    } else {
                        // --- 1. TranslateX Formula ---
                        let txValue = 260;
                        for (let step = 2; step <= absOffset; step++) {
                            txValue += 230 + (10 * (step - 1));
                        }
                        const translateX = offset > 0 ? txValue : -txValue;

                        // --- 2. TranslateZ Formula ---
                        const translateZ = -(100 + (absOffset - 1) * 30);

                        // --- 3. Dynamic RotateY (Angle) ---
                        const rotateY = (55 + (absOffset - 1) * 5) * (offset > 0 ? -1 : 1);

                        // --- 4. Opacity (gradual decrease) ---
                        const opacity = Math.max(1 - (absOffset * 0.2), 0.3);

                        // Apply Final Transform
                        card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
                        card.style.opacity = opacity;
                        card.style.zIndex = 20 - absOffset;
                        card.classList.remove('active');
                    }

                    // Apply Dynamic Transition Speed
                    card.style.transition = `transform ${transitionSpeed / 1000}s ease, opacity ${transitionSpeed / 1000}s ease, z-index ${transitionSpeed / 1000}s ease`;
                });

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

            function startAutoplay() {
                if (!autoplay) return;
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
                const wrapper = carousel.querySelector('.fb-coverflowCarousel-wrapper');
                if (wrapper) {
                    wrapper.addEventListener('mouseenter', stopAutoplay);
                    wrapper.addEventListener('mouseleave', startAutoplay);
                }
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
    });
})();
