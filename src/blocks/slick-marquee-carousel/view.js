(function () {
	function initLogoSlick() {
		const $ = window.jQuery;
		const sliders = document.querySelectorAll('.client-logo-slider');

		sliders.forEach((slider) => {
			const $slider = $(slider);
			if ($slider.hasClass('slick-initialized')) return;

			$slider.slick({
				infinite: true,
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 0,
				speed: 4000,
				cssEase: 'linear',
				arrows: true,
				dots: false,
				pauseOnHover: false,
				pauseOnFocus: false,
				variableWidth: false,
			});
		});
	}

	if (document.readyState === 'complete') {
		initLogoSlick();
	} else {
		window.addEventListener('load', initLogoSlick);
	}
})();
