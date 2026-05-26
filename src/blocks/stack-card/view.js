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
})();