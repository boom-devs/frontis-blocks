(function () {
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

				// Force autoplay to continue/resume on click/touch
				swiperEl.addEventListener('click', () => {
					if (swiperInstance.autoplay) {
						swiperInstance.autoplay.start();
					}
				});
				
				swiperEl.addEventListener('touchstart', () => {
					if (swiperInstance.autoplay) {
						swiperInstance.autoplay.start();
					}
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