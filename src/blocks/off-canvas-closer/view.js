(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const menuBlocks = document.querySelectorAll('.fb-off-canvas-menu-block');
        menuBlocks.forEach(menuBlock => {
            const toggleBtn = menuBlock.querySelector('.fb-menu-toggle-btn');
            const closeBtn = menuBlock.querySelector('.wp-block-frontis-blocks-off-canvas-closer button');
            const overlay = menuBlock.querySelector('.fb-menu-overlay');
            const menu = menuBlock.querySelector('.fb-off-canvas-menu');

            if (!closeBtn) return;
            
            function closeMenu() {
                toggleBtn.classList.remove('active');
                menuBlock.classList.remove('fb-menu-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                
                const animationClass = Array.from(menu.classList).find(
                    className => className.startsWith('fb-off-canvas-menu-')
                );
                
                if (animationClass) {
                    menu.classList.add('fb-animation-closing');
                    
                    setTimeout(() => {
                        menu.classList.remove('open');
                        menu.classList.remove('fb-animation-closing');
                        overlay.classList.remove('active');
                        document.body.classList.remove('fb-menu-open');
                    }, 300); 
                } else {
                    menu.classList.remove('open');
                    overlay.classList.remove('active');
                    document.body.classList.remove('fb-menu-open');
                }
            }
            
            closeBtn.addEventListener('click', function() {
                closeMenu();
            });
        });
    });
})();