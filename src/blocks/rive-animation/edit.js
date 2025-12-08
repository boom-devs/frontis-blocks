// edit.js - NOW FULLY SUPPORTS REVERSE + HOVER EFFECTS (Editor = Frontend)

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		riveAnimationJsonTypeSwitcher,
		riveAnimationImageUrl,
		riveAnimationJsonUrl,
		riveRenderer = 'svg',
		riveLoop = true,
		riveAutoplay = true,
		riveAnimationSpeed = 1,
		riveEffectsOnHover = 'none',
		riveAnimationReverse = false,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-rive-animation-main-wrapper ${blockID}`,
	});

	const containerRef = useRef(null);
	const animationRef = useRef(null);

	// Load animation when attributes change
	useEffect(() => {
		if (!containerRef.current) return;

		if (animationRef.current) {
			animationRef.current.destroy();
			animationRef.current = null;
		}

		let path = null;
		if (riveAnimationJsonTypeSwitcher === 'json-file' && riveAnimationImageUrl) {
			path = riveAnimationImageUrl;
		} else if (riveAnimationJsonTypeSwitcher === 'json-url' && riveAnimationJsonUrl) {
			path = riveAnimationJsonUrl;
		}

		if (!path) return;

		const shouldAutoplay = (riveEffectsOnHover === 'play-pause' || riveEffectsOnHover === 'play') ? false : riveAutoplay;

		const anim = rive.loadAnimation({
			container: containerRef.current,
			renderer: riveRenderer,
			loop: riveLoop,
			autoplay: shouldAutoplay,
			path: path,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet',
				className: 'fb-rive-inner',
			},
		});

		animationRef.current = anim;

		anim.addEventListener('DOMLoaded', () => {
			anim.setDirection(riveAnimationReverse ? -1 : 1);
			anim.setSpeed(riveAnimationSpeed);

			if (shouldAutoplay) {
				anim.play();
			}
		});

		return () => {
			if (animationRef.current) {
				animationRef.current.destroy();
				animationRef.current = null;
			}
		};
	}, [
		riveAnimationImageUrl,
		riveAnimationJsonUrl,
		riveAnimationJsonTypeSwitcher,
		riveRenderer,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveEffectsOnHover,
		riveAnimationReverse, 
	]);

	useEffect(() => {
		const container = containerRef.current;
		const anim = animationRef.current;
		if (!container || !anim || riveEffectsOnHover === 'none') return;

		const playNormally = () => {
			anim.setDirection(riveAnimationReverse ? -1 : 1);
			anim.play();
		};

		const playReversedOnHover = () => {
			anim.setDirection(riveAnimationReverse ? 1 : -1);
			anim.play();
		};

		const handleMouseEnter = () => {
			switch (riveEffectsOnHover) {
				case 'play':
				case 'play-pause':
					playNormally();
					break;
				case 'pause':
					anim.pause();
					break;
				case 'stop':
					anim.stop();
					break;
				case 'reverse':
					playReversedOnHover();
					break;
				case 'toggle':
					anim.isPaused ? playNormally() : anim.pause();
					break;
			}
		};

		const handleMouseLeave = () => {
			switch (riveEffectsOnHover) {
				case 'play':
				case 'play-pause':
					anim.pause();
					break;
				case 'pause':
					playNormally();
					break;
				case 'reverse':
					playNormally(); 
					break;
			}
		};

		container.style.cursor = 'pointer';
		container.addEventListener('mouseenter', handleMouseEnter);
		container.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			container.style.cursor = '';
			container.removeEventListener('mouseenter', handleMouseEnter);
			container.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [riveEffectsOnHover, riveAnimationReverse]);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

			<div {...blockProps}>
				<div className="fb-parent-wrapper fb-rive-animation-container">
					<div
						ref={containerRef}
						className="fb-rive-preview-container"
						style={{
							border: riveAnimationImageUrl || riveAnimationJsonUrl ? 'none' : '2px dashed #ccc',
							cursor: riveEffectsOnHover !== 'none' ? 'pointer' : 'default',
							minHeight: '100px',
						}}
					>
						{!(riveAnimationImageUrl || riveAnimationJsonUrl) && (
							<p style={{ color: '#999', textAlign: 'center', padding: '40px 20px' }}>
								{__('Upload a rive JSON file or paste a URL to preview', 'frontis-blocks')}
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}