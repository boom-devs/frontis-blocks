(function () {
	function initimageAccordion() {
		const imageAccordionItems = document.querySelectorAll(
			".fb-imageAccordion-item-wrapper",
		);

		imageAccordionItems.forEach((itemWrapper) => {
			const titleWrapper = itemWrapper.querySelector(
				".fb-imageAccordion-item-title-wrapper",
			);
			const contentWrapper = itemWrapper.querySelector(
				".fb-imageAccordion-content-wrapper",
			);

			// Check current state for initial setup
			const isActive = titleWrapper.classList.contains("active");

			// Set initial max height
			if (isActive) {
				contentWrapper.style.maxHeight = `${contentWrapper.scrollHeight}px`;
			} else {
				contentWrapper.style.maxHeight = "0px";
			}

			// Prevent multiple initializations
			if (titleWrapper.hasAttribute("data-imageAccordion-initialized")) return;
			titleWrapper.setAttribute("data-imageAccordion-initialized", "true");

			titleWrapper.addEventListener("click", function (event) {
				event.stopPropagation();

				// Check CURRENT state at click time
				const currentlyActive = titleWrapper.classList.contains("active");

				// Reset all imageAccordions at the same level
				const parentimageAccordion =
					itemWrapper.closest(".fb-imageAccordion-content-wrapper") ||
					document.body;
				const siblingItems = parentimageAccordion.querySelectorAll(
					".fb-imageAccordion-item-wrapper",
				);

				siblingItems.forEach((sibling) => {
					if (sibling !== itemWrapper) {
						const siblingTitle = sibling.querySelector(
							".fb-imageAccordion-item-title-wrapper",
						);
						const siblingContent = sibling.querySelector(
							".fb-imageAccordion-content-wrapper",
						);

						if (siblingTitle) siblingTitle.classList.remove("active");
						if (siblingContent) {
							siblingContent.classList.remove("active");
							siblingContent.style.maxHeight = "0px";
						}
					}
				});

				// Toggle current imageAccordion based on current state
				if (currentlyActive) {
					// Currently open, so close it
					titleWrapper.classList.remove("active");
					contentWrapper.classList.remove("active");
					contentWrapper.style.maxHeight = "0px";
				} else {
					// Currently closed, so open it
					titleWrapper.classList.add("active");
					contentWrapper.classList.add("active");
					contentWrapper.style.maxHeight = `${contentWrapper.scrollHeight}px`;
				}
			});
		});
	}

	// Initialize on different loading states
	function setupimageAccordion() {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", initimageAccordion);
		} else {
			initimageAccordion();
		}

		// Handle dynamic content changes
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length || mutation.removedNodes.length) {
					initimageAccordion();
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	// Expose initialization method globally
	window.reinitimageAccordion = initimageAccordion;

	// Start setup
	setupimageAccordion();
})();
