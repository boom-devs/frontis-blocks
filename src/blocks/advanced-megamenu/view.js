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

	const syncCurrentMenuItems = (menuRoot) => {
		if (!menuRoot) {
			return;
		}

		const menuLinks = menuRoot.querySelectorAll(
			".fb-advanced-mega-menu-item .fb-advanced-mega-menu-link[href]",
		);

		menuLinks.forEach((link) => {
			const menuItem = link.closest(".fb-advanced-mega-menu-item");
			if (!menuItem) {
				return;
			}

			const rawHref = (link.getAttribute("href") || "").trim();
			if (!rawHref || rawHref.startsWith("#")) {
				menuItem.classList.remove("current-menu-item");
				link.removeAttribute("aria-current");
				return;
			}

			const currentPageMeta = getComparableUrlMeta(window.location.href);
			const menuLinkMeta = getComparableUrlMeta(rawHref);
			const isActiveByAria = link.getAttribute("aria-current") === "page";
			const isActiveByPath =
				!!menuLinkMeta &&
				!!currentPageMeta &&
				menuLinkMeta.origin === currentPageMeta.origin &&
				menuLinkMeta.path === currentPageMeta.path;

			if (isActiveByAria || isActiveByPath) {
				menuItem.classList.add("current-menu-item");
				link.setAttribute("aria-current", "page");
			} else {
				menuItem.classList.remove("current-menu-item");
				link.removeAttribute("aria-current");
			}
		});
	};

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

	function isMobileDevice() {
		return window.matchMedia("(max-width: 1024px)").matches;
	}

	function shouldUseMobileBehavior() {
		return window.innerWidth <= 1024;
	}

	function initMegaMenu() {
		const menus = document.querySelectorAll(".fb-advanced-mega-menu");

		menus.forEach(function (menu) {
			if (menu.dataset.fbMegamenuInit === "true") {
				return;
			}
			menu.dataset.fbMegamenuInit = "true";

			const triggerType = menu.getAttribute("data-trigger");
			const megaMenuItems = menu.querySelectorAll(
				".fb-advanced-mega-menu-item.has-mega-menu",
			);
			const toggleButton = menu.querySelector(".fb-advanced-mega-menu-toggle");
			const menuList = menu.querySelector(".fb-advanced-mega-menu-list");
			let overlay = menu.querySelector(".fb-advanced-mega-menu-overlay");

			if (!toggleButton || !menuList) {
				return;
			}

			if (!overlay) {
				overlay = document.createElement("div");
				overlay.className = "fb-advanced-mega-menu-overlay";
				overlay.setAttribute("aria-hidden", "true");
				menu.insertBefore(overlay, menuList);
			}

			function isMenuOpen() {
				return menuList.classList.contains("active");
			}

			function moveToggleIntoMenuList() {
				const firstElement = menuList.firstElementChild;
				if (firstElement) {
					menuList.insertBefore(toggleButton, firstElement);
				} else {
					menuList.appendChild(toggleButton);
				}
			}

			function moveToggleOutsideMenuList() {
				if (toggleButton.parentElement === menuList) {
					menu.insertBefore(toggleButton, menuList);
				}
			}

			function openMobileMenu() {
				menuList.classList.add("active");
				toggleButton.classList.add("active");
				overlay.classList.add("active");
				overlay.setAttribute("aria-hidden", "false");
				moveToggleIntoMenuList();
				document.body.style.overflow = "hidden";
			}

			function closeMobileMenu() {
				menuList.classList.remove("active");
				toggleButton.classList.remove("active");
				overlay.classList.remove("active");
				overlay.setAttribute("aria-hidden", "true");
				megaMenuItems.forEach(function (item) {
					item.classList.remove("active", "hovering", "keyboard-focus");
				});
				moveToggleOutsideMenuList();
				document.body.style.overflow = "";
			}

			function toggleMobileMenu(e) {
				if (!shouldUseMobileBehavior()) {
					return;
				}

				e.preventDefault();
				e.stopPropagation();

				if (isMenuOpen()) {
					closeMobileMenu();
				} else {
					openMobileMenu();
				}
			}

			toggleButton.addEventListener("click", toggleMobileMenu);

			document.addEventListener("click", function (e) {
				if (
					!shouldUseMobileBehavior() ||
					!isMenuOpen() ||
					menu.contains(e.target)
				) {
					return;
				}

				closeMobileMenu();
			});

			document.addEventListener("keydown", function (e) {
				if (e.key === "Escape" && isMenuOpen()) {
					closeMobileMenu();
				}
			});

			overlay.addEventListener("click", function (e) {
				e.stopPropagation();
				closeMobileMenu();
			});

			function setupMenuItems() {
				const useMobileBehavior =
					isMobileDevice() || triggerType === "click";

				megaMenuItems.forEach(function (item) {
					const link = item.querySelector(".fb-advanced-mega-menu-link");
					const panel = item.querySelector(".fb-advanced-mega-menu-panel");

					if (!link || !panel) {
						return;
					}

					const newLink = link.cloneNode(true);
					link.parentNode.replaceChild(newLink, link);

					if (useMobileBehavior) {
						newLink.addEventListener("click", function (e) {
							if (item.classList.contains("has-mega-menu")) {
								e.preventDefault();
								e.stopPropagation();

								megaMenuItems.forEach((other) => {
									if (other !== item) {
										other.classList.remove("active");
									}
								});

								item.classList.toggle("active");
							}
						});
						newLink.addEventListener("touchstart", function () {}, {
							passive: true,
						});
					} else {
						item.addEventListener("mouseenter", function () {
							megaMenuItems.forEach((other) =>
								other.classList.remove("hovering", "keyboard-focus"),
							);
							item.classList.add("hovering");
						});

						item.addEventListener("mouseleave", function () {
							item.classList.remove("hovering");
						});

						newLink.addEventListener("focus", function () {
							megaMenuItems.forEach((other) =>
								other.classList.remove("hovering", "keyboard-focus"),
							);
							item.classList.add("keyboard-focus");
						});

						newLink.addEventListener("blur", function () {
							setTimeout(() => {
								if (!item.contains(document.activeElement)) {
									item.classList.remove("keyboard-focus");
								}
							}, 10);
						});
					}
				});
			}

			const panels = menu.querySelectorAll(".fb-advanced-mega-menu-panel");
			panels.forEach(function (panel) {
				const links = panel.querySelectorAll("a");
				links.forEach(function (link) {
					link.addEventListener("click", function () {
						closeMobileMenu();
					});
				});
			});

			syncCurrentMenuItems(menu);
			setupMenuItems();

			const handleResize = debounce(function () {
				closeMobileMenu();
				syncCurrentMenuItems(menu);
				setupMenuItems();
			}, 250);

			window.addEventListener("resize", handleResize);
		});
	}

	const handleNavigationChange = () => {
		document
			.querySelectorAll(".fb-advanced-mega-menu")
			.forEach((menu) => syncCurrentMenuItems(menu));
	};

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			initMegaMenu();
			window.addEventListener("popstate", handleNavigationChange);
		});
	} else {
		initMegaMenu();
		window.addEventListener("popstate", handleNavigationChange);
	}

	// Handle dynamic content changes (crucial for Next.js / SPA route transitions)
	if (typeof MutationObserver !== "undefined") {
		const domObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length || mutation.removedNodes.length) {
					initMegaMenu();
				}
			});
		});

		domObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
	}

	// Expose re-initialization function
	window.reinitMegaMenu = initMegaMenu;
})();
