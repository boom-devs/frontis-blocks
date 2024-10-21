import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";
import {SelectControl} from "@wordpress/components";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";

export default function FlipBoxBackIconControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxBackIconSize,
		flipBoxBackIconSizeUnits,

		flipBoxBackIconFontColorSwitcher,
		flipBoxBackIconFontColor,
		flipBoxBackIconFontHoverColor,
		flipBoxBackIconBgFontColorSwitcher,
		flipBoxBackIconBgFontColor,
		flipBoxBackIconBgFontHoverColor,

		flipBoxBackIconMarginUnits,
		flipBoxBackIconMarginDesktop,
		flipBoxBackIconMarginTablet,
		flipBoxBackIconMarginMobile,
		flipBoxBackIconMarginLink,

		flipBoxBackIconPaddingUnits,
		flipBoxBackIconPaddingDesktop,
		flipBoxBackIconPaddingTablet,
		flipBoxBackIconPaddingMobile,
		flipBoxBackIconPaddingLink,


		flipBoxBackIconBorderTypeUnits,
		flipBoxBackIconBorderTypeDesktop,
		flipBoxBackIconBorderTypeTablet,
		flipBoxBackIconBorderTypeMobile,
		flipBoxBackIconBorderTypeLink,
		flipBoxBackIconBorder,
		flipBoxBackIconBorderColorSwitcher,
		flipBoxBackIconBorderColor,
		flipBoxBackIconBorderHoverColor,
		flipBoxBackIconBorderRadiusUnits,
		flipBoxBackIconBorderRadiusDesktop,
		flipBoxBackIconBorderRadiusTablet,
		flipBoxBackIconBorderRadiusMobile,
		flipBoxBackIconBorderRadiusLink,

	} = attributes;

	/** Start Padding */
	const flipBoxBackIconPaddingHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackIconPaddingMobile: {
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
					setAttributes( {flipBoxBackIconPaddingDesktop: {...flipBoxBackIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackIconPaddingTablet: {...flipBoxBackIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackIconPaddingMobile: {...flipBoxBackIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxBackIconPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackIconPaddingLink: !flipBoxBackIconPaddingLink} );
	}

	const flipBoxBackIconPaddingSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackIconPaddingUnits: {
				...flipBoxBackIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Padding */


	/** Start Margin */
	const flipBoxBackIconMarginHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackIconMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackIconMarginMobile: {
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
					setAttributes( {flipBoxBackIconMarginDesktop: {...flipBoxBackIconMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackIconMarginTablet: {...flipBoxBackIconMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackIconMarginMobile: {...flipBoxBackIconMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxBackIconMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackIconMarginLink: !flipBoxBackIconMarginLink} );
	}

	const flipBoxBackIconMarginSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackIconMarginUnits: {
				...flipBoxBackIconMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Margin */

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackIconBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackIconBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackIconBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackIconBorderTypeMobile: {
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
					setAttributes( {flipBoxBackIconBorderTypeDesktop: {...flipBoxBackIconBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackIconBorderTypeTablet: {...flipBoxBackIconBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackIconBorderTypeMobile: {...flipBoxBackIconBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackIconBorderTypeLink: !flipBoxBackIconBorderTypeLink} );
	}

	const flipBoxBackIconBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackIconBorderTypeUnits: {
				...flipBoxBackIconBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Type*/

	/** Start Border Radius*/
	const flipBoxBackIconHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackIconBorderRadiusMobile: {
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
					setAttributes( {flipBoxBackIconBorderRadiusDesktop: {...flipBoxBackIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackIconBorderRadiusTablet: {...flipBoxBackIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackIconBorderRadiusMobile: {...flipBoxBackIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackIconBorderRadiusLink: !flipBoxBackIconBorderRadiusLink} );
	}

	const flipBoxBackIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackIconBorderRadiusUnits: {
				...flipBoxBackIconBorderRadiusUnits,
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
				rangeValue={flipBoxBackIconSize}
				onChangeHandler={(value) => setAttributes({ flipBoxBackIconSize: value })}
				rangeUnitHandler={(value) => setAttributes({ flipBoxBackIconSizeUnits: value })}
				deviceType={deviceType}
				units={flipBoxBackIconSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={80}
			/>
			<FB_Color
				label={__("Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackIconFontColorSwitcher}
				globalColor={flipBoxBackIconFontColor}
				globalHoverColor={flipBoxBackIconFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxBackIconFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxBackIconFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxBackIconFontHoverColor: value })}
			/>
			<FB_Color
				label={__("Background Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackIconBgFontColorSwitcher}
				globalColor={flipBoxBackIconBgFontColor}
				globalHoverColor={flipBoxBackIconBgFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxBackIconBgFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxBackIconBgFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxBackIconBgFontHoverColor: value })}
			/>

			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={flipBoxBackIconBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ flipBoxBackIconBorder: value })}
			/>
			<FB_Spacing
				label={ 'Border' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackIconBorderTypeUnitsHandler}
				spacingUnits={flipBoxBackIconBorderTypeUnits}
				spacingDesktop={flipBoxBackIconBorderTypeDesktop}
				spacingTablet={flipBoxBackIconBorderTypeTablet}
				spacingMobile={flipBoxBackIconBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxBackIconBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackIconBorderRadiusUnitsHandler}
				spacingUnits={flipBoxBackIconBorderRadiusUnits}
				spacingDesktop={flipBoxBackIconBorderRadiusDesktop}
				spacingTablet={flipBoxBackIconBorderRadiusTablet}
				spacingMobile={flipBoxBackIconBorderRadiusMobile}
				handleSpacingUnitHandler={flipBoxBackIconHandleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxBackIconBorderRadiusLink}
				spacingCombineBtnHandler={flipBoxSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Color
				label={__("Border Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackIconBorderColorSwitcher}
				globalColor={flipBoxBackIconBorderColor}
				globalHoverColor={flipBoxBackIconBorderHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxBackIconBorderColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxBackIconBorderColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxBackIconBorderHoverColor: value })}
			/>

			<FB_Spacing
				label={ 'Padding' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackIconPaddingSpacingUnitsHandler}
				spacingUnits={flipBoxBackIconPaddingUnits}
				spacingDesktop={flipBoxBackIconPaddingDesktop}
				spacingTablet={flipBoxBackIconPaddingTablet}
				spacingMobile={flipBoxBackIconPaddingMobile}
				handleSpacingUnitHandler={flipBoxBackIconPaddingHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxBackIconPaddingLink}
				spacingCombineBtnHandler={flipBoxBackIconPaddingSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackIconMarginSpacingUnitsHandler}
				spacingUnits={flipBoxBackIconMarginUnits}
				spacingDesktop={flipBoxBackIconMarginDesktop}
				spacingTablet={flipBoxBackIconMarginTablet}
				spacingMobile={flipBoxBackIconMarginMobile}
				handleSpacingUnitHandler={flipBoxBackIconMarginHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxBackIconMarginLink}
				spacingCombineBtnHandler={flipBoxBackIconMarginSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
