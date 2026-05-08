(function () {
	/**
	 * Core Circle Menu initializer
	 */
	function initCircleMenu() {
		const menus = document.querySelectorAll(
			".fb-circle-menu:not(.is-initialized)",
		);

		menus.forEach((menu) => {
			/** DOM Elements Selection */
			const center = menu.querySelector(".fb-circle-menu-center");
			const items = menu.querySelectorAll(".fb-circle-menu-item");
			const wrapper = menu.closest(".fb-circle-menu-main-wrapper");

			if (!center || !items.length || !wrapper) return;

			/** Mark as initialized to prevent double binding */
			menu.classList.add("is-initialized");

			/** Block Settings Data Retrieval */
			const triggerType = (menu.dataset.trigger || "click").trim();

			/** Local States & Variables */
			let isOpen = false;
			let closeTimer;

			/** Menu Action Helpers */
			const openMenu = () => {
				if (closeTimer) clearTimeout(closeTimer);
				center.classList.add("is-active");
				wrapper.classList.add("is-active");
				isOpen = true;
			};

			const closeMenu = () => {
				if (closeTimer) clearTimeout(closeTimer);
				center.classList.remove("is-active");
				wrapper.classList.remove("is-active");
				isOpen = false;
			};

			/** Event Listeners Setup (Hover / Click) */
			if (triggerType === "hover") {
				menu.addEventListener("mouseenter", () => {
					if (closeTimer) clearTimeout(closeTimer);
					if (!isOpen) openMenu();
				});

				menu.addEventListener("mouseleave", () => {
					if (isOpen) {
						closeTimer = setTimeout(() => {
							closeMenu();
						}, 500);
					}
				});
			} else {
				center.addEventListener("click", (e) => {
					e.stopPropagation();
					if (!isOpen) {
						openMenu();
					} else {
						closeMenu();
					}
				});

				document.addEventListener("click", (e) => {
					if (isOpen && !menu.contains(e.target)) {
						closeMenu();
					}
				});
			}
		});
	}

	/**
	 * Set up Circle Menu on initial page load and observe dynamic content
	 */
	function setupCircleMenu() {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", initCircleMenu);
		} else {
			initCircleMenu();
		}

		/** Watch for new circle menus added to the DOM */
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length) {
					initCircleMenu();
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	/** Expose a global re-initializer */
	window.reinitCircleMenu = initCircleMenu;

	/** Kick things off */
	setupCircleMenu();
})();
