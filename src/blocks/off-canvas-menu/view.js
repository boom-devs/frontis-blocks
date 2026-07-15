(function () {
    function initOffCanvasMenu() {
        const menuBlocks = document.querySelectorAll('.fb-off-canvas-menu-block');

        menuBlocks.forEach(menuBlock => {
            // Prevent multiple initializations
            if (menuBlock.hasAttribute('data-offcanvas-initialized')) return;
            menuBlock.setAttribute('data-offcanvas-initialized', 'true');

            const toggleBtn = menuBlock.querySelector('.fb-menu-toggle-btn');
            const closeBtn = menuBlock.querySelector('.fb-close-menu');
            const menu = menuBlock.querySelector('.fb-off-canvas-menu');

            let overlay = menuBlock.querySelector('.fb-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'fb-menu-overlay';
                menuBlock.appendChild(overlay);
            }

            function openMenu() {
                menu.classList.add('open');
                overlay.classList.add('active');
                document.body.classList.add('fb-menu-open');
                menuBlock.classList.add('fb-menu-open');
                toggleBtn.classList.add('active');
                toggleBtn.setAttribute('aria-expanded', 'true');
                toggleBtn.setAttribute('aria-label', 'Close menu');
            }

            function closeMenu() {
                toggleBtn.classList.remove('active');
                menuBlock.classList.remove('fb-menu-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute('aria-label', 'Open menu');

                menu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.classList.remove('fb-menu-open');
            }

            // Toggle button click
            if (toggleBtn) {
                toggleBtn.addEventListener('click', function () {
                    if (menu.classList.contains('open')) {
                        closeMenu();
                    } else {
                        openMenu();
                    }
                });

                // Keyboard support for toggle button
                toggleBtn.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (menu.classList.contains('open')) {
                            closeMenu();
                        } else {
                            openMenu();
                        }
                    }
                });
            }

            // Close button click
            if (closeBtn) {
                closeBtn.addEventListener('click', function () {
                    closeMenu();
                });
            }

            // Overlay click
            if (overlay) {
                overlay.addEventListener('click', function () {
                    closeMenu();
                });
            }

            // Escape key to close
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && menu.classList.contains('open')) {
                    closeMenu();
                }
            });
        });
    }

    function setupOffCanvasMenu() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initOffCanvasMenu);
        } else {
            initOffCanvasMenu();
        }

        // Handle dynamic content changes (crucial for Next.js / SPA route transitions)
        if (typeof MutationObserver !== 'undefined') {
            var domObserver = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.addedNodes.length || mutation.removedNodes.length) {
                        initOffCanvasMenu();
                    }
                });
            });

            domObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }

    // Expose re-initialization function
    window.reinitOffCanvasMenu = initOffCanvasMenu;

    setupOffCanvasMenu();
})();