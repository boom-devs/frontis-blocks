import { initStackCardScaleViewScript } from './stack-card-scale-behavior';

(function () {
	function init() {
		initStackCardScaleViewScript();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
