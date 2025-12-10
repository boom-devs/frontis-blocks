import { Rive } from '@rive-app/canvas';

(function() {
	'use strict';

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

					// Add state machine or animation
					if (stateMachines.length > 0) {
						config.stateMachines = stateMachines[0];
					} else if (animations.length > 0) {
						config.animations = animations[0];
					}

					const riveInstance = new Rive(config);

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
									riveInstance.play();
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
})();