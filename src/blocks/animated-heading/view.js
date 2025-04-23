(function () {
    function initAnimatedHeading() {
        const containers = document.querySelectorAll('.fb-animated-heading-container');

        containers.forEach((container) => {
            const animationType = container.getAttribute('data-animation-type');

            // Handle Typing Animation
            if (animationType === 'typing') {
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

                    const swirlWrapper = document.querySelector('.fb-animated-heading-swirl-wrapper');

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
