(function () {
	"use strict";

	function initTaxonomyBlocks() {
		const blocks = document.querySelectorAll(".fb-post-category-area");

		blocks.forEach((block) => {
			if (block.hasAttribute("data-initialized")) return;
			block.setAttribute("data-initialized", "true");

			// Add any client-side interactions here
			// For example: hover effects, animations, etc.
		});
	}

	// Initialize
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initTaxonomyBlocks);
	} else {
		initTaxonomyBlocks();
	}

	// Reinitialize when new blocks are added (for dynamic content)
	if (typeof MutationObserver !== "undefined") {
		const observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.addedNodes.length) {
					initTaxonomyBlocks();
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	window.reinitTaxonomyBlocks = initTaxonomyBlocks;
})();
