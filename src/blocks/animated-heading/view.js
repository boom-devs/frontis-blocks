(function () {
    function initAnimatedHeading() {
        const containers = document.querySelectorAll('.fb-animated-heading-container');

        containers.forEach((container) => {
            const animationType = container.getAttribute('data-animation-type');

            // Prevent multiple initializations
            if (container.hasAttribute('data-heading-initialized')) return;
            container.setAttribute('data-heading-initialized', 'true');

            // Handle Typing & Highlight Animation
            if (animationType === 'typing' || animationType === 'highlight') {
                const typingContainer = container.querySelector('.fb-animated-headings');
                if (!typingContainer) return;

                const itemElements = container.querySelectorAll('.fb-animated-heading-item');
                const items = Array.from(itemElements).map(el => el.textContent).filter(Boolean);

                if (!items.length) return;

                itemElements.forEach(el => el.style.display = 'none'); // hide original

                let currentItem = 0, charIndex = 0, isDeleting = false;

                function typeEffect() {
                    const currentText = items[currentItem];
                    const displayText = currentText.substring(0, charIndex);
                    typingContainer.textContent = displayText;

                    if (!isDeleting) {
                        if (charIndex < currentText.length) {
                            charIndex++;
                            setTimeout(typeEffect, 100);
                        } else {
                            isDeleting = true;
                            setTimeout(typeEffect, 1000);
                        }
                    } else {
                        if (charIndex > 0) {
                            charIndex--;
                            setTimeout(typeEffect, 50);
                        } else {
                            isDeleting = false;
                            currentItem = (currentItem + 1) % items.length;
                            setTimeout(typeEffect, 500);
                        }
                    }
                }

                typeEffect();
            }

            // Handle Swirl Animation
            if (animationType === 'swirl') {

                const texts = Array.from(container.querySelectorAll('.fb-animated-heading-item'))
                    .map(item => item.textContent).filter(Boolean);

                if (texts.length === 0) return;

                let currentIndex = 0;
                const containerWrapper = container.querySelector('#animated-heading-wrapper');

                if (!containerWrapper) return;
                containerWrapper.innerHTML = '';

                function createWordSpan(text, isActive = false) {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'fb-animated-heading-dynamic-text';
                    if (isActive) wrapper.classList.add('fb-animated-heading-text-active');

                    text.split('').forEach((char) => {
                        const letter = document.createElement('span');
                        letter.className = 'fb-animated-heading-dynamic-letter';
                        letter.textContent = char === ' ' ? '\u00A0' : char;
                        wrapper.appendChild(letter);
                    });

                    return wrapper;
                }

                function showNextWord() {
                    const oldWord = containerWrapper.querySelector('.fb-animated-heading-text-active');
                    const newWord = createWordSpan(texts[currentIndex], true);
                    containerWrapper.appendChild(newWord);

                    const newLetters = newWord.querySelectorAll('.fb-animated-heading-dynamic-letter');

                    const totalWidthSubPixel = Array.from(newLetters)
                        .reduce((sum, letter) => sum + letter.getBoundingClientRect().width, 0);

                    const swirlWrapper = container.querySelector('.fb-animated-heading-swirl-wrapper');

                    if (swirlWrapper) {
                        swirlWrapper.style.width = `${totalWidthSubPixel}px`;
                    }

                    newLetters.forEach((l, i) => {
                        setTimeout(() => {
                            l.classList.add('fb-animated-heading-animation-in');
                        }, i * 30);
                    });

                    if (oldWord) {
                        oldWord.classList.remove('fb-animated-heading-text-active');
                        const oldLetters = oldWord.querySelectorAll('.fb-animated-heading-dynamic-letter');
                        oldLetters.forEach((l, i) => {
                            setTimeout(() => {
                                l.classList.add('fb-animated-heading-animation-out');
                            }, i * 30);
                        });

                        setTimeout(() => {
                            oldWord.remove();
                        }, oldLetters.length * 30 + 500);
                    }

                    currentIndex = (currentIndex + 1) % texts.length;
                }

                const firstWord = createWordSpan(texts[currentIndex], true);
                containerWrapper.appendChild(firstWord);

                const firstLetters = firstWord.querySelectorAll('.fb-animated-heading-dynamic-letter');
                firstLetters.forEach((l, i) => {
                    setTimeout(() => {
                        l.classList.add('fb-animated-heading-animation-in');
                    }, i * 30);
                });

                currentIndex = (currentIndex + 1) % texts.length;
                setInterval(showNextWord, 3000);
            }

            // Handle Reveal Animation
            if (animationType === 'reveal') {
                const itemElements = container.querySelectorAll('.fb-animated-heading-item');
                const texts = Array.from(itemElements).map(el => el.textContent.trim()).filter(Boolean);
                if (!texts.length) return;

                itemElements.forEach(el => el.style.display = 'none');

                const wrapper = container.querySelector('.fb-animated-heading-reveal-wrapper');
                if (!wrapper) return;

                const CHAR_DELAY = parseInt(wrapper.dataset.charDelay) || 200;
                const APPEAR_DURATION = parseInt(wrapper.dataset.appearDuration) || 800;
                const HIDE_DURATION = parseInt(wrapper.dataset.hideDuration) || 700;
                const VISIBLE_HOLD = parseInt(wrapper.dataset.visibleHold) || 2000;
                const RESET_DELAY = parseInt(wrapper.dataset.resetDelay) || 300;

                let currentIndex = 0;

                function createCharSpans(text) {
                    const fragment = document.createDocumentFragment();
                    const spans = [];
                    text.split('').forEach((char) => {
                        const span = document.createElement('span');
                        span.className = 'fb-animated-heading-char';
                        if (char === ' ') {
                            span.classList.add('fb-animated-heading-char-space');
                            span.innerHTML = '&nbsp;';
                        } else {
                            span.textContent = char;
                        }
                        fragment.appendChild(span);
                        spans.push(span);
                    });
                    return { fragment, spans };
                }

                function animateWord() {
                    wrapper.innerHTML = '';
                    const text = texts[currentIndex];
                    const { fragment, spans } = createCharSpans(text);
                    wrapper.appendChild(fragment);

                    spans.forEach((span, i) => {
                        setTimeout(() => {
                            span.classList.add('fb-animated-heading-char-appear');
                        }, i * CHAR_DELAY);
                    });

                    const visibleTime = (spans.length - 1) * CHAR_DELAY + APPEAR_DURATION;
                    const hideStart = visibleTime + VISIBLE_HOLD;

                    setTimeout(() => {
                        spans.forEach((span, i) => {
                            setTimeout(() => {
                                span.classList.remove('fb-animated-heading-char-appear');
                                span.classList.add('fb-animated-heading-char-hide');
                            }, i * CHAR_DELAY);
                        });
                    }, hideStart);

                    const resetTime = hideStart + (spans.length - 1) * CHAR_DELAY + HIDE_DURATION + RESET_DELAY;

                    setTimeout(() => {
                        currentIndex = (currentIndex + 1) % texts.length;
                        animateWord();
                    }, resetTime);
                }

                animateWord();
            }

            // Handle Zoom & Flip Animation
            if (animationType === 'zoom' || animationType === 'flip') {
                const itemElements = container.querySelectorAll('.fb-animated-heading-item');
                const texts = Array.from(itemElements).map(el => el.textContent.trim()).filter(Boolean);
                if (!texts.length) return;

                const wrapper = container.querySelector('.fb-animated-heading-swap-wrapper');
                if (!wrapper) return;

                const HOLD = 2500;
                const DURATION = 500;

                let wordEl = wrapper.querySelector('.fb-animated-heading-swap-word');
                if (!wordEl) {
                    wordEl = document.createElement('span');
                    wordEl.className = 'fb-animated-heading-swap-word';
                    wrapper.appendChild(wordEl);
                }

                let currentIndex = 0;
                wordEl.textContent = texts[0];

                Object.assign(wordEl.style, {
                    display: 'inline-block',
                    opacity: '1',
                    transform: 'none',
                    transition: `all ${DURATION}ms ease-in-out`,
                    whiteSpace: 'nowrap'
                });

                function step() {
                    wordEl.style.opacity = '0';
                    wordEl.style.transform = animationType === 'zoom' ? 'scale(1.1)' : 'rotateX(90deg)';

                    setTimeout(() => {
                        currentIndex = (currentIndex + 1) % texts.length;
                        wordEl.textContent = texts[currentIndex];

                        wordEl.style.transform = animationType === 'zoom' ? 'scale(0.5)' : 'rotateX(-90deg)';

                        wordEl.getBoundingClientRect(); // Force reflow

                        wordEl.style.opacity = '1';
                        wordEl.style.transform = 'none';

                        setTimeout(step, HOLD);
                    }, DURATION);
                }

                setTimeout(step, HOLD);
            }

            // Handle Progress Animation
            if (animationType === 'progress') {
                const itemElements = container.querySelectorAll('.fb-animated-heading-item');
                const texts = Array.from(itemElements).map(el => el.textContent.trim()).filter(Boolean);
                if (!texts.length) return;

                const wrapper = container.querySelector('.fb-animated-heading-progress-wrapper');
                if (!wrapper) return;

                const DURATION = 4200;
                const TRANS = 500;

                wrapper.style.setProperty('--progress-duration', `${DURATION}ms`);
                wrapper.style.setProperty('--progress-transition', `${TRANS}ms`);

                let wordEl = wrapper.querySelector('.fb-animated-heading-progress-word');
                if (!wordEl) {
                    wordEl = document.createElement('span');
                    wordEl.className = 'fb-animated-heading-progress-word';
                    wrapper.appendChild(wordEl);
                }

                let track = wrapper.querySelector('.fb-animated-heading-progress-track');
                let fill = track ? track.querySelector('.fb-animated-heading-progress-fill') : null;

                if (!track) {
                    track = document.createElement('span');
                    track.className = 'fb-animated-heading-progress-track';
                    fill = document.createElement('span');
                    fill.className = 'fb-animated-heading-progress-fill';
                    track.appendChild(fill);
                    wrapper.appendChild(track);
                }

                let idx = 0;
                wordEl.textContent = texts[0];

                Object.assign(wordEl.style, {
                    display: 'inline-block',
                    opacity: '1',
                    transition: `opacity ${TRANS}ms ease-in-out`,
                    whiteSpace: 'nowrap'
                });

                function fillBar() {
                    fill.style.transition = 'none';
                    fill.style.width = '0%';
                    fill.getBoundingClientRect(); // Force reflow
                    fill.style.transition = `width ${DURATION}ms linear`;
                    fill.style.width = '100%';
                }

                fillBar();

                function progressStep() {
                    wordEl.style.opacity = '0';

                    setTimeout(() => {
                        idx = (idx + 1) % texts.length;
                        wordEl.textContent = texts[idx];
                        wordEl.style.opacity = '1';
                        fillBar();

                        setTimeout(progressStep, DURATION);
                    }, TRANS);
                }

                setTimeout(progressStep, DURATION);
            }
        });
    }

    function setupAnimatedHeading() {
        // Init on load
        window.addEventListener('load', initAnimatedHeading);

        // Dynamic reload (in case of AJAX/Gutenberg preview)
        const observer = new MutationObserver(() => {
            initAnimatedHeading();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Expose for external reload
    window.reinitAnimatedHeading = initAnimatedHeading;

    setupAnimatedHeading();
})();
