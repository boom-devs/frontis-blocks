import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";
import {SelectControl} from "@wordpress/components";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";

export default function FlipBoxFrontButtonControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxFrontButtonFontColorSwitcher,
		flipBoxFrontButtonFontColor,
		flipBoxFrontButtonFontHoverColor,
		flipBoxFrontButtonBgFontColorSwitcher,
		flipBoxFrontButtonBgFontColor,
		flipBoxFrontButtonBgFontHoverColor,

		flipBoxFrontButtonMarginUnits,
		flipBoxFrontButtonMarginDesktop,
		flipBoxFrontButtonMarginTablet,
		flipBoxFrontButtonMarginMobile,
		flipBoxFrontButtonMarginLink,

		flipBoxFrontButtonPaddingUnits,
		flipBoxFrontButtonPaddingDesktop,
		flipBoxFrontButtonPaddingTablet,
		flipBoxFrontButtonPaddingMobile,
		flipBoxFrontButtonPaddingLink,

		flipBoxFrontButtonFontFamily,
		flipBoxFrontButtonFontSize,
		flipBoxFrontButtonFontSizeUnits,
		flipBoxFrontButtonFontWeight,
		flipBoxFrontButtonFontStyle,
		flipBoxFrontButtonTextTransform,
		flipBoxFrontButtonTextDecoration,
		flipBoxFrontButtonLetterSpacing,
		flipBoxFrontButtonLetterSpacingUnits,
		flipBoxFrontButtonLineHeight,
		flipBoxFrontButtonLineHeightUnits,


		flipBoxFrontButtonBorderTypeUnits,
		flipBoxFrontButtonBorderTypeDesktop,
		flipBoxFrontButtonBorderTypeTablet,
		flipBoxFrontButtonBorderTypeMobile,
		flipBoxFrontButtonBorderTypeLink,
		flipBoxFrontButtonBorder,
		flipBoxFrontButtonBorderColorSwitcher,
		flipBoxFrontButtonBorderColor,
		flipBoxFrontButtonBorderHoverColor,
		flipBoxFrontButtonBorderRadiusUnits,
		flipBoxFrontButtonBorderRadiusDesktop,
		flipBoxFrontButtonBorderRadiusTablet,
		flipBoxFrontButtonBorderRadiusMobile,
		flipBoxFrontButtonBorderRadiusLink,

	} = attributes;

	/** Start Padding */
	const flipBoxFrontButtonPaddingHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontButtonPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontButtonPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontButtonPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontButtonPaddingMobile: {
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
					setAttributes( {flipBoxFrontButtonPaddingDesktop: {...flipBoxFrontButtonPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontButtonPaddingTablet: {...flipBoxFrontButtonPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontButtonPaddingMobile: {...flipBoxFrontButtonPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxFrontButtonPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontButtonPaddingLink: !flipBoxFrontButtonPaddingLink} );
	}

	const flipBoxFrontButtonPaddingSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontButtonPaddingUnits: {
				...flipBoxFrontButtonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Padding */


	/** Start Margin */
	const flipBoxFrontButtonMarginHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontButtonMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontButtonMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontButtonMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontButtonMarginMobile: {
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
					setAttributes( {flipBoxFrontButtonMarginDesktop: {...flipBoxFrontButtonMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontButtonMarginTablet: {...flipBoxFrontButtonMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontButtonMarginMobile: {...flipBoxFrontButtonMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxFrontButtonMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontButtonMarginLink: !flipBoxFrontButtonMarginLink} );
	}

	const flipBoxFrontButtonMarginSpacingUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontButtonMarginUnits: {
				...flipBoxFrontButtonMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Margin */

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontButtonBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontButtonBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontButtonBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontButtonBorderTypeMobile: {
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
					setAttributes( {flipBoxFrontButtonBorderTypeDesktop: {...flipBoxFrontButtonBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontButtonBorderTypeTablet: {...flipBoxFrontButtonBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontButtonBorderTypeMobile: {...flipBoxFrontButtonBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontButtonBorderTypeLink: !flipBoxFrontButtonBorderTypeLink} );
	}

	const flipBoxFrontButtonBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontButtonBorderTypeUnits: {
				...flipBoxFrontButtonBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Type*/

	/** Start Border Radius*/
	const flipBoxFrontButtonHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontButtonBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontButtonBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontButtonBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontButtonBorderRadiusMobile: {
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
					setAttributes( {flipBoxFrontButtonBorderRadiusDesktop: {...flipBoxFrontButtonBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontButtonBorderRadiusTablet: {...flipBoxFrontButtonBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontButtonBorderRadiusMobile: {...flipBoxFrontButtonBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontButtonBorderRadiusLink: !flipBoxFrontButtonBorderRadiusLink} );
	}

	const flipBoxFrontButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontButtonBorderRadiusUnits: {
				...flipBoxFrontButtonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Radius*/



	return (
		<>
			<FB_Color
				label={__("Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontButtonFontColorSwitcher}
				globalColor={flipBoxFrontButtonFontColor}
				globalHoverColor={flipBoxFrontButtonFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxFrontButtonFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxFrontButtonFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxFrontButtonFontHoverColor: value })}
			/>
			<FB_Color
				label={__("Background Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontButtonBgFontColorSwitcher}
				globalColor={flipBoxFrontButtonBgFontColor}
				globalHoverColor={flipBoxFrontButtonBgFontHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxFrontButtonBgFontColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxFrontButtonBgFontColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxFrontButtonBgFontHoverColor: value })}
			/>

			<FB_TypographyControl
				fontFamily={flipBoxFrontButtonFontFamily}
				onChangeFontFamily={(value) => setAttributes({ flipBoxFrontButtonFontFamily: value })}

				fontSize={flipBoxFrontButtonFontSize}
				onChangeFontSize={(value) => setAttributes({ flipBoxFrontButtonFontSize: value })}

				fontSizeUnits={flipBoxFrontButtonFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ flipBoxFrontButtonFontSizeUnits: value })}

				fontWeight={flipBoxFrontButtonFontWeight}
				onChangeFontWeight={(value) => setAttributes({ flipBoxFrontButtonFontWeight: value })}

				fontStyle={flipBoxFrontButtonFontStyle}
				onChangeFontStyle={(value) => setAttributes({ flipBoxFrontButtonFontStyle: value })}

				textTransform={flipBoxFrontButtonTextTransform}
				onChangeTextTransform={(value) => setAttributes({ flipBoxFrontButtonTextTransform: value })}

				textDecoration={flipBoxFrontButtonTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ flipBoxFrontButtonTextDecoration: value })}

				letterSpacing={flipBoxFrontButtonLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ flipBoxFrontButtonLetterSpacing: value })}

				letterSpacingUnits={flipBoxFrontButtonLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ flipBoxFrontButtonLetterSpacingUnits: value })}

				lineHeight={flipBoxFrontButtonLineHeight}
				onChangeLineHeight={(value) => setAttributes({ flipBoxFrontButtonLineHeight: value })}

				lineHeightUnits={flipBoxFrontButtonLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ flipBoxFrontButtonLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>


			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={flipBoxFrontButtonBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ flipBoxFrontButtonBorder: value })}
			/>
			<FB_Spacing
				label={ 'Border' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontButtonBorderTypeUnitsHandler}
				spacingUnits={flipBoxFrontButtonBorderTypeUnits}
				spacingDesktop={flipBoxFrontButtonBorderTypeDesktop}
				spacingTablet={flipBoxFrontButtonBorderTypeTablet}
				spacingMobile={flipBoxFrontButtonBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxFrontButtonBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontButtonBorderRadiusUnitsHandler}
				spacingUnits={flipBoxFrontButtonBorderRadiusUnits}
				spacingDesktop={flipBoxFrontButtonBorderRadiusDesktop}
				spacingTablet={flipBoxFrontButtonBorderRadiusTablet}
				spacingMobile={flipBoxFrontButtonBorderRadiusMobile}
				handleSpacingUnitHandler={flipBoxFrontButtonHandleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxFrontButtonBorderRadiusLink}
				spacingCombineBtnHandler={flipBoxSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Color
				label={__("Border Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontButtonBorderColorSwitcher}
				globalColor={flipBoxFrontButtonBorderColor}
				globalHoverColor={flipBoxFrontButtonBorderHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxFrontButtonBorderColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxFrontButtonBorderColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxFrontButtonBorderHoverColor: value })}
			/>

			<FB_Spacing
				label={ 'Padding' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontButtonPaddingSpacingUnitsHandler}
				spacingUnits={flipBoxFrontButtonPaddingUnits}
				spacingDesktop={flipBoxFrontButtonPaddingDesktop}
				spacingTablet={flipBoxFrontButtonPaddingTablet}
				spacingMobile={flipBoxFrontButtonPaddingMobile}
				handleSpacingUnitHandler={flipBoxFrontButtonPaddingHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxFrontButtonPaddingLink}
				spacingCombineBtnHandler={flipBoxFrontButtonPaddingSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontButtonMarginSpacingUnitsHandler}
				spacingUnits={flipBoxFrontButtonMarginUnits}
				spacingDesktop={flipBoxFrontButtonMarginDesktop}
				spacingTablet={flipBoxFrontButtonMarginTablet}
				spacingMobile={flipBoxFrontButtonMarginMobile}
				handleSpacingUnitHandler={flipBoxFrontButtonMarginHandleSpacingUnitHandler}
				spacingCombineBtn={flipBoxFrontButtonMarginLink}
				spacingCombineBtnHandler={flipBoxFrontButtonMarginSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
