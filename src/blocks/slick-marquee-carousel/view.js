(function () {
	function initLogoSlick() {
		const $ = window.jQuery;
		const sliders = document.querySelectorAll('.uagb-slick-carousel'); 

		sliders.forEach((slider) => {
			const $slider = $(slider);
			if ($slider.hasClass('slick-initialized')) return;

			// Find closest wrapper with data-slick-settings
			const wrapper = slider.closest('.fb-marquee-slider-container');
			const slickSettingsData = wrapper?.getAttribute('data-slick-settings') || '{}';

			let slickSettings = {};
			try {
				slickSettings = JSON.parse(slickSettingsData);
			} catch (e) {
				console.error('Invalid Slick settings JSON:', e);
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
