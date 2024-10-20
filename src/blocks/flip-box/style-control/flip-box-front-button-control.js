import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";

export default function FlipBoxFrontButtonControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxFrontButtonFontColorSwitcher,
		flipBoxFrontButtonFontColor,
		flipBoxFrontButtonFontHoverColor,

		flipBoxFrontButtonMarginUnits,
		flipBoxFrontButtonMarginDesktop,
		flipBoxFrontButtonMarginTablet,
		flipBoxFrontButtonMarginMobile,
		flipBoxFrontButtonMarginLink,

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

	} = attributes;

	/** Start Front Button Color */
	const flipBoxFrontButtonHandleColorSwitcherChange = (value) => {
		setAttributes({ flipBoxFrontButtonFontColorSwitcher: value });
	};
	const flipBoxFrontButtonHandleGlobalColorChange = (value) => {
		setAttributes({ flipBoxFrontButtonFontColor: value });
	};
	const flipBoxFrontButtonHandleGlobalHoverColorChange = (value) => {
		setAttributes({ flipBoxFrontButtonFontHoverColor: value });
	};
	/** End Front Button Color */

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

	return (
		<>
			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontButtonFontColorSwitcher}
				globalColor={flipBoxFrontButtonFontColor}
				globalHoverColor={flipBoxFrontButtonFontHoverColor}
				handleColorSwitcherChange={flipBoxFrontButtonHandleColorSwitcherChange}
				handleGlobalColorChange={flipBoxFrontButtonHandleGlobalColorChange}
				handleGlobalHoverColorChange={flipBoxFrontButtonHandleGlobalHoverColorChange}
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
