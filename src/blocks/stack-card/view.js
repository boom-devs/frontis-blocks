/**
 * Stack Card View Script
 * 
 * This script initializes all Stack Card behaviors (presets and scale logic) on the frontend.
 * It ensures that the appropriate animation and interaction scripts are bound to the block instances.
 */

import { initStackCardScaleScript } from './behaviors/stack-card-scale';
import { initStackCardPresetOverScript } from './behaviors/preset-four';
import { initStackCardPresetRightScript } from './behaviors/preset-three';
import { initStackCardPresetLeftScript } from './behaviors/preset-two';

(function () {
	/**
	 * Main initialization function.
	 */
	function initializeStackCards() {
		// Initialize the scale behavior (primarily for 'stack-top' preset)
		initStackCardScaleScript();
		
		// Initialize individual preset behaviors
		initStackCardPresetLeftScript();
		initStackCardPresetRightScript();
		initStackCardPresetOverScript();
	}

	// Wait for DOM to be ready before initializing
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeStackCards);
	} else {
		initializeStackCards();
	}

	// Handle dynamic content changes (crucial for Next.js / SPA route transitions)
	if (typeof MutationObserver !== 'undefined') {
		var domObserver = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.addedNodes.length || mutation.removedNodes.length) {
					initializeStackCards();
				}
			});
		});

		domObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
	}

	// Expose re-initialization function
	window.reinitStackCards = initializeStackCards;
})();