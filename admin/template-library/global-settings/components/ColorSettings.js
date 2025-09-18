import { __ } from "@wordpress/i18n";
import { useViewportMatch } from '@wordpress/compose';
import {
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalPaletteEdit as PaletteEdit,
} from "@wordpress/components";
import { useEffect, useCallback, useMemo } from "@wordpress/element";
import { updateGlobalStyle } from "../fetch";


const ColorSettings = ({
	globalColors,
	setGlobalColors,
	customColors,
	setCustomColors,
	gradientColors,
	setGradientColors,
	customGradientColors,
	setCustomGradientColors,
}) => {


	const mobilePopoverProps = { placement: 'bottom-start', offset: 8 };

	const isMobileViewport = useViewportMatch( 'small', '<' );
	const popoverProps = isMobileViewport ? mobilePopoverProps : undefined;


	return (
		<>
			<div className="fb-color-options-vertical">
				{/* Solid Colors Section */}
				<div className="fb-color-section-wrapper">
					{(globalColors.length !== 0) && (
						<div className="fb-color-section">
							<PaletteEdit
								canOnlyChangeValues
								colors={globalColors}
								onChange={setGlobalColors}
								paletteLabel={__('Color')}
								paletteLabelHeadingLevel={3}
								popoverProps={popoverProps}
								classnames="fb-solid-color-panel"
							/>
						</div>
					)}
					{(customColors.length !== 0) && (
						<div className="fb-color-section">
							<PaletteEdit
								canOnlyChangeValues
								colors={customColors}
								onChange={setCustomColors}
								paletteLabel={__('Custom Colors')}
								paletteLabelHeadingLevel={3}
								popoverProps={popoverProps}
								classnames="fb-solid-color-panel"
							/>
						</div>
					)}
				</div>

				{/* Gradient Section */}
				<div className="fb-color-section-wrapper">
					{(gradientColors.length !== 0) && (
						<div className="fb-color-section">
							<PaletteEdit
								canOnlyChangeValues
								gradients={gradientColors}
								onChange={setGradientColors}
								paletteLabel={__('Gradient')}
								classnames="fb-gradient-color-panel"
								paletteLabelHeadingLevel={3}
								popoverProps={popoverProps}
							/>
						</div>
					)}
					{(customGradientColors.length !== 0) && (
						<div className="fb-color-section">
							<PaletteEdit
								canOnlyChangeValues
								gradients={customGradientColors}
								onChange={setCustomGradientColors}
								paletteLabel={__('Custom Gradient')}
								classnames="fb-gradient-color-panel"
								paletteLabelHeadingLevel={3}
								popoverProps={popoverProps}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default ColorSettings;
