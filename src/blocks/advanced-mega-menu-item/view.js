document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.fb-mega-menu-item');

    items.forEach(item => {
        const link      = item.querySelector('.fb-menu-link');
        const megaMenu  = item.querySelector('.fb-megamenu');
        const submenu   = item.querySelector('.fb-submenu');
        const interaction = item.dataset.interaction || 'hover'; // hover|click

        if (!link) return;

        const open = () => {
            item.classList.add('active');
            if (megaMenu) megaMenu.classList.add('show');
            if (submenu) submenu.classList.add('show');
        };
        const close = () => {
            item.classList.remove('active');
            if (megaMenu) megaMenu.classList.remove('show');
            if (submenu) submenu.classList.remove('show');
        };

        // ---- HOVER ----
        if (interaction === 'hover') {
            item.addEventListener('mouseenter', open);
            item.addEventListener('mouseleave', close);
        }

        // ---- CLICK ----
        if (interaction === 'click') {
            link.addEventListener('click', e => {
                if (item.classList.contains('has-submenu') || item.classList.contains('has-megamenu')) {
                    e.preventDefault();
                    item.classList.contains('active') ? close() : open();
                }
            });
        }
    });

    // close on outside click (works for both interactions)
    document.addEventListener('click', e => {
        if (!e.target.closest('.fb-mega-menu-item')) {
            items.forEach(it => {
                it.classList.remove('active');
                const m = it.querySelector('.fb-megamenu, .fb-submenu');
                if (m) m.classList.remove('show');
            });
        }
    });

    // optional: close on resize
    let timer;
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            items.forEach(it => {
                it.classList.remove('active');
                const m = it.querySelector('.fb-megamenu, .fb-submenu');
                if (m) m.classList.remove('show');
            });
        }, 250);
    });
});