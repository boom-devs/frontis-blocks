(function () {
    "use strict";

    const getComparableUrlMeta = (url = "") => {
        try {
            const parsed = new URL(url, window.location.origin);
            const pathname = parsed.pathname.replace(/\/+$/, "");
            return {
                origin: parsed.origin,
                path: pathname || "/",
            };
        } catch (error) {
            return null;
        }
    };

    const addCurrentMenuItemClassFallback = (navigationRoot) => {
        if (!navigationRoot) {
            return;
        }

        // If WordPress already sets it, do nothing.
        if (navigationRoot.querySelector(".wp-block-navigation-item.current-menu-item")) {
            return;
        }

        const currentPageMeta = getComparableUrlMeta(window.location.href);
        if (!currentPageMeta) {
            return;
        }

        const menuLinks = navigationRoot.querySelectorAll(".wp-block-navigation-item .wp-block-navigation-item__content[href]");
        menuLinks.forEach((link) => {
            const rawHref = (link.getAttribute("href") || "").trim();
            if (!rawHref || rawHref.startsWith("#")) {
                return;
            }

            const menuLinkMeta = getComparableUrlMeta(rawHref);
            const isActiveByAria = link.getAttribute("aria-current") === "page";
            const isActiveByPath = !!menuLinkMeta
                && menuLinkMeta.origin === currentPageMeta.origin
                && menuLinkMeta.path === currentPageMeta.path;

            if (isActiveByAria || isActiveByPath) {
                const menuItem = link.closest(".wp-block-navigation-item");
                if (menuItem && !menuItem.classList.contains("current-menu-item")) {
                    menuItem.classList.add("current-menu-item");
                }
            }
        });
    };

    const initializeCurrentMenuItemFallback = () => {
        const navigationWrappers = document.querySelectorAll(".fb-advanced-navigation-main-wrapper .advanced-navigation-wrapper");
        if (!navigationWrappers.length) {
            return;
        }

        const syncCurrentMenuClass = () => {
            navigationWrappers.forEach((wrapper) => addCurrentMenuItemClassFallback(wrapper));
        };

        syncCurrentMenuClass();

        const observer = new MutationObserver(() => {
            syncCurrentMenuClass();
        });

        navigationWrappers.forEach((wrapper) => {
            observer.observe(wrapper, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ["href", "class", "aria-current"],
            });
        });

        window.addEventListener("popstate", syncCurrentMenuClass);
        window.addEventListener("hashchange", syncCurrentMenuClass);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeCurrentMenuItemFallback);
    } else {
        initializeCurrentMenuItemFallback();
    }

    // Handle dynamic content changes (crucial for Next.js / SPA route transitions)
    if (typeof MutationObserver !== "undefined") {
        const domObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initializeCurrentMenuItemFallback();
                }
            });
        });

        domObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Expose re-initialization function
    window.reinitAdvancedNavigation = initializeCurrentMenuItemFallback;
})();
