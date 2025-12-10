// edit.js - Rive Animation Block Editor

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { Rive } from '@rive-app/canvas';
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		riveAnimationImageUrl,
		riveLoop = true,
		riveAutoplay = true,
		riveAnimationSpeed = 1,
		riveAnimationReverse = false,
		riveEffectsOnHover = 'none',
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-rive-animation-main-wrapper ${blockID}`,
	});

	const canvasRef = useRef(null);
	const riveInstanceRef = useRef(null);

	// Load and configure Rive animation
	useEffect(() => {
		if (!canvasRef.current || !riveAnimationImageUrl) {
			return;
		}

		// Cleanup previous instance
		if (riveInstanceRef.current) {
			riveInstanceRef.current.cleanup();
			riveInstanceRef.current = null;
		}

		const shouldAutoplay = (riveEffectsOnHover === 'play-pause' || riveEffectsOnHover === 'play') ? false : riveAutoplay;

		try {
			// First, detect what's in the file
			const tempRive = new Rive({
				src: riveAnimationImageUrl,
				canvas: canvasRef.current,
				autoplay: false,
				onLoad: () => {
					const animations = tempRive.animationNames || [];
					const stateMachines = tempRive.stateMachineNames || [];

					console.log('Detected animations:', animations);
					console.log('Detected state machines:', stateMachines);

					// Cleanup temp instance
					tempRive.cleanup();

					// Now create the actual instance with proper config
					const config = {
						src: riveAnimationImageUrl,
						canvas: canvasRef.current,
						autoplay: shouldAutoplay,
						automaticallyHandleEvents: true,
						onLoad: () => {
							const instance = riveInstanceRef.current;
							if (instance) {
								instance.resizeDrawingSurfaceToCanvas();
								console.log('Rive animation loaded successfully');
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

					riveInstanceRef.current = new Rive(config);
				},
				onLoadError: (err) => {
					console.error('Rive detection error:', err);
				}
			});
		} catch (error) {
			console.error('Error loading Rive animation:', error);
		}

		return () => {
			if (riveInstanceRef.current) {
				riveInstanceRef.current.cleanup();
				riveInstanceRef.current = null;
			}
		};
	}, [
		riveAnimationImageUrl,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveAnimationReverse,
		riveEffectsOnHover,
	]);

	// Handle hover effects
	useEffect(() => {
		const canvas = canvasRef.current;
		const instance = riveInstanceRef.current;

		if (!canvas || !instance || riveEffectsOnHover === 'none') {
			return;
		}

		const handleMouseEnter = () => {
			switch (riveEffectsOnHover) {
				case 'play':
				case 'play-pause':
					instance.play();
					break;
				case 'pause':
					instance.pause();
					break;
				case 'stop':
					instance.stop();
					break;
			}
		};

		const handleMouseLeave = () => {
			switch (riveEffectsOnHover) {
				case 'play':
				case 'play-pause':
					instance.pause();
					break;
				case 'pause':
					instance.play();
					break;
			}
		};

		canvas.style.cursor = 'pointer';
		canvas.addEventListener('mouseenter', handleMouseEnter);
		canvas.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			canvas.style.cursor = '';
			canvas.removeEventListener('mouseenter', handleMouseEnter);
			canvas.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [riveEffectsOnHover]);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

			<div {...blockProps}>
				<div className="fb-parent-wrapper fb-rive-animation-container">
					<div
						className="fb-rive-canvas-wrapper"
						style={{
							border: riveAnimationImageUrl ? 'none' : '2px dashed #ccc',
							minHeight: '200px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'relative',
							width: '100%',
						}}
					>
						{riveAnimationImageUrl ? (
							<canvas
								ref={canvasRef}
								style={{
									width: '100%',
									height: '100%',
									maxWidth: '100%',
								}}
							/>
						) : (
							<p style={{ color: '#999', textAlign: 'center', padding: '40px 20px' }}>
								{__('Upload a .riv file to preview', 'frontis-blocks')}
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}