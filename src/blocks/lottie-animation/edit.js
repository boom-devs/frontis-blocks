// edit.js - NOW FULLY SUPPORTS REVERSE + HOVER EFFECTS (Editor = Frontend)

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import lottie from 'lottie-web';
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		lottieAnimationJsonTypeSwitcher,
		lottieAnimationImageUrl,
		lottieAnimationJsonUrl,
		lottieRenderer = 'svg',
		lottieLoop = true,
		lottieAutoplay = true,
		lottieAnimationSpeed = 1,
		lottieEffectsOnHover = 'none',
		lottieAnimationReverse = false,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-lottie-animation-main-wrapper ${blockID}`,
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
		if (lottieAnimationJsonTypeSwitcher === 'json-file' && lottieAnimationImageUrl) {
			path = lottieAnimationImageUrl;
		} else if (lottieAnimationJsonTypeSwitcher === 'json-url' && lottieAnimationJsonUrl) {
			path = lottieAnimationJsonUrl;
		}

		if (!path) return;

		const shouldAutoplay = (lottieEffectsOnHover === 'play-pause' || lottieEffectsOnHover === 'play') ? false : lottieAutoplay;

		const anim = lottie.loadAnimation({
			container: containerRef.current,
			renderer: lottieRenderer,
			loop: lottieLoop,
			autoplay: shouldAutoplay,
			path: path,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet',
				className: 'fb-lottie-inner',
			},
		});

		animationRef.current = anim;

		anim.addEventListener('DOMLoaded', () => {
			anim.setDirection(lottieAnimationReverse ? -1 : 1);
			anim.setSpeed(lottieAnimationSpeed);

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
		lottieAnimationImageUrl,
		lottieAnimationJsonUrl,
		lottieAnimationJsonTypeSwitcher,
		lottieRenderer,
		lottieLoop,
		lottieAutoplay,
		lottieAnimationSpeed,
		lottieEffectsOnHover,
		lottieAnimationReverse, 
	]);

	useEffect(() => {
		const container = containerRef.current;
		const anim = animationRef.current;
		if (!container || !anim || lottieEffectsOnHover === 'none') return;

		const playNormally = () => {
			anim.setDirection(lottieAnimationReverse ? -1 : 1);
			anim.play();
		};

		const playReversedOnHover = () => {
			anim.setDirection(lottieAnimationReverse ? 1 : -1);
			anim.play();
		};

		const handleMouseEnter = () => {
			switch (lottieEffectsOnHover) {
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
			switch (lottieEffectsOnHover) {
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
	}, [lottieEffectsOnHover, lottieAnimationReverse]);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

			<div {...blockProps}>
				<div className="fb-parent-wrapper fb-lottie-animation-container">
					<div
						ref={containerRef}
						className="fb-lottie-preview-container"
						style={{
							border: lottieAnimationImageUrl || lottieAnimationJsonUrl ? 'none' : '2px dashed #ccc',
							cursor: lottieEffectsOnHover !== 'none' ? 'pointer' : 'default',
							minHeight: '100px',
						}}
					>
						{!(lottieAnimationImageUrl || lottieAnimationJsonUrl) && (
							<p style={{ color: '#999', textAlign: 'center', padding: '40px 20px' }}>
								{__('Upload a Lottie JSON file or paste a URL to preview', 'frontis-blocks')}
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}