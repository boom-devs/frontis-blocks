// edit.js
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import {
	PanelBody
} from "@wordpress/components";
import Inspector from "./inspector";
import lottie from 'lottie-web';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		lottieAnimationJsonTypeSwitcher,
		lottieAnimationImageUrl,
		lottieAnimationJsonUrl,
		lottieRenderer = 'svg',
		lottieLoop = true,
		lottieAutoplay = true,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-lottie-animation-main-wrapper ${blockID}`,
	});

	const containerRef = useRef(null);
	const animationRef = useRef(null);

	// Load animation when attributes change
	useEffect(() => {
		if (!containerRef.current) return;

		// Destroy previous animation
		if (animationRef.current) {
			animationRef.current.destroy();
		}

		let animationData = null;
		let path = null;

		if (lottieAnimationJsonTypeSwitcher === 'json-file' && lottieAnimationImageUrl) {
			// For uploaded file, we assume it's already a direct URL to .json
			path = lottieAnimationImageUrl;
		} else if (lottieAnimationJsonTypeSwitcher === 'json-url' && lottieAnimationJsonUrl) {
			path = lottieAnimationJsonUrl;
		}

		if (!path) return;

		animationRef.current = lottie.loadAnimation({
			container: containerRef.current,
			renderer: lottieRenderer,
			loop: lottieLoop,
			autoplay: lottieAutoplay,
			path: path,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet',
				className: 'fb-lottie-inner',
			},
		});

		return () => {
			if (animationRef.current) animationRef.current.destroy();
		};
	}, [
		lottieAnimationImageUrl,
		lottieAnimationJsonUrl,
		lottieAnimationJsonTypeSwitcher,
		lottieRenderer,
		lottieLoop,
		lottieAutoplay,
	]);

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				<div className="fb-parent-wrapper fb-lottie-animation-container">
					<div
						ref={containerRef}
						className="lottie-preview-container"
						style={{
							width: '100%',
							height: '300px',
							border: lottieAnimationImageUrl || lottieAnimationJsonUrl ? 'none' : '2px dashed #ccc',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							background: '#f9f9f9',
							borderRadius: '8px',
						}}
					>
						{!(lottieAnimationImageUrl || lottieAnimationJsonUrl) && (
							<p style={{ color: '#999' }}>
								{__('Upload a Lottie JSON file or paste a URL to preview', 'frontis-blocks')}
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}