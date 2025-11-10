(function() {
    'use strict';

    // Debounce function for resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Check if device is mobile/tablet
    function isMobileDevice() {
        return window.matchMedia('(max-width: 767px)').matches;
    }

    function isTabletDevice() {
        return window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
    }

    function initMegaMenu() {
        const menus = document.querySelectorAll('.fb-advanced-mega-menu');

        menus.forEach(function(menu) {
            const triggerType = menu.getAttribute('data-trigger');
            const menuItems = menu.querySelectorAll('.fb-advanced-mega-menu-item.has-mega-menu');
            const toggleButton = menu.querySelector('.fb-advanced-mega-menu-toggle');
            const menuList = menu.querySelector('.fb-advanced-mega-menu-list');
            const mainWrapper = menu.closest('.fb-advanced-mega-menu-main-wrapper');
            
            // Check responsive settings
            const isTabletResponsive = mainWrapper && mainWrapper.classList.contains('fb-tablet-responsive');
            const isMobileResponsive = mainWrapper && mainWrapper.classList.contains('fb-mobile-responsive');

            // Create overlay element if it doesn't exist
            let overlay = menu.querySelector('.fb-advanced-mega-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'fb-advanced-mega-menu-overlay';
                menu.appendChild(overlay);
            }

            // Determine if we should use mobile behavior
            function shouldUseMobileBehavior() {
                const isMobile = isMobileDevice();
                const isTablet = isTabletDevice();
                
                if (isMobile && isMobileResponsive !== false) return true;
                if (isTablet && isTabletResponsive) return true;
                
                return false;
            }

            // Close all menus
            function closeAllMenus() {
                menuList.classList.remove('active');
                toggleButton.classList.remove('active');
                overlay.classList.remove('active');
                menuItems.forEach(function(item) {
                    item.classList.remove('active', 'hovering', 'keyboard-focus');
                });
                document.body.style.overflow = '';
                
                // Move toggle button back to original position when closing
                if (toggleButton.parentElement === menuList) {
                    menu.insertBefore(toggleButton, menuList);
                }
            }

            // Toggle mobile menu
            function toggleMobileMenu(e) {
                e.stopPropagation();
                const isActive = menuList.classList.toggle('active');
                toggleButton.classList.toggle('active');
                overlay.classList.toggle('active');
                
                // Move toggle button inside menu when active
                if (isActive) {
                    if (menuList.firstChild) {
                        menuList.insertBefore(toggleButton, menuList.firstChild);
                    } else {
                        menuList.appendChild(toggleButton);
                    }
                } else {
                    // Move toggle button back to its original position
                    menu.insertBefore(toggleButton, menuList);
                }
                
                // Prevent body scroll when menu is open
                document.body.style.overflow = isActive ? 'hidden' : '';
            }

            // Mobile menu toggle
            if (toggleButton) {
                toggleButton.addEventListener('click', toggleMobileMenu);
            }

            // Handle click outside to close mobile menu
            document.addEventListener('click', function(e) {
                if (shouldUseMobileBehavior() && 
                    !menu.contains(e.target) && 
                    !toggleButton.contains(e.target)) {
                    closeAllMenus();
                }
            });

            // Close mobile menu on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeAllMenus();
                }
            });

            // Close overlay on click
            overlay.addEventListener('click', closeAllMenus);

            // Setup menu items behavior
            function setupMenuItems() {
                const useMobileBehavior = shouldUseMobileBehavior() || triggerType === 'click';

                menuItems.forEach(function(item) {
                    const link = item.querySelector('.fb-advanced-mega-menu-link');
                    const panel = item.querySelector('.fb-advanced-mega-menu-panel');

                    // Remove old event listeners by cloning
                    const newLink = link.cloneNode(true);
                    link.parentNode.replaceChild(newLink, link);

                    if (useMobileBehavior) {
                        // Click/tap behavior
                        newLink.addEventListener('click', function(e) {
                            if (item.classList.contains('has-mega-menu')) {
                                e.preventDefault();
                                
                                // Close other menus
                                menuItems.forEach(function(otherItem) {
                                    if (otherItem !== item) {
                                        otherItem.classList.remove('active');
                                    }
                                });
                                
                                // Toggle current menu
                                item.classList.toggle('active');
                            }
                        });
                    } else {
                        // Hover behavior for desktop
                        // Keyboard navigation
                        newLink.addEventListener('focus', function() {
                            menuItems.forEach(function(otherItem) {
                                if (otherItem !== item) {
                                    otherItem.classList.remove('keyboard-focus');
                                }
                            });
                            item.classList.add('keyboard-focus');
                        });

                        newLink.addEventListener('blur', function() {
                            setTimeout(function() {
                                if (!item.contains(document.activeElement)) {
                                    item.classList.remove('keyboard-focus');
                                }
                            }, 100);
                        });

                        // Mouse hover
                        item.addEventListener('mouseenter', function() {
                            // Close other open panels
                            menuItems.forEach(function(otherItem) {
                                if (otherItem !== item) {
                                    otherItem.classList.remove('hovering');
                                }
                            });
                            item.classList.add('hovering');
                        });

                        item.addEventListener('mouseleave', function() {
                            item.classList.remove('hovering');
                        });
                    }
                });
            }

            // Position mega menu panel relative to menu bar on desktop
            function positionPanels() {
                if (!shouldUseMobileBehavior()) {
                    const menuRect = menu.getBoundingClientRect();
                    const panels = menu.querySelectorAll('.fb-advanced-mega-menu-panel');
                    
                    panels.forEach(function(panel) {
                        panel.style.top = (menuRect.bottom) + 'px';
                    });
                } else {
                    // Reset positioning for mobile
                    const panels = menu.querySelectorAll('.fb-advanced-mega-menu-panel');
                    panels.forEach(function(panel) {
                        panel.style.top = '';
                    });
                }
            }

            // Close menu when clicking links inside panels
            const panels = menu.querySelectorAll('.fb-advanced-mega-menu-panel');
            panels.forEach(function(panel) {
                const links = panel.querySelectorAll('a');
                links.forEach(function(link) {
                    link.addEventListener('click', function() {
                        closeAllMenus();
                    });
                });
            });

            // Initialize
            setupMenuItems();
            positionPanels();

            // Handle window resize
            const handleResize = debounce(function() {
                closeAllMenus();
                setupMenuItems();
                positionPanels();
            }, 250);

            window.addEventListener('resize', handleResize);

            // Handle scroll to update panel position on desktop
            const handleScroll = debounce(function() {
                if (!shouldUseMobileBehavior()) {
                    positionPanels();
                }
            }, 100);

            window.addEventListener('scroll', handleScroll);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMegaMenu);
    } else {
        initMegaMenu();
    }
})();