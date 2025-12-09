import lottie from 'lottie-web';
(function () {
	function initLottieAnimations() {
		const containers = document.querySelectorAll(
			".fb-lottie-animation-container",
		);

		containers.forEach((container) => {
			// Prevent multiple initializations
			if (container.hasAttribute("data-lottie-initialized")) return;
			container.setAttribute("data-lottie-initialized", "true");

			const jsonUrl = container.getAttribute("data-json-url");
			const jsonData = container.getAttribute("data-json-data");
			const renderer = container.getAttribute("data-renderer") || "svg";
			const loop = container.getAttribute("data-loop") === "true";
			const autoplay = container.getAttribute("data-autoplay") === "true";
			const speed = parseFloat(container.getAttribute("data-speed")) || 1;
			const hoverEffect = container.getAttribute("data-hover-effect") || "none";
			const reverse = container.getAttribute("data-reverse") === "true";

			if (!jsonUrl && !jsonData) return;

			// Destroy if any previous instance exists
			try {
				lottie.destroy(container);
			} catch (e) {}

			const animationData = jsonData ? JSON.parse(atob(jsonData)) : null;

			// Autoplay rules
			const shouldAutoplay =
				hoverEffect === "play" || hoverEffect === "play-pause"
					? false
					: autoplay;

			// Load animation
			const animation = lottie.loadAnimation({
				container,
				renderer,
				loop,
				autoplay: shouldAutoplay,
				animationData: animationData || null,
				path: jsonUrl || null,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid meet",
					progressiveLoad: true,
				},
			});

			// Direction: reverse or normal
			animation.setDirection(reverse ? -1 : 1);

			// Speed
			animation.setSpeed(speed);

			// Hover Effects
			if (hoverEffect !== "none") {
				container.style.cursor = "pointer";

				container.addEventListener("mouseenter", () => {
					switch (hoverEffect) {
						case "play":
						case "play-pause":
						case "reverse":
							animation.setDirection(reverse ? -1 : 1);
							animation.play();
							break;

						case "pause":
							animation.pause();
							break;

						case "stop":
							animation.stop();
							break;

						case "toggle":
							if (animation.isPaused) {
								animation.setDirection(reverse ? -1 : 1);
								animation.play();
							} else {
								animation.pause();
							}
							break;
					}
				});

				container.addEventListener("mouseleave", () => {
					switch (hoverEffect) {
						case "play":
							animation.pause();
							break;

						case "pause":
							animation.setDirection(reverse ? -1 : 1);
							animation.play();
							break;

						case "play-pause":
							animation.pause();
							break;

						case "reverse":
							animation.setDirection(reverse ? -1 : 1);
							break;
					}
				});
			}
		});
	}

	function setupLottie() {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", initLottieAnimations);
		} else {
			initLottieAnimations();
		}

		// Re-run on DOM updates
		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.addedNodes.length || mutation.removedNodes.length) {
					initLottieAnimations();
				}
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	// Expose re-init
	window.reinitLotties = initLottieAnimations;

	// Start
	setupLottie();
})();
