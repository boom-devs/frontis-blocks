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
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight,
		riveAnimationContainerWidthUnits,
		riveAnimationContainerHeightUnits,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-rive-animation-main-wrapper ${blockID}`,
	});

	if (!riveAnimationImageUrl) {
		return null;
	}

	// Build wrapper styles with responsive width/height
	const wrapperStyles = {};

	// Set width
	if (riveAnimationCanvasWidth?.Desktop) {
		wrapperStyles.width = `${riveAnimationCanvasWidth.Desktop}${riveAnimationContainerWidthUnits?.Desktop || 'px'}`;
	}

	// Set height
	if (riveAnimationCanvasHeight?.Desktop) {
		wrapperStyles.height = `${riveAnimationCanvasHeight.Desktop}${riveAnimationContainerHeightUnits?.Desktop || 'px'}`;
	}

	return (
		<div {...blockProps}>
			<div className="fb-parent-wrapper fb-rive-animation-container">
				<div
					className="fb-rive-canvas-wrapper"
					data-container-width-desktop={riveAnimationCanvasWidth?.Desktop ?? ''}
					data-container-width-tablet={riveAnimationCanvasWidth?.Tablet ?? ''}
					data-container-width-mobile={riveAnimationCanvasWidth?.Mobile ?? ''}
					data-container-height-desktop={riveAnimationCanvasHeight?.Desktop ?? ''}
					data-container-height-tablet={riveAnimationCanvasHeight?.Tablet ?? ''}
					data-container-height-mobile={riveAnimationCanvasHeight?.Mobile ?? ''}
					data-container-width-units-desktop={riveAnimationContainerWidthUnits?.Desktop ?? 'px'}
					data-container-width-units-tablet={riveAnimationContainerWidthUnits?.Tablet ?? 'px'}
					data-container-width-units-mobile={riveAnimationContainerWidthUnits?.Mobile ?? 'px'}
					data-container-height-units-desktop={riveAnimationContainerHeightUnits?.Desktop ?? 'px'}
					data-container-height-units-tablet={riveAnimationContainerHeightUnits?.Tablet ?? 'px'}
					data-container-height-units-mobile={riveAnimationContainerHeightUnits?.Mobile ?? 'px'}
					style={wrapperStyles}
				>
					<canvas
						className="fb-rive-canvas"
						data-rive-src={riveAnimationImageUrl}
						data-rive-loop={riveLoop}
						data-rive-autoplay={riveAutoplay}
						data-rive-speed={riveAnimationSpeed}
						data-rive-reverse={riveAnimationReverse}
						data-rive-hover={riveEffectsOnHover}
						data-width-desktop={riveAnimationCanvasWidth?.Desktop ?? ''}
						data-height-desktop={riveAnimationCanvasHeight?.Desktop ?? ''}
						data-width-tablet={riveAnimationCanvasWidth?.Tablet ?? ''}
						data-height-tablet={riveAnimationCanvasHeight?.Tablet ?? ''}
						data-width-mobile={riveAnimationCanvasWidth?.Mobile ?? ''}
						data-height-mobile={riveAnimationCanvasHeight?.Mobile ?? ''}
						style={
							{
								width: '100%',
								height: '100%'
							}
						}
					/>
				</div>
			</div>
		</div>
	);
}