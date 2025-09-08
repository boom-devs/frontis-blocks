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
			
			// Skip if already initialized
			if ($slider.hasClass('slick-initialized')) return;

			const wrapper = slider.closest('.fb-marquee-slider-container');
			const settingsAttr = wrapper?.getAttribute('data-slick-settings') || '{}';

			let slickSettings = {};
			try {
				slickSettings = JSON.parse(settingsAttr);
				
				// Ensure responsive settings are properly handled
				if (slickSettings.responsive && Array.isArray(slickSettings.responsive)) {
					// Filter out empty responsive settings
					slickSettings.responsive = slickSettings.responsive.filter(item => {
						return item.breakpoint && item.settings && 
							   typeof item.settings.slidesToShow !== 'undefined';
					});
					
					// If no valid responsive settings, remove the property
					if (slickSettings.responsive.length === 0) {
						delete slickSettings.responsive;
					}
				}
				
				// Ensure slidesToShow is a number
				if (slickSettings.slidesToShow) {
					slickSettings.slidesToShow = parseInt(slickSettings.slidesToShow) || 1;
				}
				
			} catch (e) {
				console.error('Invalid slick settings JSON:', e);
				// Fallback to basic settings
			}

			// Initialize slick with error handling
			try {
				$slider.slick(slickSettings);
			} catch (slickError) {
				console.error('Slick initialization error:', slickError);
			}
		});
	}

	// Multiple initialization attempts for better reliability
	function initWithRetry(attempts = 3) {
		if (attempts <= 0) return;
		
		if (window.jQuery && window.jQuery.fn.slick) {
			initLogoSlick();
		} else {
			// Retry after a short delay
			setTimeout(() => initWithRetry(attempts - 1), 500);
		}
	}

	// Initialize on different events
	if (document.readyState === 'complete') {
		initWithRetry();
	} else {
		window.addEventListener('load', () => initWithRetry());
		document.addEventListener('DOMContentLoaded', () => initWithRetry());
	}

	// Also initialize on page change (for SPA-like behavior)
	if (typeof wp !== 'undefined' && wp.domReady) {
		wp.domReady(initWithRetry);
	}
})();

