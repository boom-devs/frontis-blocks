import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";
import {SelectControl} from "@wordpress/components";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";

export default function FlipBoxFrontIconControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxFrontIconSize,
		flipBoxFrontIconSizeUnits,

		flipBoxFrontIconFontColorSwitcher,
		flipBoxFrontIconFontColor,
		flipBoxFrontIconFontHoverColor,
		flipBoxFrontIconBgFontColorSwitcher,
		flipBoxFrontIconBgFontColor,
		flipBoxFrontIconBgFontHoverColor,

		flipBoxFrontIconMarginUnits,
		flipBoxFrontIconMarginDesktop,
		flipBoxFrontIconMarginTablet,
		flipBoxFrontIconMarginMobile,
		flipBoxFrontIconMarginLink,

		flipBoxFrontIconPaddingUnits,
		flipBoxFrontIconPaddingDesktop,
		flipBoxFrontIconPaddingTablet,
		flipBoxFrontIconPaddingMobile,
		flipBoxFrontIconPaddingLink,


		flipBoxFrontIconBorderTypeUnits,
		flipBoxFrontIconBorderTypeDesktop,
		flipBoxFrontIconBorderTypeTablet,
		flipBoxFrontIconBorderTypeMobile,
		flipBoxFrontIconBorderTypeLink,
		flipBoxFrontIconBorder,
		flipBoxFrontIconBorderColorSwitcher,
		flipBoxFrontIconBorderColor,
		flipBoxFrontIconBorderHoverColor,
		flipBoxFrontIconBorderRadiusUnits,
		flipBoxFrontIconBorderRadiusDesktop,
		flipBoxFrontIconBorderRadiusTablet,
		flipBoxFrontIconBorderRadiusMobile,
		flipBoxFrontIconBorderRadiusLink,

	} = attributes;

	/** Start Padding */
	const flipBoxFrontIconPaddingHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontIconPaddingMobile: {
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
					setAttributes( {flipBoxFrontIconPaddingDesktop: {...flipBoxFrontIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontIconPaddingTablet: {...flipBoxFrontIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontIconPaddingMobile: {...flipBoxFrontIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxFrontIconPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontIconPaddingLink: !flipBoxFrontIconPaddingLink} );
	}

	const flipBoxFrontIconPaddingSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontIconPaddingUnits: {
				...flipBoxFrontIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Padding */


	/** Start Margin */
	const flipBoxFrontIconMarginHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontIconMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontIconMarginMobile: {
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
					setAttributes( {flipBoxFrontIconMarginDesktop: {...flipBoxFrontIconMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontIconMarginTablet: {...flipBoxFrontIconMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontIconMarginMobile: {...flipBoxFrontIconMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxFrontIconMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontIconMarginLink: !flipBoxFrontIconMarginLink} );
	}

	const flipBoxFrontIconMarginSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontIconMarginUnits: {
				...flipBoxFrontIconMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Margin */

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontIconBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontIconBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontIconBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontIconBorderTypeMobile: {
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
					setAttributes( {flipBoxFrontIconBorderTypeDesktop: {...flipBoxFrontIconBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontIconBorderTypeTablet: {...flipBoxFrontIconBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontIconBorderTypeMobile: {...flipBoxFrontIconBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontIconBorderTypeLink: !flipBoxFrontIconBorderTypeLink} );
	}

	const flipBoxFrontIconBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontIconBorderTypeUnits: {
				...flipBoxFrontIconBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Type*/

	/** Start Border Radius*/
	const flipBoxFrontIconHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontIconBorderRadiusMobile: {
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
					setAttributes( {flipBoxFrontIconBorderRadiusDesktop: {...flipBoxFrontIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontIconBorderRadiusTablet: {...flipBoxFrontIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontIconBorderRadiusMobile: {...flipBoxFrontIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontIconBorderRadiusLink: !flipBoxFrontIconBorderRadiusLink} );
	}

	const flipBoxFrontIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontIconBorderRadiusUnits: {
				...flipBoxFrontIconBorderRadiusUnits,
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
				label={__("Icon Size", "frontis-blocks")}
				rangeValue={flipBoxFrontIconSize}
				onChangeHandler={(value) => setAttributes({ flipBoxFrontIconSize: value })}
				rangeUnitHandler={(value) => setAttributes({ flipBoxFrontIconSizeUnits: value })}
				deviceType={deviceType}
				units={flipBoxFrontIconSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={80}
			/>
			<FB_Color
				label={__("Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontIconFontColorSwitcher}
				globalColor={flipBoxFrontIconFontColor}
				globalHoverColor={flipBoxFrontIconFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxFrontIconFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxFrontIconFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxFrontIconFontHoverColor: value })}
			/>
			<FB_Color
				label={__("Background Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontIconBgFontColorSwitcher}
				globalColor={flipBoxFrontIconBgFontColor}
				globalHoverColor={flipBoxFrontIconBgFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxFrontIconBgFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxFrontIconBgFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxFrontIconBgFontHoverColor: value })}
			/>

			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={flipBoxFrontIconBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ flipBoxFrontIconBorder: value })}
			/>
			<FB_Spacing
				label={ 'Border' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontIconBorderTypeUnitsHandler}
				spacingUnits={flipBoxFrontIconBorderTypeUnits}
				spacingDesktop={flipBoxFrontIconBorderTypeDesktop}
				spacingTablet={flipBoxFrontIconBorderTypeTablet}
				spacingMobile={flipBoxFrontIconBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxFrontIconBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontIconBorderRadiusUnitsHandler}
				spacingUnits={flipBoxFrontIconBorderRadiusUnits}
				spacingDesktop={flipBoxFrontIconBorderRadiusDesktop}
				spacingTablet={flipBoxFrontIconBorderRadiusTablet}
				spacingMobile={flipBoxFrontIconBorderRadiusMobile}
				handleSpacingUnitHandler={flipBoxFrontIconHandleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxFrontIconBorderRadiusLink}
				spacingCombineBtnHandler={flipBoxSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Color
				label={__("Border Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontIconBorderColorSwitcher}
				globalColor={flipBoxFrontIconBorderColor}
				globalHoverColor={flipBoxFrontIconBorderHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxFrontIconBorderColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxFrontIconBorderColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxFrontIconBorderHoverColor: value })}
			/>

			<FB_Spacing
				label={ 'Padding' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontIconPaddingSpacingUnitsHandler}
				spacingUnits={flipBoxFrontIconPaddingUnits}
				spacingDesktop={flipBoxFrontIconPaddingDesktop}
				spacingTablet={flipBoxFrontIconPaddingTablet}
				spacingMobile={flipBoxFrontIconPaddingMobile}
				handleSpacingUnitHandler={flipBoxFrontIconPaddingHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxFrontIconPaddingLink}
				spacingCombineBtnHandler={flipBoxFrontIconPaddingSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontIconMarginSpacingUnitsHandler}
				spacingUnits={flipBoxFrontIconMarginUnits}
				spacingDesktop={flipBoxFrontIconMarginDesktop}
				spacingTablet={flipBoxFrontIconMarginTablet}
				spacingMobile={flipBoxFrontIconMarginMobile}
				handleSpacingUnitHandler={flipBoxFrontIconMarginHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxFrontIconMarginLink}
				spacingCombineBtnHandler={flipBoxFrontIconMarginSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
