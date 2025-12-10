// save.js - Frontend rendering for Rive Animation Block

import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		blockID,
		riveAnimationImageUrl,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveAnimationReverse,
		riveEffectsOnHover,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-rive-animation-main-wrapper ${blockID}`,
	});

	if (!riveAnimationImageUrl) {
		return null;
	}

	return (
		<div {...blockProps}>
			<div className="fb-parent-wrapper fb-rive-animation-container">
				<canvas
					className="fb-rive-canvas"
					data-rive-src={riveAnimationImageUrl}
					data-rive-loop={riveLoop}
					data-rive-autoplay={riveAutoplay}
					data-rive-speed={riveAnimationSpeed}
					data-rive-reverse={riveAnimationReverse}
					data-rive-hover={riveEffectsOnHover}
					style={{
						width: '100%',
						height: '100%',
						display: 'block',
					}}
				/>
			</div>
		</div>
	);
}