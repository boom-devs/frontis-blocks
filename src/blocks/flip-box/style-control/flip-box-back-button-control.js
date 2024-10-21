import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";
import {SelectControl} from "@wordpress/components";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";

export default function FlipBoxBackButtonControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxBackButtonFontColorSwitcher,
		flipBoxBackButtonFontColor,
		flipBoxBackButtonFontHoverColor,
		flipBoxBackButtonBgFontColorSwitcher,
		flipBoxBackButtonBgFontColor,
		flipBoxBackButtonBgFontHoverColor,

		flipBoxBackButtonMarginUnits,
		flipBoxBackButtonMarginDesktop,
		flipBoxBackButtonMarginTablet,
		flipBoxBackButtonMarginMobile,
		flipBoxBackButtonMarginLink,

		flipBoxBackButtonPaddingUnits,
		flipBoxBackButtonPaddingDesktop,
		flipBoxBackButtonPaddingTablet,
		flipBoxBackButtonPaddingMobile,
		flipBoxBackButtonPaddingLink,

		flipBoxBackButtonFontFamily,
		flipBoxBackButtonFontSize,
		flipBoxBackButtonFontSizeUnits,
		flipBoxBackButtonFontWeight,
		flipBoxBackButtonFontStyle,
		flipBoxBackButtonTextTransform,
		flipBoxBackButtonTextDecoration,
		flipBoxBackButtonLetterSpacing,
		flipBoxBackButtonLetterSpacingUnits,
		flipBoxBackButtonLineHeight,
		flipBoxBackButtonLineHeightUnits,


		flipBoxBackButtonBorderTypeUnits,
		flipBoxBackButtonBorderTypeDesktop,
		flipBoxBackButtonBorderTypeTablet,
		flipBoxBackButtonBorderTypeMobile,
		flipBoxBackButtonBorderTypeLink,
		flipBoxBackButtonBorder,
		flipBoxBackButtonBorderColorSwitcher,
		flipBoxBackButtonBorderColor,
		flipBoxBackButtonBorderHoverColor,
		flipBoxBackButtonBorderRadiusUnits,
		flipBoxBackButtonBorderRadiusDesktop,
		flipBoxBackButtonBorderRadiusTablet,
		flipBoxBackButtonBorderRadiusMobile,
		flipBoxBackButtonBorderRadiusLink,

	} = attributes;

	/** Start Padding */
	const flipBoxBackButtonPaddingHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackButtonPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackButtonPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackButtonPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackButtonPaddingMobile: {
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
					setAttributes( {flipBoxBackButtonPaddingDesktop: {...flipBoxBackButtonPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackButtonPaddingTablet: {...flipBoxBackButtonPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackButtonPaddingMobile: {...flipBoxBackButtonPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxBackButtonPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackButtonPaddingLink: !flipBoxBackButtonPaddingLink} );
	}

	const flipBoxBackButtonPaddingSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackButtonPaddingUnits: {
				...flipBoxBackButtonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Padding */


	/** Start Margin */
	const flipBoxBackButtonMarginHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackButtonMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackButtonMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackButtonMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackButtonMarginMobile: {
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
					setAttributes( {flipBoxBackButtonMarginDesktop: {...flipBoxBackButtonMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackButtonMarginTablet: {...flipBoxBackButtonMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackButtonMarginMobile: {...flipBoxBackButtonMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxBackButtonMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackButtonMarginLink: !flipBoxBackButtonMarginLink} );
	}

	const flipBoxBackButtonMarginSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackButtonMarginUnits: {
				...flipBoxBackButtonMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Margin */

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackButtonBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackButtonBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackButtonBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackButtonBorderTypeMobile: {
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
					setAttributes( {flipBoxBackButtonBorderTypeDesktop: {...flipBoxBackButtonBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackButtonBorderTypeTablet: {...flipBoxBackButtonBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackButtonBorderTypeMobile: {...flipBoxBackButtonBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackButtonBorderTypeLink: !flipBoxBackButtonBorderTypeLink} );
	}

	const flipBoxBackButtonBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackButtonBorderTypeUnits: {
				...flipBoxBackButtonBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Type*/

	/** Start Border Radius*/
	const flipBoxBackButtonHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackButtonBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackButtonBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackButtonBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackButtonBorderRadiusMobile: {
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
					setAttributes( {flipBoxBackButtonBorderRadiusDesktop: {...flipBoxBackButtonBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackButtonBorderRadiusTablet: {...flipBoxBackButtonBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackButtonBorderRadiusMobile: {...flipBoxBackButtonBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackButtonBorderRadiusLink: !flipBoxBackButtonBorderRadiusLink} );
	}

	const flipBoxBackButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackButtonBorderRadiusUnits: {
				...flipBoxBackButtonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Radius*/



	return (
		<>
			<FB_Color
				label={__("Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackButtonFontColorSwitcher}
				globalColor={flipBoxBackButtonFontColor}
				globalHoverColor={flipBoxBackButtonFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxBackButtonFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxBackButtonFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxBackButtonFontHoverColor: value })}
			/>
			<FB_Color
				label={__("Background Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackButtonBgFontColorSwitcher}
				globalColor={flipBoxBackButtonBgFontColor}
				globalHoverColor={flipBoxBackButtonBgFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxBackButtonBgFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxBackButtonBgFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxBackButtonBgFontHoverColor: value })}
			/>

			<FB_TypographyControl
				fontFamily={flipBoxBackButtonFontFamily}
				onChangeFontFamily={(value) => setAttributes({ flipBoxBackButtonFontFamily: value })}

				fontSize={flipBoxBackButtonFontSize}
				onChangeFontSize={(value) => setAttributes({ flipBoxBackButtonFontSize: value })}

				fontSizeUnits={flipBoxBackButtonFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ flipBoxBackButtonFontSizeUnits: value })}

				fontWeight={flipBoxBackButtonFontWeight}
				onChangeFontWeight={(value) => setAttributes({ flipBoxBackButtonFontWeight: value })}

				fontStyle={flipBoxBackButtonFontStyle}
				onChangeFontStyle={(value) => setAttributes({ flipBoxBackButtonFontStyle: value })}

				textTransform={flipBoxBackButtonTextTransform}
				onChangeTextTransform={(value) => setAttributes({ flipBoxBackButtonTextTransform: value })}

				textDecoration={flipBoxBackButtonTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ flipBoxBackButtonTextDecoration: value })}

				letterSpacing={flipBoxBackButtonLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ flipBoxBackButtonLetterSpacing: value })}

				letterSpacingUnits={flipBoxBackButtonLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ flipBoxBackButtonLetterSpacingUnits: value })}

				lineHeight={flipBoxBackButtonLineHeight}
				onChangeLineHeight={(value) => setAttributes({ flipBoxBackButtonLineHeight: value })}

				lineHeightUnits={flipBoxBackButtonLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ flipBoxBackButtonLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>


			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={flipBoxBackButtonBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ flipBoxBackButtonBorder: value })}
			/>
			<FB_Spacing
				label={ 'Border' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackButtonBorderTypeUnitsHandler}
				spacingUnits={flipBoxBackButtonBorderTypeUnits}
				spacingDesktop={flipBoxBackButtonBorderTypeDesktop}
				spacingTablet={flipBoxBackButtonBorderTypeTablet}
				spacingMobile={flipBoxBackButtonBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxBackButtonBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackButtonBorderRadiusUnitsHandler}
				spacingUnits={flipBoxBackButtonBorderRadiusUnits}
				spacingDesktop={flipBoxBackButtonBorderRadiusDesktop}
				spacingTablet={flipBoxBackButtonBorderRadiusTablet}
				spacingMobile={flipBoxBackButtonBorderRadiusMobile}
				handleSpacingUnitHandler={flipBoxBackButtonHandleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxBackButtonBorderRadiusLink}
				spacingCombineBtnHandler={flipBoxSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Color
				label={__("Border Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackButtonBorderColorSwitcher}
				globalColor={flipBoxBackButtonBorderColor}
				globalHoverColor={flipBoxBackButtonBorderHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxBackButtonBorderColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxBackButtonBorderColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxBackButtonBorderHoverColor: value })}
			/>

			<FB_Spacing
				label={ 'Padding' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackButtonPaddingSpacingUnitsHandler}
				spacingUnits={flipBoxBackButtonPaddingUnits}
				spacingDesktop={flipBoxBackButtonPaddingDesktop}
				spacingTablet={flipBoxBackButtonPaddingTablet}
				spacingMobile={flipBoxBackButtonPaddingMobile}
				handleSpacingUnitHandler={flipBoxBackButtonPaddingHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxBackButtonPaddingLink}
				spacingCombineBtnHandler={flipBoxBackButtonPaddingSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackButtonMarginSpacingUnitsHandler}
				spacingUnits={flipBoxBackButtonMarginUnits}
				spacingDesktop={flipBoxBackButtonMarginDesktop}
				spacingTablet={flipBoxBackButtonMarginTablet}
				spacingMobile={flipBoxBackButtonMarginMobile}
				handleSpacingUnitHandler={flipBoxBackButtonMarginHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxBackButtonMarginLink}
				spacingCombineBtnHandler={flipBoxBackButtonMarginSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
