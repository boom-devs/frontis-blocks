(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const menus = document.querySelectorAll('.fb-advanced-mega-menu');

        menus.forEach(function(menu) {
            const triggerType = menu.getAttribute('data-trigger');
            const menuItems = menu.querySelectorAll('.fb-advanced-mega-menu-item.has-mega-menu');
            const toggleButton = menu.querySelector('.fb-advanced-mega-menu-toggle');
            const menuList = menu.querySelector('.fb-advanced-mega-menu-list');
            const isMobile = window.matchMedia('(max-width: 1024px)').matches;

            // Create overlay element
            const overlay = document.createElement('div');
            overlay.className = 'fb-advanced-mega-menu-overlay';
            menu.appendChild(overlay);

            // Toggle mobile menu visibility
            toggleButton.addEventListener('click', function() {
                menuList.classList.toggle('active');
                toggleButton.classList.toggle('active');
                overlay.classList.toggle('active');
            });

            // Handle click outside to close mobile menu
            document.addEventListener('click', function(e) {
                if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
                    menuList.classList.remove('active');
                    toggleButton.classList.remove('active');
                    overlay.classList.remove('active');
                    menuItems.forEach(function(item) {
                        item.classList.remove('active');
                    });
                }
            });

            // Close mobile menu on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    menuList.classList.remove('active');
                    toggleButton.classList.remove('active');
                    overlay.classList.remove('active');
                    menuItems.forEach(function(item) {
                        item.classList.remove('active');
                    });
                }
            });

            // Apply trigger behavior based on device
            if (isMobile || triggerType === 'click') {
                menuItems.forEach(function(item) {
                    const link = item.querySelector('.fb-advanced-mega-menu-link');

                    link.addEventListener('click', function(e) {
                        if (item.classList.contains('has-mega-menu')) {
                            e.preventDefault();
                            menuItems.forEach(function(otherItem) {
                                if (otherItem !== item) {
                                    otherItem.classList.remove('active');
                                }
                            });
                            item.classList.toggle('active');
                        }
                    });
                });
            } else {
                menuItems.forEach(function(item) {
                    const link = item.querySelector('.fb-advanced-mega-menu-link');
                    
                    link.addEventListener('focus', function() {
                        menuItems.forEach(function(otherItem) {
                            if (otherItem !== item) {
                                otherItem.classList.remove('keyboard-focus');
                            }
                        });
                        item.classList.add('keyboard-focus');
                    });

                    link.addEventListener('blur', function() {
                        setTimeout(function() {
                            if (!item.contains(document.activeElement)) {
                                item.classList.remove('keyboard-focus');
                            }
                        }, 100);
                    });

                    item.addEventListener('mouseenter', function() {
                        item.classList.add('hovering');
                    });

                    item.addEventListener('mouseleave', function() {
                        item.classList.remove('hovering');
                    });
                });
            }

            const panels = menu.querySelectorAll('.fb-advanced-mega-menu-panel');
            panels.forEach(function(panel) {
                const links = panel.querySelectorAll('a');
                links.forEach(function(link) {
                    link.addEventListener('click', function() {
                        const menuItem = panel.closest('.fb-advanced-mega-menu-item');
                        if (menuItem) {
                            menuItem.classList.remove('active');
                            menuList.classList.remove('active');
                            toggleButton.classList.remove('active');
                            overlay.classList.remove('active');
                        }
                    });
                });
            });
        });
    });
})();