(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const menuBlocks = document.querySelectorAll('.fb-off-canvas-menu-block');
        menuBlocks.forEach(menuBlock => {
            const toggleBtn = menuBlock.querySelector('.fb-menu-toggle-btn');
            const closeBtn = menuBlock.querySelector('.wp-block-frontis-blocks-off-canvas-closer button');
            const overlay = menuBlock.querySelector('.fb-menu-overlay');
            const menu = menuBlock.querySelector('.fb-off-canvas-menu');
            
            // Skip if no close button is found
            if (!closeBtn) return;
            
            // Function to close the menu and reset all states
            function closeMenu() {
                // Reset toggle button visual state immediately
                toggleBtn.classList.remove('active');
                menuBlock.classList.remove('fb-menu-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                
                // Check for animation class
                const animationClass = Array.from(menu.classList).find(
                    className => className.startsWith('fb-animation-')
                );
                
                if (animationClass) {
                    menu.classList.add('fb-animation-closing');
                    
                    // Wait for animation to complete before actually closing
                    setTimeout(() => {
                        menu.classList.remove('open');
                        menu.classList.remove('fb-animation-closing');
                        overlay.classList.remove('active');
                        document.body.classList.remove('fb-menu-open');
                    }, 300); // Match your CSS transition time
                } else {
                    // No animation, close immediately
                    menu.classList.remove('open');
                    overlay.classList.remove('active');
                    document.body.classList.remove('fb-menu-open');
                }
            }
            
            // Close menu when X button is clicked
            closeBtn.addEventListener('click', function() {
                closeMenu();
            });
        });
    });
})();