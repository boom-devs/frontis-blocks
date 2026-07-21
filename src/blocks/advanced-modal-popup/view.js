(function () {

    // ─── Cookie Helpers ───────────────────────────────────────────────────────
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // ─── Main init ────────────────────────────────────────────────────────────
    function initModals() {
        const modals = document.querySelectorAll('.fb-advanced-modal-popup-container');

        modals.forEach((modalContainer) => {
            const toggleBtn = modalContainer.querySelector('.fb-advanced-modal-popup-trigger');
            const popup     = modalContainer.querySelector('.fb-advanced-modal-popup');
            const closeBtn  = modalContainer.querySelector('.fb-modal-close-btn');
            const overlay   = modalContainer.querySelector('.fb-modal-overlay');

            if (!popup) return;

            // Prevent multiple initializations
            if (modalContainer.hasAttribute('data-modal-initialized')) return;
            modalContainer.setAttribute('data-modal-initialized', 'true');

            // Read trigger config from data attributes written by save.js
            const triggerType    = modalContainer.dataset.triggerType  || 'button';
            const pageLoadDelay  = parseInt(modalContainer.dataset.pageLoadDelay || '0', 10) * 1000; // convert s → ms
            const cookieEnable   = modalContainer.dataset.cookieEnable === 'true';
            const cookieExpiry   = parseInt(modalContainer.dataset.cookieExpiry  || '1',  10);

            // Unique cookie key per modal (use container id or fallback to index)
            const cookieKey = 'fb_modal_shown_' + (modalContainer.id || Array.from(document.querySelectorAll('.fb-advanced-modal-popup-container')).indexOf(modalContainer));

            // ── open / close ──────────────────────────────────────────────────
            function openModal() {
                popup.classList.add('active');
                if (overlay) overlay.classList.add('active');
                document.body.classList.add('fb-modal-open');
                modalContainer.classList.add('fb-modal-open');
                if (toggleBtn) {
                    toggleBtn.classList.add('active');
                    toggleBtn.setAttribute('aria-expanded', 'true');
                }

                // Auto-play video inside the modal popup
                const video = popup.querySelector('video');
                if (video) video.play();

                // Set cookie when modal opens (page-load + cookie enabled)
                if (triggerType === 'page-load' && cookieEnable) {
                    setCookie(cookieKey, '1', cookieExpiry);
                }
            }

            function closeModal() {
                if (toggleBtn) {
                    toggleBtn.classList.remove('active');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
                modalContainer.classList.remove('fb-modal-open');

                popup.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.classList.remove('fb-modal-open');

                // Pause video
                const video = popup.querySelector('video');
                if (video) video.pause();

                // Stop iframe videos (YouTube / Vimeo)
                const iframe = popup.querySelector('iframe');
                if (iframe) {
                    const src = iframe.src;
                    iframe.src = src;
                }
            }

            // ── Common close actions (shared by all trigger types) ────────────
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

            // Escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && popup.classList.contains('active')) {
                    closeModal();
                }
            });

            // ── Trigger-specific logic ────────────────────────────────────────

            // 1. button / image – manual click trigger
            if (triggerType === 'button' || triggerType === 'image') {
                if (!toggleBtn) return;

                toggleBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    popup.classList.contains('active') ? closeModal() : openModal();
                });

                toggleBtn.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        popup.classList.contains('active') ? closeModal() : openModal();
                    }
                });
            }

            // 2. page-load – auto open after delay; cookie prevents re-showing
            else if (triggerType === 'page-load') {
                // Hide toggle button – it's irrelevant for this mode
                if (toggleBtn) toggleBtn.style.display = 'none';

                // Check cookie — if set, do NOT show
                if (cookieEnable && getCookie(cookieKey)) {
                    return; // already shown within cookie expiry period
                }

                setTimeout(function () {
                    openModal();
                }, pageLoadDelay);
            }

            // 3. scroll – open once user scrolls the page at all
            else if (triggerType === 'scroll') {
                // Hide toggle button – it's irrelevant for this mode
                if (toggleBtn) toggleBtn.style.display = 'none';

                let scrollTriggered = false;

                function onScroll() {
                    if (scrollTriggered) return;
                    if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
                        scrollTriggered = true;
                        window.removeEventListener('scroll', onScroll);
                        openModal();
                    }
                }

                window.addEventListener('scroll', onScroll, { passive: true });
            }
        });
    }

    // ─── Setup (handles both eager and lazy DOM) ──────────────────────────────
    function setupModals() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initModals);
        } else {
            initModals();
        }

        // Handle dynamically injected modals (e.g. AJAX page builders)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    initModals();
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Expose globally for external re-init
    window.reinitAdvancedModalPopup = initModals;

    setupModals();
})();