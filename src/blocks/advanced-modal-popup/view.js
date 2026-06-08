(function () {
    function initModals() {
        const modals = document.querySelectorAll('.fb-advanced-modal-popup-container');

        modals.forEach((modalContainer) => {
            const toggleBtn = modalContainer.querySelector('.fb-advanced-modal-popup-trigger');
            const popup = modalContainer.querySelector('.fb-advanced-modal-popup');
            const closeBtn = modalContainer.querySelector('.fb-modal-close-btn');
            const overlay = modalContainer.querySelector('.fb-modal-overlay');

            if (!toggleBtn || !popup) return;

            // Prevent multiple initializations
            if (modalContainer.hasAttribute('data-modal-initialized')) return;
            modalContainer.setAttribute('data-modal-initialized', 'true');

            function openModal() {
                popup.classList.add('active');
                if (overlay) overlay.classList.add('active');
                document.body.classList.add('fb-modal-open');
                modalContainer.classList.add('fb-modal-open');
                toggleBtn.classList.add('active');
                toggleBtn.setAttribute('aria-expanded', 'true');
                
                // Auto-play video or iframe if present inside the modal popup
                const video = popup.querySelector('video');
                if (video) {
                    video.play();
                }
            }

            function closeModal() {
                toggleBtn.classList.remove('active');
                modalContainer.classList.remove('fb-modal-open');
                toggleBtn.setAttribute('aria-expanded', 'false');

                popup.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.classList.remove('fb-modal-open');
                
                // Pause video or iframe if present inside the modal popup
                const video = popup.querySelector('video');
                if (video) {
                    video.pause();
                }

                // Stop iframe videos (YouTube/Vimeo)
                const iframe = popup.querySelector('iframe');
                if (iframe) {
                    const iframeSrc = iframe.src;
                    iframe.src = iframeSrc; // Reloading the iframe stops the video
                }
            }

            // Toggle button click
            toggleBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (popup.classList.contains('active')) {
                    closeModal();
                } else {
                    openModal();
                }
            });

            // Keyboard support for toggle button
            toggleBtn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (popup.classList.contains('active')) {
                        closeModal();
                    } else {
                        openModal();
                    }
                }
            });

            // Close button click
            if (closeBtn) {
                closeBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    closeModal();
                });
            }

            // Overlay click
            if (overlay) {
                overlay.addEventListener('click', function (e) {
                    e.preventDefault();
                    closeModal();
                });
            }

            // Escape key to close
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && popup.classList.contains('active')) {
                    closeModal();
                }
            });
        });
    }

    // Initialize on different loading states
    function setupModals() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initModals);
        } else {
            initModals();
        }

        // Handle dynamic content changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initModals();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Expose initialization method globally
    window.reinitAdvancedModalPopup = initModals;

    // Start setup
    setupModals();
})();