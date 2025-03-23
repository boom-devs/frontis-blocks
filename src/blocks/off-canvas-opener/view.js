(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const menuBlocks = document.querySelectorAll('.fb-off-canvas-menu-block');
        
        menuBlocks.forEach(menuBlock => {
            const toggleBtn = menuBlock.querySelector('.fb-menu-toggle-btn');
            const closeBtn = menuBlock.querySelector('.wp-block-frontis-blocks-off-canvas-closer button');
            const menu = menuBlock.querySelector('.fb-off-canvas-menu');
            
            // Create overlay element if it doesn't exist
            let overlay = menuBlock.querySelector('.fb-menu-overlay');
            if(!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'fb-menu-overlay';
                menuBlock.appendChild(overlay);
            }
            
            // Function to handle menu closure with animation support
            function closeMenu() {
                // If there's an animation, add a closing class before removing open
                const animationClass = Array.from(menu.classList).find(
                    className => className.startsWith('fb-animation-')
                );
                
                // Always remove active class from toggle button immediately for instant icon animation
                toggleBtn.classList.remove('active');
                menuBlock.classList.remove('fb-menu-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute('aria-label', 'Open menu');
                
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
            
            // Toggle menu when button is clicked
            if(toggleBtn) {
                toggleBtn.addEventListener('click', function() {
                    // If menu is about to be closed
                    if (menu.classList.contains('open')) {
                        closeMenu();
                    } else {
                        // Opening the menu
                        menu.classList.add('open');
                        overlay.classList.add('active');
                        document.body.classList.add('fb-menu-open');
                        menuBlock.classList.add('fb-menu-open');
                        toggleBtn.classList.add('active');
                        toggleBtn.setAttribute('aria-expanded', 'true');
                        toggleBtn.setAttribute('aria-label', 'Close menu');
                    }
                });
            }
            
            // Close menu when close button is clicked (if it exists)
            if(closeBtn) {
                closeBtn.addEventListener('click', function() {
                    closeMenu();
                });
            }
            
            // Close menu when overlay is clicked
            if(overlay) {
                overlay.addEventListener('click', function() {
                    closeMenu();
                });
            }
            
            // Close menu with ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && menu.classList.contains('open')) {
                    closeMenu();
                }
            });
        });
    });
})();