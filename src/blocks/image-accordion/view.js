(function () {
	"use strict";

	function initAccordion(wrapper) {
		// Prevent multiple initializations
		if (wrapper.hasAttribute("data-image-accordion-initialized")) return;
		wrapper.setAttribute("data-image-accordion-initialized", "true");

		const container = wrapper.querySelector(".fb-image-accordion-container");
		const items = wrapper.querySelectorAll(".fb-image-accordion-item");
		if (!container || !items.length) return;

		const triggerMode = wrapper.dataset.trigger || "hover";

		// Ensure first item is expanded by default if none are active
		if (!wrapper.querySelector(".is-active") && items.length > 0) {
			items[0].classList.add("is-active");
		}

		const activate = (target) => {
			items.forEach((i) => {
				i.classList.remove("is-active");
				i.setAttribute("aria-expanded", "false");
			});
			target.classList.add("is-active");
			target.setAttribute("aria-expanded", "true");
		};

		if (triggerMode === "click") {
			items.forEach((item) => {
				item.addEventListener("click", () => activate(item));
				item.addEventListener("keydown", (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						activate(item);
					}
				});
			});
		} else if (triggerMode === "hover") {
			// Hover mode
			items.forEach((item) => {
				item.addEventListener("mouseenter", () => activate(item));
			});
			// Reset to first item when mouse leaves the entire container area
			container.addEventListener("mouseleave", () => activate(items[0]));
		}
	}

	function initAll() {
		document
			.querySelectorAll(".fb-image-accordion-wrapper")
			.forEach(initAccordion);
	}

	// Initialize on different loading states
	function setupImageAccordion() {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", initAll);
		} else {
			initAll();
		}

		// Handle dynamic content changes (Next.js/React SPA compatibility)
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length || mutation.removedNodes.length) {
					initAll();
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	}

	// Expose initialization method globally for manual trigger in React/Next.js
	window.reinitImageAccordion = initAll;

	// Start setup
	setupImageAccordion();
})();
