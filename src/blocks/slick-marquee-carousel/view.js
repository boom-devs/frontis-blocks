(function () {
	function initLogoSlick() {
		const $ = window.jQuery;

		if (!$ || !$.fn.slick) {
			console.warn('jQuery or Slick not loaded.');
			return;
		}

		const sliders = document.querySelectorAll('.fb-marquee-carousel-wrapper');

		sliders.forEach((slider) => {
			const $slider = $(slider);
			if ($slider.hasClass('slick-initialized')) return;

			const wrapper = slider.closest('.fb-marquee-slider-container');
			const settingsAttr = wrapper?.getAttribute('data-slick-settings') || '{}';

			let slickSettings = {};
			try {
				slickSettings = JSON.parse(settingsAttr);
			} catch (e) {
				console.error('Invalid slick settings JSON:', e);
			}

			$slider.slick(slickSettings);
		});
	}

	if (document.readyState === 'complete') {
		initLogoSlick();
	} else {
		window.addEventListener('load', initLogoSlick);
	}
})();

