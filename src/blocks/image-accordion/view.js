(function () {
	"use strict";

	function initAccordion(wrapper) {
		const container = wrapper.querySelector(".pea-image-accordion-container");
		if (!container) return;

		const items = Array.from(
			container.querySelectorAll(".pea-image-accordion-item"),
		);
		const triggerMode = wrapper.dataset.trigger || "hover";

		// Add trigger class to wrapper so CSS can react
		wrapper.classList.add(`pea-trigger-${triggerMode}`);

		// Remove any previously-bound listeners (safe for re-init)
		items.forEach((item) => {
			const clone = item.cloneNode(true);
			item.parentNode.replaceChild(clone, item);
		});

		// Re-query after cloning
		const freshItems = Array.from(
			container.querySelectorAll(".pea-image-accordion-item"),
		);

		if (triggerMode === "click") {
			// Click mode
			freshItems.forEach((item) => {
				item.addEventListener("click", () => {
					freshItems.forEach((i) => i.classList.remove("is-active"));
					item.classList.add("is-active");
				});

				// Keyboard accessibility
				item.addEventListener("keydown", (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						item.click();
					}
				});
			});
		} else {
			// Hover mode (default)
			freshItems.forEach((item) => {
				item.addEventListener("mouseenter", () => {
					freshItems.forEach((i) => i.classList.remove("is-active"));
					item.classList.add("is-active");
				});
			});

			// Reset to first item when mouse leaves the container
			container.addEventListener("mouseleave", () => {
				freshItems.forEach((i) => i.classList.remove("is-active"));
				if (freshItems[0]) {
					freshItems[0].classList.add("is-active");
				}
			});
		}

		// Ensure first item starts as active
		if (freshItems[0] && !freshItems[0].classList.contains("is-active")) {
			freshItems[0].classList.add("is-active");
		}

		// Update aria-expanded on state change (accessibility)
		const observer = new MutationObserver(() => {
			freshItems.forEach((item) => {
				item.setAttribute(
					"aria-expanded",
					item.classList.contains("is-active") ? "true" : "false",
				);
			});
		});

		freshItems.forEach((item) => {
			observer.observe(item, { attributes: true, attributeFilter: ["class"] });
		});
	}

	function init() {
		const wrappers = document.querySelectorAll(
			".image-accordion-block .pea-image-accordion-wrapper",
		);
		wrappers.forEach(initAccordion);
	}

	// Run after DOM is ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
