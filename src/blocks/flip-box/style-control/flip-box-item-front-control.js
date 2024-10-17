import { __ } from '@wordpress/i18n';

import FB_Color from '@Components/color';
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";
import {SelectControl} from "@wordpress/components";
export default function FlipBoxItemFrontControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxItemFrontSize,
		flipBoxItemFrontSizeUnits,
		flipBoxItemFrontBorderTypeUnits,
		flipBoxItemFrontBorderTypeDesktop,
		flipBoxItemFrontBorderTypeTablet,
		flipBoxItemFrontBorderTypeMobile,
		flipBoxItemFrontBorderTypeLink,
		flipBoxItemFrontBorder,
		flipBoxItemFrontBorderColorSwitcher,
		flipBoxItemFrontBorderColor,
		flipBoxItemFrontBorderHoverColor,
		flipBoxItemFrontBorderRadiusUnits,
		flipBoxItemFrontBorderRadiusDesktop,
		flipBoxItemFrontBorderRadiusTablet,
		flipBoxItemFrontBorderRadiusMobile,
		flipBoxItemFrontBorderRadiusLink,

	} = attributes;


	const flipBoxItemFrontSizeHandler = (value) => {
		setAttributes({ flipBoxItemFrontSize: value });
	};

	const flipBoxItemFrontSizeUnitsHandler = (value) => {
		setAttributes({ flipBoxItemFrontSizeUnits: value });
	};

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxItemFrontBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxItemFrontBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxItemFrontBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxItemFrontBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {flipBoxItemFrontBorderTypeDesktop: {...flipBoxItemFrontBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxItemFrontBorderTypeTablet: {...flipBoxItemFrontBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxItemFrontBorderTypeMobile: {...flipBoxItemFrontBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxItemFrontBorderTypeLink: !flipBoxItemFrontBorderTypeLink} );
	}

	const flipBoxItemFrontBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxItemFrontBorderTypeUnits: {
				...flipBoxItemFrontBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/

	/** Start Border Radius*/
	const flipBoxItemFrontHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxItemFrontBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxItemFrontBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxItemFrontBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxItemFrontBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {flipBoxItemFrontBorderRadiusDesktop: {...flipBoxItemFrontBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxItemFrontBorderRadiusTablet: {...flipBoxItemFrontBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxItemFrontBorderRadiusMobile: {...flipBoxItemFrontBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxItemFrontBorderRadiusLink: !flipBoxItemFrontBorderRadiusLink} );
	}

	const flipBoxItemFrontBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxItemFrontBorderRadiusUnits: {
				...flipBoxItemFrontBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Radius*/



	return (
		<>
			<FB_Range
				min={1}
				max={300}
				label={__("Item Size", "frontis-blocks")}
				rangeValue={flipBoxItemFrontSize}
				onChangeHandler={flipBoxItemFrontSizeHandler}
				rangeUnitHandler={flipBoxItemFrontSizeUnitsHandler}
				deviceType={deviceType}
				units={flipBoxItemFrontSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={0}
			/>
			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={flipBoxItemFrontBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ flipBoxItemFrontBorder: value })}
			/>
			<FB_Spacing
				label={ 'Border' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxItemFrontBorderTypeUnitsHandler}
				spacingUnits={flipBoxItemFrontBorderTypeUnits}
				spacingDesktop={flipBoxItemFrontBorderTypeDesktop}
				spacingTablet={flipBoxItemFrontBorderTypeTablet}
				spacingMobile={flipBoxItemFrontBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxItemFrontBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxItemFrontBorderRadiusUnitsHandler}
				spacingUnits={flipBoxItemFrontBorderRadiusUnits}
				spacingDesktop={flipBoxItemFrontBorderRadiusDesktop}
				spacingTablet={flipBoxItemFrontBorderRadiusTablet}
				spacingMobile={flipBoxItemFrontBorderRadiusMobile}
				handleSpacingUnitHandler={flipBoxItemFrontHandleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxItemFrontBorderRadiusLink}
				spacingCombineBtnHandler={flipBoxSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Color
				label={__("Border Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxItemFrontBorderColorSwitcher}
				globalColor={flipBoxItemFrontBorderColor}
				globalHoverColor={flipBoxItemFrontBorderHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxItemFrontBorderColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxItemFrontBorderColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxItemFrontBorderHoverColor: value })}
			/>
		</>
	);
};
