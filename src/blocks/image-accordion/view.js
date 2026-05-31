/**
 * Frontis Blocks — Image Accordion Frontend Script
 * Handles hover / click trigger for all 4 presets
 */
(function () {
	"use strict";

	function initAccordion(wrapper) {
		const container = wrapper.querySelector(".pea-image-accordion-container");
		const items = wrapper.querySelectorAll(".pea-image-accordion-item");
		if (!container || !items.length) return;

		const triggerMode = wrapper.dataset.trigger || "hover";

		// Remove old listeners by cloning
		items.forEach((item) => {
			const clone = item.cloneNode(true);
			item.parentNode.replaceChild(clone, item);
		});

		const freshItems = wrapper.querySelectorAll(".pea-image-accordion-item");

		// Ensure first item is expanded by default if none are active
		if (!wrapper.querySelector(".is-active") && freshItems.length > 0) {
			freshItems[0].classList.add("is-active");
		}

		const activate = (target) => {
			freshItems.forEach((i) => {
				i.classList.remove("is-active");
				i.setAttribute("aria-expanded", "false");
			});
			target.classList.add("is-active");
			target.setAttribute("aria-expanded", "true");
		};

		if (triggerMode === "click") {
			freshItems.forEach((item) => {
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
			freshItems.forEach((item) => {
				item.addEventListener("mouseenter", () => activate(item));
			});
			// Reset to first item when mouse leaves the entire container area
			container.addEventListener("mouseleave", () => activate(freshItems[0]));
		}
	}

	function initAll() {
		document
			.querySelectorAll(".fb-image-accordion-wrapper")
			.forEach(initAccordion);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initAll);
	} else {
		initAll();
	}
})();
