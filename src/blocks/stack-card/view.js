import { initStackCardScaleViewScript } from './stack-card-scale-behavior';
import { initPresetFourViewScript } from './preset-four';
import { initPresetThreeViewScript } from './preset-three';
import { initPresetTwoViewScript } from './preset-two';

(function () {
	function init() {
		initStackCardScaleViewScript();
		initPresetTwoViewScript();
		initPresetThreeViewScript();
		initPresetFourViewScript();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
