import { __ } from '@wordpress/i18n';

import FB_Color from '@Components/color';
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";
import {SelectControl} from "@wordpress/components";
export default function FlipBoxItemBackControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxItemBackSize,
		flipBoxItemBackSizeUnits,
		flipBoxItemBackBorderTypeUnits,
		flipBoxItemBackBorderTypeDesktop,
		flipBoxItemBackBorderTypeTablet,
		flipBoxItemBackBorderTypeMobile,
		flipBoxItemBackBorderTypeLink,
		flipBoxItemBackBorder,
		flipBoxItemBackBorderColorSwitcher,
		flipBoxItemBackBorderColor,
		flipBoxItemBackBorderHoverColor,
		flipBoxItemBackBorderRadiusUnits,
		flipBoxItemBackBorderRadiusDesktop,
		flipBoxItemBackBorderRadiusTablet,
		flipBoxItemBackBorderRadiusMobile,
		flipBoxItemBackBorderRadiusLink,

	} = attributes;


	const flipBoxItemBackSizeHandler = (value) => {
		setAttributes({ flipBoxItemBackSize: value });
	};

	const flipBoxItemBackSizeUnitsHandler = (value) => {
		setAttributes({ flipBoxItemBackSizeUnits: value });
	};

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxItemBackBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxItemBackBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxItemBackBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxItemBackBorderTypeMobile: {
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
					setAttributes( {flipBoxItemBackBorderTypeDesktop: {...flipBoxItemBackBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxItemBackBorderTypeTablet: {...flipBoxItemBackBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxItemBackBorderTypeMobile: {...flipBoxItemBackBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxItemBackBorderTypeLink: !flipBoxItemBackBorderTypeLink} );
	}

	const flipBoxItemBackBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxItemBackBorderTypeUnits: {
				...flipBoxItemBackBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/

	/** Start Border Radius*/
	const flipBoxItemBackHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxItemBackBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxItemBackBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxItemBackBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxItemBackBorderRadiusMobile: {
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
					setAttributes( {flipBoxItemBackBorderRadiusDesktop: {...flipBoxItemBackBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxItemBackBorderRadiusTablet: {...flipBoxItemBackBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxItemBackBorderRadiusMobile: {...flipBoxItemBackBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxItemBackBorderRadiusLink: !flipBoxItemBackBorderRadiusLink} );
	}

	const flipBoxItemBackBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxItemBackBorderRadiusUnits: {
				...flipBoxItemBackBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Radius*/

	return (
		<>
			<FB_Range
				min={1}
				max={1000}
				label={__("Item Height", "frontis-blocks")}
				rangeValue={flipBoxItemBackSize}
				onChangeHandler={flipBoxItemBackSizeHandler}
				rangeUnitHandler={flipBoxItemBackSizeUnitsHandler}
				deviceType={deviceType}
				units={flipBoxItemBackSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={364}
			/>
			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={flipBoxItemBackBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ flipBoxItemBackBorder: value })}
			/>
			<FB_Spacing
				label={ 'Border' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxItemBackBorderTypeUnitsHandler}
				spacingUnits={flipBoxItemBackBorderTypeUnits}
				spacingDesktop={flipBoxItemBackBorderTypeDesktop}
				spacingTablet={flipBoxItemBackBorderTypeTablet}
				spacingMobile={flipBoxItemBackBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxItemBackBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxItemBackBorderRadiusUnitsHandler}
				spacingUnits={flipBoxItemBackBorderRadiusUnits}
				spacingDesktop={flipBoxItemBackBorderRadiusDesktop}
				spacingTablet={flipBoxItemBackBorderRadiusTablet}
				spacingMobile={flipBoxItemBackBorderRadiusMobile}
				handleSpacingUnitHandler={flipBoxItemBackHandleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxItemBackBorderRadiusLink}
				spacingCombineBtnHandler={flipBoxSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Color
				label={__("Border Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxItemBackBorderColorSwitcher}
				globalColor={flipBoxItemBackBorderColor}
				globalHoverColor={flipBoxItemBackBorderHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxItemBackBorderColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxItemBackBorderColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxItemBackBorderHoverColor: value })}
			/>
		</>
	);
};
