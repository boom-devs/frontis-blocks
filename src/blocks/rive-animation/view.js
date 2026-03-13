import { Rive as RiveCanvas } from '@rive-app/canvas';
import { Rive as RiveWebGL2 } from '@rive-app/webgl2';

(function() {
	'use strict';

	let playObserver = null;
	let loadObserver = null;

	// Set up observers for optimization
	function setupObservers() {
		if (playObserver && loadObserver) return;

		// 1. PLAYBACK OBSERVER: Controls play/pause when the canvas enters or leaves the screen.
		playObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const canvas = entry.target;

					if (entry.isIntersecting) {
						canvas.dataset.wantsPlay = "true";
						// Only auto-play if the block settings intended for it to autoplay
						if (canvas._riveInstance && canvas._shouldAutoplay) {
							canvas._riveInstance.play();
						}
					} else {
						canvas.dataset.wantsPlay = "false";
						// Pause if no longer visible to save resources
						if (canvas._riveInstance) {
							canvas._riveInstance.pause();
						}
					}
				});
			},
			{ threshold: 0.05 } // Trigger just as it enters or exits
		);

		// 2. PRELOAD OBSERVER: Pre-loads the files BEFORE the user scrolls to them
		loadObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const canvas = entry.target;

					if (entry.isIntersecting) {
						if (!canvas._riveInstance && !canvas._isInitializing) {
							canvas._isInitializing = true;
							initRiveAnimation(canvas);
							
							// Stop loading it multiple times
							loadObserver.unobserve(canvas);
						}
					}
				});
			},
			{ rootMargin: "1500px 0px" } // Triggers 1500 pixels BEFORE they scroll to it!
		);
	}

	// Initialize a single Rive animation
	function initRiveAnimation(canvas) {
		const src = canvas.getAttribute('data-rive-src');
		const loop = canvas.getAttribute('data-rive-loop') === 'true';
		const autoplay = canvas.getAttribute('data-rive-autoplay') === 'true';
		const speed = parseFloat(canvas.getAttribute('data-rive-speed') || '1');
		const reverse = canvas.getAttribute('data-rive-reverse') === 'true';
		const hoverEffect = canvas.getAttribute('data-rive-hover') || 'none';

		if (!src) return;

		const shouldAutoplay = (hoverEffect === 'play-pause' || hoverEffect === 'play') ? false : autoplay;
		canvas._shouldAutoplay = shouldAutoplay;

		const riveRenderer = canvas.getAttribute('data-rive-renderer') || 'webgl2';
		const RiveClass = riveRenderer === 'webgl2' ? RiveWebGL2 : RiveCanvas;
		
		try {
			// First detect animations and state machines
			const tempRive = new RiveClass({
				src: src,
				canvas: canvas,
				autoplay: false,
				useOffscreenRenderer: true,
				onLoad: () => {
					const animations = tempRive.animationNames || [];
					const stateMachines = tempRive.stateMachineNames || [];
					
					// Cleanup temp instance
					tempRive.cleanup();
					
					// Create actual instance with proper configuration
					const config = {
						src: src,
						canvas: canvas,
						// Only play immediately if already visible
						autoplay: shouldAutoplay && canvas.dataset.wantsPlay === "true",
						useOffscreenRenderer: true,
						automaticallyHandleEvents: true,
						onLoad: () => {
							riveInstance.resizeDrawingSurfaceToCanvas();
							// Double check if it became visible while we were loading it!
							if (canvas._shouldAutoplay && canvas.dataset.wantsPlay === "true") {
								riveInstance.play();
							}
						},
						onLoadError: (err) => {
							console.error('Rive load error:', err);
						}
					};

					// Add state machine or animation
					if (stateMachines.length > 0) {
						config.stateMachines = stateMachines[0];
					} else if (animations.length > 0) {
						config.animations = animations[0];
					}

					const riveInstance = new RiveClass(config);

					// Store instance on canvas for cleanup
					canvas._riveInstance = riveInstance;

					// Setup hover effects
					if (hoverEffect !== 'none') {
						canvas.style.cursor = 'pointer';

						canvas.addEventListener('mouseenter', () => {
							switch (hoverEffect) {
								case 'play':
								case 'play-pause':
									riveInstance.play();
									break;
								case 'pause':
									riveInstance.pause();
									break;
								case 'stop':
									riveInstance.stop();
									break;
							}
						});

						canvas.addEventListener('mouseleave', () => {
							switch (hoverEffect) {
								case 'play':
								case 'play-pause':
									riveInstance.pause();
									break;
								case 'pause':
									// Only resume playing if it is currently visible or meant to autoplay
									if (canvas.dataset.wantsPlay === "true") {
										riveInstance.play();
									}
									break;
							}
						});
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
		setupObservers();

		const canvases = document.querySelectorAll('.fb-rive-canvas');
		canvases.forEach(canvas => {
			if (!canvas._isObserved) {
				playObserver.observe(canvas);
				loadObserver.observe(canvas);
				canvas._isObserved = true;
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
})();