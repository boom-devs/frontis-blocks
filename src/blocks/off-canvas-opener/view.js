(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const menuBlocks = document.querySelectorAll('.fb-off-canvas-menu-block');
        
        menuBlocks.forEach(menuBlock => {
            const toggleBtn = menuBlock.querySelector('.fb-menu-toggle-btn');
            const overlay = menuBlock.querySelector('.fb-menu-overlay');
            const menu = menuBlock.querySelector('.fb-off-canvas-menu');
            
            // Toggle menu when hamburger icon is clicked
            if(toggleBtn) {
                toggleBtn.addEventListener('click', function() {
                    menu.classList.toggle('open');
                    overlay.classList.toggle('active');
                    document.body.classList.toggle('fb-menu-open');
                    toggleBtn.setAttribute('aria-expanded', menu.classList.contains('open'));
                });
            }
        });
    });
})();