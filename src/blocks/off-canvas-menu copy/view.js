(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const menuBlocks = document.querySelectorAll('.fb-off-canvas-menu-block');
        
        menuBlocks.forEach(menuBlock => {
            const toggleBtn = menuBlock.querySelector('.fb-menu-toggle-btn');
            const closeBtn = menuBlock.querySelector('.fb-close-menu');
            const overlay = menuBlock.querySelector('.fb-menu-overlay');
            const menu = menuBlock.querySelector('.fb-off-canvas-menu');
            
            // Toggle menu when hamburger icon is clicked
            toggleBtn.addEventListener('click', function() {
                menu.classList.toggle('open');
                overlay.classList.toggle('active');
                document.body.classList.toggle('fb-menu-open');
                toggleBtn.setAttribute('aria-expanded', menu.classList.contains('open'));
            });
            
            // Close menu when X button is clicked
            closeBtn.addEventListener('click', function() {
                menu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.classList.remove('fb-menu-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
            });
            
            // Close menu when overlay is clicked
            overlay.addEventListener('click', function() {
                menu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.classList.remove('fb-menu-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
            });
            
            // Handle keyboard escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && menu.classList.contains('open')) {
                    menu.classList.remove('open');
                    overlay.classList.remove('active');
                    document.body.classList.remove('fb-menu-open');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    });
})();