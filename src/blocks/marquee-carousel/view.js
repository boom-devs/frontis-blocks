(function () {
<<<<<<< HEAD
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

=======
	function initSliders() {
		// Select all slider containers
		document
			.querySelectorAll(".fb-marquee-slider-container")
			.forEach(function (sliderContainer) {
				const blockId = sliderContainer.dataset.blockId;
				if (!blockId) return;

				const swiperSettings = sliderContainer.dataset.swiperSettings;
				if (!swiperSettings) return;

				let sliderOptions = {};
				try {
					sliderOptions = JSON.parse(swiperSettings);
				} catch (e) {
					console.error("Invalid Swiper settings JSON", e);
					return;
				}

				const swiperEl = sliderContainer.querySelector(".fb-marquee-swiper");
				if (!swiperEl) return;

				// init swiper
				const swiperInstance = new Swiper(swiperEl, {
					...sliderOptions,
				});

				// ===== Autoplay toggle support =====
				if (sliderOptions.navigation?.nextEl) {
					// Extract arrowsId from nextEl selector
					const match = sliderOptions.navigation.nextEl.match(/\.([^ ]+)/);
					if (match) {
						const arrowsId = match[1];
						const wrapper = document.querySelector(`.${arrowsId}`);
						if (wrapper) {
							const btn = wrapper.querySelector(".fb-news-ticker-pause-btn");
							if (btn) {
								btn.addEventListener("click", function () {
									if (swiperInstance.autoplay?.running) {
										swiperInstance.autoplay.stop();
										btn.classList.add("paused");
									} else {
										swiperInstance.autoplay.start();
										btn.classList.remove("paused");
									}
								});
							}
						}
					}
				}
				// ===================================
			});
	}

	var setupDone = false;

	function setupInitialization() {
		if (setupDone) return;
		setupDone = true;

		if (
			document.readyState === "complete" ||
			document.readyState === "interactive"
		) {
			setTimeout(initSliders, 100);
		} else {
			document.addEventListener("DOMContentLoaded", function () {
				setTimeout(initSliders, 100);
			});
		}

		if (typeof window !== "undefined") {
			var lastUrl = window.location.href;
			var urlObserver = new MutationObserver(function () {
				if (lastUrl !== window.location.href) {
					lastUrl = window.location.href;
					setTimeout(initSliders, 300);
				}
			});

			urlObserver.observe(document.body, { childList: true, subtree: true });
		}
	}

	setupInitialization();

	// If needed, expose re-initialization function
	window.reinitSliders = initSliders;
})();
>>>>>>> d5b48575042516fa1ff8f6a7e64ff34247ff3de4
