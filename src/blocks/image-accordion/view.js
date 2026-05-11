(function () {
	"use strict";

	function initAccordion(wrapper) {
		const container = wrapper.querySelector(".pea-image-accordion-container");
		if (!container) return;

		const triggerMode = (wrapper.dataset.trigger || "hover")
			.trim()
			.toLowerCase();

		// Add trigger class to wrapper so CSS can apply preset-aware rules
		wrapper.classList.remove("pea-trigger-hover", "pea-trigger-click");
		wrapper.classList.add("pea-trigger-" + triggerMode);

		// Fresh items
		const getItems = () =>
			Array.from(container.querySelectorAll(".pea-image-accordion-item"));

		// Remove old listeners by cloning nodes
		getItems().forEach((item) => {
			const clone = item.cloneNode(true);
			item.parentNode.replaceChild(clone, item);
		});

		const items = getItems();

		// Activate a single item
		function activate(target) {
			items.forEach((i) => {
				i.classList.remove("is-active");
				i.setAttribute("aria-expanded", "false");
			});
			target.classList.add("is-active");
			target.setAttribute("aria-expanded", "true");
		}

		if (triggerMode === "click") {
			// Hover does nothing; only clicks toggle is-active
			items.forEach((item) => {
				item.addEventListener("click", () => activate(item));

				item.addEventListener("keydown", (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						activate(item);
					}
				});
			});
		} else {
			// HOVER MODE (default)
			// Hover expands item; click has no extra effect
			items.forEach((item) => {
				item.addEventListener("mouseenter", () => activate(item));
			});

			// On container mouseleave → restore first item
			container.addEventListener("mouseleave", () => {
				items.forEach((i) => {
					i.classList.remove("is-active");
					i.setAttribute("aria-expanded", "false");
				});
				if (items[0]) {
					items[0].classList.add("is-active");
					items[0].setAttribute("aria-expanded", "true");
				}
			});
		}

		// Set first item as active on load
		if (items[0]) {
			items[0].classList.add("is-active");
			items[0].setAttribute("aria-expanded", "true");
		}
	}

	function init() {
		document
			.querySelectorAll(".image-accordion-block .pea-image-accordion-wrapper")
			.forEach(initAccordion);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
