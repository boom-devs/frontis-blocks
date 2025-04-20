(function() {
    // GSAP TextPlugin রেজিস্টার করা (অবশ্যই GSAP আগে লোড হওয়া উচিত)
    if (typeof gsap !== 'undefined' && typeof gsap.registerPlugin !== 'undefined' && typeof TextPlugin !== 'undefined') {
        gsap.registerPlugin(TextPlugin);
    } else {
        console.error("GSAP or TextPlugin is missing or not loaded correctly.");
        return;
    }

    function initTypingEffect() {
        var containers = document.querySelectorAll('.fb-animated-Heading-texts');

        containers.forEach(function(container) {
            var itemElements = container.querySelectorAll('.fb-animated-Heading-item');
            var items = [];
            
            // Get all items and hide the individual elements
            itemElements.forEach(function(el) {
                items.push(el.textContent);
                el.style.display = 'none'; // Hide individual items
            });

            if (!items.length) return;

            // Clear container initially
            container.textContent = '';

            let currentItem = 0;
            let charIndex = 0;
            let isDeleting = false;

            // Typing and deleting function using GSAP
            function typeEffect() {
                const currentText = items[currentItem];
                const displayText = currentText.substring(0, charIndex);

                // GSAP typing animation
                gsap.to(container, {
                    text: displayText,
                    duration: 0.1, // Duration based on text length
                    ease: "power1.inOut",
                    onComplete: () => {
                        if (!isDeleting) {
                            if (charIndex < currentText.length) {
                                charIndex++;
                                typeEffect(); // Continue typing
                            } else {
                                isDeleting = true;
                                setTimeout(typeEffect, 1000); // Wait before deleting
                            }
                        } else {
                            if (charIndex > 0) {
                                charIndex--;
                                typeEffect(); // Continue deleting
                            } else {
                                isDeleting = false;
                                currentItem = (currentItem + 1) % items.length;
                                setTimeout(typeEffect, 500); // Wait before typing next item
                            }
                        }
                    }
                });
            }

            typeEffect();
        });
    }

    function setupTypingEffect() {
        // Wait for the full window load (including images, etc.)
        window.addEventListener('load', initTypingEffect);

        // MutationObserver to handle dynamically added content
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initTypingEffect();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Initialize typing effect
    window.reinitTypingEffect = initTypingEffect;

    setupTypingEffect();
})();
