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
		riveAnimationGlobalWraperClass,
		riveAnimationGlobalWraperID,
		riveSelectedAnimation,
		riveAnimationType,
		rivePlayOnScroll,
		riveScrollThreshold
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-rive-animation-main-wrapper ${blockID}`,
	});

	if (!riveAnimationImageUrl) {
		return null;
	}

	return (
		<div {...blockProps}>
			<div className={`fb-parent-wrapper fb-rive-animation-container ${blockID} ${riveAnimationGlobalWraperClass}`} id={riveAnimationGlobalWraperID}>
				<div className="fb-rive-canvas-wrapper">
					<canvas
						className="fb-rive-canvas"
						data-rive-src={riveAnimationImageUrl}
						data-rive-loop={riveLoop}
						data-rive-autoplay={riveAutoplay}
						data-rive-speed={riveAnimationSpeed}
						data-rive-reverse={riveAnimationReverse}
						data-rive-hover={riveEffectsOnHover}
						data-rive-selected={riveSelectedAnimation}
						data-rive-type={riveAnimationType}
						data-rive-scroll={rivePlayOnScroll}
						data-rive-scroll-threshold={riveScrollThreshold}
						style={{
							width: '100%',
							height: '100%',
							display: 'block',
						}}
					/>
				</div>
			</div>
		</div>
	);
}	