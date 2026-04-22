/**
 * Frontend script for Circle Menu Block using Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
    const menus = document.querySelectorAll('.fb-circle-menu');

    menus.forEach((menu) => {
        const center = menu.querySelector('.fb-circle-menu-center');
        const itemsWrapper = menu.querySelector('.fb-circle-menu-items');
        // If there is no ul or items list, items might be direct children or ul child depending on HTML
        const items = menu.querySelectorAll('.fb-circle-menu-item');
        const wrapper = menu.closest('.fb-circle-menu-main-wrapper');

        if (!center || !items.length || !wrapper) return;

        const radiusGap = parseInt(menu.dataset.radiusgap || 0, 10);
        const triggerType = (menu.dataset.trigger || 'click').trim();
        const horizontalGap = parseInt(menu.dataset.horizontalspace || 0, 10);
        const horizontalPosition = (menu.dataset.horizontposition || 'horizontal').trim();
        const preset = (menu.dataset.preset || 'half-circular-menu').trim();

        let isOpen = false;
        let closeTimer;
        const radius = 100 + radiusGap;

        const openMenu = () => {
            if (closeTimer) clearTimeout(closeTimer);
            const total = items.length;
            center.classList.add('is-active');
            wrapper.classList.add('is-active');
            
            let direction = 'right';
            let startAngle = 0;
            let spreadAngle = 360;

            if (preset === 'circular-menu') {
                startAngle = -90;
                spreadAngle = 360;
            } else if (preset === 'horizontal-menu') {
                startAngle = 180;
                spreadAngle = 0;

                if (wrapper.classList.contains('bottom-right')) {
                    direction = horizontalPosition === 'vertical' ? 'top' : 'left';
                } else if (wrapper.classList.contains('bottom-left')) {
                    direction = horizontalPosition === 'vertical' ? 'top' : 'right';
                } else if (wrapper.classList.contains('top-center')) {
                    direction = horizontalPosition === 'vertical' ? 'bottom' : 'left';
                } else if (wrapper.classList.contains('bottom-center')) {
                    direction = horizontalPosition === 'vertical' ? 'top' : 'left';
                } else if (wrapper.classList.contains('center-right')) {
                    direction = horizontalPosition === 'vertical' ? 'left' : 'bottom';
                } else if (wrapper.classList.contains('center-left')) {
                    direction = horizontalPosition === 'vertical' ? 'top' : 'right';
                } else if (wrapper.classList.contains('top-right')) {
                    direction = horizontalPosition === 'vertical' ? 'bottom' : 'left';
                } else if (wrapper.classList.contains('top-left')) {
                    direction = horizontalPosition === 'vertical' ? 'bottom' : 'right';
                }
            } else {
                // half-circular-menu
                if (wrapper.classList.contains('bottom-right')) {
                    startAngle = 180;
                    spreadAngle = 90;
                } else if (wrapper.classList.contains('bottom-left')) {
                    startAngle = 270;
                    spreadAngle = 90;
                } else if (wrapper.classList.contains('top-right')) {
                    startAngle = 90;
                    spreadAngle = 90;
                } else if (wrapper.classList.contains('top-left')) {
                    startAngle = 0;
                    spreadAngle = 90;
                } else if (wrapper.classList.contains('top-center')) {
                    startAngle = 0;
                    spreadAngle = 180;
                } else if (wrapper.classList.contains('bottom-center')) {
                    startAngle = 180;
                    spreadAngle = 180;
                } else if (wrapper.classList.contains('center-right')) {
                    startAngle = 90;
                    spreadAngle = 180;
                } else if (wrapper.classList.contains('center-left')) {
                    startAngle = 270;
                    spreadAngle = 180;
                }
            }

            items.forEach((item, i) => {
                let angle;

                if (preset === 'horizontal-menu') {
                    // Equivalent to outerWidth(true) in jQuery, get offsetWidth
                    const firstItem = items[0];
                    const itemWidth = firstItem.offsetWidth;
                    const gap = itemWidth + horizontalGap;
                    let x = 0;
                    let y = 0;

                    if (direction === 'left') x = -(i + 1) * gap;
                    if (direction === 'right') x = (i + 1) * gap;
                    if (direction === 'top') y = -(i + 1) * gap;
                    if (direction === 'bottom') y = (i + 1) * gap;

                    setTimeout(() => {
                        item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
                        item.style.opacity = '1';
                    }, i * 100);
                    return;
                }

                if (total === 1) {
                    angle = startAngle + spreadAngle / 2;
                } else {
                    if (preset === 'circular-menu') {
                        angle = startAngle + (spreadAngle / total) * i;
                    } else {
                        angle = startAngle + (spreadAngle / (total - 1)) * i;
                    }
                }

                const rad = angle * (Math.PI / 180);
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                setTimeout(() => {
                    item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
                    item.style.opacity = '1';
                }, i * 100);
            });

            isOpen = true;
        };

        const closeMenu = () => {
            if (closeTimer) clearTimeout(closeTimer);
            center.classList.remove('is-active');
            wrapper.classList.remove('is-active');
            
            items.forEach((item, i) => {
                setTimeout(() => {
                    item.style.transform = 'translate(-50%, -50%) scale(0)';
                    item.style.opacity = '0';
                }, (items.length - 1 - i) * 50);
            });
            isOpen = false;
        };

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
