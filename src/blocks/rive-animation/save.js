// save.js - Frontend rendering for Rive Animation Block

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		blockID,
		riveAnimationImageUrl,
		riveRenderer,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveAnimationReverse,
		riveEffectsOnHover,
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight,
		riveAnimationContainerWidthUnits,
		riveAnimationContainerHeightUnits,
		riveAnimationCanvasHeightUnits,
		riveAnimationCanvasWidthUnits,
		riveAnimationGlobalWraperID,
		riveAnimationGlobalWraperClass,
		riveAnimationDesktopSwitcher,
		riveAnimationTabletSwitcher,
		riveAnimationMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-rive-animation-main-wrapper ${blockID} ${
			riveAnimationDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${riveAnimationTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			riveAnimationMobileSwitcher ? "fb-mobile-responsive" : ""
		}`,
	});

	if (!riveAnimationImageUrl) {
		return null;
	}

	return (
		<div {...blockProps} id={riveAnimationGlobalWraperID || undefined}>
			<div
				className={`fb-parent-wrapper fb-rive-animation-container ${
					riveAnimationGlobalWraperClass || ""
				}`}
			>
				<div
					className="fb-rive-canvas-wrapper"
					data-container-width-desktop={riveAnimationCanvasWidth?.Desktop ?? ""}
					data-container-width-tablet={riveAnimationCanvasWidth?.Tablet ?? ""}
					data-container-width-mobile={riveAnimationCanvasWidth?.Mobile ?? ""}
					data-container-height-desktop={
						riveAnimationCanvasHeight?.Desktop ?? ""
					}
					data-container-height-tablet={riveAnimationCanvasHeight?.Tablet ?? ""}
					data-container-height-mobile={riveAnimationCanvasHeight?.Mobile ?? ""}
					data-container-width-units-desktop={
						riveAnimationCanvasWidthUnits?.Desktop ?? "px"
					}
					data-container-width-units-tablet={
						riveAnimationCanvasWidthUnits?.Tablet ?? "px"
					}
					data-container-width-units-mobile={
						riveAnimationCanvasWidthUnits?.Mobile ?? "px"
					}
					data-container-height-units-desktop={
						riveAnimationCanvasHeightUnits?.Desktop ?? "px"
					}
					data-container-height-units-tablet={
						riveAnimationCanvasHeightUnits?.Tablet ?? "px"
					}
					data-container-height-units-mobile={
						riveAnimationCanvasHeightUnits?.Mobile ?? "px"
					}
				>
					<canvas
						className="fb-rive-canvas"
						data-rive-src={riveAnimationImageUrl}
						data-rive-renderer={riveRenderer}
						data-rive-loop={riveLoop}
						data-rive-autoplay={riveAutoplay}
						data-rive-speed={riveAnimationSpeed}
						data-rive-reverse={riveAnimationReverse}
						data-rive-hover={riveEffectsOnHover}
						data-width-desktop={riveAnimationCanvasWidth?.Desktop ?? ""}
						data-height-desktop={riveAnimationCanvasHeight?.Desktop ?? ""}
						data-width-tablet={riveAnimationCanvasWidth?.Tablet ?? ""}
						data-height-tablet={riveAnimationCanvasHeight?.Tablet ?? ""}
						data-width-mobile={riveAnimationCanvasWidth?.Mobile ?? ""}
						data-height-mobile={riveAnimationCanvasHeight?.Mobile ?? ""}
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
