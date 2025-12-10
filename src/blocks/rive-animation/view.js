import { Rive } from '@rive-app/canvas';

(function () {
	'use strict';

	// Initialize a single Rive animation
	function initRiveAnimation(canvas) {
		const src = canvas.getAttribute('data-rive-src');
		const loop = canvas.getAttribute('data-rive-loop') === 'true';
		const autoplay = canvas.getAttribute('data-rive-autoplay') === 'true';
		const speed = parseFloat(canvas.getAttribute('data-rive-speed') || '1');
		const reverse = canvas.getAttribute('data-rive-reverse') === 'true';
		const hoverEffect = canvas.getAttribute('data-rive-hover') || 'none';
		const selectedAnimation = canvas.getAttribute('data-rive-selected');
		const animationType = canvas.getAttribute('data-rive-type');
		const playOnScroll = canvas.getAttribute('data-rive-scroll') === 'true';
		const scrollThreshold = parseInt(canvas.getAttribute('data-rive-scroll-threshold') || '50');

		if (!src) return;

		const shouldAutoplay = (hoverEffect === 'play-pause' || hoverEffect === 'play') ? false : autoplay;

		try {
			// First detect animations and state machines
			const tempRive = new Rive({
				src: src,
				canvas: canvas,
				autoplay: false,
				onLoad: () => {
					const animations = tempRive.animationNames || [];
					const stateMachines = tempRive.stateMachineNames || [];

					console.log('Rive detected - Animations:', animations, 'State Machines:', stateMachines);

					// Cleanup temp instance
					tempRive.cleanup();

					// Determine which animation/state machine to use
					let useAnimation = null;
					let useStateMachine = null;

					if (selectedAnimation) {
						const [type, name] = selectedAnimation.split(':');
						if (type === 'stateMachine' && stateMachines.includes(name)) {
							useStateMachine = name;
						} else if (type === 'animation' && animations.includes(name)) {
							useAnimation = name;
						}
					}

					// Fallback to first available
					if (!useAnimation && !useStateMachine) {
						if (stateMachines.length > 0) {
							useStateMachine = stateMachines[0];
						} else if (animations.length > 0) {
							useAnimation = animations[0];
						}
					}

					// Create actual instance with proper configuration
					const config = {
						src: src,
						canvas: canvas,
						autoplay: shouldAutoplay,
						automaticallyHandleEvents: true,
						onLoad: () => {
							riveInstance.resizeDrawingSurfaceToCanvas();
						},
						onLoadError: (err) => {
							console.error('Rive load error:', err);
						}
					};

					// Add state machine or animation based on selection
					if (useStateMachine) {
						config.stateMachines = useStateMachine;
						console.log('Using state machine:', useStateMachine);
					} else if (useAnimation) {
						config.animations = useAnimation;
						console.log('Using animation:', useAnimation);
					}

					const riveInstance = new Rive(config);

					// Store instance on canvas for cleanup
					canvas._riveInstance = riveInstance;

					if (playOnScroll) {
						let hasPlayed = false; // Track if animation has played once

						const observer = new IntersectionObserver((entries) => {
							entries.forEach(entry => {
								// Calculate visible percentage
								const visiblePercentage = entry.intersectionRatio * 100;

								if (visiblePercentage >= scrollThreshold) {
									// Element is visible beyond threshold
									if (!hasPlayed || loop) {
										riveInstance.play();
										if (!loop) {
											hasPlayed = true;
										}
									}
								} else {
									// Element is not visible enough
									if (!loop) {
										riveInstance.pause();
									}
								}
							});
						}, {
							// Create thresholds from 0 to 1 in steps of 0.01 (1%)
							threshold: Array.from({ length: 101 }, (_, i) => i / 100)
						});

						observer.observe(canvas);
						canvas._scrollObserver = observer;

						console.log('Scroll trigger enabled with threshold:', scrollThreshold + '%');
					}
				},
				onLoadError: (err) => {
					console.error('Rive detection error:', err);
				}
			});
		} catch (error) {
			console.error('Error initializing Rive animation:', error);
		}
	}

	// Initialize all Rive animations on the page
	function initAllRiveAnimations() {
		const canvases = document.querySelectorAll('.fb-rive-canvas');
		canvases.forEach(canvas => {
			if (!canvas._riveInstance) {
				initRiveAnimation(canvas);
			}
		});
	}

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initAllRiveAnimations);
	} else {
		initAllRiveAnimations();
	}

	if (window.MutationObserver) {
		const observer = new MutationObserver(initAllRiveAnimations);
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	}

	window.addEventListener('beforeunload', () => {
		const canvases = document.querySelectorAll('.fb-rive-canvas');
		canvases.forEach(canvas => {
			if (canvas._riveInstance) {
				canvas._riveInstance.cleanup();
			}
			if (canvas._scrollObserver) {
				canvas._scrollObserver.disconnect();
			}
		});
	});
})();