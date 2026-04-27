/**
 * Frontend script for Circle Menu Block using Vanilla JS
 */

// ==========================================
// 1. Frontend Script Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const menus = document.querySelectorAll('.fb-circle-menu');

    menus.forEach((menu) => {
        // ==========================================
        // 2. DOM Elements Selection
        // ==========================================
        const center = menu.querySelector('.fb-circle-menu-center');
        const itemsWrapper = menu.querySelector('.fb-circle-menu-items');
        const items = menu.querySelectorAll('.fb-circle-menu-item');
        const wrapper = menu.closest('.fb-circle-menu-main-wrapper');

        if (!center || !items.length || !wrapper) return;

        // ==========================================
        // 3. Block Settings Data Retrieval
        // ==========================================
        const radiusGap = parseInt(menu.dataset.radiusgap || 0, 10);
        const triggerType = (menu.dataset.trigger || 'click').trim();
        const horizontalGap = parseInt(menu.dataset.horizontalspace || 0, 10);
        const horizontalPosition = (menu.dataset.horizontposition || 'horizontal').trim();
        const preset = (menu.dataset.preset || 'half-circular-menu').trim();

        // ==========================================
        // 4. Local States & Variables
        // ==========================================
        let isOpen = false;
        let closeTimer;
        const radius = 100 + radiusGap;

        // ==========================================
        // 5. Menu Action Helpers
        // ==========================================

        const openMenu = () => {
            if (closeTimer) clearTimeout(closeTimer);
            center.classList.add('is-active');
            wrapper.classList.add('is-active');
            isOpen = true;
        };

        const closeMenu = () => {
            if (closeTimer) clearTimeout(closeTimer);
            center.classList.remove('is-active');
            wrapper.classList.remove('is-active');
            isOpen = false;
        };

        // ==========================================
        // 6. Event Listeners Setup (Hover / Click)
        // ==========================================
        if (triggerType === 'hover') {
            menu.addEventListener('mouseenter', () => {
                if (closeTimer) clearTimeout(closeTimer);
                if (!isOpen) openMenu();
            });

            menu.addEventListener('mouseleave', () => {
                if (isOpen) {
                    closeTimer = setTimeout(() => {
                        closeMenu();
                    }, 500);
                }
            });
        } else {
            center.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!isOpen) {
                    openMenu();
                } else {
                    closeMenu();
                }
            });

            document.addEventListener('click', (e) => {
                if (isOpen && !menu.contains(e.target)) {
                    closeMenu();
                }
            });
        }
    });
});
