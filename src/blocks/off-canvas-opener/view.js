(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const menuBlocks = document.querySelectorAll('.fb-off-canvas-menu-block');

        menuBlocks.forEach(menuBlock => {
            const toggleBtn = menuBlock.querySelector('.fb-menu-toggle-btn');
            const closeBtn = menuBlock.querySelector('.wp-block-frontis-blocks-off-canvas-closer button');
            const menu = menuBlock.querySelector('.fb-off-canvas-menu');

            let overlay = menuBlock.querySelector('.fb-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'fb-menu-overlay';
                menuBlock.appendChild(overlay);
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

            if (toggleBtn) {
                toggleBtn.addEventListener('click', function () {
                    menu.classList.add('open');
                    overlay.classList.add('active');
                    document.body.classList.add('fb-menu-open');
                    menuBlock.classList.add('fb-menu-open');
                    toggleBtn.classList.add('active');
                    toggleBtn.setAttribute('aria-expanded', 'true');
                    toggleBtn.setAttribute('aria-label', 'Close menu');
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', function () {
                    closeMenu();
                });
            }

            if (overlay) {
                overlay.addEventListener('click', function () {
                    closeMenu();
                });
            }

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && menu.classList.contains('open')) {
                    closeMenu();
                }
            });
        });
    });
})();